'use strict';

const byId = (id) => document.getElementById(id);
const labels = ['①', '②', '③', '④'];
const exam = byId('exam');
exam.add(new Option('전체 · 랜덤 50문항', 'all'));
for (const date of Object.keys(EXAMS)) {
  exam.add(new Option(`${date} · 50문항`, date));
}
let attempt;

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function startExam(date) {
  if (attempt && !attempt.submitted && attempt.answers.size &&
      !window.confirm('현재 답안이 지워집니다. 새 시험을 시작할까요?')) {
    return;
  }
  const pool = Object.entries(EXAMS)
    .filter(([sourceDate]) => date === 'all' || sourceDate === date)
    .flatMap(([sourceDate, questions]) => questions.map((question) => ({
      ...question,
      sourceDate,
      key: `${sourceDate}:${question.number}`,
    })));
  attempt = {
    date,
    questions: shuffle(pool).slice(0, 50).map((question) => ({
      ...question,
      choices: shuffle(question.choices),
    })),
    index: 0,
    answers: new Map(),
    submitted: false,
  };
  byId('welcome').hidden = true;
  byId('session').hidden = false;
  byId('start').textContent = '새 시험 / 재시작';
  renderQuestion();
}

function renderProgress() {
  const { date, questions, index, answers, submitted } = attempt;
  byId('status').textContent =
    `${date === 'all' ? '전체 회차' : `${date} 회차`} · ${index + 1} / ${questions.length}번 · 응답 ${answers.size}문항`;
  byId('previous').disabled = index === 0;
  byId('next').disabled = index === questions.length - 1;
  byId('submit').hidden = submitted;
  byId('navHint').textContent = submitted
    ? '✓ 정답 · × 오답 · – 미응답'
    : '표시가 채워진 번호는 응답한 문제입니다.';

  const nav = byId('navigator');
  nav.replaceChildren();
  questions.forEach((question, i) => {
    const button = document.createElement('button');
    const selected = answers.get(question.key);
    const correct = selected === question.correctId;
    let status = selected ? '응답' : '미응답';
    let symbol = '';
    if (submitted) {
      status = selected ? (correct ? '정답' : '오답') : '미응답';
      symbol = selected ? (correct ? '✓' : '×') : '–';
    }
    button.type = 'button';
    button.textContent = `${i + 1}${symbol}`;
    button.classList.toggle('answered', Boolean(selected));
    button.setAttribute('aria-label', `${i + 1}번, ${status}`);
    if (i === index) button.setAttribute('aria-current', 'step');
    button.addEventListener('click', () => goTo(i));
    nav.append(button);
  });
}

function renderQuestion() {
  const { questions, index, answers, submitted } = attempt;
  const question = questions[index];
  const selected = answers.get(question.key);
  byId('subject').textContent = submitted
    ? `${question.subject} · ${question.sourceDate} 원본 ${question.number}번`
    : question.subject;
  byId('stem').textContent = `${index + 1}. ${question.stem}`;
  const figures = byId('figures');
  figures.replaceChildren();
  question.images.forEach((source, i) => {
    const image = document.createElement('img');
    image.src = source;
    image.alt = `문제 ${index + 1}의 원본 지문 그림 ${i + 1}`;
    figures.append(image);
  });

  const options = byId('options');
  options.replaceChildren();
  byId('choices').disabled = submitted;
  question.choices.forEach((choice, i) => {
    const label = document.createElement('label');
    label.className = 'choice';
    if (submitted && choice.id === question.correctId) label.classList.add('correct');
    if (submitted && choice.id === selected && selected !== question.correctId) {
      label.classList.add('wrong');
    }
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'answer';
    radio.checked = selected === choice.id;
    radio.addEventListener('change', () => {
      answers.set(question.key, choice.id);
      renderProgress();
    });
    const text = document.createElement('span');
    text.textContent = `${labels[i]} ${choice.text}`;
    label.append(radio, text);
    options.append(label);
  });

  const score = byId('score');
  const feedback = byId('feedback');
  score.hidden = !submitted;
  feedback.hidden = !submitted;
  const explanation = byId('explanation');
  const showExplanation = submitted;
  explanation.hidden = !showExplanation;
  byId('correctAnswer').textContent = '';
  byId('explanationText').textContent = '';
  const explanationSource = byId('explanationSource');
  explanationSource.hidden = true;
  explanationSource.textContent = '';
  explanationSource.removeAttribute('href');
  if (showExplanation) {
    const answerIndex = question.choices.findIndex((choice) => choice.id === question.correctId);
    const correctChoice = question.choices[answerIndex];
    const answerLabel = selected === question.correctId ? '선택한 정답' : '정답';
    byId('correctAnswer').textContent = `${answerLabel} ${labels[answerIndex]} · ${correctChoice.text}`;
    byId('explanationText').textContent = EXPLANATIONS[question.sourceDate][question.number - 1];
    const source = EXPLANATION_SOURCES[question.key];
    if (source) {
      explanationSource.textContent = `참고 · ${source[0]}`;
      explanationSource.href = source[1];
      explanationSource.hidden = false;
    }
  }
  byId('result').hidden = !submitted;
  if (submitted) {
    const correct = questions.filter((item) => answers.get(item.key) === item.correctId).length;
    const missed = questions.length - answers.size;
    const wrong = answers.size - correct;
    const points = (correct * 100) / questions.length;
    byId('result').textContent = points >= 60 ? '합격!' : '불합격! 병신이세요?';
    byId('result').className = points >= 60 ? 'passed' : 'failed';
    score.textContent = `${points}점 / 100점 · 정답 ${correct} · 오답 ${wrong} · 미응답 ${missed}`;
    const answerIndex = question.choices.findIndex((choice) => choice.id === question.correctId);
    const result = selected === question.correctId ? '정답' : selected ? '오답' : '미응답';
    feedback.textContent = `${result} · 이 시험에서의 정답 ${labels[answerIndex]}`;
  }
  renderProgress();
  byId('stem').focus();
}

function goTo(index) {
  if (index < 0 || index >= attempt.questions.length) return;
  attempt.index = index;
  renderQuestion();
}

byId('setup').addEventListener('submit', (event) => {
  event.preventDefault();
  startExam(exam.value);
});
byId('previous').addEventListener('click', () => goTo(attempt.index - 1));
byId('next').addEventListener('click', () => goTo(attempt.index + 1));
byId('submit').addEventListener('click', () => {
  if (attempt.submitted) return;
  const unanswered = attempt.questions.length - attempt.answers.size;
  if (unanswered && !window.confirm(`미응답 ${unanswered}문항이 있습니다. 제출할까요?`)) return;
  attempt.submitted = true;
  renderQuestion();
});
