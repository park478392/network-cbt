// Run: node network-cbt/tests/explanations.test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

class Element {
  constructor() {
    this.children = [];
    this.attributes = {};
    this.events = {};
    this.textContent = '';
    this.hidden = false;
    this.classList = { add() {}, toggle() {} };
  }
  append(...items) { this.children.push(...items); }
  add(item) { this.append(item); }
  replaceChildren(...items) { this.children = items; }
  setAttribute(name, value) { this.attributes[name] = value; }
  removeAttribute(name) { delete this.attributes[name]; delete this[name]; }
  addEventListener(name, handler) { this.events[name] = handler; }
  focus() {}
}

const elements = new Map();
const documentEvents = {};
const root = path.resolve(__dirname, '..');
const context = vm.createContext({
  assert,
  documentEvents,
  assertImageExists(source) {
    const image = fs.readFileSync(path.join(root, source));
    assert.equal(image.subarray(0, 3).toString(), 'GIF', source);
  },
  document: {
    addEventListener(name, handler) { documentEvents[name] = handler; },
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, new Element());
      return elements.get(id);
    },
    createElement() { return new Element(); },
  },
  Option: function(text, value) { this.text = text; this.value = value; },
  window: { confirm: () => true },
});
for (const name of ['exams.js', 'explanations.js', 'app.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, name), 'utf8'), context, { filename: name });
}

vm.runInContext(`
let covered = 0;
for (const [date, questions] of Object.entries(EXAMS)) {
  assert.equal(questions.length, 50, date);
  assert.equal(new Set(questions.map(q => q.number)).size, 50, date);
  for (const q of questions) {
    assert.ok(q.number >= 1 && q.number <= 50);
    assert.ok(q.stem.trim().length);
    assert.ok(q.subject.trim().length);
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices.map(c => c.id)).size, 4);
    assert.ok(q.choices.every(c => c.text.trim().length));
    assert.ok(q.choices.some(c => c.id === q.correctId));
    q.images.forEach(assertImageExists);
  }
  assert.equal(EXPLANATIONS[date].length, questions.length);
  startExam(date);
  assert.equal(attempt.questions.length, 50);
  assert.equal(byId('explanation').hidden, true);
  for (let i = 0; i < attempt.questions.length; i++) {
    const question = attempt.questions[i];
    const key = question.key;
    const explanationText = EXPLANATIONS[date][question.number - 1];
    assert.ok(explanationText.length > 30, key);
    for (let rotation = 0; rotation < 4; rotation++) {
      question.choices.push(question.choices.shift());
      const answerIndex = question.choices.findIndex(c => c.id === question.correctId);
      const correctChoice = question.choices[answerIndex];
      const wrongChoice = question.choices.find(c => c.id !== question.correctId);
      attempt.index = i;
      attempt.answers.set(key, wrongChoice.id);
      attempt.submitted = false;
      renderQuestion();
      assert.equal(byId('explanation').hidden, true, 'No spoilers before submission');
      assert.equal(byId('explanationText').textContent, '');

      attempt.submitted = true;
      renderQuestion();
      assert.equal(byId('explanation').hidden, false, 'Wrong answer shows explanation');
      assert.equal(byId('explanationText').textContent, explanationText, key);
      assert.equal(byId('correctAnswer').textContent, '정답 ' + labels[answerIndex] + ' · ' + correctChoice.text);
      assert.equal(byId('explanationSource').hidden, !EXPLANATION_SOURCES[key]);
      if (EXPLANATION_SOURCES[key]) assert.equal(byId('explanationSource').href, EXPLANATION_SOURCES[key][1]);
      else assert.equal(byId('explanationSource').href, undefined, 'Old link is cleared');

      attempt.answers.delete(key);
      renderQuestion();
      assert.equal(byId('explanation').hidden, false, 'Unanswered question shows explanation');
      assert.equal(byId('explanationText').textContent, explanationText);

      attempt.answers.set(key, question.correctId);
      renderQuestion();
      assert.equal(byId('explanation').hidden, false, 'Correct answer also shows explanation');
      assert.equal(byId('explanationText').textContent, explanationText, 'Correct answer explains the same concept');
      assert.equal(byId('correctAnswer').textContent, '선택한 정답 ' + labels[answerIndex] + ' · ' + correctChoice.text);
      assert.equal(byId('explanationSource').hidden, !EXPLANATION_SOURCES[key]);
    }
    covered++;
  }
  startExam(date);
  assert.equal(byId('explanation').hidden, true, 'Restart hides explanation');
}
assert.equal(Object.keys(EXAMS).length, 12);
assert.equal(covered, 600);
assert.equal(Object.values(EXAMS).flat().flatMap(q => q.images).length, 109);
function pressKey(key, overrides = {}) {
  const event = {
    key,
    target: { closest: () => null },
    prevented: false,
    preventDefault() { this.prevented = true; },
    ...overrides,
  };
  documentEvents.keydown(event);
  return event;
}
attempt = undefined;
assert.equal(pressKey('1').prevented, false);
startExam('2023-02-26');
for (let position = 1; position <= 4; position++) {
  const question = attempt.questions[0];
  assert.equal(pressKey(String(position)).prevented, true);
  assert.equal(attempt.answers.get(question.key), question.choices[position - 1].id);
  const options = byId('options').children;
  assert.equal(options[position - 1].children[0].checked, true);
  assert.equal(options.filter(option => option.children[0].checked).length, 1);
}
assert.equal(pressKey('Enter').prevented, true);
assert.equal(attempt.index, 1);
assert.equal(pressKey(' ').prevented, true);
assert.equal(attempt.index, 2);
for (const overrides of [
  { repeat: true }, { isComposing: true }, { ctrlKey: true },
  { altKey: true }, { metaKey: true },
  { target: { closest: () => ({}) } },
]) {
  assert.equal(pressKey('Enter', overrides).prevented, false);
  assert.equal(pressKey('1', overrides).prevented, false);
  assert.equal(attempt.index, 2);
  assert.equal(attempt.answers.has(attempt.questions[2].key), false);
}
goTo(49);
pressKey('Enter');
pressKey(' ');
assert.equal(attempt.index, 49);
attempt.submitted = true;
assert.equal(pressKey('1').prevented, false);
assert.equal(attempt.answers.has(attempt.questions[49].key), false);
goTo(0);
pressKey('Enter');
assert.equal(attempt.index, 1);
startExam('all');
attempt.submitted = true;
for (let i = 0; i < attempt.questions.length; i++) {
  goTo(i);
  const q = attempt.questions[i];
  assert.equal(byId('explanationText').textContent, EXPLANATIONS[q.sourceDate][q.number - 1]);
}
`, context);

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert.ok(html.indexOf('explanations.js') < html.indexOf('app.js'));
for (const id of ['explanation', 'correctAnswer', 'explanationText', 'explanationSource']) {
  assert.ok(html.includes(`id="${id}"`), `Missing HTML element: ${id}`);
}
console.log('PASS: 12 exams, 600 explanations, 4 choice positions, wrong/unanswered/correct states, source reset, restart, mixed exam.');
