const EXAMS = {
  '2025-11-02': [
    {
      number: 1,
      subject: '1과목 : TCP/IP',
      stem: 'TLS를 통해 애플리케이션 계층 데이터를 암호화하여 보호하며, 기본 포트가 443으로 지정된 프로토콜은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'HTTPS',
        },
        {
          id: 2,
          text: 'HTTP',
        },
        {
          id: 3,
          text: 'FTP',
        },
        {
          id: 4,
          text: 'SSH',
        },
      ],
      correctId: 1,
    },
    {
      number: 2,
      subject: '1과목 : TCP/IP',
      stem: 'IPv6 주소 ′a184:0a01:0000:0000:cd8c:1000:317b:00ff′ 를 생략하여 표기한 것으로 알맞은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'a184:a1::cd8c:1:317b:ff',
        },
        {
          id: 2,
          text: 'a184:a01::cd8c:1000:317b:ff',
        },
        {
          id: 3,
          text: 'a184:a01:0:0:cd8c:10:317b:0ff',
        },
        {
          id: 4,
          text: 'a184:a01:cd8c:1000:317b:ff',
        },
      ],
      correctId: 2,
    },
    {
      number: 3,
      subject: '1과목 : TCP/IP',
      stem: 'UDP 계열 프로토콜로, 원격 관리에 필요한 정보와 서버상태를 관리하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'FTP',
        },
        {
          id: 2,
          text: 'DHCP',
        },
        {
          id: 3,
          text: 'BOOTP',
        },
        {
          id: 4,
          text: 'SNMP',
        },
      ],
      correctId: 4,
    },
    {
      number: 4,
      subject: '1과목 : TCP/IP',
      stem: 'ICMP(Internet Control Message Protocol)에 대한 설명 중 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '예외적으로 발생되는 이벤트에 대해 이를 알릴 수 있도록 지원하는 프로토콜이 없다.',
        },
        {
          id: 2,
          text: '비대칭 프로토콜이고 TTL(Time To Live)를 제공한다.',
        },
        {
          id: 3,
          text: '네트워크 간 장비들의 오류 상황에 대해 공유할 수 있는 기능이 있다.',
        },
        {
          id: 4,
          text: '호스트의 물리적 주소를 제공한다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 5,
      subject: '1과목 : TCP/IP',
      stem: 'TCP Header의 flag 값 중 3-way handshake의 첫 번째 단계인 세션 성립 요청 패킷에 설정되는 flag 값은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'RST',
        },
        {
          id: 2,
          text: 'ACK',
        },
        {
          id: 3,
          text: 'URG',
        },
        {
          id: 4,
          text: 'SYN',
        },
      ],
      correctId: 4,
    },
    {
      number: 6,
      subject: '1과목 : TCP/IP',
      stem: 'A기업은 네트워크 주소 ‘210.212.100.0’과 서브넷 마스크 ‘255.255.255.224’인 네트워크를 사용한다. 방화벽 규칙에서 브로드캐스트 트래픽을 차단하려고 한다. 차단 대상 IP로 가장 적절한 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '210.212.100.30',
        },
        {
          id: 2,
          text: '210.212.100.31',
        },
        {
          id: 3,
          text: '210.212.100.32',
        },
        {
          id: 4,
          text: '210.212.100.0',
        },
      ],
      correctId: 2,
    },
    {
      number: 7,
      subject: '1과목 : TCP/IP',
      stem: '회사 내 네트워크를 구축하면서 IPv6를 적용하려고 한다. IPv4에 비해 IPv6에서 새롭게 도입된 기능은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '체크섬(Checksums)',
        },
        {
          id: 2,
          text: '복잡한 헤더(Complicated header)',
        },
        {
          id: 3,
          text: '선택적 IPsec(Optional IPsec)',
        },
        {
          id: 4,
          text: '자동 설정(Autoconfiguration, SLAAC)',
        },
      ],
      correctId: 4,
    },
    {
      number: 8,
      subject: '1과목 : TCP/IP',
      stem: 'IP Address ′127.0.0.1′ 이 의미하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '모든 네트워크를 의미한다.',
        },
        {
          id: 2,
          text: '사설 IP Address를 의미한다.',
        },
        {
          id: 3,
          text: '특정 네트워크의 모든 노드를 의미한다.',
        },
        {
          id: 4,
          text: '루프백(Loopback) 테스트용이다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 9,
      subject: '1과목 : TCP/IP',
      stem: 'TCP에서 사용하는 흐름 제어 방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'GO-Back-N',
        },
        {
          id: 2,
          text: '선택적 재전송(Selective Repeat)',
        },
        {
          id: 3,
          text: '슬라이딩 윈도우(Sliding Window)',
        },
        {
          id: 4,
          text: 'Stop-and-Wait(Idle RQ)',
        },
      ],
      correctId: 3,
    },
    {
      number: 10,
      subject: '1과목 : TCP/IP',
      stem: 'IPv4 헤더에 포함되지 않는 필드는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ACK(확인 응답)',
        },
        {
          id: 2,
          text: 'Version(버전)',
        },
        {
          id: 3,
          text: 'Header Checksum(헤더 체크섬)',
        },
        {
          id: 4,
          text: 'Header Length(IHL, 헤더 길이)',
        },
      ],
      correctId: 1,
    },
    {
      number: 11,
      subject: '1과목 : TCP/IP',
      stem: 'DNS에서 TTL(Time to Live)에 대한 설명으로 올바른 것은??',
      images: [],
      choices: [
        {
          id: 1,
          text: '데이터가 DNS 서버 존(zone) 으로부터 나오기 전에 현재 남은 시간이다.',
        },
        {
          id: 2,
          text: '데이터가 DNS 서버 캐시에서 만료되기까지 남은 시간이다.',
        },
        {
          id: 3,
          text: '패킷이 DNS 서버 존으로부터 나오기 전에 현재 남은 시간이다.',
        },
        {
          id: 4,
          text: '패킷이 DNS 서버 네임 서버 레코드로부터 나오기 전에 현재 남은 시간이다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 12,
      subject: '1과목 : TCP/IP',
      stem: 'UDP에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'TCP에 비해 신뢰성이 떨어진다.',
        },
        {
          id: 2,
          text: '사용자 데이터그램(Datagram)이라고 하는 데이터 단위(Unit)를 송신지의 응용 프로세스에서 수신지의 응용 프로세스로 전송한다.',
        },
        {
          id: 3,
          text: 'UDP가 제공하는 오류검사는 홀수 패리티와 짝수 패리티가 있다.',
        },
        {
          id: 4,
          text: 'UDP가 제공하는 서비스는 비연결형 데이터 전달서비스(Connectionless Data Delivery Service)이다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 13,
      subject: '1과목 : TCP/IP',
      stem: '신규 단말이 부팅 시 IP가 없는 상태에서 스위치 포트에 연결됐다. 네트워크는 IPv4를 사용하며 중앙에서 주소를 자동 분배한다. MAC 주소를 기반으로 IP를 자동 부여하는 데 주로 쓰이는 기술은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'RARP',
        },
        {
          id: 2,
          text: 'ARP',
        },
        {
          id: 3,
          text: 'ICMP',
        },
        {
          id: 4,
          text: 'DHCP',
        },
      ],
      correctId: 4,
    },
    {
      number: 14,
      subject: '1과목 : TCP/IP',
      stem: 'TCP/IP 에서 Broadcast의 의미는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '메시지를 한 호스트에서 다른 한 호스트로 전송하는 것',
        },
        {
          id: 2,
          text: '메시지를 한 호스트에서 망상의 특정 그룹 호스트들로 전송하는 것',
        },
        {
          id: 3,
          text: '메시지를 한 호스트에서 망상의 모든 호스트들로 전송하는 것',
        },
        {
          id: 4,
          text: '메시지를 한 호스트에서 가장 가까이 있는 특정 그룹 호스트들로 전송하는 것',
        },
      ],
      correctId: 3,
    },
    {
      number: 15,
      subject: '1과목 : TCP/IP',
      stem: 'OSPF(Open Shortest Path First)에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'AS 내부 경로 정보 교환에 사용되는 링크 스테이트 라우팅 프로토콜이다.',
        },
        {
          id: 2,
          text: 'Hello 패킷으로 이웃 라우터의 정상 동작을 확인한다.',
        },
        {
          id: 3,
          text: '비용이 가장 낮은 단일 경로만 사용하며 다른 경로는 배제한다.',
        },
        {
          id: 4,
          text: '일반적으로 IP 버전에 따라 사용하는 OSPF 버전이 다르다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 16,
      subject: '1과목 : TCP/IP',
      stem: '사내 스트리밍 서비스가 IPv4 멀티캐스트로 배포된다. 클라이언트 PC가 채널을 바꿀 때마다 스위치/라우터에 그룹 가입·탈퇴 신호가 전달되어 트래픽이 즉시 조정된다. 이때 사용되는 프로토콜은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ICMP',
        },
        {
          id: 2,
          text: 'IGMP',
        },
        {
          id: 3,
          text: 'ARP',
        },
        {
          id: 4,
          text: 'RARP',
        },
      ],
      correctId: 2,
    },
    {
      number: 17,
      subject: '1과목 : TCP/IP',
      stem: 'Ping에 대한 설명 중 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ICMP(인터넷 프로토콜군) 기반의 진단용 응용 프로그램이다.',
        },
        {
          id: 2,
          text: '원격 호스트까지 왕복 지연 시간(RTT)을 측정할 수 있다.',
        },
        {
          id: 3,
          text: '원격 호스트의 네트워크 오류를 확인하고 오류를 정정해 준다.',
        },
        {
          id: 4,
          text: '원격 호스트와의 연결 상태를 진단할 수 있다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 18,
      subject: '2과목 : 네트워크 일반',
      stem: 'OSI 7계층 중 데이터 링크 계층의 기능으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '통신 프로토콜을 정의한 OSI 7계층 중 세 번째 계층에 해당한다.',
        },
        {
          id: 2,
          text: '비트열을 프레임화한다.',
        },
        {
          id: 3,
          text: '전송 과정의 오류를 검출한다.',
        },
        {
          id: 4,
          text: '흐름 제어를 통해 데이터 링크 개체 간 트래픽을 제어한다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 19,
      subject: '2과목 : 네트워크 일반',
      stem: '패킷 교환망의 특징으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '연결 설정 방식에 따라 가상 회선과 데이터그램으로 분류된다.',
        },
        {
          id: 2,
          text: '메시지를 더 짧은 길이의 패킷으로 분할하여 전송한다.',
        },
        {
          id: 3,
          text: '망에 유입되는 데이터의 양이 많아질수록 전송 속도가 빨라진다.',
        },
        {
          id: 4,
          text: '회선 차단(호 차단)과 같은 블로킹 현상이 없다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 20,
      subject: '2과목 : 네트워크 일반',
      stem: '다음은 화상 회의를 하기 위한 기술에 관한 내용이다. ( A ) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2025-11-02-1.gif'],
      choices: [
        {
          id: 1,
          text: 'IRC (Internet Relay Chat)',
        },
        {
          id: 2,
          text: 'HEVC/H.265 (High Efficiency Video Coding)',
        },
        {
          id: 3,
          text: 'MIME (Multipurpose Internet Mail Extensions)',
        },
        {
          id: 4,
          text: 'SIP (Session Initiation Protocol)',
        },
      ],
      correctId: 4,
    },
    {
      number: 21,
      subject: '2과목 : 네트워크 일반',
      stem: '네트워크 계층의 데이터 단위를 나타내는 용어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '세그먼트',
        },
        {
          id: 2,
          text: '패킷',
        },
        {
          id: 3,
          text: '프레임',
        },
        {
          id: 4,
          text: '비트',
        },
      ],
      correctId: 2,
    },
    {
      number: 22,
      subject: '2과목 : 네트워크 일반',
      stem: 'VPN에 대한 설명으로 (A)에 알맞은 용어는?',
      images: ['assets/2025-11-02-2.gif'],
      choices: [
        {
          id: 1,
          text: 'PPTP',
        },
        {
          id: 2,
          text: 'L2TP',
        },
        {
          id: 3,
          text: 'IPsec',
        },
        {
          id: 4,
          text: 'SSL/TLS',
        },
      ],
      correctId: 3,
    },
    {
      number: 23,
      subject: '2과목 : 네트워크 일반',
      stem: '에러제어 기법 중 자동 재전송 기법으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Stop and Wait ARQ',
        },
        {
          id: 2,
          text: 'Go-Back N ARQ',
        },
        {
          id: 3,
          text: 'Forward Error Correction(FEC)',
        },
        {
          id: 4,
          text: 'Selective Repeat ARQ',
        },
      ],
      correctId: 3,
    },
    {
      number: 24,
      subject: '2과목 : 네트워크 일반',
      stem: '다음 중 하나의 물리적인 스위치를 논리적인 방법을 사용하여 여러 개의 스위치로 분리하는 기술은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'STM',
        },
        {
          id: 2,
          text: 'ATM',
        },
        {
          id: 3,
          text: 'ALOHA',
        },
        {
          id: 4,
          text: 'VLAN',
        },
      ],
      correctId: 4,
    },
    {
      number: 25,
      subject: '2과목 : 네트워크 일반',
      stem: 'IEEE 802.11 표준은 꾸준히 발전하며 무선 네트워크 속도와 효율성을 높여 왔다. 다음 중 다중 안테나 기반 MIMO를 사용하면서, 혼잡 환경에서도 OFDMA·DL/UL MU-MIMO 등으로 고해상도(4K/8K) 스트리밍·AR/VR·온라인 게임 같은 고대역폭 서비스를 안정적으로 처리할 수 있는 표준은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IEEE 802.11n',
        },
        {
          id: 2,
          text: 'IEEE 802.11ac',
        },
        {
          id: 3,
          text: 'IEEE 802.11ad',
        },
        {
          id: 4,
          text: 'IEEE 802.11ax',
        },
      ],
      correctId: 4,
    },
    {
      number: 26,
      subject: '2과목 : 네트워크 일반',
      stem: '1000BASE-T 규격에 대한 설명으로 틀린 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '최대 전송 속도는 1000 Kb/s이다.',
        },
        {
          id: 2,
          text: '스위치 중심의 스타형 토폴로지가 일반적이다.',
        },
        {
          id: 3,
          text: '전송 매체는 UTP(비차폐 꼬임쌍선)이다.',
        },
        {
          id: 4,
          text: '주로 이더넷(IEEE 802.3ab)에서 사용된다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 27,
      subject: '2과목 : 네트워크 일반',
      stem: '클라우드 담당자 Kim 사원은 서버리스 컴퓨팅 구성에 대해 검토하고 있다. 서버리스 컴퓨팅에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '클라우드 서비스 제공자가 인프라를 관리하므로, 직접적인 서버 관리를 하지 않아도 된다.',
        },
        {
          id: 2,
          text: '실제 배포된 서비스의 코드가 실행되는 시점에 사용한 자원량에 따라 요금이 계산된다.',
        },
        {
          id: 3,
          text: '필요에 따라 컴퓨팅 자원이 자동으로 확장·축소(오토스케일링)된다.',
        },
        {
          id: 4,
          text: '서버리스 컴퓨팅에서는 사용자가 서버 인스턴스 프로비저닝과 OS 패치를 직접 관리해야 한다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 28,
      subject: '3과목 : NOS',
      stem: '서버 관리자 Park 사원은 Linux 서버를 관리하면서 특정 조건에 맞는 파일 및 디렉터리를 검색하기 위해 ′find′ 명령어를 사용하려고 한다. ′find′ 명령어의 주요 옵션에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '′-name′은 지정한 사용자 이름에 해당하는 파일이나 디렉터리를 찾는다.',
        },
        {
          id: 2,
          text: '′-type′은 지정한 디렉터리 종류에 해당하는 디렉터리 유형을 찾는다.',
        },
        {
          id: 3,
          text: '′-perm′은 지정한 소유자의 권한만을 고려하여 파일이나 디렉터리를 찾는다.',
        },
        {
          id: 4,
          text: '′-exec′은 찾은 파일에 대한 삭제 등의 추가적인 명령을 실행할 수 있다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 29,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2022의 Hyper-V에 대한 특징으로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '가상 컴퓨터를 다른 서버로 복제할 수 없다.',
        },
        {
          id: 2,
          text: '가상 하드 디스크를 실행 중에도 다른 저장소로 이동할 수 있다.',
        },
        {
          id: 3,
          text: '하나의 물리 서버에는 하나의 가상 컴퓨터만 사용할 수 있다.',
        },
        {
          id: 4,
          text: '가상 컴퓨터를 사용할수록 물리 서버의 하드웨어 자원 사용률은 낮아진다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 30,
      subject: '3과목 : NOS',
      stem: '서버 관리자 Kim 사원이 Linux 서버의 ′/root′ 디렉터리를 점검하던 중 ′/etc/passwd′ 파일이 ′/root′ 디렉터리에 복사된 것을 발견했다. ′/root/passwd′ 파일을 삭제하려 했으나 삭제되지 않았다. (A) 명령어로 파일 속성을 확인한 결과, 해당 파일에 ′i′ 속성이 설정되어 쓰기 및 삭제가 불가한 것을 확인했다. 해당 명령어 (A)는?',
      images: ['assets/2025-11-02-3.gif'],
      choices: [
        {
          id: 1,
          text: 'file',
        },
        {
          id: 2,
          text: 'stat',
        },
        {
          id: 3,
          text: 'lsattr',
        },
        {
          id: 4,
          text: 'lsblk',
        },
      ],
      correctId: 3,
    },
    {
      number: 31,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 기존에 설정된 ′crontab′을 삭제하려고 할 때 올바른 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'crontab –u',
        },
        {
          id: 2,
          text: 'crontab -e',
        },
        {
          id: 3,
          text: 'crontab –l',
        },
        {
          id: 4,
          text: 'crontab -r',
        },
      ],
      correctId: 4,
    },
    {
      number: 32,
      subject: '3과목 : NOS',
      stem: 'Linux의 가상 파일시스템으로 동작 중인 프로세스의 상태 정보, 하드웨어 정보, 시스템 정보 등을 확인할 수 있는 디렉터리로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '/boot',
        },
        {
          id: 2,
          text: '/etc',
        },
        {
          id: 3,
          text: '/proc',
        },
        {
          id: 4,
          text: '/lib',
        },
      ],
      correctId: 3,
    },
    {
      number: 33,
      subject: '3과목 : NOS',
      stem: 'DNS에서 지원하는 레코드 형식 중 역방향조회에 사용되는 레코드는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'A',
        },
        {
          id: 2,
          text: 'AAAA',
        },
        {
          id: 3,
          text: 'PTR',
        },
        {
          id: 4,
          text: 'SOA',
        },
      ],
      correctId: 3,
    },
    {
      number: 34,
      subject: '3과목 : NOS',
      stem: 'Linux Apache 웹서버에 사용자가 접속한 뒤 80초 동안 추가 요청이 없으면 연결을 종료하도록 ′httpd.conf′에서 설정하는 옵션은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Timeout 80',
        },
        {
          id: 2,
          text: 'KeepAlive On',
        },
        {
          id: 3,
          text: 'KeepAliveTimeout 80',
        },
        {
          id: 4,
          text: 'MaxKeepAliveRequests 80',
        },
      ],
      correctId: 3,
    },
    {
      number: 35,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 Apache 웹서버를 구동 시 Well-known port를 사용할 때의 주의사항으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Well-known port를 통해 Apache 웹서버를 실행할 시 관리자 권한이 필요하다.',
        },
        {
          id: 2,
          text: '일반 사용자 계정에서 Apache 웹서버를 실행할 때, 실행 명령어 앞에 ′su′를 추가한다.',
        },
        {
          id: 3,
          text: 'Well-known port를 변경할 때, 다른 서비스와 충돌되지 않는 번호를 사용하여야 한다.',
        },
        {
          id: 4,
          text: 'Well-known port는 1부터 1023 까지의 숫자를 사용한다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 36,
      subject: '3과목 : NOS',
      stem: 'Linux에서 ′sample′파일의 소유자 및 소유그룹이 아닌 사람에 대해 파일을 볼 수는 있지만 수정 및 실행을 못하도록 하는 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'chmod 776 sample',
        },
        {
          id: 2,
          text: 'chmod 774 sample',
        },
        {
          id: 3,
          text: 'chmod 746 sample',
        },
        {
          id: 4,
          text: 'chmod 766 sample',
        },
      ],
      correctId: 2,
    },
    {
      number: 37,
      subject: '3과목 : NOS',
      stem: '다음 중 (ㄱ), (ㄴ)에 들어갈 말로 알맞은 것은?',
      images: ['assets/2025-11-02-4.gif'],
      choices: [
        {
          id: 1,
          text: 'ㄱ: 21, ㄴ : 1024',
        },
        {
          id: 2,
          text: 'ㄱ: 21, ㄴ : 20',
        },
        {
          id: 3,
          text: 'ㄱ: 20, ㄴ : 21',
        },
        {
          id: 4,
          text: 'ㄱ: 20, ㄴ : 1024',
        },
      ],
      correctId: 3,
    },
    {
      number: 38,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2022가 설치된 컴퓨터는 항상 가동하는 것이 일반적인 용도이기 때문에 서버 담당자 Park 사원은 시스템을 종료할 때마다 그 이유를 명확히 하여 시스템을 좀 더 안정적으로 운영하고자 한다. 다음 중 이전에 종료 또는 재부팅된 기록을 확인할 수 있는 항목은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '성능모니터',
        },
        {
          id: 2,
          text: '이벤트뷰어',
        },
        {
          id: 3,
          text: '로컬보안정책',
        },
        {
          id: 4,
          text: '그룹정책편집기',
        },
      ],
      correctId: 2,
    },
    {
      number: 39,
      subject: '3과목 : NOS',
      stem: 'Linux에서 현재 사용 디렉터리 위치에 상관없이 자신의 HOME Directory로 이동하는 명령은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'cd HOME',
        },
        {
          id: 2,
          text: 'cd /',
        },
        {
          id: 3,
          text: 'cd ../HOME',
        },
        {
          id: 4,
          text: 'cd ~',
        },
      ],
      correctId: 4,
    },
    {
      number: 40,
      subject: '3과목 : NOS',
      stem: '네트워크를 관리하는 Kim 사원은 네트워크 연결을 구축하거나 문제를 해결할 때 패킷이 출발지에서 목적지까지 가는 경로를 살펴볼 수 있도록 네트워크 명령어를 사용하고자 한다. 이 명령은 ′tracert′에서 수행하는 동일한 정보를 보여주면서 홉과 다른 세부 정보 사이의 시간에 관한 정보를 출력이 끝날 때까지 저장한다. Kim 사원이 사용할 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ping',
        },
        {
          id: 2,
          text: 'nslookup',
        },
        {
          id: 3,
          text: 'pathping',
        },
        {
          id: 4,
          text: 'nbtstat',
        },
      ],
      correctId: 3,
    },
    {
      number: 41,
      subject: '3과목 : NOS',
      stem: '네트워크관리사 Kim 사원은 Windows Server 2022에서 IIS 웹 서버를 설치하고 다양한 기능을 활용하려고 한다. 다음 중 IIS에서 제공하는 기능으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '요청 필터링(Request Filtering)을 통해 특정 요청을 차단할 수 있다.',
        },
        {
          id: 2,
          text: 'IIS는 HTTPS 프로토콜을 지원하지 않는다.',
        },
        {
          id: 3,
          text: 'IIS는 PHP 스크립트를 실행할 수 없다.',
        },
        {
          id: 4,
          text: '응용 프로그램 풀(App Pool)은 하나의 웹 사이트만 호스팅할 수 있다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 42,
      subject: '3과목 : NOS',
      stem: '네트워크관리사 Park 사원은 Windows Server 2022에서 DNS 서버를 운영하며 고급 기능을 활용하려고 한다. 다음 중 DNSSEC(DNS 보안 확장)에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'DNSSEC는 DNS 서버의 성능을 향상시키는 캐싱 메커니즘이다.',
        },
        {
          id: 2,
          text: 'DNSSEC를 사용하면 DNS 쿼리 응답의 무결성과 출처 인증을 제공할 수 있다.',
        },
        {
          id: 3,
          text: 'DNSSEC는 Windows Server 2022에서 지원되지 않는다.',
        },
        {
          id: 4,
          text: 'DNSSEC를 활성화하면 모든 DNS 쿼리가 자동으로 암호화된다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 43,
      subject: '3과목 : NOS',
      stem: '네트워크관리사 Park 사원은 Windows Server 2022에서 DHCP 서버를 운영하고 있다. 다음 중 DHCP 서버 운영에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'DHCP 서버는 반드시 Active Directory 환경에서만 구성할 수 있다.',
        },
        {
          id: 2,
          text: 'DHCP 서버는 IP 주소를 자동으로 할당하기 위해 반드시 정적 IP 풀을 사용해야 한다.',
        },
        {
          id: 3,
          text: 'DHCP 클라이언트는 부팅 시 IP 할당을 위해 DHCP 서버를 찾는 브로드캐스트를 전송한다.',
        },
        {
          id: 4,
          text: 'DHCP 서버의 기본 포트는 53번이며, DNS와 동일하다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 44,
      subject: '3과목 : NOS',
      stem: '다음 지문에서 설명하는 명령어로 옳은 것은?',
      images: ['assets/2025-11-02-5.gif'],
      choices: [
        {
          id: 1,
          text: 'pgrep python',
        },
        {
          id: 2,
          text: 'ps -ef | grep python',
        },
        {
          id: 3,
          text: 'ss -tulpn | grep python',
        },
        {
          id: 4,
          text: 'top -b –n 1',
        },
      ],
      correctId: 2,
    },
    {
      number: 45,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2022에서 관리자 권한으로 명령 프롬프트를 실행한 뒤 ′netstat′로 열린 포트와 연관된 실행 파일(프로세스)을 확인하려고 한다. 어떤 옵션을 사용해야 하는가?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'netstat –b',
        },
        {
          id: 2,
          text: 'netstat -p',
        },
        {
          id: 3,
          text: 'netstat –a',
        },
        {
          id: 4,
          text: 'netstat -n',
        },
      ],
      correctId: 1,
    },
    {
      number: 46,
      subject: '4과목 : 네트워크 운용기기',
      stem: '아래 지문에 해당하는 RAID 방식은?',
      images: ['assets/2025-11-02-6.gif'],
      choices: [
        {
          id: 1,
          text: 'Linear RAID',
        },
        {
          id: 2,
          text: 'RAID 0',
        },
        {
          id: 3,
          text: 'RAID 1',
        },
        {
          id: 4,
          text: 'RAID 5',
        },
      ],
      correctId: 2,
    },
    {
      number: 47,
      subject: '4과목 : 네트워크 운용기기',
      stem: '게이트웨이(Gateway)에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '게이트웨이는 L2 스위치와 같이 프레임만 중계한다.',
        },
        {
          id: 2,
          text: '두 개의 완전히 다른 네트워크 사이의 데이터 형식을 변환하는 장치이다.',
        },
        {
          id: 3,
          text: '데이터 변환의 기능을 가지고 있어 네트워크 내의 병목 현상을 일으키는 지점이 될 수 있다.',
        },
        {
          id: 4,
          text: '프로토콜이 다른 네트워크 환경들을 연결할 수 있는 기능을 제공한다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 48,
      subject: '4과목 : 네트워크 운용기기',
      stem: '다음 지문은 L4 스위치(로드 밸런서)의 기능에 대한 설명이다. L4 스위치의 기본 기능이 아닌 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '서버의 상태를 확인하는 헬스 체크(Health Check) 기능',
        },
        {
          id: 2,
          text: '알고리즘에 따른 분산 처리',
        },
        {
          id: 3,
          text: 'NAT(Network Address Translation)',
        },
        {
          id: 4,
          text: '애플리케이션(Application) 계층의 보안 기능 제공',
        },
      ],
      correctId: 4,
    },
    {
      number: 49,
      subject: '4과목 : 네트워크 운용기기',
      stem: 'NAT(Network Address Translation)에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '정적 NAT는 내부 사설 IP를 공인 IP와 1:1로 매핑하는 방식이다.',
        },
        {
          id: 2,
          text: 'NAT는 프레임 단위로 처리되는 데이터 링크 계층(L2)의 주소 변환 기술이다.',
        },
        {
          id: 3,
          text: 'PAT(포트 주소 변환)은 다수의 사설 IP가 하나의 공인 IP의 서로 다른 포트로 매핑되어 인터넷 접속을 공유할 수 있다.',
        },
        {
          id: 4,
          text: 'NAT는 내부 주소 구조를 외부에 직접 노출하지 않아 보안상 이점을 제공한다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 50,
      subject: '4과목 : 네트워크 운용기기',
      stem: '다음 (A) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2025-11-02-7.gif'],
      choices: [
        {
          id: 1,
          text: 'L2 Switch',
        },
        {
          id: 2,
          text: 'IP 공유기',
        },
        {
          id: 3,
          text: 'UPS',
        },
        {
          id: 4,
          text: 'PoE Switch',
        },
      ],
      correctId: 4,
    },
  ],
  '2025-08-24': [
    {
      number: 1,
      subject: '1과목 : TCP/IP',
      stem: 'C Class의 네트워크 주소가 ′192.168.10.0′ 이고, 서브넷 마스크가 ′255.255.255.240′ 일 때, 최대 사용 가능한 호스트 수는?(단, 네트워크 주소와 브로드캐스트 호스트는 제외한다.)',
      images: [],
      choices: [
        {
          id: 1,
          text: '10개',
        },
        {
          id: 2,
          text: '14개',
        },
        {
          id: 3,
          text: '26개',
        },
        {
          id: 4,
          text: '32개',
        },
      ],
      correctId: 2,
    },
    {
      number: 2,
      subject: '1과목 : TCP/IP',
      stem: 'Link State 알고리즘을 이용해 서로에게 자신의 현재 상태를 알려주며 네트워크 내 통신을 위해 사용하는 프로토콜은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'OSPF',
        },
        {
          id: 2,
          text: 'IDR',
        },
        {
          id: 3,
          text: 'EG',
        },
        {
          id: 4,
          text: 'BGP',
        },
      ],
      correctId: 1,
    },
    {
      number: 3,
      subject: '1과목 : TCP/IP',
      stem: 'ICMPv6에서 IPv4의 ARP 역할 및 특정 호스트로의 전달 가능 여부 검사 기능을 하는 메시지는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '재지정 메시지(Redirection)',
        },
        {
          id: 2,
          text: '에코 요청 메시지(Echo request)',
        },
        {
          id: 3,
          text: '이웃 요청과 광고 메시지(Neighbor Solicitation and Advertisement)',
        },
        {
          id: 4,
          text: '목적지 도달 불가 메시지(Destination unreachable)',
        },
      ],
      correctId: 3,
    },
    {
      number: 4,
      subject: '1과목 : TCP/IP',
      stem: 'IPv6에서 6000Byte의 패킷이 이더넷 LAN을 통과해야 하는 경우 사용할 확장 헤더는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Source Routing',
        },
        {
          id: 2,
          text: 'Fragmentation',
        },
        {
          id: 3,
          text: 'Authentication',
        },
        {
          id: 4,
          text: 'Destination Option',
        },
      ],
      correctId: 2,
    },
    {
      number: 5,
      subject: '1과목 : TCP/IP',
      stem: 'IP 프로토콜에 관한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IP 프로토콜은 프로세서 간의 신뢰성 있는 통신기능을 수행한다.',
        },
        {
          id: 2,
          text: '네트워크계층에 속하는 프로토콜로 실제 패킷을 전달하는 역할을 한다.',
        },
        {
          id: 3,
          text: 'IP 프로토콜의 오류제어는 세그먼트의 오류감지 기능과 오류정정 메커니즘을 포함한다.',
        },
        {
          id: 4,
          text: '흐름제어로는 주로 슬라이딩 윈도우 방식이 쓰인다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 6,
      subject: '1과목 : TCP/IP',
      stem: 'TCP(Transmission Control Protocol)에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '연결 위주의 전송방식이다.',
        },
        {
          id: 2,
          text: '신뢰성 있는 전송방식이다.',
        },
        {
          id: 3,
          text: '능동적인 흐름 제어 기능을 가지고 있다.',
        },
        {
          id: 4,
          text: '일부 데이터가 손실되어도 치명적이지 않은 프로그램 등에 적합하다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 7,
      subject: '1과목 : TCP/IP',
      stem: 'OSI 7 Layer에 따라 프로토콜을 분류하였을 때, 다음 보기들 중 같은 계층에서 동작하지 않는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SMTP',
        },
        {
          id: 2,
          text: 'RARP',
        },
        {
          id: 3,
          text: 'ICMP',
        },
        {
          id: 4,
          text: 'IGMP',
        },
      ],
      correctId: 1,
    },
    {
      number: 8,
      subject: '1과목 : TCP/IP',
      stem: 'ARP에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IP Address를 장치의 하드웨어 주소로 매핑하는 기능을 제공한다.',
        },
        {
          id: 2,
          text: "Dynamic으로 설정된 내용을 Static 상태로 변경하는 ARP 명령어 옵션은 '-d'이다.",
        },
        {
          id: 3,
          text: 'ARP가 IP Address를 알기 위해 특정 호스트에게 메시지를 전송하고 이에 대한 응답을 기다린다.',
        },
        {
          id: 4,
          text: 'ARP Cache는 IP Address를 도메인(Domain) 주소로 매핑한 모든 정보를 유지하고 있다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 9,
      subject: '1과목 : TCP/IP',
      stem: 'TCP/IP에서 Unicast의 의미는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '메시지가 한 호스트에서 다른 여러 호스트로 전송되는 패킷',
        },
        {
          id: 2,
          text: '메시지가 한 호스트에서 다른 한 호스트로 전송되는 패킷',
        },
        {
          id: 3,
          text: '메시지가 한 호스트에서 망상의 다른 모든 호스트로 전송되는 패킷',
        },
        {
          id: 4,
          text: '메시지가 한 호스트에서 망상의 특정 그룹 호스트들로 전송되는 패킷',
        },
      ],
      correctId: 2,
    },
    {
      number: 10,
      subject: '1과목 : TCP/IP',
      stem: '사설 IP주소를 공인 IP주소로 바꿔주는데 사용하는 통신망의 주소 변환 기술로, 공인 IP주소를 절약하고, 내부 사설망을 이용하여 인터넷에 연결하므로 보안을 강화할 수 있는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'DHCP',
        },
        {
          id: 2,
          text: 'ARP',
        },
        {
          id: 3,
          text: 'BOOTP',
        },
        {
          id: 4,
          text: 'NAT',
        },
      ],
      correctId: 4,
    },
    {
      number: 11,
      subject: '1과목 : TCP/IP',
      stem: '다음 TCP 패킷의 플래그 중에서 연결이 정상적으로 끝남을 의미하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'FIN',
        },
        {
          id: 2,
          text: 'URG',
        },
        {
          id: 3,
          text: 'ACK',
        },
        {
          id: 4,
          text: 'RST',
        },
      ],
      correctId: 1,
    },
    {
      number: 12,
      subject: '1과목 : TCP/IP',
      stem: '다음 지문에 표기된 IPv6 주소는 요약된 표현이다. 보기 중 요약되기 전 상태는?',
      images: ['assets/2025-08-24-1.gif'],
      choices: [
        {
          id: 1,
          text: '2000:00AB:0001:0000:0001:0002',
        },
        {
          id: 2,
          text: '2000:00AB:0001:0000:0000:0000:0001:0002',
        },
        {
          id: 3,
          text: '2000:AB00:1000:0000:1000:2000',
        },
        {
          id: 4,
          text: '2000:AB00:1000:0000:0000:0000:1000:2000',
        },
      ],
      correctId: 2,
    },
    {
      number: 13,
      subject: '1과목 : TCP/IP',
      stem: '네트워크를 관리하는 Lee 사원은 사내에서 잦은 IP 충돌로 인하여 장애신고를 많이 받고 있어 기존 IP정책을 DHCP로 변경하려고 한다. 다음 중 DHCP를 적용해야 하는 장비로 가장 적합한 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '웹서버',
        },
        {
          id: 2,
          text: 'Access point',
        },
        {
          id: 3,
          text: '교육장용 PC',
        },
        {
          id: 4,
          text: '네트워크 프린터',
        },
      ],
      correctId: 3,
    },
    {
      number: 14,
      subject: '1과목 : TCP/IP',
      stem: 'TCP 헤더를 구성하는 필드의 길이(비트수)가 적절하지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Source port address : 16비트',
        },
        {
          id: 2,
          text: 'Sequence Number : 32비트',
        },
        {
          id: 3,
          text: 'Flags : 9비트',
        },
        {
          id: 4,
          text: 'Checksum : 32비트',
        },
      ],
      correctId: 4,
    },
    {
      number: 15,
      subject: '1과목 : TCP/IP',
      stem: 'HTTP에 대한 설명으로 적절하지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '애플리케이션 계층에서 동작하는 프로토콜이다.',
        },
        {
          id: 2,
          text: 'HTTP/2는 SPDY 프로토콜을 기반으로 TCP 연결을 사용한다.',
        },
        {
          id: 3,
          text: 'HTTP 기본 포트는 80이고, HTTPS 기본포트는 443이다.',
        },
        {
          id: 4,
          text: 'HTTP/3은 QUIC 프로토콜을 기반으로 TCP 연결을 사용한다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 16,
      subject: '1과목 : TCP/IP',
      stem: '다음 중 SNMP(Simple Network Management Protocol)의 설명으로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '포트번호는 181번을 사용한다.',
        },
        {
          id: 2,
          text: '네트워크 관리를 위해 관리 정보 및 정보 운반을 위한 프로토콜이다.',
        },
        {
          id: 3,
          text: '대부분의 네트워킹 공급업체에서 광범위하게 지원되나 기존 네트워크와는 통합이 어렵다.',
        },
        {
          id: 4,
          text: 'SNMPv2c는 암호화와 인증 기능을 기본으로 제공하므로 보안성이 매우 높다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 17,
      subject: '1과목 : TCP/IP',
      stem: '다음 (A) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2025-08-24-2.gif'],
      choices: [
        {
          id: 1,
          text: 'SNMP (Simple Network Management Protocol)',
        },
        {
          id: 2,
          text: 'SNTP (Simple Network Time Protocol)',
        },
        {
          id: 3,
          text: 'SMTP (Simple Mail Transfer Protocol)',
        },
        {
          id: 4,
          text: 'HTTP (HyperText Transfer Protocol)',
        },
      ],
      correctId: 2,
    },
    {
      number: 18,
      subject: '2과목 : 네트워크 일반',
      stem: 'NFV(Network Function Virtualization)에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '소프트웨어가 아닌 하드웨어로 제어되는 네트워킹 기술로서, 네트워크를 마치 컴퓨터처럼 구성하거나 조작하는 네트워킹 기술이다.',
        },
        {
          id: 2,
          text: 'NFV(Network Functions Virtualization)는 소프트웨어로 개발된 네트워크 기능의 가상화된 형태를 의미한다.',
        },
        {
          id: 3,
          text: 'NFVI(Network Function Virtualization Infrastructure)는 물리적 H/W 자원, 가상화 지원기능 및 VNF(Virtualized Network Functions) 실행지원기능 등을 제공한다.',
        },
        {
          id: 4,
          text: '가상화 기술 기반으로 통신망 운용에 필요한 다양한 네트워크 장비 내 여러 기능들을 분리시켜 S/W로 제어 및 관리 가능하도록 하는 네트워크 가상화 기술이다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 19,
      subject: '2과목 : 네트워크 일반',
      stem: '메시 네트워크(Mesh Network)의 특징으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '노드의 이동이 자유롭기 때문에 네트워크 토폴로지가 동적으로 변한다.',
        },
        {
          id: 2,
          text: '일대일 다중 홉 라우팅(Multihop Routing) 방식으로 전달한다.',
        },
        {
          id: 3,
          text: '중앙 제어나 표준 서비스 없이 네트워크를 구성할 수 없다.',
        },
        {
          id: 4,
          text: '하나의 연결이 끊어져도 네트워크는 자동으로 다른 연결로 메시지를 전송할 수 있다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 20,
      subject: '2과목 : 네트워크 일반',
      stem: '데이터 전송 전에 목적지까지의 경로를 설정한 후 전송 데이터를 정해진 단위별로 전송하되, 규정된 시간 내에 전송 데이터가 없으면 현재 설정된 경로를 해제하는 교환방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '회선교환 방식',
        },
        {
          id: 2,
          text: '데이터그램 방식',
        },
        {
          id: 3,
          text: '가상회선교환 방식',
        },
        {
          id: 4,
          text: '메시지교환 방식',
        },
      ],
      correctId: 3,
    },
    {
      number: 21,
      subject: '2과목 : 네트워크 일반',
      stem: '송신측에서 여러 개의 터미널이 하나의 통신 회선을 통하여 신호를 전송하고, 전송된 신호를 수신측에서 다시 여러 개의 신호로 분리하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Multiplexing',
        },
        {
          id: 2,
          text: 'MODEM',
        },
        {
          id: 3,
          text: 'DSU',
        },
        {
          id: 4,
          text: 'CODEC',
        },
      ],
      correctId: 1,
    },
    {
      number: 22,
      subject: '2과목 : 네트워크 일반',
      stem: 'LAN의 구성형태 중 중앙의 제어점으로부터 모든 기기가 점 대 점(Point to Point) 방식으로 연결된 구성형태는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '링형 구성',
        },
        {
          id: 2,
          text: '스타형 구성',
        },
        {
          id: 3,
          text: '버스형 구성',
        },
        {
          id: 4,
          text: '트리형 구성',
        },
      ],
      correctId: 2,
    },
    {
      number: 23,
      subject: '2과목 : 네트워크 일반',
      stem: '전송을 받는 개체에서 발송지로부터 오는 데이터의 양이나 속도를 제한하는 프로토콜의 기능을 나타내는 용어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '에러 제어',
        },
        {
          id: 2,
          text: '순서 제어',
        },
        {
          id: 3,
          text: '흐름 제어',
        },
        {
          id: 4,
          text: '접속 제어',
        },
      ],
      correctId: 3,
    },
    {
      number: 24,
      subject: '2과목 : 네트워크 일반',
      stem: 'ARQ 방식 중 에러가 발생한 블록으로 되돌아가 모든 블록을 재전송하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Go-back-N ARQ',
        },
        {
          id: 2,
          text: 'Selective ARQ',
        },
        {
          id: 3,
          text: 'Adaptive ARQ',
        },
        {
          id: 4,
          text: 'Stop-and-Wait ARQ',
        },
      ],
      correctId: 1,
    },
    {
      number: 25,
      subject: '2과목 : 네트워크 일반',
      stem: '다음 중 여러 가지 주파수 성분을 갖는 신호의 전송에서 각 주파수 성분이 다른 지연시간을 가지고 도달하는 경우 발생하는 전송손실은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '감쇠 현상(Attenuation)',
        },
        {
          id: 2,
          text: '위상 왜곡(Phase Distortion)',
        },
        {
          id: 3,
          text: '누화(Crosstalk)',
        },
        {
          id: 4,
          text: '충격성잡음(Impulse Noise)',
        },
      ],
      correctId: 2,
    },
    {
      number: 26,
      subject: '2과목 : 네트워크 일반',
      stem: '100BASE-T라고도 불리는 이더넷의 고속 버전으로 CSMA/CD 방식을 사용하며, 100Mbps의 전송 속도를 지원하는 이더넷은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Fast Ethernet',
        },
        {
          id: 2,
          text: '10Gigabit Ethernet',
        },
        {
          id: 3,
          text: 'Gigabit Ethernet',
        },
        {
          id: 4,
          text: 'Thick Ethernet',
        },
      ],
      correctId: 1,
    },
    {
      number: 27,
      subject: '2과목 : 네트워크 일반',
      stem: '다음 중 클라우드 환경 모델(Cloud Deployment Model)로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'public',
        },
        {
          id: 2,
          text: 'on-premises',
        },
        {
          id: 3,
          text: 'hybrid',
        },
        {
          id: 4,
          text: 'private',
        },
      ],
      correctId: 2,
    },
    {
      number: 28,
      subject: '3과목 : NOS',
      stem: '아래 지문의 ping 명령어의 결과로 옳지 않은 것은?',
      images: ['assets/2025-08-24-3.gif'],
      choices: [
        {
          id: 1,
          text: 'ICMP 패킷의 대상(host)은 ′icqa.or.kr′이다.',
        },
        {
          id: 2,
          text: 'ICMP 패킷을 3번 송신하고 수신하였다.',
        },
        {
          id: 3,
          text: 'ICMP 패킷이 왕복한 시간 중 가장 짧은 시간은 7.085ms 이다.',
        },
        {
          id: 4,
          text: 'ICMP 패킷이 왕복한 평균 시간은 7.450ms 이다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 29,
      subject: '3과목 : NOS',
      stem: 'Linux Shell에서 아래 지문의 요구사항을 만족하는 명령어로 옳은 것은?',
      images: ['assets/2025-08-24-4.gif'],
      choices: [
        {
          id: 1,
          text: 'ls -al ＞ output.txt',
        },
        {
          id: 2,
          text: 'ls -al ＜ output.txt',
        },
        {
          id: 3,
          text: 'ls -al ＜＜ output.txt',
        },
        {
          id: 4,
          text: 'ls -al ＞＞ output.txt',
        },
      ],
      correctId: 1,
    },
    {
      number: 30,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Seo 사원은 Windows Server 2022의 이벤트 뷰어를 통해 서버의 상태를 점검하려고 한다. Windows 로그에 해당하는 항목으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '하드웨어 이벤트',
        },
        {
          id: 2,
          text: '인터넷 익스플로러',
        },
        {
          id: 3,
          text: 'Windows PowerShell',
        },
        {
          id: 4,
          text: '응용 프로그램',
        },
      ],
      correctId: 4,
    },
    {
      number: 31,
      subject: '3과목 : NOS',
      stem: '서버관리자 Kim씨는 서버에 대한 상태를 확인하기 위해 ′/etc/check.sh′ 스크립트를 작성하였다. 해당 스크립트를 매주 월요일 오전 10시에 실행시키려고 할때, crontab 파일 설정으로 알맞은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '10 0 * * 1 /etc/check.sh',
        },
        {
          id: 2,
          text: '0 10 * * 1 /etc/check.sh',
        },
        {
          id: 3,
          text: '10 0 * * 0 /etc/check.sh',
        },
        {
          id: 4,
          text: '0 10 * * 0 /etc/check.sh',
        },
      ],
      correctId: 2,
    },
    {
      number: 32,
      subject: '3과목 : NOS',
      stem: 'Linux 디렉터리에 대한 소유자와 소유그룹을 변경할 수 있는 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'chmod',
        },
        {
          id: 2,
          text: 'chown',
        },
        {
          id: 3,
          text: 'useradd',
        },
        {
          id: 4,
          text: 'chage',
        },
      ],
      correctId: 2,
    },
    {
      number: 33,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 환경설정과 사용자 정보 등을 가진 디렉터리로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '/bin',
        },
        {
          id: 2,
          text: '/root',
        },
        {
          id: 3,
          text: '/etc',
        },
        {
          id: 4,
          text: '/proc',
        },
      ],
      correctId: 3,
    },
    {
      number: 34,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 Active Directory를 구성하여 다음과 같은 설정을 하고자 한다. 도메인을 두 개 이상 포함하는 대부분의 조직에서 사용자가 다른 도메인에 있는 공유 리소스에 액세스할 수 있어야 하며, 이 액세스를 제어 하려면 한 도메인의 사용자를 인증하고 다른 도메인의 리소스를 사용할 수 있는 권한을 부여해야 한다. 서로 다른 도메인의 클라이언트와 서버 간에 인증 및 권한 부여 기능을 제공하기 위해 두 도메인 간에 설정해야 하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '도메인',
        },
        {
          id: 2,
          text: '트리',
        },
        {
          id: 3,
          text: '포리스트',
        },
        {
          id: 4,
          text: '트러스트',
        },
      ],
      correctId: 4,
    },
    {
      number: 35,
      subject: '3과목 : NOS',
      stem: '다음 중 Linux 환경에서 ′netstat′ 명령어에 사용하는 옵션 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '-r : 라우팅 테이블을 표시한다.',
        },
        {
          id: 2,
          text: '-p : PID와 사용 중인 프로그램명을 출력한다.',
        },
        {
          id: 3,
          text: '-t : 연결된 이후 시간 정보를 표시한다.',
        },
        {
          id: 4,
          text: '-a : 모든 연결 및 수신 대기 포트를 표시한다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 36,
      subject: '3과목 : NOS',
      stem: '다음과 같이 파일의 원래 권한은 유지한 채로 모든 사용자들에게 쓰기 가능한 권한을 추가 부여할 때, 결과가 다른 명령어는?',
      images: ['assets/2025-08-24-5.gif'],
      choices: [
        {
          id: 1,
          text: 'chmod 666 file',
        },
        {
          id: 2,
          text: 'chmod a+w file',
        },
        {
          id: 3,
          text: 'chmod ugo+w file',
        },
        {
          id: 4,
          text: 'chmod go=w file',
        },
      ],
      correctId: 4,
    },
    {
      number: 37,
      subject: '3과목 : NOS',
      stem: 'Linux의 vi(Visual Interface) 명령어 중 문자 하나를 삭제할 때 사용하는 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'dd',
        },
        {
          id: 2,
          text: 'x',
        },
        {
          id: 3,
          text: 'D',
        },
        {
          id: 4,
          text: 'dw',
        },
      ],
      correctId: 2,
    },
    {
      number: 38,
      subject: '3과목 : NOS',
      stem: '서버 관리자 Park 사원은 Windows Server 2022의 Active Directory에서 도메인 사용자 계정을 관리하기 위해 도메인 사용자 계정을 생성/수정/삭제하려고 한다. 다음 중 도메인 사용자 계정을 관리하기 위한 명령어가 아닌 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'dsadd',
        },
        {
          id: 2,
          text: 'dsmod',
        },
        {
          id: 3,
          text: 'dsrm',
        },
        {
          id: 4,
          text: 'net user',
        },
      ],
      correctId: 4,
    },
    {
      number: 39,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2022의 DNS 서버에서 정방향 조회 영역 설정에서 SOA 레코드의 각 필드에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '일련번호 : 해당 영역 파일의 개정 번호다.',
        },
        {
          id: 2,
          text: '주 서버 : 해당 영역이 초기에 설정되는 서버다.',
        },
        {
          id: 3,
          text: '책임자 : 해당 영역을 관리하는 사람의 전자 메일 주소다. webmaster@icqa.or.kr 형식으로 기입한다.',
        },
        {
          id: 4,
          text: '새로 고침 간격 : 보조 서버에게 주 서버의 변경을 검사하기 전에 대기하는 시간이다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 40,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 특정 서비스를 제공하는 Daemon이 살아있는지 확인할 때 사용하는 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'daemon',
        },
        {
          id: 2,
          text: 'fsck',
        },
        {
          id: 3,
          text: 'men',
        },
        {
          id: 4,
          text: 'ps',
        },
      ],
      correctId: 4,
    },
    {
      number: 41,
      subject: '3과목 : NOS',
      stem: '다음 중 Windows Server 2022에서 명령 프롬프트(cmd) 또는 실행창(단축키: Win+R)에 입력했을 때, 실행되지 않거나 해당 프로그램과 연결이 올바르지 않은 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'compmgmt – 컴퓨터 관리',
        },
        {
          id: 2,
          text: 'devmgmt.msc – 장치 관리자',
        },
        {
          id: 3,
          text: 'gpedit.msc – 로컬 그룹 정책 편집기',
        },
        {
          id: 4,
          text: 'perfmon – 성능 모니터',
        },
      ],
      correctId: 1,
    },
    {
      number: 42,
      subject: '3과목 : NOS',
      stem: '네트워크 담당자 Kim 과장은 Windows Server의 명령 프롬프트(cmd) 환경에서 ping 명령어를 사용하여 목적지(IP 주소: 192.168.100.1)와의 네트워크 연결 상태를 지속적으로 확인하고자 한다. 사용자가 중단하기 전까지 에코 요청 메시지를 반복 전송하는 ping 명령어 옵션으로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ping –t 192.168.100.1',
        },
        {
          id: 2,
          text: 'ping -a 192.168.100.1',
        },
        {
          id: 3,
          text: 'ping –f 192.168.100.1',
        },
        {
          id: 4,
          text: 'ping -n 192.168.100.1',
        },
      ],
      correctId: 1,
    },
    {
      number: 43,
      subject: '3과목 : NOS',
      stem: '서버 관리자 Gang 차장은 Linux 기반 Apache 웹 서버(Apache HTTPD)의 기본 포트를 8081번으로 변경하려고 한다. 다음 중 ′httpd.conf′ 설정 파일에서 기본 포트를 설정하기 위한 올바른 옵션은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Port 8081',
        },
        {
          id: 2,
          text: 'Default Port 8081',
        },
        {
          id: 3,
          text: 'Listening 8081',
        },
        {
          id: 4,
          text: 'Listen 8081',
        },
      ],
      correctId: 4,
    },
    {
      number: 44,
      subject: '3과목 : NOS',
      stem: 'FTP(File Transfer Protocol)는 파일 전송을 위한 표준 네트워크 프로토콜이다. 이 중 사용자 인증과 명령 제어용으로 사용되는 기본 포트번호로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '20번',
        },
        {
          id: 2,
          text: '21번',
        },
        {
          id: 3,
          text: '22번',
        },
        {
          id: 4,
          text: '23번',
        },
      ],
      correctId: 2,
    },
    {
      number: 45,
      subject: '3과목 : NOS',
      stem: '아래 지문에서 설명하는 부하분산 방식은?',
      images: ['assets/2025-08-24-6.gif'],
      choices: [
        {
          id: 1,
          text: 'Least Connection Method',
        },
        {
          id: 2,
          text: 'IP Hash Method',
        },
        {
          id: 3,
          text: 'Least Response Time Method',
        },
        {
          id: 4,
          text: 'Round Robin Method',
        },
      ],
      correctId: 4,
    },
    {
      number: 46,
      subject: '4과목 : 네트워크 운용기기',
      stem: 'RAID의 레벨 중에서 회전 패리티 방식으로 병목현상을 줄이는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'RAID-2',
        },
        {
          id: 2,
          text: 'RAID-3',
        },
        {
          id: 3,
          text: 'RAID-4',
        },
        {
          id: 4,
          text: 'RAID-5',
        },
      ],
      correctId: 4,
    },
    {
      number: 47,
      subject: '4과목 : 네트워크 운용기기',
      stem: '네트워크에서 신호가 약해질 경우 이를 단순 증폭·재생성하여 전송 거리를 늘려주는 장비가 있다. OSI 7계층 중 이 장비가 속하는 계층은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '물리 계층 (Physical Layer)',
        },
        {
          id: 2,
          text: '네트워크 계층 (Network Layer)',
        },
        {
          id: 3,
          text: '전송 계층 (Transport Layer)',
        },
        {
          id: 4,
          text: '응용 계층 (Application Layer)',
        },
      ],
      correctId: 1,
    },
    {
      number: 48,
      subject: '4과목 : 네트워크 운용기기',
      stem: '내부에 코어(Core)와, 이를 감싸는 유리나 플라스틱 등 굴절률이 다른 외부 클래딩(Cladding)으로 구성된 전송 매체는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '이중 나선(Twisted Pair)',
        },
        {
          id: 2,
          text: '동축 케이블(Coaxial Cable)',
        },
        {
          id: 3,
          text: '2선식 개방 선로(Two-Wire Open Lines)',
        },
        {
          id: 4,
          text: '광 케이블(Optical Cable)',
        },
      ],
      correctId: 4,
    },
    {
      number: 49,
      subject: '4과목 : 네트워크 운용기기',
      stem: '다음 지문처럼 VLAN 식별을 위해 이더넷 프레임에 태그 정보를 추가하여 스위치 간 VLAN 트래픽을 전달하는 방식은?',
      images: ['assets/2025-08-24-7.gif'],
      choices: [
        {
          id: 1,
          text: 'STP',
        },
        {
          id: 2,
          text: 'Native VLAN',
        },
        {
          id: 3,
          text: '태그(Tagged) 포트',
        },
        {
          id: 4,
          text: 'LOOP',
        },
      ],
      correctId: 3,
    },
    {
      number: 50,
      subject: '4과목 : 네트워크 운용기기',
      stem: '다음 중 Layer 4 스위치(Layer 4 Switch, L4)의 기능 또는 특징으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '서버의 부하를 분산하여 효율적으로 처리한다.',
        },
        {
          id: 2,
          text: 'OSI 7계층 중 네트워크 계층에 해당하는 장비이다.',
        },
        {
          id: 3,
          text: 'TCP, UDP, HTTP 등의 헤더를 분석해 부하 분산을 수행한다.',
        },
        {
          id: 4,
          text: '외부 요청은 모두 L4 스위치를 거쳐 각 서버로 분산된다.',
        },
      ],
      correctId: 2,
    },
  ],
  '2025-05-25': [
    {
      number: 1,
      subject: '1과목 : TCP/IP',
      stem: '프로토콜의 기본적인 기능 중, 송신기에서 발생된 정보의 정확한 전송을 위해 사용자 정보의 앞, 뒤 부분에 헤더와 트레일러를 부가하는 과정은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '캡슐화(Encapsulation)',
        },
        {
          id: 2,
          text: '동기화(Synchronization)',
        },
        {
          id: 3,
          text: '다중화(Multiplexing)',
        },
        {
          id: 4,
          text: '주소지정(Addressing)',
        },
      ],
      correctId: 1,
    },
    {
      number: 2,
      subject: '1과목 : TCP/IP',
      stem: '서브넷 마스크에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IP Address 체계에서 Network ID와 Host ID로 구분한다.',
        },
        {
          id: 2,
          text: '목적지 호스트가 동일한 네트워크상에 있는지 확인한다.',
        },
        {
          id: 3,
          text: 'Class A는 기본 서브넷 마스크로 ′254.0.0.0′을 이용한다.',
        },
        {
          id: 4,
          text: '서브넷 마스크의 Network ID 필드는 이진수 ′1′로, Host ID의 필드는 이진수 ′0′으로 채운다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 3,
      subject: '1과목 : TCP/IP',
      stem: 'IGMP(Internet Group Management Protocol)의 특징으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'TTL(Time to Live)이 제공된다.',
        },
        {
          id: 2,
          text: '유니캐스트 통신을 위한 프로토콜로 적합하다.',
        },
        {
          id: 3,
          text: 'IGMPv1에서는 첫 보고 메시지 손실 시 재전송되지 않는다.',
        },
        {
          id: 4,
          text: '호스트와 라우터 간의 비대칭 통신 구조를 가진다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 4,
      subject: '1과목 : TCP/IP',
      stem: 'C Class인 네트워크의 서브넷 마스크가 ′255.255.255.192′ 이라면 둘 수 있는 서브넷의 개수는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '2',
        },
        {
          id: 2,
          text: '4',
        },
        {
          id: 3,
          text: '192',
        },
        {
          id: 4,
          text: '1024',
        },
      ],
      correctId: 2,
    },
    {
      number: 5,
      subject: '1과목 : TCP/IP',
      stem: 'TCP를 사용하는 프로토콜로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'FTP',
        },
        {
          id: 2,
          text: 'TFTP',
        },
        {
          id: 3,
          text: 'Telnet',
        },
        {
          id: 4,
          text: 'SMTP',
        },
      ],
      correctId: 2,
    },
    {
      number: 6,
      subject: '1과목 : TCP/IP',
      stem: 'ICMP의 Message Type에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '0 - Echo Reply',
        },
        {
          id: 2,
          text: '5 - Echo Request',
        },
        {
          id: 3,
          text: '13 - Timestamp Request',
        },
        {
          id: 4,
          text: '17 - Address Mask Request',
        },
      ],
      correctId: 2,
    },
    {
      number: 7,
      subject: '1과목 : TCP/IP',
      stem: 'IPv6에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IETF(Internet Engineering Task Force)에서 IP Address 부족에 대한 해결 방안으로 만들었다.',
        },
        {
          id: 2,
          text: 'IPv6 보다는 IPv4가 더 다양한 옵션 설정이 가능하다.',
        },
        {
          id: 3,
          text: '주소 유형은 유니캐스트, 멀티캐스트, 브로드캐스트 3가지이다.',
        },
        {
          id: 4,
          text: 'Broadcasting 기능을 제공한다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 8,
      subject: '1과목 : TCP/IP',
      stem: 'UDP 패킷의 헤더에 속하지 않는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Source Port',
        },
        {
          id: 2,
          text: 'Destination Port',
        },
        {
          id: 3,
          text: 'Window',
        },
        {
          id: 4,
          text: 'Checksum',
        },
      ],
      correctId: 3,
    },
    {
      number: 9,
      subject: '1과목 : TCP/IP',
      stem: '다음 중 IP 프로토콜의 역할로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '호스트 간 패킷 전달의 신뢰성을 보장한다.',
        },
        {
          id: 2,
          text: '손실된 패킷의 재전송을 요청할 수 있다.',
        },
        {
          id: 3,
          text: '호스트 간에 패킷 교환에서 흐름 제어를 할 수 있다.',
        },
        {
          id: 4,
          text: 'MTU(Maximum Transmission Unit) 값보다 큰 Datagram은 단편화(Fragmentation)를 수행한다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 10,
      subject: '1과목 : TCP/IP',
      stem: '다음 중 ARP(Address Resolution Protocol) 캐시 유지 방식에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '새로 등록된 주소는 생존 시간(TTL: Time To Live) 값을 가진다.',
        },
        {
          id: 2,
          text: '등록된 주소는 일정 시간(예: 1~2분) 동안 사용되지 않으면 ARP 캐시에서 삭제될 수 있다.',
        },
        {
          id: 3,
          text: '일부 TCP/IP 시스템에서는 ARP 캐시에 등록된 주소가 재사용될 경우 TTL 값이 초기값으로 재설정된다.',
        },
        {
          id: 4,
          text: 'ARP는 ARP 캐시를 사용하더라도, 서버와 통신할 때마다 매번 MAC 주소를 다시 요청해야 한다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 11,
      subject: '1과목 : TCP/IP',
      stem: 'TCP/IP protocol stack에서 사용하는 Application 중에 연결 제어와 정보 전송용 포트를 구분하여 사용하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'DNS',
        },
        {
          id: 2,
          text: 'SMTP',
        },
        {
          id: 3,
          text: 'TFTP',
        },
        {
          id: 4,
          text: 'FTP',
        },
      ],
      correctId: 4,
    },
    {
      number: 12,
      subject: '1과목 : TCP/IP',
      stem: '다음 중 사설 IP주소로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '10.100.12.5',
        },
        {
          id: 2,
          text: '128.52.10.6',
        },
        {
          id: 3,
          text: '172.25.30.5',
        },
        {
          id: 4,
          text: '192.168.200.128',
        },
      ],
      correctId: 2,
    },
    {
      number: 13,
      subject: '1과목 : TCP/IP',
      stem: '다음 중 Ping 유틸리티와 관련이 없는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ICMP 메시지를 이용한다.',
        },
        {
          id: 2,
          text: 'Echo Request 메시지를 보내고 해당 컴퓨터로부터 ICMP Echo Reply 메시지를 기다린다.',
        },
        {
          id: 3,
          text: 'TCP/IP 구성 파라미터를 확인할 수 있다.',
        },
        {
          id: 4,
          text: 'TCP/IP 연결성을 테스트할 수 있다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 14,
      subject: '1과목 : TCP/IP',
      stem: 'SMTP(Simple Mail Transfer Protocol)와 POP3(Post Office Protocol version 3)의 차이점에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SMTP는 전송 프로토콜로 메일을 송신하는 데 사용되며, POP3는 수신 프로토콜로 메일을 수신하는 데 사용된다.',
        },
        {
          id: 2,
          text: 'SMTP와 POP3는 모두 메일을 실시간 동기화하여 서버에 메일을 보관한다.',
        },
        {
          id: 3,
          text: 'SMTP는 전자 메일 시스템과 관련이 있지만 POP3는 상관없는 프로토콜이다.',
        },
        {
          id: 4,
          text: '전자 메일은 SMTP, POP3, IMAP 서버를 통해 메일의 송수신이 동시에 처리된다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 15,
      subject: '1과목 : TCP/IP',
      stem: '다음은 무엇에 관한 설명인가?',
      images: ['assets/2025-05-25-1.gif'],
      choices: [
        {
          id: 1,
          text: 'OSPF',
        },
        {
          id: 2,
          text: 'RIP',
        },
        {
          id: 3,
          text: 'EGP',
        },
        {
          id: 4,
          text: 'BGP',
        },
      ],
      correctId: 2,
    },
    {
      number: 16,
      subject: '1과목 : TCP/IP',
      stem: 'TLS 프로토콜을 통해 Application Layer의 Data를 암호화하여 보호하는 프로토콜은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SMTP',
        },
        {
          id: 2,
          text: 'FTP',
        },
        {
          id: 3,
          text: 'Telnet',
        },
        {
          id: 4,
          text: 'HTTPS',
        },
      ],
      correctId: 4,
    },
    {
      number: 17,
      subject: '1과목 : TCP/IP',
      stem: 'DNS에 대한 설명 중 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '다른 호스트에 접근하고자 할 때 기억하기 어려운 IP Address 대신에 좀 더 이해하기 쉬운 계층적인 호스트 이름을 사용할 수 있도록 하는 기반 서비스이자 프로토콜이다.',
        },
        {
          id: 2,
          text: '호스트 이름에 대한 분산 데이터베이스이다.',
        },
        {
          id: 3,
          text: '호스트 이름은 단순한 나열이 아닌 논리적 구조를 형성하며, 하나의 도메인으로 그룹화되어 있고, 내부에 하위 도메인을 포함할 수 있다.',
        },
        {
          id: 4,
          text: '호스트 이름은 영문자와 숫자 그리고 ′@′, ′#′과 같은 특수 문자로 구성된다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 18,
      subject: '2과목 : 네트워크 일반',
      stem: '전송효율을 최대로 하기 위해 프레임의 길이를 동적으로 변경시킬 수 있는 ARQ(Automatic Repeat Request)방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Adaptive ARQ',
        },
        {
          id: 2,
          text: 'Go back-N ARQ',
        },
        {
          id: 3,
          text: 'Selective-Repeat ARQ',
        },
        {
          id: 4,
          text: 'Stop and Wait ARQ',
        },
      ],
      correctId: 1,
    },
    {
      number: 19,
      subject: '2과목 : 네트워크 일반',
      stem: 'Multiplexing 방법 중에서 다중화 시 전송할 데이터가 없더라도 타임 슬롯이 할당되어 대역폭의 낭비를 가져오는 다중화 방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'TDM(Time Division Multiplexer)',
        },
        {
          id: 2,
          text: 'STDM(Statistical Time Division Multiplexer)',
        },
        {
          id: 3,
          text: 'FDM(Frequency Division Multiplex)',
        },
        {
          id: 4,
          text: 'FDMA(Frequency Division Multiple Access)',
        },
      ],
      correctId: 1,
    },
    {
      number: 20,
      subject: '2과목 : 네트워크 일반',
      stem: '컴퓨터 추가 설정이 용이하고, 중앙관리가 가능한 네트워크 토폴로지는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Bus',
        },
        {
          id: 2,
          text: 'Star',
        },
        {
          id: 3,
          text: 'Ring',
        },
        {
          id: 4,
          text: 'Mesh',
        },
      ],
      correctId: 2,
    },
    {
      number: 21,
      subject: '2과목 : 네트워크 일반',
      stem: '100BASE-T라고도 불리는 이더넷의 고속 버전으로서 100 Mbps의 전송속도를 지원하는 근거리통신망의 표준은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Ethernet',
        },
        {
          id: 2,
          text: 'Gigabit Ethernet',
        },
        {
          id: 3,
          text: '10Giga Ethernet',
        },
        {
          id: 4,
          text: 'Fast Ethernet',
        },
      ],
      correctId: 4,
    },
    {
      number: 22,
      subject: '2과목 : 네트워크 일반',
      stem: '파장분할다중화방식(WDM)의 특징으로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '선로의 증설 없이 회선의 증설이 어렵다.',
        },
        {
          id: 2,
          text: '광증폭기를 사용해 무중계 장거리 전송이 가능하다.',
        },
        {
          id: 3,
          text: '광학적인 방법에 의해 신호를 시간축에서 다중화하는 방식이다.',
        },
        {
          id: 4,
          text: '각각의 채널은 같은 전송 형식, 전송 속도, 프로토콜 형식을 가진다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 23,
      subject: '2과목 : 네트워크 일반',
      stem: '(A)안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2025-05-25-2.gif'],
      choices: [
        {
          id: 1,
          text: 'WPAN',
        },
        {
          id: 2,
          text: 'LTE-M',
        },
        {
          id: 3,
          text: 'NB-IoT',
        },
        {
          id: 4,
          text: 'LAN',
        },
      ],
      correctId: 1,
    },
    {
      number: 24,
      subject: '2과목 : 네트워크 일반',
      stem: '모바일 멀티미디어 데이터의 폭증과 데이터 트래픽의 동적 특성 변화에 효율적으로 대처하기 위해, 구조적 유연성과 개방성을 제공하며 하드웨어가 아닌 소프트웨어로 제어되는 네트워킹 기술은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SDS (Software Defined Storage)',
        },
        {
          id: 2,
          text: 'SDN (Software Defined Networking)',
        },
        {
          id: 3,
          text: 'SNMP (Simple Network Management Protocol)',
        },
        {
          id: 4,
          text: 'CLI (Command Line Interface)',
        },
      ],
      correctId: 2,
    },
    {
      number: 25,
      subject: '2과목 : 네트워크 일반',
      stem: '클라우드 컴퓨팅 모델에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '통신환경에 따라 서비스에 영향을 받으며, 개별 정보가 물리적으로 어디에 위치하고 있는지 알기 어려운 단점이 있다.',
        },
        {
          id: 2,
          text: '공용 클라우드(public cloud)는 아마존 웹 서비스와 같은 외부 서비스 제공자가 관리하며, 인터넷을 통해 접근하기도 하고, 일반적인 공적 업무를 위해 이용된다.',
        },
        {
          id: 3,
          text: '사설 클라우드(private cloud)는 서버, 저장장치, 네트워크 데이터 그리고 응용프로그램 등을 함께 묶어서 회사 내·외부의 모든 이용자들이 공유할 수 있도록 하는 클라우드이다.',
        },
        {
          id: 4,
          text: '하이브리드 클라우드(hybrid cloud)는 공용 클라우드와 사설 클라우드가 혼용되어 있는 서비스로, 사설 클라우드를 구축하여 사용 중인 특정 기업이 클라우드서비스 중의 일부를 공용 클라우드업체로부터 서비스를 제공받으면서, 동시에 사설 클라우드와 연동하여 사용하는 방식이다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 26,
      subject: '2과목 : 네트워크 일반',
      stem: '다음 중 TCP/IP와 OSI 7 Layer의 비교로서 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'TCP 프로토콜은 OSI 7 Layer의 전송계층에 해당한다.',
        },
        {
          id: 2,
          text: 'IP 프로토콜은 OSI 7 Layer의 네트워크계층에 해당한다.',
        },
        {
          id: 3,
          text: '파일 전송 프로토콜인 FTP는 OSI 7 Layer의 응용계층에 해당한다.',
        },
        {
          id: 4,
          text: 'HTTP 프로토콜은 OSI 7 Layer의 표현계층에 해당한다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 27,
      subject: '2과목 : 네트워크 일반',
      stem: 'MAC(Media Access Control)방식 중, 네트워크에 연결된 각 노드에게 전송 기회를 순차적으로 부여하여, 모든 노드가 공평하게 데이터를 전송할 수 있도록 하는 방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'CSMA/CD',
        },
        {
          id: 2,
          text: 'Token Ring',
        },
        {
          id: 3,
          text: 'CSMA',
        },
        {
          id: 4,
          text: 'DQDB',
        },
      ],
      correctId: 2,
    },
    {
      number: 28,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 사용자가 내린 명령어를 Kernel에 전달해주는 역할을 하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'System Program',
        },
        {
          id: 2,
          text: 'Loader',
        },
        {
          id: 3,
          text: 'Shell',
        },
        {
          id: 4,
          text: 'Directory',
        },
      ],
      correctId: 3,
    },
    {
      number: 29,
      subject: '3과목 : NOS',
      stem: 'Linux 디렉터리 구성에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '/tmp - 임시파일이 저장되는 디렉터리',
        },
        {
          id: 2,
          text: '/boot - 시스템이 부팅될 때 부팅 가능한 커널 이미지 파일을 담고 있는 디렉터리',
        },
        {
          id: 3,
          text: '/var - 시스템의 로그 파일과 메일이 저장되는 위치',
        },
        {
          id: 4,
          text: '/usr - 사용자 계정이 위치하는 파티션 위치',
        },
      ],
      correctId: 4,
    },
    {
      number: 30,
      subject: '3과목 : NOS',
      stem: 'Linux에서 DNS의 SOA(Start Of Authority) 레코드에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Zone 파일은 항상 SOA로 시작한다.',
        },
        {
          id: 2,
          text: '해당 Zone에 대한 네임서버를 유지하기 위한 기본적인 자료가 저장된다.',
        },
        {
          id: 3,
          text: 'Refresh는 주 서버와 보조 서버의 동기 주기를 설정한다.',
        },
        {
          id: 4,
          text: 'TTL 값이 길면 DNS의 부하가 늘어난다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 31,
      subject: '3과목 : NOS',
      stem: "Linux 시스템에서 모든 사용자에게 'sample' 파일의 쓰기 권한을 금지시키고자 할 때 명령어로 올바른 것은?",
      images: [],
      choices: [
        {
          id: 1,
          text: 'chmod a-w sample',
        },
        {
          id: 2,
          text: 'chmod u-w sample',
        },
        {
          id: 3,
          text: 'chmod g+rw sample',
        },
        {
          id: 4,
          text: 'chmod a-r sample',
        },
      ],
      correctId: 1,
    },
    {
      number: 32,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에 새로운 사용자를 등록하려고 한다. 유저 이름은 ′network′로 하고, ′icqa′라는 기본 그룹에 편입시키는 명령은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'useradd -g icqa network',
        },
        {
          id: 2,
          text: 'useradd -g network icqa',
        },
        {
          id: 3,
          text: 'adduser -g network icqa',
        },
        {
          id: 4,
          text: 'adduser -G icqa network',
        },
      ],
      correctId: 1,
    },
    {
      number: 33,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 사용되고 있는 메모리 양과 사용 가능한 메모리 양, 공유 메모리와 가상 메모리에 대한 정보를 볼 수 있는 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'mem',
        },
        {
          id: 2,
          text: 'free',
        },
        {
          id: 3,
          text: 'du',
        },
        {
          id: 4,
          text: 'cat',
        },
      ],
      correctId: 2,
    },
    {
      number: 34,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016 DHCP 서버의 주요 역할의 설명으로 맞는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '동적 콘텐츠의 HTTP 압축을 구성하는 인프라를 제공한다.',
        },
        {
          id: 2,
          text: 'TCP/IP 네트워크에 대한 이름을 확인한다.',
        },
        {
          id: 3,
          text: 'IP 자원의 효율적인 관리 및 IP 자동 할당한다.',
        },
        {
          id: 4,
          text: '사설 IP주소를 공인 IP 주소로 변환해 준다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 35,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 Windows Server 2016에서 성능 모니터를 사용하여 서버 성능을 분석하려 한다. 일정 주기로 데이터를 수집하기 위해 성능 모니터를 시작하는 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'perfmon',
        },
        {
          id: 2,
          text: 'msconfig',
        },
        {
          id: 3,
          text: 'dfrg',
        },
        {
          id: 4,
          text: 'secpol',
        },
      ],
      correctId: 1,
    },
    {
      number: 36,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 1대의 서버가 아니라 여러 대의 웹 서버를 운영해서, 웹 클라이언트가 서비스를 요청할 경우에 교대로 서비스를 실행하는 방법으로 웹 서버의 부하를 여러 대가 공평하게 나눌 수 있도록 설계하고자 한다. 이에 적절한 서비스 방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Round Robin',
        },
        {
          id: 2,
          text: 'Heartbeat',
        },
        {
          id: 3,
          text: 'Failover Cluster',
        },
        {
          id: 4,
          text: 'Non-Repudiation',
        },
      ],
      correctId: 1,
    },
    {
      number: 37,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 Windows Server 2016에서 사용할 수 있는 네트워크 스토리지를 구현하고자 한다. 다음 조건에서 설명하는 방식의 네트워크 스토리지로 알맞은 것은?',
      images: ['assets/2025-05-25-3.gif'],
      choices: [
        {
          id: 1,
          text: 'NAS(Network Attached Storage)',
        },
        {
          id: 2,
          text: 'SAN(Storage Area Network)',
        },
        {
          id: 3,
          text: 'RAID(Redundant Array of Inexpensive Disks)',
        },
        {
          id: 4,
          text: 'SSD(Solid State Drive)',
        },
      ],
      correctId: 2,
    },
    {
      number: 38,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 Windows Server 2016에서 가상화 운영을 위한 Hyper-V를 운영하고자 한다. 다음 지문 내용 중 (A)에 공통으로 들어갈 내용으로 올바른 것은?',
      images: ['assets/2025-05-25-4.gif'],
      choices: [
        {
          id: 1,
          text: 'Virtual Machine',
        },
        {
          id: 2,
          text: 'Internet Information Services',
        },
        {
          id: 3,
          text: 'Windows Containers',
        },
        {
          id: 4,
          text: 'NanoServer',
        },
      ],
      correctId: 3,
    },
    {
      number: 39,
      subject: '3과목 : NOS',
      stem: '네트워크 담당자 Kim 사원은 Windows Server 2016에서 원격 액세스 서비스를 운용하고자 한다. Windows Server 2016 내에 있는 이 기능은 DirectAccess나 VPN과 달리 원격 컴퓨터를 네트워크에 연결하는 데 사용되지 않는다. 오히려 내부 웹 리소스를 인터넷에 게시하는 데 사용되는 이 기능은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'WAP(Web Application Proxy)',
        },
        {
          id: 2,
          text: 'PPTP(Point-to-Point Tunneling Protocol)',
        },
        {
          id: 3,
          text: 'L2TP(Layer 2 Tunneling Protocol)',
        },
        {
          id: 4,
          text: 'SSTP(Secure Socket Tunneling Protocol)',
        },
      ],
      correctId: 1,
    },
    {
      number: 40,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 Windows Server 2016에서 사용자 및 그룹을 관리하는 업무를 부여받았다. 다음 중 Windows Server 2016에 해당하는 그룹 계정 중 컴퓨터 자원에 대한 인증 속성을 관리하는 권한을 갖는 그룹은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Replicator',
        },
        {
          id: 2,
          text: 'Power Users',
        },
        {
          id: 3,
          text: 'Backup Operators',
        },
        {
          id: 4,
          text: 'Access Control Assistance Operators',
        },
      ],
      correctId: 4,
    },
    {
      number: 41,
      subject: '3과목 : NOS',
      stem: '다음 중 Linux 시스템에서 새로운 하드디스크를 추가하고 사용할 수 있도록 설정하는 과정과 관계가 가장 적은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'fdisk',
        },
        {
          id: 2,
          text: 'mkfs',
        },
        {
          id: 3,
          text: 'mount',
        },
        {
          id: 4,
          text: 'cal',
        },
      ],
      correctId: 4,
    },
    {
      number: 42,
      subject: '3과목 : NOS',
      stem: '다음 중 Linux의 BIND 설치 및 운영 시 수행해야 할 업무로 적절하지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '방화벽에서 UDP의 53번 포트만 열면 된다.',
        },
        {
          id: 2,
          text: '방화벽 설정은 ′iptables′ 명령어를 통해 설정할 수 있다.',
        },
        {
          id: 3,
          text: 'BIND 설치여부는 ′rpm -qa | grep bind′ 로 확인할 수 있다.',
        },
        {
          id: 4,
          text: '′/etc/named.conf′ 파일의 오류를 체크하는 명령어는 ′named-checkconf′ 이다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 43,
      subject: '3과목 : NOS',
      stem: '서버 관리자 Lee 사원은 Windows Server 2016에서 DNS 서버를 설치 하던 중 다음과 같은 문제를 발견하였다. Lee 사원이 해당 문제를 해결하기 위한 방법으로 가장 적절하지 않은 것은?',
      images: ['assets/2025-05-25-5.gif'],
      choices: [
        {
          id: 1,
          text: '명령어 프롬프트 창에서 ′ipconfig /renew′를 입력하였다.',
        },
        {
          id: 2,
          text: 'IP 주소의 할당방식을 고정할당방식으로 변경한다.',
        },
        {
          id: 3,
          text: '이더넷의 IP 속성에서 ′다음 IP 주소 사용′을 선택하고 IP 주소를 입력하였다.',
        },
        {
          id: 4,
          text: '이더넷의 IP 속성에서 ′다음 DNS 서버 주소 사용′을 선택하고 DNS 서버 주소를 입력하였다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 44,
      subject: '3과목 : NOS',
      stem: '사용자가 웹사이트에 접속했지만 다음과 같은 메시지가 출력되었다. 이 오류 상황에 해당하는 HTTP 상태 코드는?',
      images: ['assets/2025-05-25-6.gif'],
      choices: [
        {
          id: 1,
          text: '400',
        },
        {
          id: 2,
          text: '200',
        },
        {
          id: 3,
          text: '403',
        },
        {
          id: 4,
          text: '203',
        },
      ],
      correctId: 3,
    },
    {
      number: 45,
      subject: '3과목 : NOS',
      stem: 'Linux Apache 웹서버 httpd.conf 설정값 중 Directory Indexing 공격에 취약할 수 있는 옵션은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Options FollowSymLinks Indexes',
        },
        {
          id: 2,
          text: 'ServerAdmin : root@localhost',
        },
        {
          id: 3,
          text: 'DocumentRoot : ′/var/www/html′',
        },
        {
          id: 4,
          text: 'ServerRoot : ′/etc/httpd′',
        },
      ],
      correctId: 1,
    },
    {
      number: 46,
      subject: '4과목 : 네트워크 운용기기',
      stem: 'RAID는 Redundant Array of Independent Disk 혹은 Redundant Array of Inexpensive Disk의 약자로, 말 그대로 여러 개의 디스크를 묶어 하나의 디스크처럼 사용하는 기술이다. 그러면 다음에서 RAID Level 0(영)의 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '최소 2개의 디스크에 데이터를 동시에 분산 저장한다.',
        },
        {
          id: 2,
          text: '디스크에 데이터를 분산 저장하기 때문에 처리속도가 향상된다.',
        },
        {
          id: 3,
          text: '스트라이핑(Striping)이라고도 부르는 방식이다.',
        },
        {
          id: 4,
          text: '2개의 디스크 중 하나만 손상돼도 전체 데이터 복구가 가능하다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 47,
      subject: '4과목 : 네트워크 운용기기',
      stem: '로드밸런싱(Load Balancing)에 대한 설명으로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '물리적인 망 구성과는 상관없이 가상적으로 구성된 근거리 통신망 기술',
        },
        {
          id: 2,
          text: '사용량과 처리량을 증가시키고 지연율을 낮추며 응답시간을 감소시키고 시스템 부하를 피할 수 있게 하는 최적화 기술',
        },
        {
          id: 3,
          text: '가상머신이 실행되고 있는 물리적 컴퓨터로부터 분리된 또 하나의 컴퓨터',
        },
        {
          id: 4,
          text: '웹 브라우저와 서버 간의 통신에서 정보를 암호화하는 기술',
        },
      ],
      correctId: 2,
    },
    {
      number: 48,
      subject: '4과목 : 네트워크 운용기기',
      stem: 'IP Address의 부족과 내부 네트워크 주소의 보안을 위해 사용하는 방법 중 하나로, 내부에서는 사설 IP Address를 사용하고 외부 네트워크로 나가는 주소는 공인 IP Address를 사용하도록 하는 IP Address 변환 방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'DHCP 방식',
        },
        {
          id: 2,
          text: 'IPv6 방식',
        },
        {
          id: 3,
          text: 'NAT 방식',
        },
        {
          id: 4,
          text: 'MAC Address 방식',
        },
      ],
      correctId: 3,
    },
    {
      number: 49,
      subject: '4과목 : 네트워크 운용기기',
      stem: '웹서버를 보호하는 전용 보안장비로 HTTP, HTTPS 처럼 웹서버에서 동작하는 웹 프로토콜의 공격을 방어하는데 사용되는 보안장비는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IDS',
        },
        {
          id: 2,
          text: 'IPS',
        },
        {
          id: 3,
          text: 'Fire Wall',
        },
        {
          id: 4,
          text: 'WAF',
        },
      ],
      correctId: 4,
    },
    {
      number: 50,
      subject: '4과목 : 네트워크 운용기기',
      stem: '다음 ( )에 해당하는 용어는?',
      images: ['assets/2025-05-25-7.gif'],
      choices: [
        {
          id: 1,
          text: '포트(Port)',
        },
        {
          id: 2,
          text: '트렁크(Trunk)',
        },
        {
          id: 3,
          text: '소켓(Socket)',
        },
        {
          id: 4,
          text: '플러그(Plug)',
        },
      ],
      correctId: 2,
    },
  ],
  '2025-02-23': [
    {
      number: 1,
      subject: '1과목 : TCP/IP',
      stem: 'IP Header의 내용 중 TTL(Time To Live)의 기능을 설명한 것으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IP 패킷은 네트워크상에서 영원히 존재할 수 있다.',
        },
        {
          id: 2,
          text: '일반적으로 라우터의 한 홉(Hop)을 통과할 때마다 TTL 값이 ′1′씩 감소한다.',
        },
        {
          id: 3,
          text: 'Ping과 Tracert 유틸리티는 특정 호스트 컴퓨터에 접근을 시도하거나 그 호스트까지의 경로를 추적할 때 TTL 값을 사용한다.',
        },
        {
          id: 4,
          text: 'IP 패킷이 네트워크상에서 얼마동안 존재할 수 있는가를 나타낸다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 2,
      subject: '1과목 : TCP/IP',
      stem: 'IP Address 중 Class가 다른 주소는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '191.234.149.32',
        },
        {
          id: 2,
          text: '198.236.115.33',
        },
        {
          id: 3,
          text: '222.236.138.34',
        },
        {
          id: 4,
          text: '195.236.126.35',
        },
      ],
      correctId: 1,
    },
    {
      number: 3,
      subject: '1과목 : TCP/IP',
      stem: 'C Class 네트워크에서 6개의 서브넷이 필요하다고 할 때 가장 적당한 서브넷 마스크는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '255.255.255.0',
        },
        {
          id: 2,
          text: '255.255.255.192',
        },
        {
          id: 3,
          text: '255.255.255.224',
        },
        {
          id: 4,
          text: '255.255.255.240',
        },
      ],
      correctId: 3,
    },
    {
      number: 4,
      subject: '1과목 : TCP/IP',
      stem: 'IPv6 헤더 형식에서 네트워크 내에서 데이터그램의 생존 기간과 관련되는 필드는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Version',
        },
        {
          id: 2,
          text: 'Priority',
        },
        {
          id: 3,
          text: 'Next Header',
        },
        {
          id: 4,
          text: 'Hop Limit',
        },
      ],
      correctId: 4,
    },
    {
      number: 5,
      subject: '1과목 : TCP/IP',
      stem: 'TCP가 제공하는 기능으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '종단 간 흐름 제어를 위해 동적 윈도우(Dynamic Sliding Window) 방식을 사용한다.',
        },
        {
          id: 2,
          text: '한 번에 많은 데이터의 전송에 유리하기 때문에 화상 통신과 같은 실시간 통신에 사용된다.',
        },
        {
          id: 3,
          text: '송수신되는 데이터의 에러를 제어함으로써 신뢰성 있는 데이터 전송을 보장한다.',
        },
        {
          id: 4,
          text: 'Three Way Handshaking 과정을 통해 데이터를 주고받는다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 6,
      subject: '1과목 : TCP/IP',
      stem: 'UDP 헤더에 포함이 되지 않는 항목은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '확인 응답 번호(Acknowledgment Number)',
        },
        {
          id: 2,
          text: '소스 포트(Source Port) 주소',
        },
        {
          id: 3,
          text: '체크섬(Checksum) 필드',
        },
        {
          id: 4,
          text: '목적지 포트(Destination Port) 주소',
        },
      ],
      correctId: 1,
    },
    {
      number: 7,
      subject: '1과목 : TCP/IP',
      stem: 'ICMP의 Message Type필드의 유형과 질의 메시지 내용을 나타낸 것이다. 타입에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '3 - Echo Request 질의 메시지에 응답하는데 사용된다.',
        },
        {
          id: 2,
          text: '4 - 흐름제어 및 폭주제어를 위해 사용된다.',
        },
        {
          id: 3,
          text: '5 - 대체경로(Redirect)를 알리기 위해 라우터가 호스트에 사용한다.',
        },
        {
          id: 4,
          text: '17 - Address Mask Request 장비의 서브넷 마스크를 요구하는데 사용된다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 8,
      subject: '1과목 : TCP/IP',
      stem: '인터넷 전송 방식 중, 특정 호스트로부터 같은 네트워크상의 모든 호스트에게 데이터를 전송하는 방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Unicast',
        },
        {
          id: 2,
          text: 'Broadcast',
        },
        {
          id: 3,
          text: 'Multicast',
        },
        {
          id: 4,
          text: 'User Datagram Protocol',
        },
      ],
      correctId: 2,
    },
    {
      number: 9,
      subject: '1과목 : TCP/IP',
      stem: 'SNMP에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'TCP를 이용하여 신뢰성 있는 통신을 한다.',
        },
        {
          id: 2,
          text: '네트워크 관리를 위한 표준 프로토콜이다.',
        },
        {
          id: 3,
          text: '응용 계층 프로토콜이다.',
        },
        {
          id: 4,
          text: 'RFC 1157에 규정되어 있다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 10,
      subject: '1과목 : TCP/IP',
      stem: 'IPv6의 주소 표기법으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '192.168.1.30',
        },
        {
          id: 2,
          text: '3ffe:1900:4545:0003:0200:f8ff:ffff:1105',
        },
        {
          id: 3,
          text: '00:A0:C3:4B:21:33',
        },
        {
          id: 4,
          text: '0000:002A:0080:c703:3c75',
        },
      ],
      correctId: 2,
    },
    {
      number: 11,
      subject: '1과목 : TCP/IP',
      stem: 'OSI 7 계층의 통신 계층별 PDU(Protocol Data Unit)의 명칭으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '7계층 : 세그먼트',
        },
        {
          id: 2,
          text: '4계층 : 패킷',
        },
        {
          id: 3,
          text: '3계층 : 비트',
        },
        {
          id: 4,
          text: '2계층 : 프레임',
        },
      ],
      correctId: 4,
    },
    {
      number: 12,
      subject: '1과목 : TCP/IP',
      stem: 'IPv4 Address 중 네트워크 ID가 ′127′로 시작하는 주소의 용도는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '제한적 브로드캐스트 주소',
        },
        {
          id: 2,
          text: 'B Class의 멀티캐스트 주소',
        },
        {
          id: 3,
          text: 'C Class의 사설(Private) IP 주소',
        },
        {
          id: 4,
          text: '루프백(Loopback) 주소',
        },
      ],
      correctId: 4,
    },
    {
      number: 13,
      subject: '1과목 : TCP/IP',
      stem: 'TCP/IP 프로토콜의 응용계층에서 제공하는 응용서비스 프로토콜로, 컴퓨터 사용자들 사이에 전자우편 교환 서비스를 제공하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SNMP',
        },
        {
          id: 2,
          text: 'SMTP',
        },
        {
          id: 3,
          text: 'VT',
        },
        {
          id: 4,
          text: 'FTP',
        },
      ],
      correctId: 2,
    },
    {
      number: 14,
      subject: '1과목 : TCP/IP',
      stem: 'FTP 프로토콜에 대한 설명으로 올바르지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'FTP 세션이 설정되면 파일 송수신 기능을 사용해 원격 파일을 복사할 수 있다.',
        },
        {
          id: 2,
          text: '데이터 채널을 설정하기 위해 FTP 서버가 자신의 Well-known 포트인 20번으로 FTP 클라이언트와 데이터 채널 연결을 시도한다.',
        },
        {
          id: 3,
          text: '데이터 채널은 파일 송수신 요구가 발생할 때마다 새로 설정되고, 해당 파일의 송수신이 완료되면 즉시 연결이 해제된다.',
        },
        {
          id: 4,
          text: '프로토콜의 기본 기능인 파일 복사 작업은 복잡하지 않기 때문에 UDP프로토콜을 사용하는 것이 효율적이고 69번 포트를 통해 데이터를 전송한다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 15,
      subject: '1과목 : TCP/IP',
      stem: 'DNS 역할에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'DNS는 사용자가 도메인 이름을 입력하면 해당 도메인 이름을 해당하는 IP 주소로 변환한다.',
        },
        {
          id: 2,
          text: 'DNS는 여러 개의 IP 주소를 가진 도메인 이름에 대해 로드 밸런싱 기능을 제공, IP 주소를 반환하여 트래픽을 분산시키는 방식으로 서버 부하를 분산시킨다.',
        },
        {
          id: 3,
          text: '방화벽과 같은 보안 장비 중 하나다.',
        },
        {
          id: 4,
          text: 'DNS는 이전에 접근한 도메인 이름과 IP 주소의 대응을 캐싱하여 저장한다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 16,
      subject: '1과목 : TCP/IP',
      stem: '다음 중 (A), (B)에 들어갈 내용으로 알맞은 용어로 옳은 것은?',
      images: ['assets/2025-02-23-1.gif'],
      choices: [
        {
          id: 1,
          text: '(A) 암호화, (B) 복호화',
        },
        {
          id: 2,
          text: '(A) 복호화, (B) 암호화',
        },
        {
          id: 3,
          text: '(A) 캡슐화, (B) 역캡슐화',
        },
        {
          id: 4,
          text: '(A) 역캡슐화, (B) 캡슐화',
        },
      ],
      correctId: 3,
    },
    {
      number: 17,
      subject: '1과목 : TCP/IP',
      stem: 'ARP(Address Resolution Protocol)에 대한 설명 중 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '수신측의 논리주소 정보가 없기 때문에 브로드캐스트를 통해 전송한다.',
        },
        {
          id: 2,
          text: '수신측 물리주소와 송신측 물리주소를 검사하여 자신에 대해 물리주소를 요구하는 경우라면 ARP를 전송한다.',
        },
        {
          id: 3,
          text: '각 시스템에 Address Resolution Protocol Cache가 있고 Cache 정보를 보관한다.',
        },
        {
          id: 4,
          text: 'H/W 주소 기반으로 IP주소로 변환한다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 18,
      subject: '2과목 : 네트워크 일반',
      stem: '데이터 흐름 제어(Flow Control)와 관련 없는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Stop and Wait',
        },
        {
          id: 2,
          text: 'XON/XOFF',
        },
        {
          id: 3,
          text: 'Loop/Echo',
        },
        {
          id: 4,
          text: 'Sliding Window',
        },
      ],
      correctId: 3,
    },
    {
      number: 19,
      subject: '2과목 : 네트워크 일반',
      stem: 'OSI 7 Layer에서 Data Link 계층의 기능으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '전송 오류제어 기능',
        },
        {
          id: 2,
          text: 'Flow 제어 기능',
        },
        {
          id: 3,
          text: 'Text의 압축, 암호화 기능',
        },
        {
          id: 4,
          text: 'Link의 관리 기능',
        },
      ],
      correctId: 3,
    },
    {
      number: 20,
      subject: '2과목 : 네트워크 일반',
      stem: '네트워크의 구성(Topology)에서 성형(Star)에 관한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'point-to-point 방식으로 회선을 연결한다.',
        },
        {
          id: 2,
          text: '단말장치의 추가와 제거가 쉽다.',
        },
        {
          id: 3,
          text: '하나의 단말장치가 고장나면 전체 통신망에 영향을 줄 수 있다.',
        },
        {
          id: 4,
          text: '각 단말 장치는 중앙 컴퓨터를 통하여 데이터를 교환한다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 21,
      subject: '2과목 : 네트워크 일반',
      stem: '다음에서 설명하는 전송 방식은?',
      images: ['assets/2025-02-23-2.gif'],
      choices: [
        {
          id: 1,
          text: 'Token Ring',
        },
        {
          id: 2,
          text: 'Token Bus',
        },
        {
          id: 3,
          text: 'CSMA/CD',
        },
        {
          id: 4,
          text: 'Slotted Ring',
        },
      ],
      correctId: 3,
    },
    {
      number: 22,
      subject: '2과목 : 네트워크 일반',
      stem: '프로토콜 계층 구조상의 기본 구성요소 중 실체(Entity) 간의 통신 속도 및 메시지 순서를 위한 제어정보는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '타이밍(Timing)',
        },
        {
          id: 2,
          text: '의미(Semantics)',
        },
        {
          id: 3,
          text: '구문(Syntax)',
        },
        {
          id: 4,
          text: '처리(Process)',
        },
      ],
      correctId: 1,
    },
    {
      number: 23,
      subject: '2과목 : 네트워크 일반',
      stem: '다음은 네트워크 구축에 필요한 매체에 관한 내용이다. (A) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2025-02-23-3.gif'],
      choices: [
        {
          id: 1,
          text: 'U/UTP CAT.3',
        },
        {
          id: 2,
          text: 'Thin Coaxial Cable',
        },
        {
          id: 3,
          text: 'U/FTP CAT.5',
        },
        {
          id: 4,
          text: 'Optical Fiber Cable',
        },
      ],
      correctId: 4,
    },
    {
      number: 24,
      subject: '2과목 : 네트워크 일반',
      stem: '네트워크관리사 Kim 사원은 고속 대용량 전송이 가능한 멀티미디어 서비스에 적합한 기술 적용을 검토하라는 지시를 받았다. 이동통신 환경에서 다수의 안테나를 사용하여 데이터를 전송하는 다중 안테나 신호 처리 기술로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'MIMO(Multiple-Input and Multiple-Output)',
        },
        {
          id: 2,
          text: 'M2M(Machine to Machine)',
        },
        {
          id: 3,
          text: 'MQTT(Massage Queue Telemetry Transport)',
        },
        {
          id: 4,
          text: 'OFDM(Orthogonal Frequency Division Multiplexing)',
        },
      ],
      correctId: 1,
    },
    {
      number: 25,
      subject: '2과목 : 네트워크 일반',
      stem: '클라우드 컴퓨팅 모델에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '통신환경에 따라 서비스에 영향을 받으며, 개별 정보가 물리적으로 어디에 위치하고 있는지 알기 어려운 단점이 있다.',
        },
        {
          id: 2,
          text: '공용 클라우드(public cloud)는 아마존 웹 서비스와 같은 외부 서비스 제공자가 관리하며, 인터넷을 통해 접근하기도 하고, 일반적인 공적 업무를 위해 이용된다.',
        },
        {
          id: 3,
          text: '사설 클라우드(private cloud)는 서버, 저장장치, 네트워크 데이터 그리고 응용프로그램 등을 함께 묶어서 회사 내·외부의 모든 이용자들이 공유할 수 있도록 하는 클라우드이다.',
        },
        {
          id: 4,
          text: '하이브리드 클라우드(hybrid cloud)는 공용 클라우드와 사설 클라우드가 혼용되어 있는 서비스로, 사설 클라우드를 구축하여 사용 중인 특정 기업이 클라우드서비스 중의 일부를 공용 클라우드업체로부터 서비스를 제공받으면서, 동시에 사설 클라우드와 연동하여 사용하는 방식이다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 26,
      subject: '2과목 : 네트워크 일반',
      stem: '다음의 (A)에 들어갈 알맞은 용어는?',
      images: ['assets/2025-02-23-4.gif'],
      choices: [
        {
          id: 1,
          text: 'Wireless sensor networks',
        },
        {
          id: 2,
          text: 'Wireless mesh networks',
        },
        {
          id: 3,
          text: 'Software defined networks',
        },
        {
          id: 4,
          text: 'Content delivery networks',
        },
      ],
      correctId: 2,
    },
    {
      number: 27,
      subject: '2과목 : 네트워크 일반',
      stem: 'OSI 7 Layer 모델 중, 흐름 제어 및 오류 없는 전송을 보장하는 계층은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Session Layer',
        },
        {
          id: 2,
          text: 'Physical Layer',
        },
        {
          id: 3,
          text: 'Network Layer',
        },
        {
          id: 4,
          text: 'Transport Layer',
        },
      ],
      correctId: 4,
    },
    {
      number: 28,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016의 IIS 기본 웹사이트 등록 정보의 필드에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IP 주소: 사이트가 사용할 IP 주소를 기록하며, 한 컴퓨터에 2개 이상의 IP가 할당된 경우는 IP의 접속 순서를 지정',
        },
        {
          id: 2,
          text: 'TCP 포트: 웹서버 시스템의 물리적인 시리얼 포트 번호를 지정',
        },
        {
          id: 3,
          text: '연결 수 제한: 웹서버에 연결할 수 있는 연결 수 제한을 지정',
        },
        {
          id: 4,
          text: '연결 시간 제한: 웹서버에 접속한 후 일정 시간 동안 움직임이 없으면 세션을 끊도록 지정',
        },
      ],
      correctId: 2,
    },
    {
      number: 29,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016의 DNS 서버 역할에서 지원하는 레코드의 형식과 기능의 설명이다. 이 중 잘못 연결된 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'A - 정규화된 도메인 이름을 32비트 IPv4 주소와 연결',
        },
        {
          id: 2,
          text: 'AAAA - 정규화된 도메인 이름을 128비트 IPv6 주소와 연결',
        },
        {
          id: 3,
          text: 'CNAME - 실제 도메인 이름과 연결되는 가상 도메인 이름',
        },
        {
          id: 4,
          text: 'NS - 주어진 사서함에 도달할 수 있는 라우팅 정보를 제공',
        },
      ],
      correctId: 4,
    },
    {
      number: 30,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016에서 지원하는 Hyper-V에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '하드웨어 사용률을 높여준다.',
        },
        {
          id: 2,
          text: '서버 가용성이 줄어든다.',
        },
        {
          id: 3,
          text: '유지비용을 줄일 수 있다.',
        },
        {
          id: 4,
          text: '개발 및 테스트의 효율성을 향상시킨다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 31,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 데몬(Daemon)에 관한 설명 중 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '백그라운드(Background)로 실행된다.',
        },
        {
          id: 2,
          text: '′ps afx′ 명령어를 실행시켜 보면 데몬 프로그램의 활동을 확인할 수 있다.',
        },
        {
          id: 3,
          text: '시스템 서비스를 지원하는 프로세스이다.',
        },
        {
          id: 4,
          text: '시스템 부팅 때만 시작될 수 있다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 32,
      subject: '3과목 : NOS',
      stem: 'Linux에서 ′manager′라는 파일을, 파일의 소유자가 아닌 사람도 볼 수는 있지만 수정을 못하도록 하는 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'chmod 777 manager',
        },
        {
          id: 2,
          text: 'chmod 666 manager',
        },
        {
          id: 3,
          text: 'chmod 646 manager',
        },
        {
          id: 4,
          text: 'chmod 644 manager',
        },
      ],
      correctId: 4,
    },
    {
      number: 33,
      subject: '3과목 : NOS',
      stem: 'Linux에서 사용자가 현재 작업 중인 디렉터리의 경로를 절대경로 방식으로 보여주는 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'cd',
        },
        {
          id: 2,
          text: 'man',
        },
        {
          id: 3,
          text: 'pwd',
        },
        {
          id: 4,
          text: 'cron',
        },
      ],
      correctId: 3,
    },
    {
      number: 34,
      subject: '3과목 : NOS',
      stem: '다음은 Linux 시스템의 계정정보가 담긴 ′/etc/passwd′ 의 내용이다. 다음의 설명 중 옳지 않은 것은?',
      images: ['assets/2025-02-23-5.gif'],
      choices: [
        {
          id: 1,
          text: '사용자 계정의 ID는 ′user1′ 이다.',
        },
        {
          id: 2,
          text: '패스워드는 ′x′ 이다.',
        },
        {
          id: 3,
          text: '사용자의 UID와 GID는 500번이다.',
        },
        {
          id: 4,
          text: '사용자의 기본 Shell은 ′/bin/bash′ 이다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 35,
      subject: '3과목 : NOS',
      stem: 'TCP 3Way-HandShaking 과정 중 클라이언트가 보낸 연결 요청에서 패킷을 수신한 서버는 LISTEN 상태에서 무슨 상태로 변경되는가?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SYN_SENT',
        },
        {
          id: 2,
          text: 'SYN_RECEIVED',
        },
        {
          id: 3,
          text: 'ESTABLISHED',
        },
        {
          id: 4,
          text: 'CLOSE',
        },
      ],
      correctId: 2,
    },
    {
      number: 36,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016의 DNS관리에서 아래 지문과 같은 DNS 설정 방식은?',
      images: ['assets/2025-02-23-6.gif'],
      choices: [
        {
          id: 1,
          text: 'Round Robin',
        },
        {
          id: 2,
          text: 'Cache Plugin',
        },
        {
          id: 3,
          text: 'Cache Server',
        },
        {
          id: 4,
          text: 'Azure AutoScaling',
        },
      ],
      correctId: 1,
    },
    {
      number: 37,
      subject: '3과목 : NOS',
      stem: '네트워크관리사 Kim 사원이 Linux 서버(하드웨어)의 HDD 증설을 위해 서버를 종료하기로 하였다. 이에 Linux 서버를 종료하기 위한 명령어가 아닌 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'shutdown –h now',
        },
        {
          id: 2,
          text: 'poweroff',
        },
        {
          id: 3,
          text: 'init 6',
        },
        {
          id: 4,
          text: 'halt',
        },
      ],
      correctId: 3,
    },
    {
      number: 38,
      subject: '3과목 : NOS',
      stem: '네임서버 레코드 정보를 변경한 지 충분한 시간이 지났지만, 특정 기기에서 여전히 이전 도메인으로 접속되는 경우가 있다. 이는 컴퓨터의 DNS 캐시가 갱신되지 않아 발생할 수 있다. DNS 캐시를 초기화하는 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ipconfig /displydns',
        },
        {
          id: 2,
          text: 'ipconfig /flushdns',
        },
        {
          id: 3,
          text: 'ipconfig /release',
        },
        {
          id: 4,
          text: 'ipconfig /renew',
        },
      ],
      correctId: 2,
    },
    {
      number: 39,
      subject: '3과목 : NOS',
      stem: 'Linux에서 열려있는 port 정보를 확인하는 명령어로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ps',
        },
        {
          id: 2,
          text: 'pstree',
        },
        {
          id: 3,
          text: 'getenforce',
        },
        {
          id: 4,
          text: 'netstat',
        },
      ],
      correctId: 4,
    },
    {
      number: 40,
      subject: '3과목 : NOS',
      stem: 'Linux Apache 웹 서버에서 사용자가 POST Request 메시지를 전송 시 일정 크기 이상 전송하지 못하도록 ′httpd.conf′ 파일에서 설정하는 지시자로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'KeepRequestSize',
        },
        {
          id: 2,
          text: 'LimitRequestBody',
        },
        {
          id: 3,
          text: 'RestrictBodyRequest',
        },
        {
          id: 4,
          text: 'PostRequestSize',
        },
      ],
      correctId: 2,
    },
    {
      number: 41,
      subject: '3과목 : NOS',
      stem: '다음 지문에서 설명하는 Linux 시스템의 구성요소로 옳은 것은?',
      images: ['assets/2025-02-23-7.gif'],
      choices: [
        {
          id: 1,
          text: 'SSL(Secure Sockets Layer)',
        },
        {
          id: 2,
          text: 'SSH(Secure Shell)',
        },
        {
          id: 3,
          text: 'TLS(Transport Layer Security)',
        },
        {
          id: 4,
          text: 'RDP(Remote Desktop Protocol)',
        },
      ],
      correctId: 2,
    },
    {
      number: 42,
      subject: '3과목 : NOS',
      stem: '네트워크관리사 Park 사원은 Windows Server 2016에서 Active Directory를 구성 중에 있다. 이때 한 도메인 안에서 세부적인 단위로 나누어 관리부, 회계부, 기술부 등의 부서로 구성하고자 한다. 서버 담당자가 설정해야 하는 항목은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'DC(Domain Controller)',
        },
        {
          id: 2,
          text: 'RDC(Read Only Domain Controller)',
        },
        {
          id: 3,
          text: 'OU(Organizational Unit)',
        },
        {
          id: 4,
          text: 'Site',
        },
      ],
      correctId: 3,
    },
    {
      number: 43,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 사용자에게 할당되어 있는 디렉터리로, 사용자가 임의로 사용할 수 있는 디렉터리 영역은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Root Directory',
        },
        {
          id: 2,
          text: 'Home Directory',
        },
        {
          id: 3,
          text: 'Temporary Directory',
        },
        {
          id: 4,
          text: 'Public Directory',
        },
      ],
      correctId: 2,
    },
    {
      number: 44,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016에서 DHCP 구성에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'DHCP에서 새 범위 구성 시 임대 기간은 일, 시간, 분, 초단위로 설정할 수 있다.',
        },
        {
          id: 2,
          text: 'DHCP에서 새 범위 구성 시 더 이상 WINS 서버를 구성하지 않는다.',
        },
        {
          id: 3,
          text: '새 예약 구성 시 지원되는 유형은 BOOTP 없이 DHCP만 가능하다.',
        },
        {
          id: 4,
          text: 'DHCP 서버에서 주소를 분배할 때, 적용할 지연시간은 ms 단위로 지정한다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 45,
      subject: '3과목 : NOS',
      stem: '다음 중 Linux 명령어에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'mkfs : 파일시스템 생성',
        },
        {
          id: 2,
          text: 'du : 디스크 사용량 확인',
        },
        {
          id: 3,
          text: 'mount : 외부장치 등을 디렉터리에 연결',
        },
        {
          id: 4,
          text: 'fdisk : 파일시스템 점검',
        },
      ],
      correctId: 4,
    },
    {
      number: 46,
      subject: '4과목 : 네트워크 운용기기',
      stem: 'L2 스위치에서 프레임을 전송 시 목적지의 어떤 주소를 확인 후 전송하는가?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IP 주소',
        },
        {
          id: 2,
          text: 'Port 주소',
        },
        {
          id: 3,
          text: 'MAC 주소',
        },
        {
          id: 4,
          text: 'URL 주소',
        },
      ],
      correctId: 3,
    },
    {
      number: 47,
      subject: '4과목 : 네트워크 운용기기',
      stem: '무선랜(LAN)은 무선신호 전달방식을 이용하여 두 대 이상의 장치를 연결하는 기술이다. 이를 이용하여 사용자는 근거리 지역에서 이동하면서 지속적으로 네트워크에 접근할 수 있게 된다. 다음의 지문에서 설명하는 와이파이 IEEE 802.11규격은?',
      images: ['assets/2025-02-23-8.gif'],
      choices: [
        {
          id: 1,
          text: 'IEEE 802.11n',
        },
        {
          id: 2,
          text: 'IEEE 802.11ac',
        },
        {
          id: 3,
          text: 'IEEE 802.11be',
        },
        {
          id: 4,
          text: 'IEEE 802.11ax',
        },
      ],
      correctId: 4,
    },
    {
      number: 48,
      subject: '4과목 : 네트워크 운용기기',
      stem: '게이트웨이(Gateway)의 역할로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '전혀 다른 프로토콜을 채용한 네트워크 간의 인터페이스이다.',
        },
        {
          id: 2,
          text: '트위스트 페어 케이블 사용 시 이용되는 네트워크 케이블 집선 장치이다.',
        },
        {
          id: 3,
          text: '케이블의 중계점에서 신호를 전기적으로 증폭한다.',
        },
        {
          id: 4,
          text: '피지컬 어드레스의 캐시 테이블을 갖는다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 49,
      subject: '4과목 : 네트워크 운용기기',
      stem: '아래 지문이 설명하는 용어는?',
      images: ['assets/2025-02-23-9.gif'],
      choices: [
        {
          id: 1,
          text: 'NAC(Network Access Control)',
        },
        {
          id: 2,
          text: 'NAT(Network Access Translation)',
        },
        {
          id: 3,
          text: 'IP제어',
        },
        {
          id: 4,
          text: 'WAF(Web Application Firewall)',
        },
      ],
      correctId: 1,
    },
    {
      number: 50,
      subject: '4과목 : 네트워크 운용기기',
      stem: 'RAID에 대한 특징 중 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '데이터를 다수의 하드디스크에 병렬 전송하여 가상 하드디스크의 전송속도가 향상된다.',
        },
        {
          id: 2,
          text: '동일한 데이터를 하드디스크의 서로 다른 위치에 중복 저장할 수 있다.',
        },
        {
          id: 3,
          text: '가동 중에 하드디스크에 장애가 발생하더라도 시스템의 정지 없이 새로운 하드디스크를 교체할 수 있다.',
        },
        {
          id: 4,
          text: '운영체제에서 여러 개의 논리적 드라이브를 하나의 물리적 드라이브로 활용한다.',
        },
      ],
      correctId: 4,
    },
  ],
  '2024-11-03': [
    {
      number: 1,
      subject: '1과목 : TCP/IP',
      stem: 'TCP/IP에서 데이터 링크층의 데이터 단위는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '메시지',
        },
        {
          id: 2,
          text: '세그먼트',
        },
        {
          id: 3,
          text: '데이터그램',
        },
        {
          id: 4,
          text: '프레임',
        },
      ],
      correctId: 4,
    },
    {
      number: 2,
      subject: '1과목 : TCP/IP',
      stem: 'IP Address ′11101011.10001111.11111100.11001111′ 가 속한 Class는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'A Class',
        },
        {
          id: 2,
          text: 'B Class',
        },
        {
          id: 3,
          text: 'C Class',
        },
        {
          id: 4,
          text: 'D Class',
        },
      ],
      correctId: 4,
    },
    {
      number: 3,
      subject: '1과목 : TCP/IP',
      stem: 'IPv6 헤더 형식에서, 네트워크 내에서 혼잡 상황이 발생되어 데이터그램을 버려야 하는 경우 참조되는 필드는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Version',
        },
        {
          id: 2,
          text: 'Priority',
        },
        {
          id: 3,
          text: 'Next Header',
        },
        {
          id: 4,
          text: 'Hop Limit',
        },
      ],
      correctId: 2,
    },
    {
      number: 4,
      subject: '1과목 : TCP/IP',
      stem: 'IP 패킷은 네트워크 유형에 따라 전송량에 차이가 나기 때문에 적당한 크기로 분할하게 된다. 이때 기준이 되는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'TOS(Tape Operation System)',
        },
        {
          id: 2,
          text: 'MTU(Maximum Transmission Unit)',
        },
        {
          id: 3,
          text: 'TTL(Time-To-Live)',
        },
        {
          id: 4,
          text: 'Port Number',
        },
      ],
      correctId: 2,
    },
    {
      number: 5,
      subject: '1과목 : TCP/IP',
      stem: 'TCP 헤더 중에서 에러 제어를 위한 필드는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Offset',
        },
        {
          id: 2,
          text: 'Checksum',
        },
        {
          id: 3,
          text: 'Source Port',
        },
        {
          id: 4,
          text: 'Sequence Number',
        },
      ],
      correctId: 2,
    },
    {
      number: 6,
      subject: '1과목 : TCP/IP',
      stem: 'ICMP 메시지 내용으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '호스트의 IP Address가 중복된 경우',
        },
        {
          id: 2,
          text: '목적지까지 데이터를 보낼 수 없는 경우',
        },
        {
          id: 3,
          text: '데이터의 TTL 필드 값이 ′0′이 되어 데이터를 삭제 할 경우',
        },
        {
          id: 4,
          text: '데이터의 헤더 값에 오류를 발견한 경우',
        },
      ],
      correctId: 1,
    },
    {
      number: 7,
      subject: '1과목 : TCP/IP',
      stem: 'IGMP 프로토콜의 주된 기능은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '네트워크 내에 발생된 오류에 관한 보고 기능',
        },
        {
          id: 2,
          text: '대용량 파일을 전송하는 기능',
        },
        {
          id: 3,
          text: '멀티 캐스트 그룹에 가입한 네트워크 내의 호스트 관리 기능',
        },
        {
          id: 4,
          text: '호스트의 IP Address에 해당하는 호스트의 물리주소를 알려주는 기능',
        },
      ],
      correctId: 3,
    },
    {
      number: 8,
      subject: '1과목 : TCP/IP',
      stem: 'TCP/IP에서 Unicast의 의미는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '메시지가 한 호스트에서 다른 여러 호스트로 전송되는 패킷',
        },
        {
          id: 2,
          text: '메시지가 한 호스트에서 다른 한 호스트로 전송되는 패킷',
        },
        {
          id: 3,
          text: '메시지가 한 호스트에서 망상의 다른 모든 호스트로 전송되는 패킷',
        },
        {
          id: 4,
          text: '메시지가 한 호스트에서 망상의 특정 그룹 호스트들로 전송되는 패킷',
        },
      ],
      correctId: 2,
    },
    {
      number: 9,
      subject: '1과목 : TCP/IP',
      stem: 'IP Address ′127.0.0.1′ 이 의미하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '모든 네트워크를 의미한다.',
        },
        {
          id: 2,
          text: '사설 IP Address를 의미한다.',
        },
        {
          id: 3,
          text: '특정한 네트워크의 모든 노드를 의미한다.',
        },
        {
          id: 4,
          text: '루프 백 테스트용이다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 10,
      subject: '1과목 : TCP/IP',
      stem: 'TCP 3-Way Handshaking 연결 수립 절차의 1, 2, 3단계 중 3단계에서 사용되는 TCP 제어 Flag는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SYN',
        },
        {
          id: 2,
          text: 'RST',
        },
        {
          id: 3,
          text: 'SYN, ACK',
        },
        {
          id: 4,
          text: 'ACK',
        },
      ],
      correctId: 4,
    },
    {
      number: 11,
      subject: '1과목 : TCP/IP',
      stem: '네트워크를 관리하는 Kim 사원은 스위치에 원격접속 시 Telnet을 이용하여 작업을 주로 진행하였지만, 신규로 도입되는 스위치에는 SSH로 접속 방법을 교체하고자 한다. 다음 중 SSH의 특징으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Telnet에 비하여 보안성이 뛰어나다.',
        },
        {
          id: 2,
          text: 'SSH-1은 RSA 암호화를 사용한다.',
        },
        {
          id: 3,
          text: 'SSH-2는 RSA 외 더 다양한 키교환방식을 지원한다.',
        },
        {
          id: 4,
          text: 'TCP/23번을 이용한다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 12,
      subject: '1과목 : TCP/IP',
      stem: '네트워크 및 서버 관리자 Kim은 불법적으로 443 포트를 이용하여 52.139.250.253번 IP에서 관리자 Kim의 업무PC에 원격으로 접속시도가 이뤄진 흔적을 발견하게 되었다. 이 사항을 발견하기 위해서 (A)에 들어가야 할 명령어는?(단, Windows 계열의 명령프롬프트(cmd)에서 실행하였다.)',
      images: ['assets/2024-11-03-1.gif'],
      choices: [
        {
          id: 1,
          text: 'ping',
        },
        {
          id: 2,
          text: 'tracert',
        },
        {
          id: 3,
          text: 'netstat –an',
        },
        {
          id: 4,
          text: 'nslookup',
        },
      ],
      correctId: 3,
    },
    {
      number: 13,
      subject: '1과목 : TCP/IP',
      stem: 'TCP/IP protocol stack에서 사용되는 SNMP 프로토콜의 기능으로 가장 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '대규모 환경의 망 관리 기능',
        },
        {
          id: 2,
          text: '네트워크 장비의 에러 보고 기능',
        },
        {
          id: 3,
          text: '네트워크 장비의 관리 및 감시 기능',
        },
        {
          id: 4,
          text: '호스트 간의 연결성 점검과 네트워크 혼잡 제어 기능',
        },
      ],
      correctId: 3,
    },
    {
      number: 14,
      subject: '1과목 : TCP/IP',
      stem: 'HTTP와 HTTPS의 차이점에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'HTTP를 사용하면 데이터가 안전하게 전송되며, 사용자의 개인 정보를 보호할 수 있다.',
        },
        {
          id: 2,
          text: 'HTTP는 보안을 위해 ′디지털 인증서′를 사용한다.',
        },
        {
          id: 3,
          text: 'HTTP는 기본적으로 포트 번호 ′80′을 사용하며, HTTPS는 포트 번호 ′443′을 사용한다.',
        },
        {
          id: 4,
          text: 'HTTP는 웹 사이트의 신원을 검증하기 위해 ′SSL/TLS′를 사용한다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 15,
      subject: '1과목 : TCP/IP',
      stem: '다음 중 아래 지문에 따라 서브네팅할 경우 서브넷 마스크(subnet mask)로 옳은 것은?',
      images: ['assets/2024-11-03-2.gif'],
      choices: [
        {
          id: 1,
          text: '255.255.255.128',
        },
        {
          id: 2,
          text: '255.255.255.192',
        },
        {
          id: 3,
          text: '255.255.255.224',
        },
        {
          id: 4,
          text: '255.255.255.240',
        },
      ],
      correctId: 2,
    },
    {
      number: 16,
      subject: '1과목 : TCP/IP',
      stem: '다음 (A) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2024-11-03-3.gif'],
      choices: [
        {
          id: 1,
          text: 'FTP(file Transfer Protocol)',
        },
        {
          id: 2,
          text: 'SFTP(SSH File Transfer Protocol)',
        },
        {
          id: 3,
          text: 'FRPS(FTP Secure)',
        },
        {
          id: 4,
          text: 'CMD',
        },
      ],
      correctId: 1,
    },
    {
      number: 17,
      subject: '1과목 : TCP/IP',
      stem: '다음 (A) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2024-11-03-4.gif'],
      choices: [
        {
          id: 1,
          text: '/etc/deny',
        },
        {
          id: 2,
          text: '/etc/hosts',
        },
        {
          id: 3,
          text: '/etc/allow',
        },
        {
          id: 4,
          text: '/etc/services',
        },
      ],
      correctId: 2,
    },
    {
      number: 18,
      subject: '2과목 : 네트워크 일반',
      stem: '패킷 교환망의 특징으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '연결설정에 따라 가상회선과 데이터그램으로 분류된다.',
        },
        {
          id: 2,
          text: '메시지를 보다 짧은 길이의 패킷으로 나누어 전송한다.',
        },
        {
          id: 3,
          text: '망에 유입되는 데이터의 양이 많아질수록 전송속도가 빠르다.',
        },
        {
          id: 4,
          text: '블록킹 현상이 없다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 19,
      subject: '2과목 : 네트워크 일반',
      stem: 'Multiplexing 방법 중에서 다중화 시 전송할 데이터가 없더라도 타임 슬롯이 할당되어 대역폭의 낭비를 가져오는 다중화 방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'TDM(Time Division Multiplexer)',
        },
        {
          id: 2,
          text: 'STDM(Statistical Time Division Multiplexer)',
        },
        {
          id: 3,
          text: 'FDM(Frequency Division Multiplex)',
        },
        {
          id: 4,
          text: 'FDMA(Frequency Division Multiple Access)',
        },
      ],
      correctId: 1,
    },
    {
      number: 20,
      subject: '2과목 : 네트워크 일반',
      stem: '(A)안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2024-11-03-5.gif'],
      choices: [
        {
          id: 1,
          text: 'WPAN',
        },
        {
          id: 2,
          text: 'LTE-M',
        },
        {
          id: 3,
          text: 'NB-IoT',
        },
        {
          id: 4,
          text: 'LAN',
        },
      ],
      correctId: 1,
    },
    {
      number: 21,
      subject: '2과목 : 네트워크 일반',
      stem: '다음의 (A)에 들어갈 알맞은 용어는?',
      images: ['assets/2024-11-03-6.gif'],
      choices: [
        {
          id: 1,
          text: 'NFV (Network Functions Virtualization)',
        },
        {
          id: 2,
          text: 'WMN (Wireless Mesh Network)',
        },
        {
          id: 3,
          text: 'VPN (Virtual Private Network)',
        },
        {
          id: 4,
          text: 'CDN (Content Delivery Network)',
        },
      ],
      correctId: 1,
    },
    {
      number: 22,
      subject: '2과목 : 네트워크 일반',
      stem: 'OSI 7 Layer 중 세션계층의 역할로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '대화 제어',
        },
        {
          id: 2,
          text: '에러 제어',
        },
        {
          id: 3,
          text: '연결 설정 종료',
        },
        {
          id: 4,
          text: '동기화',
        },
      ],
      correctId: 2,
    },
    {
      number: 23,
      subject: '2과목 : 네트워크 일반',
      stem: 'FDDI(Fiber Distributed Data Interface)의 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '광섬유를 사용하고 토큰 패싱 기술을 활용하는 한 개의 링 토폴로지를 가지는 기술이다.',
        },
        {
          id: 2,
          text: '물리계층의 PMD(Physical Medium Dependent)계층에서는 광섬유 종류별 각종 전송장비의 내역을 명시한다.',
        },
        {
          id: 3,
          text: '물리계층의 PHY(Physical Sublayer)계층은 부호화 및 고장난 노드의 처리방식을 제시한다.',
        },
        {
          id: 4,
          text: 'SMT(Station Management) 프로토콜은 네트워크 고장을 탐지하며, 고장이 발견되면 즉시 링 토폴로지를 재구성한다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 24,
      subject: '2과목 : 네트워크 일반',
      stem: '(A) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2024-11-03-7.gif'],
      choices: [
        {
          id: 1,
          text: '터널링',
        },
        {
          id: 2,
          text: '접근 통제 기술',
        },
        {
          id: 3,
          text: '방화벽 설정',
        },
        {
          id: 4,
          text: 'FTP',
        },
      ],
      correctId: 1,
    },
    {
      number: 25,
      subject: '2과목 : 네트워크 일반',
      stem: '모바일 멀티미디어 데이터의 폭증과 데이터 트래픽의 동적 특성 변화에 효율적으로 대처하기 위해, 구조적 유연성과 개방성을 제공하며 하드웨어가 아닌 소프트웨어로 제어되는 네트워킹 기술은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SDS (Software Defined Storage)',
        },
        {
          id: 2,
          text: 'SDN (Software Defined Networking)',
        },
        {
          id: 3,
          text: 'SNMP (Simple Network Management Protocol)',
        },
        {
          id: 4,
          text: 'CLI (Command Line Interface)',
        },
      ],
      correctId: 2,
    },
    {
      number: 26,
      subject: '2과목 : 네트워크 일반',
      stem: '클라우드 컴퓨팅의 특징으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '사용자는 필요한 만큼의 서버, 네트워크, 저장장치 등과 같은 컴퓨팅 능력을 활용할 수 있다.',
        },
        {
          id: 2,
          text: '사용자 요구에 따라 물리 자원과 가상 자원들이 동적으로 할당/재할당 된다',
        },
        {
          id: 3,
          text: '서비스 형태에 따라 적절한 미터링을 활용하여 자동으로 자원의 사용을 제어하고 최적화한다.',
        },
        {
          id: 4,
          text: '제공자의 컴퓨팅 자원들은 다수의 사용자들을 지원하기 위하여 단일임차인(single-tenant) 모델의 자원 풀(Pool) 형태로 운영된다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 27,
      subject: '2과목 : 네트워크 일반',
      stem: '메시 네트워크(Mesh Network)의 특징으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '노드의 이동이 자유롭기 때문에 네트워크 토폴로지가 동적으로 변한다.',
        },
        {
          id: 2,
          text: '일대일 다중 홉 라우팅(Multihop Routing) 방식으로 전달한다.',
        },
        {
          id: 3,
          text: '어떠한 중앙 제어나 표준 지원 서비스의 도움 없이 임시로 망을 구성할 수 없다.',
        },
        {
          id: 4,
          text: '하나의 연결이 끊어져도 네트워크는 자동으로 다른 연결로 메시지를 전송할 수 있다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 28,
      subject: '3과목 : NOS',
      stem: 'DHCP의 장점으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '클라이언트에게 자동으로 IP Address를 할당해 줄 수 있다.',
        },
        {
          id: 2,
          text: 'IP Address의 관리가 용이하다.',
        },
        {
          id: 3,
          text: '영구적인 IP Address를 필요로 하는 웹 서버에 대해서는 동적인 주소를 제공한다.',
        },
        {
          id: 4,
          text: '사용자들이 자주 바뀌는 학교와 같은 환경에서 특히 유용하다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 29,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016에 설치된 DNS에서 지원하는 레코드 형식 중 실제 도메인 이름과 연결되는 가상 도메인 이름의 레코드 형식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'CNAME',
        },
        {
          id: 2,
          text: 'MX',
        },
        {
          id: 3,
          text: 'A',
        },
        {
          id: 4,
          text: 'PTR',
        },
      ],
      correctId: 1,
    },
    {
      number: 30,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016에서 파일 및 프린터 서버를 사용할 수 있도록 지원하기 위해서 반드시 설치해야 하는 통신 프로토콜은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'TCP/IP',
        },
        {
          id: 2,
          text: 'SNMP',
        },
        {
          id: 3,
          text: 'SMTP',
        },
        {
          id: 4,
          text: 'IGMP',
        },
      ],
      correctId: 1,
    },
    {
      number: 31,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016에서 사용하는 PowerShell에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '기존 DOS 명령은 사용할 수 없다.',
        },
        {
          id: 2,
          text: '스크립트는 콘솔에서 대화형으로 사용될 수 있다.',
        },
        {
          id: 3,
          text: '스크립트는 텍스트로 구성된다.',
        },
        {
          id: 4,
          text: '대소문자를 구분하지 않는다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 32,
      subject: '3과목 : NOS',
      stem: 'Linux 디렉터리 구성에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '/tmp - 임시파일이 저장되는 디렉터리',
        },
        {
          id: 2,
          text: '/boot - 시스템이 부팅될 때 부팅 가능한 커널 이미지 파일을 담고 있는 디렉터리',
        },
        {
          id: 3,
          text: '/var - 시스템의 로그 파일과 메일이 저장되는 위치',
        },
        {
          id: 4,
          text: '/usr - 사용자 계정이 위치하는 파티션 위치',
        },
      ],
      correctId: 4,
    },
    {
      number: 33,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템 부팅과 함께 자동으로 마운트되어야 할 항목과 옵션이 정의되어 있는 파일은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '/etc/fstab',
        },
        {
          id: 2,
          text: '/usr/local',
        },
        {
          id: 3,
          text: '/mount/cdrom',
        },
        {
          id: 4,
          text: '/home/public_html',
        },
      ],
      correctId: 1,
    },
    {
      number: 34,
      subject: '3과목 : NOS',
      stem: 'Linux에서 프로세스와 관련된 명령어에 대한 설명 중 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'kill - 프로세스를 종료시키는 명령어',
        },
        {
          id: 2,
          text: 'nice - 프로세스의 우선순위를 변경하는 명령어',
        },
        {
          id: 3,
          text: 'pstree - 프로세스를 트리형태로 보여주는 명령어',
        },
        {
          id: 4,
          text: 'top - 가장 우선순위가 높은 프로세스를 보여주는 명령어',
        },
      ],
      correctId: 4,
    },
    {
      number: 35,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 Windows Server 2016에서 사용자 및 그룹을 관리하는 업무를 부여받았다. Windows Server 2016에는 기본적으로 3개의 로컬 사용자 계정이 생성되어 있는데, 다음 중 기본적으로 생성되는 계정이 아닌 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Administrator',
        },
        {
          id: 2,
          text: 'DefaultAccount',
        },
        {
          id: 3,
          text: 'Guest',
        },
        {
          id: 4,
          text: 'root',
        },
      ],
      correctId: 4,
    },
    {
      number: 36,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 Windows Server 2016에서 성능 모니터를 실행하여 서버의 성능을 분석하고자 한다. 성능 모니터에 있는 리소스 모니터는 시스템 리소스가 어떻게 사용되고 있는지를 보여주는 또 하나의 강력한 도구이다. 이 유틸리티를 사용하면 소프트웨어 업데이트 및 설치에 대한 정보를 볼 수 있으며, 또한 발생한 주요 이벤트와 해당 이벤트가 발생한 날짜를 볼 수 있다. 리소스 모니터에서 점검할 수 있는 항목이 아닌 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'CPU',
        },
        {
          id: 2,
          text: 'Memory',
        },
        {
          id: 3,
          text: 'Network',
        },
        {
          id: 4,
          text: 'Firewall',
        },
      ],
      correctId: 4,
    },
    {
      number: 37,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 기존에 설정된 ′crontab′을 삭제하려고 할 때 올바른 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'crontab –u',
        },
        {
          id: 2,
          text: 'crontab –e',
        },
        {
          id: 3,
          text: 'crontab –l',
        },
        {
          id: 4,
          text: 'crontab -r',
        },
      ],
      correctId: 4,
    },
    {
      number: 38,
      subject: '3과목 : NOS',
      stem: 'Linux Apache로 웹서버 운영 시 service port number를 well-known port가 아닌 다른 port number로 변경하여 사용하려 할때, ′httpd.conf′ 설정파일에서 변경해야 할 옵션값은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'KeepAlive',
        },
        {
          id: 2,
          text: 'DocumentRoot',
        },
        {
          id: 3,
          text: 'StartServers',
        },
        {
          id: 4,
          text: 'Listen',
        },
      ],
      correctId: 4,
    },
    {
      number: 39,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템 운영 중 비인가자의 로그인 시도 이력을 확인하기 위한 명령어로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'lastb',
        },
        {
          id: 2,
          text: 'xferlog',
        },
        {
          id: 3,
          text: 'history',
        },
        {
          id: 4,
          text: 'pkill',
        },
      ],
      correctId: 1,
    },
    {
      number: 40,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 IIS(인터넷 정보 서비스)를 설치한 후, IIS 관리자를 실행하기 위해 사용할 명령어로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'wf.msc',
        },
        {
          id: 2,
          text: 'msconfig',
        },
        {
          id: 3,
          text: 'inetmgr.exe',
        },
        {
          id: 4,
          text: 'dsac.exe',
        },
      ],
      correctId: 3,
    },
    {
      number: 41,
      subject: '3과목 : NOS',
      stem: 'Linux에서 ′sample′파일의 소유자 및 소유그룹이 아닌 사람에 대해 파일을 볼 수는 있지만 수정 및 실행을 못하도록 하는 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'chmod 776 sample',
        },
        {
          id: 2,
          text: 'chmod 774 sample',
        },
        {
          id: 3,
          text: 'chmod 746 sample',
        },
        {
          id: 4,
          text: 'chmod 766 sample',
        },
      ],
      correctId: 2,
    },
    {
      number: 42,
      subject: '3과목 : NOS',
      stem: 'Linux BIND 서버 구축 시 ′/etc/named.conf′ 설정파일에서 도메인의 zone 파일 위치를 지정하는 설정값은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'directory ′/var/named′',
        },
        {
          id: 2,
          text: 'linsten-on port 53 { any; }',
        },
        {
          id: 3,
          text: 'dump-file ′/var/named/data/dump.db′',
        },
        {
          id: 4,
          text: 'allow-query { 192.168.0.0/24; }',
        },
      ],
      correctId: 1,
    },
    {
      number: 43,
      subject: '3과목 : NOS',
      stem: 'Linux에서 DNS의 SOA(Start Of Authority) 레코드에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Zone 파일은 항상 SOA로 시작한다.',
        },
        {
          id: 2,
          text: '해당 Zone에 대한 네임서버를 유지하기 위한 기본적인 자료가 저장된다.',
        },
        {
          id: 3,
          text: 'Refresh는 주 서버와 보조 서버의 동기 주기를 설정한다.',
        },
        {
          id: 4,
          text: 'TTL 값이 길면 DNS의 부하가 늘어난다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 44,
      subject: '3과목 : NOS',
      stem: '해당 사이트와의 통신 상태를 점검할 때 사용하는 Linux 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'who',
        },
        {
          id: 2,
          text: 'w',
        },
        {
          id: 3,
          text: 'finger',
        },
        {
          id: 4,
          text: 'ping',
        },
      ],
      correctId: 4,
    },
    {
      number: 45,
      subject: '3과목 : NOS',
      stem: 'Linux에서 파티션 Type이 ′SWAP′ 일 경우의 의미는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Linux가 실제로 자료를 저장하는데 사용되는 파티션이다.',
        },
        {
          id: 2,
          text: 'Linux가 네트워킹 상태에서 쿠키를 저장하기 위한 파티션이다.',
        },
        {
          id: 3,
          text: '메모리가 부족할 경우 하드 디스크의 일부분을 마치 메모리인 것처럼 사용하는 파티션이다.',
        },
        {
          id: 4,
          text: 'Utility 프로그램을 저장하는데 사용되는 파티션이다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 46,
      subject: '4과목 : 네트워크 운용기기',
      stem: '다음 설명의 (A)에 들어갈 알맞은 용어는?',
      images: ['assets/2024-11-03-8.gif'],
      choices: [
        {
          id: 1,
          text: 'IP Masquerading',
        },
        {
          id: 2,
          text: 'Port Forwarding',
        },
        {
          id: 3,
          text: 'Dynamic Address Allocation',
        },
        {
          id: 4,
          text: 'Load Balancing',
        },
      ],
      correctId: 4,
    },
    {
      number: 47,
      subject: '4과목 : 네트워크 운용기기',
      stem: '아래 지문은 라우팅의 Distance Vector방식을 설명한 것이다. 이에 해당하지 않는 프로토콜은?',
      images: ['assets/2024-11-03-9.gif'],
      choices: [
        {
          id: 1,
          text: 'IGRP',
        },
        {
          id: 2,
          text: 'RIP',
        },
        {
          id: 3,
          text: 'BGP',
        },
        {
          id: 4,
          text: 'OSPF',
        },
      ],
      correctId: 4,
    },
    {
      number: 48,
      subject: '4과목 : 네트워크 운용기기',
      stem: '기업에서 근무하는 네트워크 담당자 Kim 대리는 하나의 물리적인 네트워크 스위치를 영업부, 인사부, 구매부, 기술부 등 각 부서별로 여러 네트워크로 구분하여 사용할 수 있도록 하고자 하며, 부서별로 분리된 네트워크는 3계층 장비를 통해서만 통신이 되도록 하고자 한다. 이 기술 방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'VPN(Virtual Private Network)',
        },
        {
          id: 2,
          text: 'VLAN(Virtual Local Area Network)',
        },
        {
          id: 3,
          text: 'VCN(Virtual Cloud Network)',
        },
        {
          id: 4,
          text: 'IPS(Intrusion Prevention System)',
        },
      ],
      correctId: 2,
    },
    {
      number: 49,
      subject: '4과목 : 네트워크 운용기기',
      stem: 'L2 스위치 네트워크상의 루프구조는 복합적인 다중 루프가 발생할 수도 있다. 이러한 경우 전체 네트워크는 구조에 따른 과도한 브로드캐스트 트래픽으로 인해 사용할 수 없는 지경에 이른다. 이와 같은 다중 루프를 방지하기 위해 만들어진 기술은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'VLAN(Virtual Local Area Network)',
        },
        {
          id: 2,
          text: 'Port Mirroring',
        },
        {
          id: 3,
          text: 'Store And Forward',
        },
        {
          id: 4,
          text: 'STP(Spanning Tree Protocol)',
        },
      ],
      correctId: 4,
    },
    {
      number: 50,
      subject: '4과목 : 네트워크 운용기기',
      stem: '아래 전송 선로 중 대역폭이 가장 넓은 전송매체는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Twist Pair 케이블',
        },
        {
          id: 2,
          text: 'Base Band 동축케이블',
        },
        {
          id: 3,
          text: 'CATV 동축케이블',
        },
        {
          id: 4,
          text: 'Fiber Optic 케이블',
        },
      ],
      correctId: 4,
    },
  ],
  '2024-08-25': [
    {
      number: 1,
      subject: '1과목 : TCP/IP',
      stem: '′B Class′를 6개의 네트워크로 구분하여 사용하고 싶을 때, 가장 적절한 서브넷 마스크 값은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '255.255.224.0',
        },
        {
          id: 2,
          text: '255.255.240.0',
        },
        {
          id: 3,
          text: '255.255.248.0',
        },
        {
          id: 4,
          text: '255.255.255.0',
        },
      ],
      correctId: 1,
    },
    {
      number: 2,
      subject: '1과목 : TCP/IP',
      stem: 'UDP 패킷의 헤더에 속하지 않는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Source Port',
        },
        {
          id: 2,
          text: 'Destination Port',
        },
        {
          id: 3,
          text: 'Window',
        },
        {
          id: 4,
          text: 'Checksum',
        },
      ],
      correctId: 3,
    },
    {
      number: 3,
      subject: '1과목 : TCP/IP',
      stem: 'IPv6의 주소 표기법으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '192.168.1.30',
        },
        {
          id: 2,
          text: '3ffe:1900:4545:0003:0200:f8ff:ffff:1105',
        },
        {
          id: 3,
          text: '00:A0:C3:4B:21:33',
        },
        {
          id: 4,
          text: '0000:002A:0080:c703:3c75',
        },
      ],
      correctId: 2,
    },
    {
      number: 4,
      subject: '1과목 : TCP/IP',
      stem: 'Ethernet 같은 네트워크가 제공하는 브로드캐스트 기능을 사용하여 목적지 IP Address에 물리적 하드웨어 주소를 매핑시키는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ARP',
        },
        {
          id: 2,
          text: 'RARP',
        },
        {
          id: 3,
          text: 'DNS',
        },
        {
          id: 4,
          text: 'DHCP',
        },
      ],
      correctId: 1,
    },
    {
      number: 5,
      subject: '1과목 : TCP/IP',
      stem: '다음 TCP 패킷의 플래그 중에서 연결이 정상적으로 끝남을 의미하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'FIN',
        },
        {
          id: 2,
          text: 'URG',
        },
        {
          id: 3,
          text: 'ACK',
        },
        {
          id: 4,
          text: 'RST',
        },
      ],
      correctId: 1,
    },
    {
      number: 6,
      subject: '1과목 : TCP/IP',
      stem: '다음 중 사설 IP주소로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '10.100.12.5',
        },
        {
          id: 2,
          text: '128.52.10.6',
        },
        {
          id: 3,
          text: '172.25.30.5',
        },
        {
          id: 4,
          text: '192.168.200.128',
        },
      ],
      correctId: 2,
    },
    {
      number: 7,
      subject: '1과목 : TCP/IP',
      stem: 'ICMP 메시지의 타입번호와 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '타입 0 : Echo Request (에코 요청)',
        },
        {
          id: 2,
          text: '타입 3 : Destination Unreachable (목적지 도달 불가)',
        },
        {
          id: 3,
          text: '타입 5 : Redirect (경로 재지정)',
        },
        {
          id: 4,
          text: '타입 11 : Time Exceeded (시간 초과)',
        },
      ],
      correctId: 1,
    },
    {
      number: 8,
      subject: '1과목 : TCP/IP',
      stem: '서버를 관리하는 Kim 사원은 기존 홈페이지를 http방식에서 https방식으로 변경하라는 회사의 지침에 따라 https의 특징에 대하여 알아보고 있는 중이다. 다음 보기 중에서 https의 특징으로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '기존 http보다 암호화된 SSL/TLS를 전달한다.',
        },
        {
          id: 2,
          text: 'tcp/80번 포트를 사용한다.',
        },
        {
          id: 3,
          text: 'udp/443번 포트를 사용한다.',
        },
        {
          id: 4,
          text: '인증이 필요하지 않아 사용하기가 간편하다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 9,
      subject: '1과목 : TCP/IP',
      stem: 'TCP/IP 프로토콜의 응용계층에서 제공하는 응용서비스 프로토콜로, 컴퓨터 사용자들 사이에 전자우편 교환 서비스를 제공하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SNMP',
        },
        {
          id: 2,
          text: 'SMTP',
        },
        {
          id: 3,
          text: 'VT',
        },
        {
          id: 4,
          text: 'FTP',
        },
      ],
      correctId: 2,
    },
    {
      number: 10,
      subject: '1과목 : TCP/IP',
      stem: 'TCP/IP 계층 중 다른 계층에서 동작하는 계층은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IP',
        },
        {
          id: 2,
          text: 'NNTP',
        },
        {
          id: 3,
          text: 'ICMP',
        },
        {
          id: 4,
          text: 'RARP',
        },
      ],
      correctId: 2,
    },
    {
      number: 11,
      subject: '1과목 : TCP/IP',
      stem: '네트워크를 관리하는 Kim은 사내 네트워크의 성능 향상을 위하여 MTU(Maximum Transmission Unit)를 고려하고 있다. 다음 MTU에 대한 설명 중 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '인터넷 IPv4기준시 최소 1280 바이트의 값을 가진다.',
        },
        {
          id: 2,
          text: '인터넷 IPv6기준시 최소 68 바이트의 값을 가진다.',
        },
        {
          id: 3,
          text: 'Ethernet 구현에서 대부분의 IP는 Ethernet V2 프레임의 형식이며 1500 바이트의 값을 가진다.',
        },
        {
          id: 4,
          text: 'MTU의 크기는 항상 1500 바이트로 고정되어 있다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 12,
      subject: '1과목 : TCP/IP',
      stem: 'FTP 및 TFTP의 특징으로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'TFTP는 단순화된 파일의 전송을 위한 프로토콜이며 기본포트는 25번이다.',
        },
        {
          id: 2,
          text: 'FTP의 접속에는 계정 접속만 가능하다.',
        },
        {
          id: 3,
          text: 'TFTP의 단점은 UDP방식으로 Data 전송 시 데이터 손실가능성이 있다.',
        },
        {
          id: 4,
          text: 'FTP는 대량의 데이터를 고속 전송하기 위해 UDP을 사용한다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 13,
      subject: '1과목 : TCP/IP',
      stem: '라우팅 기술 중 정적 라우팅(Static Routing)에 대한 설명으로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '라우터에 부하가 적게 걸려 메모리 관리에 유리하며, 우선순위가 높다.',
        },
        {
          id: 2,
          text: '데이터의 출발지에서 목적지까지의 경로가 네트워크 환경 변화에 능동적으로 대처하므로 실시간으로 변화한다.',
        },
        {
          id: 3,
          text: '다수의 네트워크가 연결되어 수시로 통신환경이 변화하는 최근의 대부분의 네트워크에 적합하다.',
        },
        {
          id: 4,
          text: '라우터 간의 프로토콜을 바탕으로 라우팅 알고리즘을 통해 자동으로 경로 설정된다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 14,
      subject: '1과목 : TCP/IP',
      stem: '다음 중 SSH(secure shell) 보안 프로토콜의 특징으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '데이터를 암호화하여 전송',
        },
        {
          id: 2,
          text: '데이터 무결성 제공',
        },
        {
          id: 3,
          text: '리눅스, 유닉스에서만 사용 가능',
        },
        {
          id: 4,
          text: '공개키 암호화 기법 사용',
        },
      ],
      correctId: 3,
    },
    {
      number: 15,
      subject: '1과목 : TCP/IP',
      stem: '다음 중 (A)에 들어갈 내용으로 알맞은 것은?',
      images: ['assets/2024-08-25-1.gif'],
      choices: [
        {
          id: 1,
          text: 'IGMP(Internet Group Management Protocol)',
        },
        {
          id: 2,
          text: 'ICMP(Internet Control Message Protocol)',
        },
        {
          id: 3,
          text: 'SMTP(simple Mail Transfer Protocol)',
        },
        {
          id: 4,
          text: 'SNMP(simple Network Management Protocol)',
        },
      ],
      correctId: 1,
    },
    {
      number: 16,
      subject: '1과목 : TCP/IP',
      stem: '회사 내 네트워크 환경 구축 시 IPv6 기술을 적용하고자 한다. IPv4 기술에서 제공하는 기능과 함께 IPv6에서는 많은 기능이 추가되었다. 보기에서 제시하는 TCP/IP 기술의 기능 중 IPv6 기술에서 새롭게 제공하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Checksums',
        },
        {
          id: 2,
          text: 'Complicated header',
        },
        {
          id: 3,
          text: 'Optional Ipsec',
        },
        {
          id: 4,
          text: 'Autoconfiguration',
        },
      ],
      correctId: 4,
    },
    {
      number: 17,
      subject: '1과목 : TCP/IP',
      stem: '′ping 210.223.112.9′ 이라는 명령을 사용했을 때 로컬 IP Address의 분석 수순으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ARP Broadcast -> ARP Cache확인 -> 자체 IP Address와 일치 여부 확인 -> ARP Reply 발송',
        },
        {
          id: 2,
          text: 'ARP Broadcast -> 자체 IP Address와 일치 여부 확인 -> ARP Cache확인 -> ARP Reply 발송',
        },
        {
          id: 3,
          text: 'ARP Cache확인 -> ARP Broadcast -> 자체 IP 와 일치 여부 확인 -> ARP Reply 발송',
        },
        {
          id: 4,
          text: 'ARP Cache확인 -> 자체 IP Address와 일치 여부 확인 -> ARP Broadcast -> ARP Reply 발송',
        },
      ],
      correctId: 3,
    },
    {
      number: 18,
      subject: '2과목 : 네트워크 일반',
      stem: 'Bus 토폴로지(Topology)에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '스타 토폴로지보다 네트워크를 구축하는데 더 많은 케이블이 필요하기 때문에, 배선에 더 많은 비용이 소요된다.',
        },
        {
          id: 2,
          text: '각 스테이션이 중앙 스위치에 연결된다.',
        },
        {
          id: 3,
          text: '터미네이터(Terminator)가 시그널의 반사를 방지하기 위하여 사용된다.',
        },
        {
          id: 4,
          text: '토큰이라는 비트의 패턴이 원형을 이루며 한 컴퓨터에서 다른 컴퓨터로 순차적으로 전달된다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 19,
      subject: '2과목 : 네트워크 일반',
      stem: '다음 내용이 나타내는 매체 방식은?',
      images: ['assets/2024-08-25-2.gif'],
      choices: [
        {
          id: 1,
          text: 'Token Passing',
        },
        {
          id: 2,
          text: 'Demand Priority',
        },
        {
          id: 3,
          text: 'CSMA/CA',
        },
        {
          id: 4,
          text: 'CSMA/CD',
        },
      ],
      correctId: 4,
    },
    {
      number: 20,
      subject: '2과목 : 네트워크 일반',
      stem: '전기신호는 구리선을 통하여 전송되며, 이는 먼 거리를 이동하면서 크기가 약해진다. 이러한 현상을 뜻하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '감쇠(Attenuation)',
        },
        {
          id: 2,
          text: '임피던스(Impedance)',
        },
        {
          id: 3,
          text: '간섭(Interference)',
        },
        {
          id: 4,
          text: '진폭(Amplitude)',
        },
      ],
      correctId: 1,
    },
    {
      number: 21,
      subject: '2과목 : 네트워크 일반',
      stem: '전송효율을 최대로 하기 위해 프레임의 길이를 동적으로 변경시킬 수 있는 ARQ(Automatic Repeat Request)방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Adaptive ARQ',
        },
        {
          id: 2,
          text: 'Go back-N ARQ',
        },
        {
          id: 3,
          text: 'Selective-Repeat ARQ',
        },
        {
          id: 4,
          text: 'Stop and Wait ARQ',
        },
      ],
      correctId: 1,
    },
    {
      number: 22,
      subject: '2과목 : 네트워크 일반',
      stem: '다음은 Home Network에 사용되는 기술 중 WPAN(Wireless Personal Area Network)에 대한 설명이다. (A),(B),(C) 안에 들어갈 표준을 순서대로 나열한 것은?',
      images: ['assets/2024-08-25-3.gif'],
      choices: [
        {
          id: 1,
          text: '802.11.1 – 802.11.3 – 802.11.4',
        },
        {
          id: 2,
          text: '802.11a – 802.11b – 802.11c',
        },
        {
          id: 3,
          text: '802.15.1 – 802.15.3 – 802.15.4',
        },
        {
          id: 4,
          text: '802.16.1 – 802.16.3 – 802.16.4',
        },
      ],
      correctId: 3,
    },
    {
      number: 23,
      subject: '2과목 : 네트워크 일반',
      stem: '다음 지문에서 설명하는 모바일 셀룰러시스템의 동작을 무엇이라고 하는가?',
      images: ['assets/2024-08-25-4.gif'],
      choices: [
        {
          id: 1,
          text: '채널체인징',
        },
        {
          id: 2,
          text: '페이징',
        },
        {
          id: 3,
          text: '핸드오프',
        },
        {
          id: 4,
          text: '핸드쉐이크',
        },
      ],
      correctId: 3,
    },
    {
      number: 24,
      subject: '2과목 : 네트워크 일반',
      stem: '프로토콜 계층 구조상의 기본 구성요소 중 실체(Entity) 간의 통신 속도 및 메시지 순서를 위한 제어정보는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '타이밍(Timing)',
        },
        {
          id: 2,
          text: '의미(Semantics)',
        },
        {
          id: 3,
          text: '구문(Syntax)',
        },
        {
          id: 4,
          text: '처리(Process)',
        },
      ],
      correctId: 1,
    },
    {
      number: 25,
      subject: '2과목 : 네트워크 일반',
      stem: '네트워크 담당자 Kim 사원은 고속 전송률과 대용량 전송 데이터가 가능한 멀티미디어 서비스에 적합한 기술 적용을 검토하라는 지시를 받았다. 이동통신 환경에서 다수의 안테나를 사용하여 데이터를 전송하는 다중 안테나 신호 처리 기술로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'MIMO(Multiple-Input and Multiple-Output)',
        },
        {
          id: 2,
          text: 'M2M(Machine to Machine)',
        },
        {
          id: 3,
          text: 'MQTT(Massage Queue Telemetry Transport)',
        },
        {
          id: 4,
          text: 'OFDM(Orthogonal Frequency Division Multiplexing)',
        },
      ],
      correctId: 1,
    },
    {
      number: 26,
      subject: '2과목 : 네트워크 일반',
      stem: 'OSI 7 Layer 중에서 아래에서 설명하는 계층은?',
      images: ['assets/2024-08-25-5.gif'],
      choices: [
        {
          id: 1,
          text: '물리적 계층(Physical Layer)',
        },
        {
          id: 2,
          text: '데이터 링크 계층(Data Link Layer)',
        },
        {
          id: 3,
          text: '네트워크 계층(Network Layer)',
        },
        {
          id: 4,
          text: '트랜스포트 계층(Transport Layer)',
        },
      ],
      correctId: 2,
    },
    {
      number: 27,
      subject: '2과목 : 네트워크 일반',
      stem: '데이터 전송 전에 목적지까지의 경로를 설정한 후 전송 데이터를 정해진 단위별로 전송하되, 규정된 시간 내에 전송 데이터가 없으면 현재 설정된 경로를 해제하는 교환방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '회선교환 방식',
        },
        {
          id: 2,
          text: '데이터그램 방식',
        },
        {
          id: 3,
          text: '가상회선교환 방식',
        },
        {
          id: 4,
          text: '메시지교환 방식',
        },
      ],
      correctId: 3,
    },
    {
      number: 28,
      subject: '3과목 : NOS',
      stem: '시스템 담당자 Alex는 하드디스크의 정보 유출을 우려하여, 하드디스크가 도난당해도 암호화키 없이는 데이터를 읽지 못하도록 하드디스크 자체를 암호화하는 기술을 적용하려고 한다. 해당 기술은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'BitLocker',
        },
        {
          id: 2,
          text: 'EFS(Encrypting File System)',
        },
        {
          id: 3,
          text: 'AD(Active Directory)',
        },
        {
          id: 4,
          text: 'FileVault',
        },
      ],
      correctId: 1,
    },
    {
      number: 29,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템 관리자는 John사원의 계정인 ′John′의 패스워드 정책을 변경하기 위해 아래 지문과 같이 입력하였다. 10일 전 암호변경 경고를 위한 명령으로 ( )안에 알맞은 옵션은?',
      images: ['assets/2024-08-25-6.gif'],
      choices: [
        {
          id: 1,
          text: '-m 10',
        },
        {
          id: 2,
          text: '- L 10',
        },
        {
          id: 3,
          text: '- i 10',
        },
        {
          id: 4,
          text: '- W 10',
        },
      ],
      correctId: 4,
    },
    {
      number: 30,
      subject: '3과목 : NOS',
      stem: '다음 (A)에 해당하는 것은?',
      images: ['assets/2024-08-25-7.gif'],
      choices: [
        {
          id: 1,
          text: '사이트(Site)',
        },
        {
          id: 2,
          text: '트러스트(Trust)',
        },
        {
          id: 3,
          text: '조직 구성 단위(OU)',
        },
        {
          id: 4,
          text: '도메인 컨트롤러(DC)',
        },
      ],
      correctId: 2,
    },
    {
      number: 31,
      subject: '3과목 : NOS',
      stem: 'Linux 운영체제에서 하드웨어 메모리가 가득차게 되면 논리적인 메모리 저장공간 역할을 수행하게 되는 파티션의 이름은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SWAP',
        },
        {
          id: 2,
          text: 'FAT32',
        },
        {
          id: 3,
          text: 'RAID',
        },
        {
          id: 4,
          text: 'LVM',
        },
      ],
      correctId: 1,
    },
    {
      number: 32,
      subject: '3과목 : NOS',
      stem: 'Linux 서버 운영 중 불필요한 service port가 열려있는지 확인하는 명령어로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ps -ef | grep tcp',
        },
        {
          id: 2,
          text: 'netstat –antp',
        },
        {
          id: 3,
          text: 'netstat –rn',
        },
        {
          id: 4,
          text: 'cat /etc/services',
        },
      ],
      correctId: 2,
    },
    {
      number: 33,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 환경설정과 사용자 정보 등을 가진 디렉터리로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '/bin',
        },
        {
          id: 2,
          text: '/root',
        },
        {
          id: 3,
          text: '/etc',
        },
        {
          id: 4,
          text: '/proc',
        },
      ],
      correctId: 3,
    },
    {
      number: 34,
      subject: '3과목 : NOS',
      stem: '네트워크관리자 Kim사원은 Active Directory의 ′icqa.or.kr′ 도메인의 그룹정책을 설정하여 회사 내 PC사용자들의 컴퓨터를 관리하고자 한다. 이 때 Kim사원이 작업할 수 있는 그룹정책 설정으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '보안 강화를 위해 사용자의 암호 및 계정 잠금 등을 강제로 적용할 수 있다.',
        },
        {
          id: 2,
          text: '사용자 계정의 암호 길이, 복잡성 조건 등을 지정할 수 있다.',
        },
        {
          id: 3,
          text: '사용자가 ′icqa.or.kr′ 도메인 내 어느 PC에서 로그온 하더라도 기존 자신의 PC와 동일한 환경을 제공해 줄 수 있다.',
        },
        {
          id: 4,
          text: '사용자가 사용할 소프트웨어를 배포할 수 없다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 35,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템 담당자 Park 사원은 Linux 시스템 운영관리를 위해 시스템이 부팅할 때 생성된 시스템 로그를 살펴보고자 한다. 하드웨어적인 이상 유무나 디스크, 메모리, CPU, 커널 등의 이상 유무를 확인할 수 있는 로그파일은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '/var/log/cron',
        },
        {
          id: 2,
          text: '/var/log/lastlog',
        },
        {
          id: 3,
          text: '/var/log/dmesg',
        },
        {
          id: 4,
          text: '/var/log/btmp',
        },
      ],
      correctId: 3,
    },
    {
      number: 36,
      subject: '3과목 : NOS',
      stem: '웹서버 담당자 Kim은 디렉터리 리스팅 방지, 심볼릭 링크 사용방지, SSI(Server-Side Includes)사용 제한, CGI실행 디렉터리 제한 등의 보안 설정을 진행하려고 한다. Apache 서버의 설정 파일 이름은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'httpd.conf',
        },
        {
          id: 2,
          text: 'httpd-default.conf',
        },
        {
          id: 3,
          text: 'httpd-vhosts.conf',
        },
        {
          id: 4,
          text: 'httpd-mpm.conf',
        },
      ],
      correctId: 1,
    },
    {
      number: 37,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 Windows Server 2016의 장애를 대비하여 인증서 키를 백업해 놓았다. 이 인증서 키를 실행창에서 명령어를 통해 복원시키고자 하는데 인증서 관리자를 호출할 수 있는 명령어는 무엇인가?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'eventvwr.msc',
        },
        {
          id: 2,
          text: 'compmgmt.msc',
        },
        {
          id: 3,
          text: 'secpol.msc',
        },
        {
          id: 4,
          text: 'certmgr.msc',
        },
      ],
      correctId: 4,
    },
    {
      number: 38,
      subject: '3과목 : NOS',
      stem: '네트워크 담당자 Kim 사원은 Windows Server 2016에서 원격 액세스 서비스를 운용하고자 한다. Windows Server 2016 내에 있는 이 기능은 DirectAccess나 VPN과 달리 원격 컴퓨터를 네트워크에 연결하는 데 사용되지 않는다. 이 기능은 오히려 내부 웹 리소스를 인터넷에 게시하는 데 사용된다. 이 기능은 무엇인가?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'WAP(Web Application Proxy)',
        },
        {
          id: 2,
          text: 'PPTP(Point-to-Point Tunneling Protocol)',
        },
        {
          id: 3,
          text: 'L2TP(Layer 2 Tunneling Protocol)',
        },
        {
          id: 4,
          text: 'SSTP(Secure Socket Tunneling Protocol)',
        },
      ],
      correctId: 1,
    },
    {
      number: 39,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016가 설치된 컴퓨터는 항상 가동하는 것이 일반적인 용도이기 때문에 서버 담당자 Park 사원은 시스템을 종료할 때마다 그 이유를 명확히 하여 시스템을 좀 더 안정적으로 운영하고자 한다. 다음 중 이전에 종료 또는 재부팅된 기록을 확인할 수 있는 항목은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '성능모니터',
        },
        {
          id: 2,
          text: '이벤트뷰어',
        },
        {
          id: 3,
          text: '로컬보안정책',
        },
        {
          id: 4,
          text: '그룹정책편집기',
        },
      ],
      correctId: 2,
    },
    {
      number: 40,
      subject: '3과목 : NOS',
      stem: '다음은 Linux 시스템의 계정정보가 담긴 ′/etc/passwd′ 의 내용이다. 다음의 설명 중 옳지 않은 것은?',
      images: ['assets/2024-08-25-8.gif'],
      choices: [
        {
          id: 1,
          text: '사용자 계정의 ID는 ′user1′ 이다.',
        },
        {
          id: 2,
          text: '패스워드는 ′x′ 이다.',
        },
        {
          id: 3,
          text: '사용자의 UID와 GID는 500번이다.',
        },
        {
          id: 4,
          text: '사용자의 기본 Shell은 ′/bin/bash′ 이다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 41,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Kim 사원은 아래의 Linux 시스템 작업지시서를 확인하고 작업하고자 한다. Kim 사원이 입력할 명령어로 올바른 것은?',
      images: ['assets/2024-08-25-9.gif'],
      choices: [
        {
          id: 1,
          text: 'chmod -R 755 /var/www/upload',
        },
        {
          id: 2,
          text: 'chmod 775 /var/www/upload',
        },
        {
          id: 3,
          text: 'chmod -R 777 /var/www/upload',
        },
        {
          id: 4,
          text: 'chmod 555 /var/www/upload',
        },
      ],
      correctId: 1,
    },
    {
      number: 42,
      subject: '3과목 : NOS',
      stem: '아래 지문은 Linux 시스템에서 구동 중인 프로세스를 검색한 결과이다. 옳지 않은 것은?',
      images: ['assets/2024-08-25-10.gif'],
      choices: [
        {
          id: 1,
          text: '입력한 명령어는 ′ps -ef | grep /bin/sh′ 이다.',
        },
        {
          id: 2,
          text: '네번째 프로세스의 PPID는 1869이다.',
        },
        {
          id: 3,
          text: 'python 프로세스가 실행되고 있다.',
        },
        {
          id: 4,
          text: '목록에서 다섯번째 프로세스를 종료하는 명령어는 ′kill 1902′이다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 43,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016의 Hyper-V에 대한 특징으로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '가상 컴퓨터를 다른 서버로 복제할 수 없음',
        },
        {
          id: 2,
          text: '가상 하드디스크를 실행하는 상황에서도 다른 저장소로 이동할 수 있음',
        },
        {
          id: 3,
          text: '하나의 물리서버에는 하나의 가상 컴퓨터만 사용할 수 있음',
        },
        {
          id: 4,
          text: '가상 컴퓨터를 사용할수록 물리서버의 하드웨어 자원사용률은 낮아짐',
        },
      ],
      correctId: 2,
    },
    {
      number: 44,
      subject: '3과목 : NOS',
      stem: 'Linux를 설치 가이드에 따라 별도의 설정 없이 기본설치를 실시한 후, 디스크 및 파티션 정보를 확인해보니 ′/′ 디렉터리가 ′/dev/sda5′ 에 설치되었다. ′/dev/sda5′ 의 해석으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SATA 인터페이스로 연결된 디스크를 사용한다.',
        },
        {
          id: 2,
          text: '디스크의 다섯 번째 파티션에 설치되었다.',
        },
        {
          id: 3,
          text: 'Hardware 장치를 파일 형식으로 나타낸다.',
        },
        {
          id: 4,
          text: '다섯 번째 연결된 물리 디스크에 설치되었다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 45,
      subject: '3과목 : NOS',
      stem: 'Linux에서 명령어 ′mv -i file1 file2′의 의미는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '파일이 지워지기 전에 백업파일을 만든다.',
        },
        {
          id: 2,
          text: '′file2′가 존재 하더라도 강제로 삭제한다.',
        },
        {
          id: 3,
          text: '′file2′가 존재할 경우 덮어 쓸 것인가를 물어본다.',
        },
        {
          id: 4,
          text: '파일 옮기기 전의 과정을 보여준다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 46,
      subject: '4과목 : 네트워크 운용기기',
      stem: '전송 매체의 특성 중 Fiber Optics에 해당하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '여러 라인의 묶음으로 사용하면 간섭 현상을 줄일 수 있다.',
        },
        {
          id: 2,
          text: '신호 손실이 적고, 전자기적 간섭이 없다.',
        },
        {
          id: 3,
          text: '송수신에 사용되는 구리 핀은 8개 중 4개만 사용한다.',
        },
        {
          id: 4,
          text: '수 Km이상 전송 시 Repeater를 반드시 사용해야 한다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 47,
      subject: '4과목 : 네트워크 운용기기',
      stem: 'RAID의 특징으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '여러 개의 Disk에 일부 중복된 데이터를 나누어 저장',
        },
        {
          id: 2,
          text: 'read/write 속도를 증가',
        },
        {
          id: 3,
          text: 'Memory 용량 증가',
        },
        {
          id: 4,
          text: '데이터를 안전하게 백업',
        },
      ],
      correctId: 3,
    },
    {
      number: 48,
      subject: '4과목 : 네트워크 운용기기',
      stem: '가상 근거리 네트워크(VLAN, Virtual Local Area Network)은 물리적인 케이블이 아닌 소프트웨어에 의해 구성된 LAN으로 정의할 수 있는데, VLAN의 특징으로 맞지 않는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '데이터링크 계층에서 브로드캐스트 도메인(Broadcast Domain)을 나누기 위해 사용하는 기술이다.',
        },
        {
          id: 2,
          text: '각 스위치는 하나의 브로드캐스트 프레임에 대하여 동일 브로드캐스트 그룹이 아닌 곳에는 전달하지 않는다는 조건을 바탕으로 하고 있다.',
        },
        {
          id: 3,
          text: 'VLAN은 관리자가 서로 다른 논리적 그룹에 대하여 서로 다른 보안정책을 적용할 수 없다.',
        },
        {
          id: 4,
          text: '스위치는 VLAN 태그가 상이한 네트워크로의 접근을 근본적으로 차단하여 보안성을 유지하게 된다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 49,
      subject: '4과목 : 네트워크 운용기기',
      stem: '로드밸런서(Load Balancer)가 사전에 설정한 분산 알고리즘을 통해 부하분산이 이루어지는데, 부하분산 방식 중 특별한 규칙 없이 현재 구성된 장비에 순차적으로 돌아가면서 트래픽을 분산하는 방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Least Connection',
        },
        {
          id: 2,
          text: 'Round Robin',
        },
        {
          id: 3,
          text: 'Weighted Round Robin',
        },
        {
          id: 4,
          text: 'Weighted Least Connection',
        },
      ],
      correctId: 2,
    },
    {
      number: 50,
      subject: '4과목 : 네트워크 운용기기',
      stem: 'L2 스위치에서 프레임을 전송 시 목적지의 어떤 주소를 확인 후 전송하는가?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IP 주소',
        },
        {
          id: 2,
          text: 'Port 주소',
        },
        {
          id: 3,
          text: 'MAC 주소',
        },
        {
          id: 4,
          text: 'URL 주소',
        },
      ],
      correctId: 3,
    },
  ],
  '2024-05-19': [
    {
      number: 1,
      subject: '1과목 : TCP/IP',
      stem: '네트워크 계층에서 IP(Internet Protocol)는 핵심 프로토콜이다. 단편화 작업 중 분할되는 Data를 구별하기 위한 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'DF Flag',
        },
        {
          id: 2,
          text: 'Type of Service',
        },
        {
          id: 3,
          text: 'Offset',
        },
        {
          id: 4,
          text: 'TTL',
        },
      ],
      correctId: 1,
    },
    {
      number: 2,
      subject: '1과목 : TCP/IP',
      stem: 'TLS를 통해 Application 계층 데이터를 암호화하여 보호해 주고 기본포트가 443으로 지정된 프로토콜은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'HTTPS',
        },
        {
          id: 2,
          text: 'HTTP',
        },
        {
          id: 3,
          text: 'FTP',
        },
        {
          id: 4,
          text: 'SSH',
        },
      ],
      correctId: 1,
    },
    {
      number: 3,
      subject: '1과목 : TCP/IP',
      stem: 'IGMP(Internet Group Management Protocol)에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'OSI 모델 중 4계층 프로토콜이다.',
        },
        {
          id: 2,
          text: '비대칭 프로토콜로서 TTL(Time to Live)를 제공하지 않는다.',
        },
        {
          id: 3,
          text: '로컬 네트워크상의 멀티캐스팅 그룹제어를 수행하기 위한 프로토콜이다.',
        },
        {
          id: 4,
          text: '데이터의 유니캐스팅에 적합한 프로토콜이다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 4,
      subject: '1과목 : TCP/IP',
      stem: 'TCP 헤더의 플래그 비트로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'URG',
        },
        {
          id: 2,
          text: 'UTC',
        },
        {
          id: 3,
          text: 'ACK',
        },
        {
          id: 4,
          text: 'RST',
        },
      ],
      correctId: 2,
    },
    {
      number: 5,
      subject: '1과목 : TCP/IP',
      stem: '네트워크주소가 ′192.168.100.128′이며, 서브넷마스크가 ′255.255.255.192′인 네트워크가 있다. 이 네트워크에서 사용가능한 마지막 IP주소는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '192.168.100.129',
        },
        {
          id: 2,
          text: '192.168.100.190',
        },
        {
          id: 3,
          text: '192.168.100.191',
        },
        {
          id: 4,
          text: '192.168.100.255',
        },
      ],
      correctId: 2,
    },
    {
      number: 6,
      subject: '1과목 : TCP/IP',
      stem: '높은 신뢰도나 제어용 메시지를 필요로 하지 않고, 비연결형 서비스에 사용되는 프로토콜은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'UDP',
        },
        {
          id: 2,
          text: 'TCP',
        },
        {
          id: 3,
          text: 'ARP',
        },
        {
          id: 4,
          text: 'ICMP',
        },
      ],
      correctId: 1,
    },
    {
      number: 7,
      subject: '1과목 : TCP/IP',
      stem: 'SNMP의 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SNMP는 주기적으로 폴링(Polling)하여 네트워크 상태 정보를 수집하고 분석하는 기능을 제공한다.',
        },
        {
          id: 2,
          text: '네트워크 확장을 용이하게 해준다.',
        },
        {
          id: 3,
          text: 'SNMP는 일반적으로 TCP 세션을 이용한다.',
        },
        {
          id: 4,
          text: '폴링으로 인해 네트워크 트래픽이 많이 발생될 수 있는 단점이 있다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 8,
      subject: '1과목 : TCP/IP',
      stem: 'ICMP의 Message Type에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '0 - Echo Reply',
        },
        {
          id: 2,
          text: '5 - Echo Request',
        },
        {
          id: 3,
          text: '13 - Timestamp Request',
        },
        {
          id: 4,
          text: '17 - Address Mask Request',
        },
      ],
      correctId: 2,
    },
    {
      number: 9,
      subject: '1과목 : TCP/IP',
      stem: 'TCP를 사용하는 프로토콜로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'FTP',
        },
        {
          id: 2,
          text: 'TFTP',
        },
        {
          id: 3,
          text: 'Telnet',
        },
        {
          id: 4,
          text: 'SMTP',
        },
      ],
      correctId: 2,
    },
    {
      number: 10,
      subject: '1과목 : TCP/IP',
      stem: 'OSPF 프로토콜이 최단경로 탐색에 사용하는 기본 알고리즘은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Bellman-Ford 알고리즘',
        },
        {
          id: 2,
          text: 'Dijkstra 알고리즘',
        },
        {
          id: 3,
          text: '거리 벡터 라우팅 알고리즘',
        },
        {
          id: 4,
          text: 'Floyd-Warshall 알고리즘',
        },
      ],
      correctId: 2,
    },
    {
      number: 11,
      subject: '1과목 : TCP/IP',
      stem: 'IP의 체크섬(Checksum)에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IP Header의 완전성을 검사한다.',
        },
        {
          id: 2,
          text: 'IP Header와 데이터의 완전성을 검사한다.',
        },
        {
          id: 3,
          text: '데이터의 완전성을 검사한다.',
        },
        {
          id: 4,
          text: 'TCP 계층에서만 체크섬 계산 및 검증 서비스가 제공된다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 12,
      subject: '1과목 : TCP/IP',
      stem: '네트워크를 관리하는 Lee 사원은 사내에서 잦은 IP 충돌로 인하여 장애신고를 많이 받고 있어 기존 IP정책을 DHCP로 변경하려고 한다. 다음 중 DHCP를 적용해야 하는 장비로 가장 적합한 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '웹서버',
        },
        {
          id: 2,
          text: 'Access point',
        },
        {
          id: 3,
          text: '교육장용 PC',
        },
        {
          id: 4,
          text: '네트워크 프린터',
        },
      ],
      correctId: 3,
    },
    {
      number: 13,
      subject: '1과목 : TCP/IP',
      stem: '다음 중에서 IPv6의 특징이 아닌 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '128bit로 구성된다.',
        },
        {
          id: 2,
          text: 'Broadcast를 사용한다.',
        },
        {
          id: 3,
          text: '모바일 IP, IPsec 프로토콜 사용이 가능하다.',
        },
        {
          id: 4,
          text: 'IP가 1234::12FB:3:89A0:034C처럼 표시된다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 14,
      subject: '1과목 : TCP/IP',
      stem: 'TCP/IP 프로토콜 계층 모델 중 응용 계층에 해당되며 원격장치의 설정 및 네트워크 사용을 감시 관리하기 위해 사용하는 프로토콜은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SMTP',
        },
        {
          id: 2,
          text: 'SNMP',
        },
        {
          id: 3,
          text: 'FTP',
        },
        {
          id: 4,
          text: 'HTTP',
        },
      ],
      correctId: 2,
    },
    {
      number: 15,
      subject: '1과목 : TCP/IP',
      stem: '다음 (A) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2024-05-19-1.gif'],
      choices: [
        {
          id: 1,
          text: 'SNMP (Simple Network Management Protocol)',
        },
        {
          id: 2,
          text: 'SNTP (Simple Network Time Protocol)',
        },
        {
          id: 3,
          text: 'SMTP (Simple Mail Transfer Protocol)',
        },
        {
          id: 4,
          text: 'HTTP (HyperText Transfer Protocol)',
        },
      ],
      correctId: 2,
    },
    {
      number: 16,
      subject: '1과목 : TCP/IP',
      stem: '다음 지문에 따른 프로토콜과 포트가 올바르게 연결된 것은?',
      images: ['assets/2024-05-19-2.gif'],
      choices: [
        {
          id: 1,
          text: 'Telnet(Telecommunication network) - 23번',
        },
        {
          id: 2,
          text: 'SMTP(Simple Mail Transfer Protocol) - 25번',
        },
        {
          id: 3,
          text: 'SSH(Secure Shell) - 22번',
        },
        {
          id: 4,
          text: 'FTP(File Transfer Protocol) - 21번',
        },
      ],
      correctId: 2,
    },
    {
      number: 17,
      subject: '1과목 : TCP/IP',
      stem: '다음 (A) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2024-05-19-3.gif'],
      choices: [
        {
          id: 1,
          text: '/etc/deny',
        },
        {
          id: 2,
          text: '/etc/hosts',
        },
        {
          id: 3,
          text: '/etc/allow',
        },
        {
          id: 4,
          text: '/etc/services',
        },
      ],
      correctId: 2,
    },
    {
      number: 18,
      subject: '2과목 : 네트워크 일반',
      stem: '네트워크의 구성(Topology)에서 성형(Star)에 관한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'point-to-point 방식으로 회선을 연결한다.',
        },
        {
          id: 2,
          text: '단말장치의 추가와 제거가 쉽다.',
        },
        {
          id: 3,
          text: '하나의 단말장치가 고장나면 전체 통신망에 영향을 줄 수 있다.',
        },
        {
          id: 4,
          text: '각 단말 장치는 중앙 컴퓨터를 통하여 데이터를 교환한다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 19,
      subject: '2과목 : 네트워크 일반',
      stem: '다음에서 설명하는 전송 방식은?',
      images: ['assets/2024-05-19-4.gif'],
      choices: [
        {
          id: 1,
          text: 'Token Ring',
        },
        {
          id: 2,
          text: 'Token Bus',
        },
        {
          id: 3,
          text: 'CSMA/CD',
        },
        {
          id: 4,
          text: 'Slotted Ring',
        },
      ],
      correctId: 3,
    },
    {
      number: 20,
      subject: '2과목 : 네트워크 일반',
      stem: '100BASE-T라고도 불리는 이더넷의 고속 버전으로서 100 Mbps의 전송속도를 지원하는 근거리통신망의 표준은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Ethernet',
        },
        {
          id: 2,
          text: 'Gigabit Ethernet',
        },
        {
          id: 3,
          text: '10Giga Ethernet',
        },
        {
          id: 4,
          text: 'Fast Ethernet',
        },
      ],
      correctId: 4,
    },
    {
      number: 21,
      subject: '2과목 : 네트워크 일반',
      stem: '패킷 교환망의 특징으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '연결설정에 따라 가상회선과 데이터그램으로 분류된다.',
        },
        {
          id: 2,
          text: '메시지를 보다 짧은 길이의 패킷으로 나누어 전송한다.',
        },
        {
          id: 3,
          text: '망에 유입되는 데이터의 양이 많아질수록 전송속도가 빠르다.',
        },
        {
          id: 4,
          text: '블록킹 현상이 없다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 22,
      subject: '2과목 : 네트워크 일반',
      stem: 'VPN(Virtual Private Network)의 구현 기술 중 인터넷 네트워크 상에서 두 호스트 지점 간에 외부의 영향을 받지 않고 가상 경로를 설정해 주는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Tunneling',
        },
        {
          id: 2,
          text: 'Authentication',
        },
        {
          id: 3,
          text: 'Encryption',
        },
        {
          id: 4,
          text: 'Access Control',
        },
      ],
      correctId: 1,
    },
    {
      number: 23,
      subject: '2과목 : 네트워크 일반',
      stem: '데이터 흐름 제어(Flow Control)와 관련 없는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Stop and Wait',
        },
        {
          id: 2,
          text: 'XON/XOFF',
        },
        {
          id: 3,
          text: 'Loop/Echo',
        },
        {
          id: 4,
          text: 'Sliding Window',
        },
      ],
      correctId: 3,
    },
    {
      number: 24,
      subject: '2과목 : 네트워크 일반',
      stem: 'OSI 참조 모델의 계층별 기능에 대한 설명으로 적절하지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Session Layer : 통신시스템 간의 상호대화를 허용하여 프로세스 간의 통신을 허용하고 동기화 한다.',
        },
        {
          id: 2,
          text: 'Presentation Layer : 서로 다른 컴퓨터에 의해 다양한 형식으로 표현된 정보를 송·수신하기 위해 표준형식으로 변환한다.',
        },
        {
          id: 3,
          text: 'Transport Layer : 통신망의 양단에서 시스템 간에 전체 메시지가 올바른 순서로 도착하는 것을 보장한다.',
        },
        {
          id: 4,
          text: 'DataLink Layer : 응용 프로그램의 인터페이스와 통신을 실행하기 위한 응용 기능을 제공한다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 25,
      subject: '2과목 : 네트워크 일반',
      stem: '현장에서 발생한 데이터를 원거리의 데이터 센터로 보내는 대신 데이터 발생 지점 주변에서 선별적으로 분석, 활용 가능한 컴퓨팅 아키텍처는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '포그 컴퓨팅 (Fog Computing)',
        },
        {
          id: 2,
          text: '그리드 컴퓨팅 (Grid Computing)',
        },
        {
          id: 3,
          text: '병렬 컴퓨팅 (Parallel Computing)',
        },
        {
          id: 4,
          text: '직렬 컴퓨팅 (Serial Computing)',
        },
      ],
      correctId: 1,
    },
    {
      number: 26,
      subject: '2과목 : 네트워크 일반',
      stem: 'NFV(Network Function Virtualization)에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '소프트웨어가 아닌 하드웨어로 제어되는 네트워킹 기술로서, 네트워크를 마치 컴퓨터처럼 구성하거나 조작하는 네트워킹 기술이다.',
        },
        {
          id: 2,
          text: 'NFVs(Network Function Virtualization Functions)는 SW로 개발된 네트워크 기능들의 집합이다.',
        },
        {
          id: 3,
          text: 'NFVI(Network Function Virtualization Infrastructure)는 물리적 H/W 자원, 가상화 지원기능 및 VNF(Virtualized Network Functions) 실행지원기능 등을 제공한다.',
        },
        {
          id: 4,
          text: '가상화 기술 기반으로 통신망 운용에 필요한 다양한 네트워크 장비 내 여러 기능들을 분리시켜 S/W로 제어 및 관리 가능하도록 하는 네트워크 가상화 기술이다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 27,
      subject: '2과목 : 네트워크 일반',
      stem: '무선네트워크 담당자 Oh 사원은 사내 일정범위 내의 사용자들이 어느 곳에서든지 어떠한 물리적인 연결 없이도 네트워크에 접속이 가능하도록 무선 랜(LAN) 네트워크를 구성하라는 지시를 받았다. IEEE 802.11 무선랜(LAN) 기술표준의 설명이 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IEEE 802.11a 기술표준은 OFDM이라는 방식을 이용하여 최소 6Mbps에서 최대 54Mbps까지 데이터 전송 가능하다.',
        },
        {
          id: 2,
          text: 'IEEE 802.11b 기술표준은 기존 2.4GHz 대역을 사용하는 무선 LAN의 낮은 전송률(1Mbps와 2Mbps의 전송률)을 보완한 규격이다.',
        },
        {
          id: 3,
          text: 'IEEE 802.11g 기술표준은 2.4GHz 대역(IEEE 802.11b에서 사용하는 대역)에서 OFDM 방식을 사용하여 기존의 IEEE 802.11b와 공존할 수 있으면서 IEEE 802.11a의 높은 전송률 가능하다.',
        },
        {
          id: 4,
          text: 'IEEE의 802.11ac 기술표준은 802.11n을 기반으로 60GHz의 밀리미터파 스펙트럼에서 동작하는 802.11 네트워크에 대한 새로운 물리 계층을 정의한다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 28,
      subject: '3과목 : NOS',
      stem: '서버 관리자 Kim 사원은 DNS 서버를 구축하고자 ′yum′ 을 이용하여 bind를 설치하였으나 설치가 되지 않았다. 이에 ′ping′를 이용하여 외부 네트워크 상태 여부를 확인하였으나 정상이었다. 이에 DNS 서버 주소가 잘못되어 있을 것으로 판단하여 ′cat /etc/( A )′ 내용을 확인하고 수정하였다. ( A )에 해당하는 파일 이름은?',
      images: ['assets/2024-05-19-5.gif'],
      choices: [
        {
          id: 1,
          text: 'resolv.conf',
        },
        {
          id: 2,
          text: 'networks',
        },
        {
          id: 3,
          text: 'protocols',
        },
        {
          id: 4,
          text: 'services',
        },
      ],
      correctId: 1,
    },
    {
      number: 29,
      subject: '3과목 : NOS',
      stem: '서버관리자 Kim씨는 서버에 대한 상태를 확인하기 위해 ′/etc/check.sh′ 스크립트를 작성하였다. 해당 스크립트를 매주 월요일 오전 10시에 실행시키려고 할때, crontab 파일 설정으로 알맞은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '10 0 * * 1 /etc/check.sh',
        },
        {
          id: 2,
          text: '0 10 * * 1 /etc/check.sh',
        },
        {
          id: 3,
          text: '10 0 * * 0 /etc/check.sh',
        },
        {
          id: 4,
          text: '0 10 * * 0 /etc/check.sh',
        },
      ],
      correctId: 2,
    },
    {
      number: 30,
      subject: '3과목 : NOS',
      stem: 'Linux 디렉터리에 대한 소유자와 소유그룹을 변경할 수 있는 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'chmod',
        },
        {
          id: 2,
          text: 'chown',
        },
        {
          id: 3,
          text: 'useradd',
        },
        {
          id: 4,
          text: 'chage',
        },
      ],
      correctId: 2,
    },
    {
      number: 31,
      subject: '3과목 : NOS',
      stem: 'Linux Apache 웹서버에 사용자가 접속 후, 80초간 사용자의 요청이 없을 경우 세션을 종료시키도록 ′httpd.conf′ 파일에서 설정하는 옵션값은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Exec-timeout 80',
        },
        {
          id: 2,
          text: 'Listen 80',
        },
        {
          id: 3,
          text: 'KeepAliveTimeout 80',
        },
        {
          id: 4,
          text: 'NameVirtualHost 80',
        },
      ],
      correctId: 3,
    },
    {
      number: 32,
      subject: '3과목 : NOS',
      stem: 'Linux에서 열려있는 port 정보를 확인하는 명령어로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ps',
        },
        {
          id: 2,
          text: 'pstree',
        },
        {
          id: 3,
          text: 'getenforce',
        },
        {
          id: 4,
          text: 'netstat',
        },
      ],
      correctId: 4,
    },
    {
      number: 33,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016의 그룹계정에 대한 설명이다. 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Administrators 그룹은 모든 권한을 가지는 그룹으로서 일반사용자를 이 그룹에 소속시키면 Administrator와 동일한 권한을 갖는다.',
        },
        {
          id: 2,
          text: 'Backup Operators 그룹은 파일을 백업하고 복구할 수 있는 권한을 갖는다.',
        },
        {
          id: 3,
          text: 'Guests 그룹은 로그인할 때 임시 프로필을 만들고 로그아웃하면 삭제되고, 기본적으로는 사용하지 않도록 설정하는 그룹이다.',
        },
        {
          id: 4,
          text: 'Users 그룹은 사용자 계정을 생성하면 기본적으로 소속되는 그룹으로 시스템 수준의 변경의 권한을 갖는다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 34,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 Active Directory를 구성하여 다음과 같은 설정을 하고자 한다. 도메인을 두 개 이상 포함하는 대부분의 조직에서 사용자가 다른 도메인에 있는 공유 리소스에 액세스할 수 있어야 하며, 이 액세스를 제어 하려면 한 도메인의 사용자를 인증하고 다른 도메인의 리소스를 사용할 수 있는 권한을 부여해야 한다. 서로 다른 도메인의 클라이언트와 서버 간에 인증 및 권한 부여 기능을 제공하기 위해 두 도메인 간에 설정해야 하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '도메인',
        },
        {
          id: 2,
          text: '트리',
        },
        {
          id: 3,
          text: '포리스트',
        },
        {
          id: 4,
          text: '트러스트',
        },
      ],
      correctId: 4,
    },
    {
      number: 35,
      subject: '3과목 : NOS',
      stem: 'Linux의 VI편집기를 이용하여 파일의 내용을 수정할 때, 다음 내용을 만족하는 치환명령문은?',
      images: ['assets/2024-05-19-6.gif'],
      choices: [
        {
          id: 1,
          text: ':10,20s/old/new',
        },
        {
          id: 2,
          text: ':10,20s/old/new/g',
        },
        {
          id: 3,
          text: ':10,20r/old/new',
        },
        {
          id: 4,
          text: ':10,20r/old/new/a',
        },
      ],
      correctId: 2,
    },
    {
      number: 36,
      subject: '3과목 : NOS',
      stem: '다음과 같이 파일의 원래 권한은 유지한 채로 모든 사용자들에게 쓰기 가능한 권한을 추가 부여할 때, 결과가 다른 명령어는?',
      images: ['assets/2024-05-19-7.gif'],
      choices: [
        {
          id: 1,
          text: 'chmod 666 file',
        },
        {
          id: 2,
          text: 'chmod a+w file',
        },
        {
          id: 3,
          text: 'chmod ugo+w file',
        },
        {
          id: 4,
          text: 'chmod go=w file',
        },
      ],
      correctId: 4,
    },
    {
      number: 37,
      subject: '3과목 : NOS',
      stem: 'Linux의 가상 파일시스템으로 동작 중인 프로세스의 상태 정보, 하드웨어 정보, 시스템 정보 등을 확인할 수 있는 디렉터리로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '/boot',
        },
        {
          id: 2,
          text: '/etc',
        },
        {
          id: 3,
          text: '/proc',
        },
        {
          id: 4,
          text: '/lib',
        },
      ],
      correctId: 3,
    },
    {
      number: 38,
      subject: '3과목 : NOS',
      stem: '네트워크를 관리하는 Kim 사원은 네트워크 연결을 구축하거나 문제를 해결할 때 패킷이 출발지에서 목적지까지 가는 경로를 살펴볼 수 있도록 네트워크 명령어를 사용하고자 한다. 이 명령은 ′tracert′에서 수행하는 동일한 정보를 보여주면서 홉과 다른 세부 정보사이의 시간에 관한 정보를 출력이 끝날 때까지 저장한다. Kim 사원이 사용할 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ping',
        },
        {
          id: 2,
          text: 'nslookup',
        },
        {
          id: 3,
          text: 'pathping',
        },
        {
          id: 4,
          text: 'nbtstat',
        },
      ],
      correctId: 3,
    },
    {
      number: 39,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 특정 서비스를 제공하는 Daemon이 살아있는지 확인할 때 사용하는 명령어는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'daemon',
        },
        {
          id: 2,
          text: 'fsck',
        },
        {
          id: 3,
          text: 'men',
        },
        {
          id: 4,
          text: 'ps',
        },
      ],
      correctId: 4,
    },
    {
      number: 40,
      subject: '3과목 : NOS',
      stem: '아래 지문의 내용은 Linux의 BIND 시스템 운영을 위한′/etc/named.conf′의 option 지시자의 내용이다. 다음 중 옳지 않은 것은?',
      images: ['assets/2024-05-19-8.gif'],
      choices: [
        {
          id: 1,
          text: '외부에서 오는 query에 대한 IP 대역을 모두 허용한다.',
        },
        {
          id: 2,
          text: '유효성 검사 시 오류가 발생하지 않는다.',
        },
        {
          id: 3,
          text: '53번 포트에 대해서 외부 접근을 허용한다.',
        },
        {
          id: 4,
          text: 'slave에서 zone파일이 동기화 될때 text 형태로 변환한다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 41,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 Apache 웹서버를 구동 시 Well-known port를 사용할 때의 주의사항으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Well-known port를 통해 Apache 웹서버를 실행할 시 관리자 권한이 필요하다.',
        },
        {
          id: 2,
          text: '일반 사용자 계정에서 Apache 웹서버를 실행할 때, 실행 명령어 앞에 ′su′를 추가한다.',
        },
        {
          id: 3,
          text: 'Well-known port를 변경할 때, 다른 서비스와 충돌되지 않는 번호를 사용하여야 한다.',
        },
        {
          id: 4,
          text: 'Well-known port는 1부터 1023 까지의 숫자를 사용한다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 42,
      subject: '3과목 : NOS',
      stem: 'Linux Shell에서 아래 지문의 요구사항을 만족하는 명령어로 옳은 것은?',
      images: ['assets/2024-05-19-9.gif'],
      choices: [
        {
          id: 1,
          text: 'ls -al >output.txt',
        },
        {
          id: 2,
          text: 'ls -al <output.txt',
        },
        {
          id: 3,
          text: 'ls -al <<output.txt',
        },
        {
          id: 4,
          text: 'ls -al >>output.txt',
        },
      ],
      correctId: 1,
    },
    {
      number: 43,
      subject: '3과목 : NOS',
      stem: '아래 지문의 ping 명령어의 결과로 옳지 않은 것은?',
      images: ['assets/2024-05-19-10.gif'],
      choices: [
        {
          id: 1,
          text: 'ICMP 패킷을 전송한 곳은 icqa.or.kr이다.',
        },
        {
          id: 2,
          text: 'ICMP 패킷을 3번 송신하고 수신하였다.',
        },
        {
          id: 3,
          text: 'ICMP 패킷이 왕복한 시간 중 가장 짧은 시간은 7.085ms 이다.',
        },
        {
          id: 4,
          text: 'ICMP 패킷이 왕복한 평균 시간은 7.450ms 이다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 44,
      subject: '3과목 : NOS',
      stem: '보안담당자 Kim 사원은 내부망의 보안을 위해 외부에서의 접근을 통제하려고 한다. 외부에서의 Telnet 접근을 금지하려고 할때, 다음 중 알맞은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'iptables -A OUTPUT -p tcp --dport 23 -j DROP',
        },
        {
          id: 2,
          text: 'iptables -A INPUT -p udp --dport 23 -j DROP',
        },
        {
          id: 3,
          text: 'iptables -A INPUT -p tcp --dport 23 -j DROP',
        },
        {
          id: 4,
          text: 'iptables -A INPUT -p tcp --dport 21 -j DROP',
        },
      ],
      correctId: 3,
    },
    {
      number: 45,
      subject: '3과목 : NOS',
      stem: 'Linux 로그인 시 다중사용자 및 GUI모드를 지원하는 runlevel로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'runlevel 0',
        },
        {
          id: 2,
          text: 'runlevel 3',
        },
        {
          id: 3,
          text: 'runlevel 5',
        },
        {
          id: 4,
          text: 'runlevel 6',
        },
      ],
      correctId: 3,
    },
    {
      number: 46,
      subject: '4과목 : 네트워크 운용기기',
      stem: 'L2 LAN 스위치가 이더넷 프레임을 중계 처리할 때 사용하는 주소는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'MAC 주소',
        },
        {
          id: 2,
          text: 'IP 주소',
        },
        {
          id: 3,
          text: 'Post 주소',
        },
        {
          id: 4,
          text: 'URL 주소',
        },
      ],
      correctId: 1,
    },
    {
      number: 47,
      subject: '4과목 : 네트워크 운용기기',
      stem: '내부 통신에는 사설 IP 주소를 사용하고 외부와의 통신에는 공인 IP 주소를 사용할 수 있도록 하는 기술은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ARP',
        },
        {
          id: 2,
          text: 'NAT',
        },
        {
          id: 3,
          text: 'ICMP',
        },
        {
          id: 4,
          text: 'DHCP',
        },
      ],
      correctId: 2,
    },
    {
      number: 48,
      subject: '4과목 : 네트워크 운용기기',
      stem: '내부에 코어(Core)와 이를 감싸는, 굴절률이 다른 유리나 플라스틱으로 된 외부 클래딩(Cladding)으로 구성된 전송 매체는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '이중 나선(Twisted Pair)',
        },
        {
          id: 2,
          text: '동축 케이블(Coaxial Cable)',
        },
        {
          id: 3,
          text: '2선식 개방 선로(Two-Wire Open Lines)',
        },
        {
          id: 4,
          text: '광 케이블(Optical Cable)',
        },
      ],
      correctId: 4,
    },
    {
      number: 49,
      subject: '4과목 : 네트워크 운용기기',
      stem: '아래 지문에 해당하는 RAID 방식은?',
      images: ['assets/2024-05-19-11.gif'],
      choices: [
        {
          id: 1,
          text: 'Linear RAID',
        },
        {
          id: 2,
          text: 'RAID 0',
        },
        {
          id: 3,
          text: 'RAID 1',
        },
        {
          id: 4,
          text: 'RAID 5',
        },
      ],
      correctId: 2,
    },
    {
      number: 50,
      subject: '4과목 : 네트워크 운용기기',
      stem: '다음 (A) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2024-05-19-12.gif'],
      choices: [
        {
          id: 1,
          text: 'L2 Switch',
        },
        {
          id: 2,
          text: 'IP 공유기',
        },
        {
          id: 3,
          text: 'UPS',
        },
        {
          id: 4,
          text: 'POE Switch',
        },
      ],
      correctId: 4,
    },
  ],
  '2024-02-25': [
    {
      number: 1,
      subject: '1과목 : TCP/IP',
      stem: 'IP 헤더에 포함이 되지 않는 필드는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'ACK',
        },
        {
          id: 2,
          text: 'Version',
        },
        {
          id: 3,
          text: 'Header checksum',
        },
        {
          id: 4,
          text: 'Header length',
        },
      ],
      correctId: 1,
    },
    {
      number: 2,
      subject: '1과목 : TCP/IP',
      stem: 'TCP 프로토콜에서 사용하는 흐름제어 방식은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'GO-Back-N',
        },
        {
          id: 2,
          text: '선택적 재전송',
        },
        {
          id: 3,
          text: 'Sliding Window',
        },
        {
          id: 4,
          text: 'Idle-RQ',
        },
      ],
      correctId: 3,
    },
    {
      number: 3,
      subject: '1과목 : TCP/IP',
      stem: '′255.255.255.224′인 서브넷에 최대 할당 가능한 호스트 수는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '2개',
        },
        {
          id: 2,
          text: '6개',
        },
        {
          id: 3,
          text: '14개',
        },
        {
          id: 4,
          text: '30개',
        },
      ],
      correctId: 4,
    },
    {
      number: 4,
      subject: '1과목 : TCP/IP',
      stem: 'Link State 알고리즘을 이용해 서로에게 자신의 현재 상태를 알려주며 네트워크 내 통신을 위해 사용하는 프로토콜은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'OSPF',
        },
        {
          id: 2,
          text: 'IDRP',
        },
        {
          id: 3,
          text: 'EGP',
        },
        {
          id: 4,
          text: 'BGP',
        },
      ],
      correctId: 1,
    },
    {
      number: 5,
      subject: '1과목 : TCP/IP',
      stem: 'DNS에서 사용될 때 TTL(Time to Live)의 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '데이터가 DNS서버 존으로부터 나오기 전에 현재 남은 시간이다.',
        },
        {
          id: 2,
          text: '데이터가 DNS서버 캐시로부터 나오기 전에 현재 남은 시간이다.',
        },
        {
          id: 3,
          text: '패킷이 DNS서버 존으로부터 나오기 전에 현재 남은 시간이다.',
        },
        {
          id: 4,
          text: '패킷이 DNS서버 네임서버 레코드로부터 나오기 전에 현재 남은 시간이다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 6,
      subject: '1과목 : TCP/IP',
      stem: '서브넷 마스크(Subnet Mask)에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'A, B, C Class 대역의 IP Address는 모두 같은 서브넷 마스크를 사용한다.',
        },
        {
          id: 2,
          text: '하나의 네트워크 클래스를 여러 개의 네트워크로 분리하여 IP Address를 효율적으로 사용할 수 있다.',
        },
        {
          id: 3,
          text: '서브넷 마스크는 목적지 호스트의 IP Address가 동일 네트워크상에 있는지 확인한다.',
        },
        {
          id: 4,
          text: '서브넷 마스크를 이용하면, Traffic 관리 및 제어가 가능하다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 7,
      subject: '1과목 : TCP/IP',
      stem: 'SMTP에 대한 설명 중 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '인터넷을 통해 파일을 송/수신하기 위한 프로토콜',
        },
        {
          id: 2,
          text: '인터넷 전자 우편을 위한 프로토콜',
        },
        {
          id: 3,
          text: '하이퍼 텍스트 문서를 전송하기 위한 프로토콜',
        },
        {
          id: 4,
          text: '원격 접속을 위한 프로토콜',
        },
      ],
      correctId: 2,
    },
    {
      number: 8,
      subject: '1과목 : TCP/IP',
      stem: 'TFTP 프로토콜에 대한 설명 중 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Trivial File Transfer Protocol의 약어이다.',
        },
        {
          id: 2,
          text: '네트워크를 통한 파일 전송 서비스이다.',
        },
        {
          id: 3,
          text: '3방향 핸드셰이킹 방법인 TCP 세션을 통해 전송한다.',
        },
        {
          id: 4,
          text: '신속한 파일의 전송을 원할 경우에는 FTP보다 훨씬 큰 효과를 얻을 수 있다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 9,
      subject: '1과목 : TCP/IP',
      stem: 'RIP(Routing Information Protocol)의 특징에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '서브넷 주소를 인식하여 정보를 처리할 수 있다.',
        },
        {
          id: 2,
          text: '링크 상태 알고리즘을 사용하므로, 링크 상태에 대한 변화가 빠르다.',
        },
        {
          id: 3,
          text: '메트릭으로 유일하게 Hop Count만을 고려한다.',
        },
        {
          id: 4,
          text: '대규모 네트워크에서 주로 사용되며, 기본 라우팅 업데이트 주기는 1초이다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 10,
      subject: '1과목 : TCP/IP',
      stem: '보기의 프로토콜 중에서 지문에 제시된 내용과 같은 일을 수행하는 프로토콜은?',
      images: ['assets/2024-02-25-1.gif'],
      choices: [
        {
          id: 1,
          text: 'DHCP',
        },
        {
          id: 2,
          text: 'IP',
        },
        {
          id: 3,
          text: 'RIP',
        },
        {
          id: 4,
          text: 'ARP',
        },
      ],
      correctId: 4,
    },
    {
      number: 11,
      subject: '1과목 : TCP/IP',
      stem: 'OSI 7 계층의 통신 계층별 PDU(Protocol Data Unit)의 명칭으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '7계층 : 세그먼트',
        },
        {
          id: 2,
          text: '4계층 : 패킷',
        },
        {
          id: 3,
          text: '3계층 : 비트',
        },
        {
          id: 4,
          text: '2계층 : 프레임',
        },
      ],
      correctId: 4,
    },
    {
      number: 12,
      subject: '1과목 : TCP/IP',
      stem: 'CSMA/CD의 특징으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '충돌 도메인이 작을수록 좋다.',
        },
        {
          id: 2,
          text: '충돌이 발생하면 임의의 시간 동안 대기하므로 지연 시간을 예측하기 어렵다.',
        },
        {
          id: 3,
          text: "네트워크상의 컴퓨터들이 데이터 전송을 개시하기 위해서는 반드시 '토큰'이라는 권한을 가지고 있어야 한다.",
        },
        {
          id: 4,
          text: '컴퓨터들은 케이블의 데이터 흐름 유무를 감시하기 위해 특정 신호를 주기적으로 보낸다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 13,
      subject: '1과목 : TCP/IP',
      stem: 'RARP(Reverse Address Resolution Protocol)에 대한 설명 중 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'IP Address를 하드웨어 주소로 변환하기 위해서 사용한다.',
        },
        {
          id: 2,
          text: 'RFC 903에 명시되어 있고, RFC 951에 기술된 BOOTP에 의해 대체되고 있다.',
        },
        {
          id: 3,
          text: '디스크를 소유하지 않으면 RARP를 이용하여 인터넷 주소를 먼저 알아내야 한다.',
        },
        {
          id: 4,
          text: 'Ethernet, FDDI, Token Ring 등의 근거리 통신망에서 사용할 수 있는 프로토콜이다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 14,
      subject: '1과목 : TCP/IP',
      stem: 'IPv6 주소 ′a184:0a01:0000:0000:cd8c:1000:317b:00ff′ 를 생략하여 표기한 것으로 알맞은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'a184:a1::cd8c:1:317b:ff',
        },
        {
          id: 2,
          text: 'a184:a01::cd8c:1000:317b:ff',
        },
        {
          id: 3,
          text: 'a184:a01:0:0:cd8c:10:317b:0ff',
        },
        {
          id: 4,
          text: 'a184:a01:cd8c:1000:317b:ff',
        },
      ],
      correctId: 2,
    },
    {
      number: 15,
      subject: '1과목 : TCP/IP',
      stem: '다음 보기 중 공인 IP로 설정 시 공중망(Public Network)에서 통신의 문제가 발생할 수 있는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '209.37.4.11',
        },
        {
          id: 2,
          text: '172.29.130.78',
        },
        {
          id: 3,
          text: '9.3.3.8',
        },
        {
          id: 4,
          text: '31.255.255.224',
        },
      ],
      correctId: 2,
    },
    {
      number: 16,
      subject: '1과목 : TCP/IP',
      stem: '다음 (A) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2024-02-25-2.gif'],
      choices: [
        {
          id: 1,
          text: 'DNS',
        },
        {
          id: 2,
          text: 'Proxy',
        },
        {
          id: 3,
          text: 'DB',
        },
        {
          id: 4,
          text: 'TTS',
        },
      ],
      correctId: 2,
    },
    {
      number: 17,
      subject: '1과목 : TCP/IP',
      stem: 'ICMP(Internet Control Message Protocol)에 대한 설명 중 틀린 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '비대칭 프로토콜이고 TTL(Time To Live)를 제공한다.',
        },
        {
          id: 2,
          text: 'ICMPv4(Internet Control Message Protocol) 메시지의 특징은 질의메시지가 있다.',
        },
        {
          id: 3,
          text: 'ICMP(Internet Control Message Protocol)의 주된 기능은 IP 데이터그램의 프로세싱을 동작 하는동안 오류를 보고한다.',
        },
        {
          id: 4,
          text: '호스트간 신뢰성을 확보하기 위해 반향과 회답메시지를 지원한다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 18,
      subject: '2과목 : 네트워크 일반',
      stem: '다음 내용 중 (A)에 들어갈 내용은?',
      images: ['assets/2024-02-25-3.gif'],
      choices: [
        {
          id: 1,
          text: 'IDC (Internet Data Center)',
        },
        {
          id: 2,
          text: 'IPS (Intrusion Prevention System)',
        },
        {
          id: 3,
          text: 'IDS (Intrusion Detection System)',
        },
        {
          id: 4,
          text: 'IOS (International Organization for Standardization)',
        },
      ],
      correctId: 1,
    },
    {
      number: 19,
      subject: '2과목 : 네트워크 일반',
      stem: '네트워크의 구성(Topology)에서 링형(Ring)에 관한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '장애발생시 쉽게 발견할 수 있다.',
        },
        {
          id: 2,
          text: '노드간의 연결을 최소화하는 목적으로 설계되었다.',
        },
        {
          id: 3,
          text: '한 통신장치의 오류가 전체 네트워크에 영향을 준다.',
        },
        {
          id: 4,
          text: '확장성이 뛰어나다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 20,
      subject: '2과목 : 네트워크 일반',
      stem: '다음 (A) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2024-02-25-4.gif'],
      choices: [
        {
          id: 1,
          text: 'NIC',
        },
        {
          id: 2,
          text: 'F/W',
        },
        {
          id: 3,
          text: 'IPS',
        },
        {
          id: 4,
          text: 'NAC',
        },
      ],
      correctId: 4,
    },
    {
      number: 21,
      subject: '2과목 : 네트워크 일반',
      stem: 'ARQ 방식 중 에러가 발생한 블록으로 되돌아가 모든 블록을 재전송하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Go-back-N ARQ',
        },
        {
          id: 2,
          text: 'Selective ARQ',
        },
        {
          id: 3,
          text: 'Adaptive ARQ',
        },
        {
          id: 4,
          text: 'Stop-and-Wait ARQ',
        },
      ],
      correctId: 1,
    },
    {
      number: 22,
      subject: '2과목 : 네트워크 일반',
      stem: '아래 내용에서 IPv6의 일반적인 특징만을 나열한 것은?',
      images: ['assets/2024-02-25-5.gif'],
      choices: [
        {
          id: 1,
          text: 'A, B, C, D',
        },
        {
          id: 2,
          text: 'A, C, D, E',
        },
        {
          id: 3,
          text: 'B, C, D, E',
        },
        {
          id: 4,
          text: 'B, D, E, F',
        },
      ],
      correctId: 2,
    },
    {
      number: 23,
      subject: '2과목 : 네트워크 일반',
      stem: 'OSI 7 Layer에서 Data Link 계층의 기능으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '전송 오류 제어기능',
        },
        {
          id: 2,
          text: 'Flow 제어기능',
        },
        {
          id: 3,
          text: 'Text의 압축, 암호기능',
        },
        {
          id: 4,
          text: 'Link의 관리기능',
        },
      ],
      correctId: 3,
    },
    {
      number: 24,
      subject: '2과목 : 네트워크 일반',
      stem: '프로토콜의 기본적인 기능 중 정보의 신뢰성을 부여하는 것으로, 데이터를 전송한 개체가 보낸 PDU(Protocol Data Unit)에 대한 애크널러지먼트(ACK)를 특정시간 동안 받지 못하면 재전송하는 기능은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Flow Control',
        },
        {
          id: 2,
          text: 'Error Control',
        },
        {
          id: 3,
          text: 'Sequence Control',
        },
        {
          id: 4,
          text: 'Connection Control',
        },
      ],
      correctId: 2,
    },
    {
      number: 25,
      subject: '2과목 : 네트워크 일반',
      stem: 'FTTH(Fiber-To-The-Home) 망구조는 PTP(Point To Point), AON(Active Optical Network), PON(Passive Optical Network) 등으로 구분할 수 있다. 다음 지문에서 (A) 안에 들어가는 용어 중 옳은 것은?',
      images: ['assets/2024-02-25-6.gif'],
      choices: [
        {
          id: 1,
          text: 'AON',
        },
        {
          id: 2,
          text: 'PON',
        },
        {
          id: 3,
          text: 'PTP',
        },
        {
          id: 4,
          text: 'Home Run',
        },
      ],
      correctId: 2,
    },
    {
      number: 26,
      subject: '2과목 : 네트워크 일반',
      stem: '채널부호화는 원천 부호화된 원래의 정보에 에러 검출 및 정정을 위한 비트들을 추가해서 전송하는 기술이다. 수신측에서는 에러를 검사하여 송신측으로 데이터 재전송을 요청하거나 자체적으로 에러를 검출해서 정정하는데 목적이 있다. 다음 항목 중 채널부호화에 해당하는 기술로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Convolutional Code',
        },
        {
          id: 2,
          text: 'ADPCM',
        },
        {
          id: 3,
          text: 'ADM',
        },
        {
          id: 4,
          text: 'PCM',
        },
      ],
      correctId: 1,
    },
    {
      number: 27,
      subject: '2과목 : 네트워크 일반',
      stem: '다음의 설명의 (A)에 들어갈 알맞은 용어는 무엇인가?',
      images: ['assets/2024-02-25-7.gif'],
      choices: [
        {
          id: 1,
          text: 'Bluetooth',
        },
        {
          id: 2,
          text: 'NFC (Near Field Communication)',
        },
        {
          id: 3,
          text: 'Wi-Fi',
        },
        {
          id: 4,
          text: 'CR (Cognitive Radio)',
        },
      ],
      correctId: 4,
    },
    {
      number: 28,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 일반적으로 사용자 암호 정보를 가지는 디렉터리는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '/etc',
        },
        {
          id: 2,
          text: '/sbin',
        },
        {
          id: 3,
          text: '/home',
        },
        {
          id: 4,
          text: '/lib',
        },
      ],
      correctId: 1,
    },
    {
      number: 29,
      subject: '3과목 : NOS',
      stem: 'TCP 3Way-HandShaking 과정 중 클라이언트가 보낸 연결 요청에서 패킷을 수신한 서버는 LISTEN 상태에서 무슨 상태로 변경되는가?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'SYN_SENT',
        },
        {
          id: 2,
          text: 'SYN_RECEIVED',
        },
        {
          id: 3,
          text: 'ESTABLISHED',
        },
        {
          id: 4,
          text: 'CLOSE',
        },
      ],
      correctId: 2,
    },
    {
      number: 30,
      subject: '3과목 : NOS',
      stem: 'Linux 명령어 중에 init(초기화 프로세스)를 이용하여 재부팅하는 옵션은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'init 0',
        },
        {
          id: 2,
          text: 'init 1',
        },
        {
          id: 3,
          text: 'init 5',
        },
        {
          id: 4,
          text: 'init 6',
        },
      ],
      correctId: 4,
    },
    {
      number: 31,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템 명령어 중 root만 사용 가능한 명령은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'chown',
        },
        {
          id: 2,
          text: 'pwd',
        },
        {
          id: 3,
          text: 'Is',
        },
        {
          id: 4,
          text: 'rm',
        },
      ],
      correctId: 1,
    },
    {
      number: 32,
      subject: '3과목 : NOS',
      stem: 'Linux에서 ′ls -al′의 결과 맨 앞에 나오는 항목이 파일 혹은 디렉터리의 권한을 나타내준다. 즉, [파일타입] [소유자 권한] [그룹 권한] [그 외의 유저에 대한 권한]을 표시한다. 만약 [파일타입]부분에 ′-′표시가 되어 있다면 이것의 의미는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '파일 시스템과 관련된 특수 파일',
        },
        {
          id: 2,
          text: '디렉터리',
        },
        {
          id: 3,
          text: '일반 파일',
        },
        {
          id: 4,
          text: '심볼릭/하드링크 파일',
        },
      ],
      correctId: 3,
    },
    {
      number: 33,
      subject: '3과목 : NOS',
      stem: 'Linux에서 사용되는 ′free′ 명령어에 대한 설명 중 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '사용 중인 메모리, 사용 가능한 메모리 용량을 알 수 있다.',
        },
        {
          id: 2,
          text: '패스워드 없이 사용하는 유저를 알 수 있다.',
        },
        {
          id: 3,
          text: '디렉터리의 사용량을 알 수 있다.',
        },
        {
          id: 4,
          text: '사용 가능한 파일 시스템의 양을 알 수 있다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 34,
      subject: '3과목 : NOS',
      stem: '다음 중 Linux의 명령어 해석기는?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'Shell',
        },
        {
          id: 2,
          text: 'Kernel',
        },
        {
          id: 3,
          text: 'Utility Program',
        },
        {
          id: 4,
          text: 'Hierarchical File System',
        },
      ],
      correctId: 1,
    },
    {
      number: 35,
      subject: '3과목 : NOS',
      stem: '다른 운영체제와 Linux가 공존하는 하나의 시스템에서 멀티 부팅을 지원할 때 사용되며, Linux 로더를 의미하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'MBR',
        },
        {
          id: 2,
          text: 'RAS',
        },
        {
          id: 3,
          text: 'NetBEUI',
        },
        {
          id: 4,
          text: 'GRUB',
        },
      ],
      correctId: 4,
    },
    {
      number: 36,
      subject: '3과목 : NOS',
      stem: 'Linux 시스템에서 특정 파일의 권한이 ′-rwxr-x--x′ 이다. 이 파일에 대한 설명 중 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '소유자는 읽기 권한, 쓰기 권한, 실행 권한을 갖는다.',
        },
        {
          id: 2,
          text: '소유자와 같은 그룹을 제외한 다른 모든 사용자는 실행 권한만을 갖는다.',
        },
        {
          id: 3,
          text: '이 파일의 모드는 ′751′ 이다.',
        },
        {
          id: 4,
          text: '동일한 그룹에 속한 사용자는 실행 권한만을 갖는다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 37,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016에서 ′netstat′ 명령이 제공하는 정보로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '인터페이스의 구성 정보',
        },
        {
          id: 2,
          text: '라우팅 테이블',
        },
        {
          id: 3,
          text: 'IP 패킷이 목적지에 도착하기 위해 방문하는 게이트웨이의 순서 정보',
        },
        {
          id: 4,
          text: '네트워크 인터페이스의 상태 정보',
        },
      ],
      correctId: 3,
    },
    {
      number: 38,
      subject: '3과목 : NOS',
      stem: 'Windows Server 2016의 DNS Server 역할에서 지원하는 ′역방향 조회′에 대한 설명으로 옳은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '클라이언트가 정규화된 도메인 이름을 제공하면 IP주소를 반환하는 것',
        },
        {
          id: 2,
          text: '클라이언트가 IP주소를 제공하면 도메인을 반환하는 것',
        },
        {
          id: 3,
          text: '클라이언트가 도메인을 제공하면 라운드로빈 방식으로 IP를 반환하는 것',
        },
        {
          id: 4,
          text: '클라이언트가 도메인을 제공하면 하위 도메인을 반환하는 것',
        },
      ],
      correctId: 2,
    },
    {
      number: 39,
      subject: '3과목 : NOS',
      stem: '서버 관리자 Kang 사원은 Windows Server 2016 시스템의 보안을 위해 EFS(암호화 파일 시스템)을 사용하려고 한다. EFS에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'EFS는 윈도우즈 시스템의 파일에만 암호화 기술을 적용한다.',
        },
        {
          id: 2,
          text: 'EFS는 인증서 파일의 확장자로 CER, P7B, PFX, SST 형식을 지원한다.',
        },
        {
          id: 3,
          text: 'EFS는 개인키를 보호하는 방법으로 암호만을 사용할 수 있다.',
        },
        {
          id: 4,
          text: 'EFS는 사용자만 동일하면 윈도우즈 시스템을 다시 설치해도 암호화된 파일을 열 수 있다.',
        },
      ],
      correctId: 2,
    },
    {
      number: 40,
      subject: '3과목 : NOS',
      stem: '서버 관리자 Park 사원은 Linux 서버를 관리하면서 특정 조건에 맞는 파일 및 디렉터리를 검색하기 위해 ′find′ 명령어를 사용하려고 한다. ′find′ 명령어의 주요 옵션에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '′-name′은 지정한 사용자 이름에 해당하는 파일이나 디렉터리를 찾는다.',
        },
        {
          id: 2,
          text: '′-type′은 지정한 디렉터리 종류에 해당하는 디렉터리 유형을 찾는다.',
        },
        {
          id: 3,
          text: '′-perm′은 지정한 소유자의 권한만을 고려하여 파일이나 디렉터리를 찾는다.',
        },
        {
          id: 4,
          text: '′-exec′은 찾은 파일에 대한 삭제 등의 추가적인 명령을 실행할 수 있다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 41,
      subject: '3과목 : NOS',
      stem: '서버 관리자 Choi 사원은 Windows Server의 사용자들을 특정한 그룹으로 분류하려고 한다. Windows Server 2016 시스템의 로컬 그룹에 대한 설명으로 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '′Power Users′는 ′Administrator′와 같은 권한을 가지는 그룹이다.',
        },
        {
          id: 2,
          text: '′RDS Endpoint Servers′는 ′Remote Desktop Service′와 관련한 권한을 가지는 그룹이다.',
        },
        {
          id: 3,
          text: '′Remote Management Users′는 ′WMI′ 자원과 관련된 권한을 가지는 그룹이다.',
        },
        {
          id: 4,
          text: '′Performance Monitor Users′는 성능 카운터, 로그 등을 관리하는 권한을 가지는 그룹이다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 42,
      subject: '3과목 : NOS',
      stem: '다음의 지문이 설명하고 있는 DNS 질의 과정을 무엇이라고 하는가?',
      images: ['assets/2024-02-25-8.gif'],
      choices: [
        {
          id: 1,
          text: '재귀적 질의',
        },
        {
          id: 2,
          text: '반복적 질의',
        },
        {
          id: 3,
          text: '순환적 질의',
        },
        {
          id: 4,
          text: '로컬 질의',
        },
      ],
      correctId: 1,
    },
    {
      number: 43,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 Windows Server 2016를 구축하여 더 많은 위치와 더 다양한 유형의 장치에서 데이터를 액세스할 수 있도록 설계하려고 한다. 이에 알맞은 서비스는?',
      images: [],
      choices: [
        {
          id: 1,
          text: '클라우드 폴더',
        },
        {
          id: 2,
          text: '서버 코어',
        },
        {
          id: 3,
          text: 'VPN',
        },
        {
          id: 4,
          text: 'DirectAccess Server',
        },
      ],
      correctId: 1,
    },
    {
      number: 44,
      subject: '3과목 : NOS',
      stem: '서버 담당자 Park 사원은 Windows Server 2016에서 가상화 운영을 위한 Hyper-V를 운영하고자 한다. 다음 지문 내용 중 ( )에 공통으로 들어갈 내용으로 올바른 것은?',
      images: ['assets/2024-02-25-9.gif'],
      choices: [
        {
          id: 1,
          text: 'Hyper-V',
        },
        {
          id: 2,
          text: 'IIS',
        },
        {
          id: 3,
          text: 'Windows 컨테이너',
        },
        {
          id: 4,
          text: 'NanoServer',
        },
      ],
      correctId: 3,
    },
    {
      number: 45,
      subject: '3과목 : NOS',
      stem: 'Linux 설치 시 Swap 영역에 대한 설명 중 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'RAM의 부족한 용량을 보충하기 위해 하드디스크의 일정부분을 지정하여 RAM처럼 사용한다.',
        },
        {
          id: 2,
          text: '일반적으로 실제 메모리의 두 배 정도면 적당하다.',
        },
        {
          id: 3,
          text: '시스템을 모니터링 한 결과 Swap이 많이 일어나면 메모리를 증설해야 한다.',
        },
        {
          id: 4,
          text: '한번 설정한 Swap은 추가가 불가능하므로 신중을 기해 크기를 결정해야 한다.',
        },
      ],
      correctId: 4,
    },
    {
      number: 46,
      subject: '4과목 : 네트워크 운용기기',
      stem: 'RAID 방식 중 미러링(Mirroring)이라고 하며, 최고의 성능과 고장대비 능력을 발휘하는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'RAID 0',
        },
        {
          id: 2,
          text: 'RAID 1',
        },
        {
          id: 3,
          text: 'RAID 3',
        },
        {
          id: 4,
          text: 'RAID 5',
        },
      ],
      correctId: 2,
    },
    {
      number: 47,
      subject: '4과목 : 네트워크 운용기기',
      stem: '로드밸런싱(Load Balancing)에 대한 설명이 맞는 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '물리적인 망 구성과는 상관없이 가상적으로 구성된 근거리 통신망 기술',
        },
        {
          id: 2,
          text: '사용량과 처리량을 증가시키고 지연율을 낮추며 응답시간을 감소시키고 시스템 부하를 피할 수 있게 하는 최적화 기술',
        },
        {
          id: 3,
          text: '가상머신이 실행되고 있는 물리적 컴퓨터로부터 분리된 또 하나의 컴퓨터',
        },
        {
          id: 4,
          text: '웹 브라우저와 서버 간의 통신에서 정보를 암호화하는 기술',
        },
      ],
      correctId: 2,
    },
    {
      number: 48,
      subject: '4과목 : 네트워크 운용기기',
      stem: '게이트웨이(Gateway)에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: 'OSI 참조 모델에서 전송계층만 연결하는 네트워크 장비이다.',
        },
        {
          id: 2,
          text: '두 개의 완전히 다른 네트워크 사이의 데이터 형식을 변환하는 장치이다.',
        },
        {
          id: 3,
          text: '데이터 변환의 기능을 가지고 있어 네트워크내의 병목 현상을 일으키는 지점이 될 수 있다.',
        },
        {
          id: 4,
          text: '프로토콜이 다른 네트워크 환경들을 연결할 수 있는 기능을 제공한다.',
        },
      ],
      correctId: 1,
    },
    {
      number: 49,
      subject: '4과목 : 네트워크 운용기기',
      stem: 'IEEE 802.11 무선랜의 전송 방식에 대한 설명 중 올바른 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '적외선 방식 : 장비 구성이 간편하고 빛의 성질로 인해 중간에 장애물이 있어도 통신이 가능하다. 저렴한 비용 때문에 상업적으로 많이 사용된다.',
        },
        {
          id: 2,
          text: '레이저 방식 : 레이저가 가지는 고도의 점 지향성과 직진성을 이용해서 멀리 떨어진 지점 간(예를 들면 섬과 섬 사이) 네트워킹에 사용하는 방식. 주로 케이블 가설이 어려운 지역에 설치하나 통신 속도면에서 10Mbps이상은 지원되지 않는다.',
        },
        {
          id: 3,
          text: '주파수 방식 : 전파를 사용하는 방식으로 스프레드 스펙트럼(Spread Spectrum) 방식이 가장 많이 사용되는 무선 네트워크 방식. 일반적으로 무선랜이라고 하면 이 방식을 의미한다.',
        },
        {
          id: 4,
          text: '협대역 방식 : 특정 라디오 주파수를 사용하며 사용자는 동일한 주파수 채널을 사용하여 송수신한다.',
        },
      ],
      correctId: 3,
    },
    {
      number: 50,
      subject: '4과목 : 네트워크 운용기기',
      stem: '광케이블에 대한 설명으로 옳지 않은 것은?',
      images: [],
      choices: [
        {
          id: 1,
          text: '멀티 모드형과 싱글 모드형이 있다.',
        },
        {
          id: 2,
          text: '동축케이블과 마찬가지로 단선이 되었을 경우, 별도의 장비 없이 선을 연결하여 사용할 수 있다.',
        },
        {
          id: 3,
          text: '광섬유는 코어(Core)와 클래드(Clad)로 구성된다.',
        },
        {
          id: 4,
          text: '보안 및 잡음 등에 강한 것이 특징이다.',
        },
      ],
      correctId: 2,
    },
  ],
  "2023-11-05": [
    {
      "number": 1,
      "subject": "1과목 : TCP/IP",
      "stem": "C Class의 네트워크 주소가 ′192.168.10.0′ 이고, 서브넷 마스크가 ′255.255.255.240′ 일 때, 최대 사용 가능한 호스트 수는?(단, 네트워크 주소와 브로드캐스트 호스트는 제외한다.)",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "10개"
        },
        {
          "id": 2,
          "text": "14개"
        },
        {
          "id": 3,
          "text": "26개"
        },
        {
          "id": 4,
          "text": "32개"
        }
      ],
      "correctId": 2
    },
    {
      "number": 2,
      "subject": "1과목 : TCP/IP",
      "stem": "IPv6 헤더 형식에서 네트워크 내에서 데이터그램의 생존 기간과 관련되는 필드는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Version"
        },
        {
          "id": 2,
          "text": "Priority"
        },
        {
          "id": 3,
          "text": "Next Header"
        },
        {
          "id": 4,
          "text": "Hop Limit"
        }
      ],
      "correctId": 4
    },
    {
      "number": 3,
      "subject": "1과목 : TCP/IP",
      "stem": "TCP가 제공하는 기능으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "종단 간 흐름 제어를 위해 동적 윈도우(Dynamic Sliding Window) 방식을 사용한다."
        },
        {
          "id": 2,
          "text": "한 번에 많은 데이터의 전송에 유리하기 때문에 화상 통신과 같은 실시간 통신에 사용된다."
        },
        {
          "id": 3,
          "text": "송수신되는 데이터의 에러를 제어함으로서 신뢰성 있는 데이터 전송을 보장한다."
        },
        {
          "id": 4,
          "text": "Three Way Handshaking 과정을 통해 데이터를 주고받는다."
        }
      ],
      "correctId": 2
    },
    {
      "number": 4,
      "subject": "1과목 : TCP/IP",
      "stem": "UDP 헤더 구조에 대한 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Source Port - 송신측 응용 프로세스 포트 번호 필드"
        },
        {
          "id": 2,
          "text": "Destination Port - 선택적 필드로 사용하지 않을 때는 Zero로 채워지는 필드"
        },
        {
          "id": 3,
          "text": "Checksum - 오류 검사를 위한 필드"
        },
        {
          "id": 4,
          "text": "Length - UDP 헤더와 데이터 부분을 포함한 데이터 그램의 길이를 나타내는 필드"
        }
      ],
      "correctId": 2
    },
    {
      "number": 5,
      "subject": "1과목 : TCP/IP",
      "stem": "프로토콜과 일반적으로 사용되는 포트번호(Well-Known Port)의 연결이 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "FTP : 21번"
        },
        {
          "id": 2,
          "text": "Telnet : 23번"
        },
        {
          "id": 3,
          "text": "HTTP : 180번"
        },
        {
          "id": 4,
          "text": "SMTP : 25번"
        }
      ],
      "correctId": 3
    },
    {
      "number": 6,
      "subject": "1과목 : TCP/IP",
      "stem": "사설 IP주소를 공인 IP주소로 바꿔주는데 사용하는 통신망의 주소 변환 기술로, 공인 IP주소를 절약하고, 내부 사설망을 이용하여 인터넷에 연결하므로 보안을 강화할 수 있는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "DHCP"
        },
        {
          "id": 2,
          "text": "ARP"
        },
        {
          "id": 3,
          "text": "BOOTP"
        },
        {
          "id": 4,
          "text": "NAT"
        }
      ],
      "correctId": 4
    },
    {
      "number": 7,
      "subject": "1과목 : TCP/IP",
      "stem": "Ethernet 같은 네트워크가 제공하는 브로드캐스트 기능을 사용하여 목적지 IP Address에 물리적 하드웨어 주소를 매핑시키는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "ARP"
        },
        {
          "id": 2,
          "text": "RARP"
        },
        {
          "id": 3,
          "text": "DNS"
        },
        {
          "id": 4,
          "text": "DHCP"
        }
      ],
      "correctId": 1
    },
    {
      "number": 8,
      "subject": "1과목 : TCP/IP",
      "stem": "SNMP에 대한 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "TCP를 이용하여 신뢰성 있는 통신을 한다."
        },
        {
          "id": 2,
          "text": "네트워크 관리를 위한 표준 프로토콜이다."
        },
        {
          "id": 3,
          "text": "응용 계층 프로토콜이다."
        },
        {
          "id": 4,
          "text": "RFC 1157에 규정되어 있다."
        }
      ],
      "correctId": 1
    },
    {
      "number": 9,
      "subject": "1과목 : TCP/IP",
      "stem": "다음 지문에 표기된 IPv6 주소는 요약된 표현이다. 보기 중 요약되기 전 상태는?",
      "images": [
        "assets/2023-11-05-1.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "2000:00AB:0001:0000:0001:0002"
        },
        {
          "id": 2,
          "text": "2000:00AB:0001:0000:0000:0000:0001:0002"
        },
        {
          "id": 3,
          "text": "2000:AB00:1000:0000:1000:2000"
        },
        {
          "id": 4,
          "text": "2000:AB00:1000:0000:0000:0000:1000:2000"
        }
      ],
      "correctId": 2
    },
    {
      "number": 10,
      "subject": "1과목 : TCP/IP",
      "stem": "네트워크와 서버를 관리하는 Kim 사원은 인터넷이 느려졌다는 민원을 받았다. 이를 해결하기 위해서 해당 ISP 주소쪽으로 명령어(A)를 입력하였더니 다소 지연이 있었음을 발견하였다. 이 사항을 확인하기 위해서 (A)에 들어가야 할 명령어는?(단, 윈도우 계열의 명령프롬프트(cmd)에서 실행하였다.)",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "nslookup"
        },
        {
          "id": 2,
          "text": "tracert"
        },
        {
          "id": 3,
          "text": "ping"
        },
        {
          "id": 4,
          "text": "traceroute"
        }
      ],
      "correctId": 2
    },
    {
      "number": 11,
      "subject": "1과목 : TCP/IP",
      "stem": "네트워크주소 ′210.212.100.0′과 서브넷마스크 ′255.255.255.224′인 네트워크에서 브로드캐스트 주소는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "210.212.100.30"
        },
        {
          "id": 2,
          "text": "210.212.100.31"
        },
        {
          "id": 3,
          "text": "210.212.102.32"
        },
        {
          "id": 4,
          "text": "210.212.103.64"
        }
      ],
      "correctId": 2
    },
    {
      "number": 12,
      "subject": "1과목 : TCP/IP",
      "stem": "IPv4 Address 중 네트워크 ID가 ′127′로 시작하는 주소의 용도는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "제한적 브로드캐스트 주소"
        },
        {
          "id": 2,
          "text": "B Class의 멀티캐스트 주소"
        },
        {
          "id": 3,
          "text": "C Class의 사설(Private) IP 주소"
        },
        {
          "id": 4,
          "text": "루프백(Loopback) 주소"
        }
      ],
      "correctId": 4
    },
    {
      "number": 13,
      "subject": "1과목 : TCP/IP",
      "stem": "ICMP(Internet Control Message Protocol)에 대한 설명 중 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "예외적으로 발생되는 이벤트에 대해 이를 알릴 수 있도록 지원하는 프로토콜이 없다."
        },
        {
          "id": 2,
          "text": "비대칭 프로토콜이고 TTL(Time To Live)를 제공한다."
        },
        {
          "id": 3,
          "text": "네트워크 망간 장비들의 오류 상황에 대해 공유할 수 있는 기능이 있다."
        },
        {
          "id": 4,
          "text": "호스트의 물리적 주소를 제공한다."
        }
      ],
      "correctId": 3
    },
    {
      "number": 14,
      "subject": "1과목 : TCP/IP",
      "stem": "네트워크 계층에서 IP(Internet Protocol)는 핵심 프로토콜이다. 단편화 작업 중 분할되는 Data를 구별하기 위한 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "DF Flag"
        },
        {
          "id": 2,
          "text": "서비스 타입"
        },
        {
          "id": 3,
          "text": "오프셋"
        },
        {
          "id": 4,
          "text": "TTL"
        }
      ],
      "correctId": 1
    },
    {
      "number": 15,
      "subject": "1과목 : TCP/IP",
      "stem": "(A) 안에 들어가는 용어 중 옳은 것은?",
      "images": [
        "assets/2023-11-05-2.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "L1 스위치"
        },
        {
          "id": 2,
          "text": "L2 스위치"
        },
        {
          "id": 3,
          "text": "L3 스위치"
        },
        {
          "id": 4,
          "text": "L4 스위치"
        }
      ],
      "correctId": 4
    },
    {
      "number": 16,
      "subject": "1과목 : TCP/IP",
      "stem": "네트워크를 관리하는 Kim은 사내 네트워크의 성능 향상을 위하여 MTU(Maximum Transmission Unit)를 고려하고 있다. 다음 중 MTU에 대한 설명 중 옳은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "인터넷 IPv4기준시 최소 1280 바이트의 값을 가진다."
        },
        {
          "id": 2,
          "text": "인터넷 IPv6기준시 최소 68 바이트의 값을 가진다."
        },
        {
          "id": 3,
          "text": "Ethernet 구현에서 대부분의 IP는 Ethernet V2 프레임의 형식이며 1500 바이트의 값을 가진다."
        },
        {
          "id": 4,
          "text": "MTU의 크기는 항상 1500 바이트로 고정되어 있다."
        }
      ],
      "correctId": 3
    },
    {
      "number": 17,
      "subject": "1과목 : TCP/IP",
      "stem": "TCP/IP에서 Multicast에 대한 설명으로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "하나의 호스트가 네트워크 내의 정해진 호스트 그룹으로 메시지를 보내는 것"
        },
        {
          "id": 2,
          "text": "하나의 호스트가 네트워크 내의 모든 호스트에게 메시지를 보내는 것"
        },
        {
          "id": 3,
          "text": "하나의 호스트가 네트워크 내의 하나의 호스트로 메시지를 보내는 것"
        },
        {
          "id": 4,
          "text": "하나의 호스트가 다시 자기 자신에게 메시지를 보내는 것"
        }
      ],
      "correctId": 1
    },
    {
      "number": 18,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음 (A) 안에 들어가는 용어 중 옳은 것은?",
      "images": [
        "assets/2023-11-05-3.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "VLAN"
        },
        {
          "id": 2,
          "text": "NAT"
        },
        {
          "id": 3,
          "text": "VPN"
        },
        {
          "id": 4,
          "text": "Public Network"
        }
      ],
      "correctId": 3
    },
    {
      "number": 19,
      "subject": "2과목 : 네트워크 일반",
      "stem": "전송을 받는 개체에서 발송지로부터 오는 데이터의 양이나 속도를 제한하는 프로토콜의 기능을 나타내는 용어는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "에러 제어"
        },
        {
          "id": 2,
          "text": "순서 제어"
        },
        {
          "id": 3,
          "text": "흐름 제어"
        },
        {
          "id": 4,
          "text": "접속 제어"
        }
      ],
      "correctId": 3
    },
    {
      "number": 20,
      "subject": "2과목 : 네트워크 일반",
      "stem": "IEEE 802 프로토콜의 연결이 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "IEEE 802.3 : 토큰 버스"
        },
        {
          "id": 2,
          "text": "IEEE 802.4 : 토큰 링"
        },
        {
          "id": 3,
          "text": "IEEE 802.11 : 무선 LAN"
        },
        {
          "id": 4,
          "text": "IEEE 802.5 : CSMA/CD"
        }
      ],
      "correctId": 3
    },
    {
      "number": 21,
      "subject": "2과목 : 네트워크 일반",
      "stem": "OSI 7 Layer 중 세션계층의 역할로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "대화 제어"
        },
        {
          "id": 2,
          "text": "에러 제어"
        },
        {
          "id": 3,
          "text": "연결 설정 종료"
        },
        {
          "id": 4,
          "text": "동기화"
        }
      ],
      "correctId": 2
    },
    {
      "number": 22,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음 중 무선LAN 보안을 위해 가장 강력한 방법은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "WEP(Wired Equivalent Privacy)"
        },
        {
          "id": 2,
          "text": "WPA(Wi-Fi Protected Access)"
        },
        {
          "id": 3,
          "text": "WPA2(IEEE802.11i)"
        },
        {
          "id": 4,
          "text": "MAC주소필터링"
        }
      ],
      "correctId": 3
    },
    {
      "number": 23,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음은 네트워크 구축에 필요한 매체에 관한 내용이다. 해당 내용에 대하여 잘못 서술된 항목은?",
      "images": [
        "assets/2023-11-05-4.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "단일모드(Single-mode)는 가격이 비싸고 고속전송에 유리하고 광섬유 접속이 상대적으로 쉬우므로 다중모드(Multi-mode)에 비해 단거리 전송에 유리하다."
        },
        {
          "id": 2,
          "text": "Optical Fiber Cable은 코어와 클래딩의 굴절률 차이에 의한 전반사 효과를 이용한 매체이다. 따라서 너무 작은 반경으로 케이블을 휘거나 접으면 매체의 특성상 통신회선으로 성능이 떨어지거나 없어진다."
        },
        {
          "id": 3,
          "text": "Optical Fiber Cable을 사용하는 경우 일반적으로 발광부와 수광부로 구성된 단방향 통신으로 구성되며, 양방향 통신을 하기 위해서는 2회선 이상이 필요하다."
        },
        {
          "id": 4,
          "text": "Optical Fiber Cable은 구조상 전기적인 신호가 아닌 광신호를 기반으로 동작하기 때문에 회사 내에 있는 프로토타입 작업실 및 테스트실 환경에서 발생하는 다양한 전자기장 잡음에 영향을 받지 않는다."
        }
      ],
      "correctId": 1
    },
    {
      "number": 24,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음은 이동 통신(디지털 셀룰러 시스템)에 관한 내용이다. (A) 안에 들어가는 용어 중 옳은 것은?",
      "images": [
        "assets/2023-11-05-5.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "기지국 제어기 (BSC, Base Station Controller)"
        },
        {
          "id": 2,
          "text": "홈 위치 등록기 (HLR, Home Location Register)"
        },
        {
          "id": 3,
          "text": "방문자 위치 등록기 (VLR, Visitor Location Register)"
        },
        {
          "id": 4,
          "text": "운용 보존국 (OMC, Operation and Maintenance Center)"
        }
      ],
      "correctId": 2
    },
    {
      "number": 25,
      "subject": "2과목 : 네트워크 일반",
      "stem": "(  ) 안에 공통으로 들어가는 것은?",
      "images": [
        "assets/2023-11-05-6.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "위키"
        },
        {
          "id": 2,
          "text": "블로그"
        },
        {
          "id": 3,
          "text": "플랫폼"
        },
        {
          "id": 4,
          "text": "클라우드"
        }
      ],
      "correctId": 4
    },
    {
      "number": 26,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음은 Home Network에 사용되는 기술 중 WPAN(Wireless Personal Area Network)에 대한 설명이다. (A),(B),(C) 안에 들어갈 표준을 순서대로 나열한 것은?",
      "images": [
        "assets/2023-11-05-7.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "802.11.1 – 802.11.3 – 802.11.4"
        },
        {
          "id": 2,
          "text": "802.11a – 802.11b – 802.11c"
        },
        {
          "id": 3,
          "text": "802.15.1 – 802.15.3 – 802.15.4"
        },
        {
          "id": 4,
          "text": "802.16.1 – 802.16.3 – 802.16.4"
        }
      ],
      "correctId": 3
    },
    {
      "number": 27,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음은 네트워크 시스템/장비 구축에 관한 내용이다. (A) 안에 들어가는 용어 중 옳은 것은?",
      "images": [
        "assets/2023-11-05-8.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "NAS (Network-Attached Storage)"
        },
        {
          "id": 2,
          "text": "SCSI (Small Computer System Interface)"
        },
        {
          "id": 3,
          "text": "DAS (Direct-Attached Storage)"
        },
        {
          "id": 4,
          "text": "RAID (Redundant Array of Independent Disks)"
        }
      ],
      "correctId": 1
    },
    {
      "number": 28,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에 좀비 프로세스가 많이 생겨 시스템을 재부팅하려고 한다. 현재 Linux 시스템에 접속해 있는 사용자에게 메시지를 전달하고, 5분 후에 시스템을 재부팅시키는 명령어는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "shutdown -r now 'Warning! After 5 minutes will be system shutdown!!'"
        },
        {
          "id": 2,
          "text": "shutdown now 'Warning! After 5 minutes will be system shutdown!!'"
        },
        {
          "id": 3,
          "text": "shutdown -r +5 'Warning! After 5 minutes will be system shutdown!!'"
        },
        {
          "id": 4,
          "text": "shutdown +5 'Warning! After 5 minutes will be system shutdown!!'"
        }
      ],
      "correctId": 3
    },
    {
      "number": 29,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에 있는 부트 로더로서 Linux 뿐만 아니라 다른 운영체제와의 멀티부팅 기능도 지원해주는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "CMOS"
        },
        {
          "id": 2,
          "text": "BASH"
        },
        {
          "id": 3,
          "text": "GRUB"
        },
        {
          "id": 4,
          "text": "ROOT"
        }
      ],
      "correctId": 3
    },
    {
      "number": 30,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016에서 지원하는 Hyper-V에 대한 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "하드웨어 사용율을 높여준다."
        },
        {
          "id": 2,
          "text": "서버 가용성이 줄어든다."
        },
        {
          "id": 3,
          "text": "유지비용을 줄일 수 있다."
        },
        {
          "id": 4,
          "text": "개발 및 테스트의 효율성을 향상시킨다."
        }
      ],
      "correctId": 2
    },
    {
      "number": 31,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에서 특정 파일의 권한이 ′-rwxr-x--x′ 이다. 이 파일에 대한 설명 중 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "소유자는 읽기 권한, 쓰기 권한, 실행 권한을 갖는다."
        },
        {
          "id": 2,
          "text": "소유자와 같은 그룹을 제외한 다른 모든 사용자는 실행 권한만을 갖는다."
        },
        {
          "id": 3,
          "text": "이 파일의 모드는 ′751′ 이다."
        },
        {
          "id": 4,
          "text": "동일한 그룹에 속한 사용자는 실행 권한만을 갖는다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 32,
      "subject": "3과목 : NOS",
      "stem": "서버 담당자 Park 사원은 데이터를 안전하게 보호하는 일을 담당하고 있다. 도난 발생 시 데이터를 보호하기 위해 강력한 암호화를 사용해 데이터를 보호하는 Windows 기능을 선택하여 로컬 보안이 없는 지사나 데이터센터의 경우 적절한 솔루션을 지원할 수 있도록 하고자 한다. 다음 중 이러한 기능을 지원하는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "BitLocker"
        },
        {
          "id": 2,
          "text": "NTLM"
        },
        {
          "id": 3,
          "text": "Encryption"
        },
        {
          "id": 4,
          "text": "vTPM"
        }
      ],
      "correctId": 1
    },
    {
      "number": 33,
      "subject": "3과목 : NOS",
      "stem": "웹서버 담당자 Kim은 디렉터리 리스팅 방지, 심볼릭 링크 사용방지, SSI(Server-Side Includes)사용 제한, CGI실행 디렉터리 제한 등의 보안 설정을 진행하려고 한다. Apache 서버의 설정 파일 이름은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "httpd.conf"
        },
        {
          "id": 2,
          "text": "httpd-default.conf"
        },
        {
          "id": 3,
          "text": "httpd-vhosts.conf"
        },
        {
          "id": 4,
          "text": "httpd-mpm.conf"
        }
      ],
      "correctId": 1
    },
    {
      "number": 34,
      "subject": "3과목 : NOS",
      "stem": "네트워크를 관리하는 Kim 사원은 네트워크 연결을 구축하거나 문제를 해결할 때 패킷이 출발지에서 목적지까지 가는 경로를 살펴볼 수 있도록 네트워크 명령어를 사용하고자 한다. 이 명령은 ′tracert′에서 수행하는 동일한 정보를 보여주면서 홉과 다른 세부 정보사이의 시간에 관한 정보를 출력이 끝날 때까지 저장한다. Kim 사원이 사용할 명령어는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "ping"
        },
        {
          "id": 2,
          "text": "nslookup"
        },
        {
          "id": 3,
          "text": "pathping"
        },
        {
          "id": 4,
          "text": "nbtstat"
        }
      ],
      "correctId": 3
    },
    {
      "number": 35,
      "subject": "3과목 : NOS",
      "stem": "Linux의 VI편집기를 이용하여 파일의 내용을 수정할 때, 다음 내용을 만족하는 치환명령문은?",
      "images": [
        "assets/2023-11-05-9.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": ":10,20s/old/new"
        },
        {
          "id": 2,
          "text": ":10,20s/old/new/g"
        },
        {
          "id": 3,
          "text": ":10,20r/old/new"
        },
        {
          "id": 4,
          "text": ":10,20r/old/new/a"
        }
      ],
      "correctId": 2
    },
    {
      "number": 36,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에서 일반적으로 사용자 암호 정보를 가지는 디렉터리는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "/etc"
        },
        {
          "id": 2,
          "text": "/sbin"
        },
        {
          "id": 3,
          "text": "/home"
        },
        {
          "id": 4,
          "text": "/lib"
        }
      ],
      "correctId": 1
    },
    {
      "number": 37,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016의 ′netstat′ 명령 중 라우팅 테이블을 확인할 수 있는 명령 옵션은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "netstat –a"
        },
        {
          "id": 2,
          "text": "netstat –r"
        },
        {
          "id": 3,
          "text": "netstat –n"
        },
        {
          "id": 4,
          "text": "netstat -s"
        }
      ],
      "correctId": 2
    },
    {
      "number": 38,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템 프로세스들의 전반적인 상태를 실시간으로 관리하거나 시스템 사용량을 모니터링할 수 있는 명령어는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "ps"
        },
        {
          "id": 2,
          "text": "top"
        },
        {
          "id": 3,
          "text": "kill"
        },
        {
          "id": 4,
          "text": "nice"
        }
      ],
      "correctId": 2
    },
    {
      "number": 39,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016의 이벤트 뷰어에서 보안 로그 필터링 시 사용할 수 있는 이벤트 수준으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "중요"
        },
        {
          "id": 2,
          "text": "경고"
        },
        {
          "id": 3,
          "text": "오류"
        },
        {
          "id": 4,
          "text": "정보"
        }
      ],
      "correctId": 1
    },
    {
      "number": 40,
      "subject": "3과목 : NOS",
      "stem": "서버 관리자 Kim 사원은 BIND를 설치하고 정상적인 서비스를 위하여 환경설정 파일인 ′/etc/named.conf′ 파일의 내용을 수정하려고 한다. 환경설정 항목에 대한 설명으로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "′listen-on′은 네임 서버에 접속이 허용된 컴퓨터의 IP주소와 포트를 설정한다."
        },
        {
          "id": 2,
          "text": "′directory′는 네임 서버의 환경설정 파일이 위치하는 절대경로를 설정한다."
        },
        {
          "id": 3,
          "text": "′dump-file′은 도매인 정보의 오류 정보를 출력할 때 사용하는 파일을 설정한다."
        },
        {
          "id": 4,
          "text": "′allow-query′는 클라이언트에 대한 도메인 이름 요청의 허용 여부를 설정한다."
        }
      ],
      "correctId": 1
    },
    {
      "number": 41,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016에서 Windows의 서버 코어 버전과 Hyper-V 서버 2016에서 제공하는 기능으로, 이 기능은 Windows에서 가장 일반적인 작업을 수행하는 시간을 줄여주는 간단한 인터페이스를 갖는 커맨드라인이다. 직관적인 숫자 메뉴를 통해 Windows 구성을 수월하게 수행할 수 있는 이 기능은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "ipconfig"
        },
        {
          "id": 2,
          "text": "ifconfig"
        },
        {
          "id": 3,
          "text": "sconfig"
        },
        {
          "id": 4,
          "text": "msconfig"
        }
      ],
      "correctId": 3
    },
    {
      "number": 42,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016의 그룹계정에 대한 설명이다. 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Administrators 그룹은 모든 권한을 가지는 그룹으로서 일반사용자를 이 그룹에 소속시키면 Administrator와 동일한 권한을 갖는다."
        },
        {
          "id": 2,
          "text": "Backup Operators 그룹은 파일을 백업하고 복구할 수 있는 권한을 갖는다."
        },
        {
          "id": 3,
          "text": "Guests 그룹은 로그인할 때 임시 프로필을 만들고 로그아웃하면 삭제되고, 기본적으로는 사용하지 않도록 설정하는 그룹이다."
        },
        {
          "id": 4,
          "text": "Users 그룹은 사용자 계정을 생성하면 기본적으로 소속되는 그룹으로 시스템 수준의 변경의 권한을 갖는다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 43,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템의 vi 에디터를 사용하여 텍스트를 입력한 후 저장하지 않았을 때, 바로 종료가 되지 않는 명령은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": ":wq"
        },
        {
          "id": 2,
          "text": ":wq!"
        },
        {
          "id": 3,
          "text": ":q!"
        },
        {
          "id": 4,
          "text": ":q"
        }
      ],
      "correctId": 4
    },
    {
      "number": 44,
      "subject": "3과목 : NOS",
      "stem": "서버관리자 Kim씨는 서버에 대한 상태를 확인하기 위해 ′/etc/check.sh′ 스크립트를 작성하였다. 해당 스크립트를 매주 월요일 오전 10시에 실행시키려고 할때, crontab 파일 설정으로 알맞은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "10 0 * * 1 /etc/check.sh"
        },
        {
          "id": 2,
          "text": "0 10 * * 1 /etc/check.sh"
        },
        {
          "id": 3,
          "text": "10 0 * * 0 /etc/check.sh"
        },
        {
          "id": 4,
          "text": "0 10 * * 0 /etc/check.sh"
        }
      ],
      "correctId": 2
    },
    {
      "number": 45,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016에서 클라이언트의 Host Name, IP 주소, 서브넷 마스크, DNS Server, 기본 게이트웨이 등의 설정 사항을 볼 수 있는 명령어는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "arp –a"
        },
        {
          "id": 2,
          "text": "ipconfig /all"
        },
        {
          "id": 3,
          "text": "convert"
        },
        {
          "id": 4,
          "text": "netstat"
        }
      ],
      "correctId": 2
    },
    {
      "number": 46,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "현재 LAN 카드의 MAC Address는 몇 비트의 번호체계인가?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "32 비트"
        },
        {
          "id": 2,
          "text": "48 비트"
        },
        {
          "id": 3,
          "text": "64 비트"
        },
        {
          "id": 4,
          "text": "128 비트"
        }
      ],
      "correctId": 2
    },
    {
      "number": 47,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "RAID 시스템 중 한 드라이브에 기록되는 모든 데이터를 다른 드라이브에 복사해 놓는 방법으로 복구 능력을 제공하며, ′Mirroring′으로 불리는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "RAID 0"
        },
        {
          "id": 2,
          "text": "RAID 1"
        },
        {
          "id": 3,
          "text": "RAID 3"
        },
        {
          "id": 4,
          "text": "RAID 4"
        }
      ],
      "correctId": 2
    },
    {
      "number": 48,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "기존의 IP Routing 데이터 전송 방식과 다르게, 데이터의 목적지 IP 주소를 확인하는 대신 ′Label′이라고 불리는 패킷에 더해진 식별자를 확인하여 목적지까지 데이터를 전달 및 포워딩을 실시하며, 짧고 고정된 길이의 라벨을 이용하여 L2 스위칭에 의해 고속으로 패킷을 전달하는 기술은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "VPN(Virtual Private Network)"
        },
        {
          "id": 2,
          "text": "MSPP(Multiservice Provisioning Platform)"
        },
        {
          "id": 3,
          "text": "MPLS(Multiprotocol Label Switching)"
        },
        {
          "id": 4,
          "text": "ROUTER"
        }
      ],
      "correctId": 3
    },
    {
      "number": 49,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "과거 IP관리 시스템에서 발전한 솔루션으로서 네트워크 통제를 강화한, 아래 설명하는 시스템은 무엇인가?",
      "images": [
        "assets/2023-11-05-10.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "F/W(Firewall)"
        },
        {
          "id": 2,
          "text": "IDS(Intrusion Detection System)"
        },
        {
          "id": 3,
          "text": "IPS(Intrusion Prevention System)"
        },
        {
          "id": 4,
          "text": "NAC(Network Access Control)"
        }
      ],
      "correctId": 4
    },
    {
      "number": 50,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "라우터에서 ′show running-config′ 란 명령어로 내용을 확인할 수 있는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "ROM"
        },
        {
          "id": 2,
          "text": "RAM"
        },
        {
          "id": 3,
          "text": "NVRAM"
        },
        {
          "id": 4,
          "text": "FLASH"
        }
      ],
      "correctId": 2
    }
  ],
  "2023-08-20": [
    {
      "number": 1,
      "subject": "1과목 : TCP/IP",
      "stem": "다음 설명하는 내용에 가장 적합한 기술을 고르시오.",
      "images": [
        "assets/2023-08-20-1.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "SSL"
        },
        {
          "id": 2,
          "text": "NAT"
        },
        {
          "id": 3,
          "text": "VPN"
        },
        {
          "id": 4,
          "text": "IDS"
        }
      ],
      "correctId": 2
    },
    {
      "number": 2,
      "subject": "1과목 : TCP/IP",
      "stem": "다음은 라우터의 경로 결정 시 routing table을 참조하여 패킷을 전달하는 과정에 대한 설명이다. 올바른 것은?",
      "images": [
        "assets/2023-08-20-2.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "Administrative distance (관리거리)"
        },
        {
          "id": 2,
          "text": "Longest match rule (롱기스트 매치 룰)"
        },
        {
          "id": 3,
          "text": "Next-hop address (넥스트홉 주소)"
        },
        {
          "id": 4,
          "text": "Metric (메트릭)"
        }
      ],
      "correctId": 2
    },
    {
      "number": 3,
      "subject": "1과목 : TCP/IP",
      "stem": "(A) 안에 들어가는 용어 중 옳은 것은?",
      "images": [
        "assets/2023-08-20-3.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "ARP"
        },
        {
          "id": 2,
          "text": "Proxy ARP"
        },
        {
          "id": 3,
          "text": "Inverse ARP"
        },
        {
          "id": 4,
          "text": "Reverse ARP"
        }
      ],
      "correctId": 4
    },
    {
      "number": 4,
      "subject": "1과목 : TCP/IP",
      "stem": "OSI 7 layer 참조 모델에서 사용되는 Protocols 중 TCP와 UDP port를 함께 사용하는 프로토콜은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "SMTP"
        },
        {
          "id": 2,
          "text": "FTP"
        },
        {
          "id": 3,
          "text": "DNS"
        },
        {
          "id": 4,
          "text": "Telnet"
        }
      ],
      "correctId": 3
    },
    {
      "number": 5,
      "subject": "1과목 : TCP/IP",
      "stem": "TCP/IP protocol stack에서 사용되는 SNMP 프로토콜의 기능으로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "대규모 환경의 망 관리 기능"
        },
        {
          "id": 2,
          "text": "네트워크 장비의 에러 보고 기능"
        },
        {
          "id": 3,
          "text": "네트워크 장비의 관리 및 감시 기능"
        },
        {
          "id": 4,
          "text": "호스트 간에 연결성 점검과 네트워크 혼잡 제어 기능"
        }
      ],
      "correctId": 3
    },
    {
      "number": 6,
      "subject": "1과목 : TCP/IP",
      "stem": "HTTP 상태코드에 대한 설명으로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "100번대 : 성공, 메소드 지시대로 요청을 성공적으로 수행"
        },
        {
          "id": 2,
          "text": "200번대 : 정보 제공, 요청 계속 또는 사용 프로토콜 변경 지시"
        },
        {
          "id": 3,
          "text": "300번대 : 리다이렉션, 요청 수행완료를 위해서 추가적인 작업 필요"
        },
        {
          "id": 4,
          "text": "400번대 : 서버에러, 클라이언트 요청은 유효하나 서버 자체의 문제 발생"
        }
      ],
      "correctId": 3
    },
    {
      "number": 7,
      "subject": "1과목 : TCP/IP",
      "stem": "ICMP의 Message Type에 대한 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "0 - Echo Reply"
        },
        {
          "id": 2,
          "text": "5 - Echo Request"
        },
        {
          "id": 3,
          "text": "13 - Timestamp Request"
        },
        {
          "id": 4,
          "text": "17 - Address Mask Request"
        }
      ],
      "correctId": 2
    },
    {
      "number": 8,
      "subject": "1과목 : TCP/IP",
      "stem": "CSMA/CD의 특징으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "충돌 도메인이 작을수록 좋다."
        },
        {
          "id": 2,
          "text": "충돌이 발생하면 임의의 시간 동안 대기하므로 지연 시간을 예측하기 어렵다."
        },
        {
          "id": 3,
          "text": "네트워크상의 컴퓨터들이 데이터 전송을 개시하기 위해서는 반드시 '토큰'이라는 권한을 가지고 있어야 한다."
        },
        {
          "id": 4,
          "text": "컴퓨터들은 케이블의 데이터 흐름 유무를 감시하기 위해 특정 신호를 주기적으로 보낸다."
        }
      ],
      "correctId": 3
    },
    {
      "number": 9,
      "subject": "1과목 : TCP/IP",
      "stem": "OSPF 프로토콜이 최단경로 탐색에 사용하는 기본 알고리즘은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Bellman-Ford 알고리즘"
        },
        {
          "id": 2,
          "text": "Dijkstra 알고리즘"
        },
        {
          "id": 3,
          "text": "거리 벡터 라우팅 알고리즘"
        },
        {
          "id": 4,
          "text": "Floyd-Warshall 알고리즘"
        }
      ],
      "correctId": 2
    },
    {
      "number": 10,
      "subject": "1과목 : TCP/IP",
      "stem": "멀티캐스트(Multicast)에 사용되는 IP Class는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "A Class"
        },
        {
          "id": 2,
          "text": "B Class"
        },
        {
          "id": 3,
          "text": "C Class"
        },
        {
          "id": 4,
          "text": "D Class"
        }
      ],
      "correctId": 4
    },
    {
      "number": 11,
      "subject": "1과목 : TCP/IP",
      "stem": "프로토콜의 기본적인 기능 중, 송신기에서 발생된 정보의 정확한 전송을 위해 사용자 정보의 앞, 뒤 부분에 헤더와 트레일러를 부가하는 과정은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "캡슐화(Encapsulation)"
        },
        {
          "id": 2,
          "text": "동기화(Synchronization)"
        },
        {
          "id": 3,
          "text": "다중화(Multiplexing)"
        },
        {
          "id": 4,
          "text": "주소지정(Addressing)"
        }
      ],
      "correctId": 1
    },
    {
      "number": 12,
      "subject": "1과목 : TCP/IP",
      "stem": "TCP 3-Way Handshaking 연결수립 절차의 1,2,3단계 중 3단계에서 사용되는 TCP 제어 Flag는 무엇인가?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "SYN"
        },
        {
          "id": 2,
          "text": "RST"
        },
        {
          "id": 3,
          "text": "SYN, ACK"
        },
        {
          "id": 4,
          "text": "ACK"
        }
      ],
      "correctId": 4
    },
    {
      "number": 13,
      "subject": "1과목 : TCP/IP",
      "stem": "TCP/IP 에서 Broadcast의 의미는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "메시지를 한 호스트에서 다른 한 호스트로 전송하는 것"
        },
        {
          "id": 2,
          "text": "메시지를 한 호스트에서 망상의 특정 그룹 호스트들로 전송하는 것"
        },
        {
          "id": 3,
          "text": "메시지를 한 호스트에서 망상의 모든 호스트들로 전송하는 것"
        },
        {
          "id": 4,
          "text": "메시지를 한 호스트에서 가장 가까이 있는 특정 그룹 호스트들로 전송하는 것"
        }
      ],
      "correctId": 3
    },
    {
      "number": 14,
      "subject": "1과목 : TCP/IP",
      "stem": "서브넷 마스크에 대한 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "A Class는 기본 서브넷 마스크로 ′255.0.0.0′을 이용한다."
        },
        {
          "id": 2,
          "text": "B Class에서 두 개의 네트워크로 나누고자 한다면, 실제 서브넷 마스크는 ′255.255.128.0′이 된다."
        },
        {
          "id": 3,
          "text": "C Class는 기본 서브넷 마스크로 ′255.255.255.0′을 이용한다."
        },
        {
          "id": 4,
          "text": "C Class에서 다섯 개의 네트워크로 나누고자 한다면, 실제 서브넷 마스크는 ′255.255.224.0′이 된다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 15,
      "subject": "1과목 : TCP/IP",
      "stem": "IGMP(Internet Group Management Protocol)에 대한 설명으로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "OSI 모델 중 4계층 프로토콜이다."
        },
        {
          "id": 2,
          "text": "비대칭 프로토콜로써 TTL(Time to Live)를 제공하지 않는다."
        },
        {
          "id": 3,
          "text": "로컬 네트워크상의 멀티캐스팅 그룹제어를 수행하기 위한 프로토콜이다."
        },
        {
          "id": 4,
          "text": "데이터의 유니캐스팅에 적합한 프로토콜이다."
        }
      ],
      "correctId": 3
    },
    {
      "number": 16,
      "subject": "1과목 : TCP/IP",
      "stem": "IP (Internet protocol)에 대한 특징을 설명하였다. 올바른 것을 고르시오.",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "호스트 간 패킷 전달의 신뢰성을 보장한다."
        },
        {
          "id": 2,
          "text": "손실된 패킷을 재전송을 요청할 수 있다."
        },
        {
          "id": 3,
          "text": "호스트 간에 패킷 교환에서 흐름제어를 할 수 있다."
        },
        {
          "id": 4,
          "text": "MUT 값보다 큰 Datagram은 단편화(Fragmentation) 작업을 수행할 수 있다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 17,
      "subject": "1과목 : TCP/IP",
      "stem": "호스트의 IP Address가 ′201.100.5.68/28′ 일 때, Network ID로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "201.100.5.32"
        },
        {
          "id": 2,
          "text": "201.100.5.0"
        },
        {
          "id": 3,
          "text": "201.100.5.64"
        },
        {
          "id": 4,
          "text": "201.100.5.31"
        }
      ],
      "correctId": 3
    },
    {
      "number": 18,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음은 무선 네트워크에 관한 내용이다. (A) 안에 들어가는 용어 중 옳은 것은?",
      "images": [
        "assets/2023-08-20-4.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "WMN (Wireless Mesh Network)"
        },
        {
          "id": 2,
          "text": "UWB (Ultra Wide Band)"
        },
        {
          "id": 3,
          "text": "WPAN (Wireless Personal Area Network)"
        },
        {
          "id": 4,
          "text": "CAN (Campus Area Network)"
        }
      ],
      "correctId": 1
    },
    {
      "number": 19,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음은 네트워크 구축에 필요한 매체에 관한 내용이다. (A) 안에 들어가는 용어 중 옳은 것은?",
      "images": [
        "assets/2023-08-20-5.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "U/UTP CAT.3"
        },
        {
          "id": 2,
          "text": "Thin Coaxial Cable"
        },
        {
          "id": 3,
          "text": "U/FTP CAT.5"
        },
        {
          "id": 4,
          "text": "Optical Fiber Cable"
        }
      ],
      "correctId": 4
    },
    {
      "number": 20,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음의 (A)에 들어갈 알맞은 용어는 무엇인가?",
      "images": [
        "assets/2023-08-20-6.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "NFV (Network Functions Virtualization)"
        },
        {
          "id": 2,
          "text": "WMN (Wireless Mesh Network)"
        },
        {
          "id": 3,
          "text": "VPN (Virtual Private Network)"
        },
        {
          "id": 4,
          "text": "CDN (Content Delivery Network)"
        }
      ],
      "correctId": 1
    },
    {
      "number": 21,
      "subject": "2과목 : 네트워크 일반",
      "stem": "(A) 안에 맞는 용어로 옳은 것은?",
      "images": [
        "assets/2023-08-20-7.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "QoS (Quality of Service)"
        },
        {
          "id": 2,
          "text": "F/W (Fire Wall)"
        },
        {
          "id": 3,
          "text": "IPS (Intrusion Prevention System)"
        },
        {
          "id": 4,
          "text": "IDS ( Intrusion Detection System)"
        }
      ],
      "correctId": 1
    },
    {
      "number": 22,
      "subject": "2과목 : 네트워크 일반",
      "stem": "아래 내용에서 IPv6의 일반적인 특징만을 나열한 것은?",
      "images": [
        "assets/2023-08-20-8.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "A, B, C, D"
        },
        {
          "id": 2,
          "text": "A, C, D, E"
        },
        {
          "id": 3,
          "text": "B, C, D, E"
        },
        {
          "id": 4,
          "text": "B, D, E, F"
        }
      ],
      "correctId": 2
    },
    {
      "number": 23,
      "subject": "2과목 : 네트워크 일반",
      "stem": "LAN의 구성형태 중 중앙의 제어점으로부터 모든 기기가 점 대 점(Point to Point) 방식으로 연결된 구성형태는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "링형 구성"
        },
        {
          "id": 2,
          "text": "스타형 구성"
        },
        {
          "id": 3,
          "text": "버스형 구성"
        },
        {
          "id": 4,
          "text": "트리형 구성"
        }
      ],
      "correctId": 2
    },
    {
      "number": 24,
      "subject": "2과목 : 네트워크 일반",
      "stem": "OSI 7 Layer에서 암호/복호, 인증, 압축 등의 기능이 수행되는 계층은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Transport Layer"
        },
        {
          "id": 2,
          "text": "Datalink Layer"
        },
        {
          "id": 3,
          "text": "Presentation Layer"
        },
        {
          "id": 4,
          "text": "Application Layer"
        }
      ],
      "correctId": 3
    },
    {
      "number": 25,
      "subject": "2과목 : 네트워크 일반",
      "stem": "파장분할다중화방식(WDM)의 특징으로 옳은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "선로의 증설 없이 회선의 증설이 어렵다."
        },
        {
          "id": 2,
          "text": "광증폭기를 사용해 무중계 장거리 전송이 가능하다."
        },
        {
          "id": 3,
          "text": "광학적인 방법에 의해 신호를 시간축에서 다중화하는 방식이다."
        },
        {
          "id": 4,
          "text": "각각의 채널은 같은 전송 형식, 전송속도, 프로토콜 형식을 가진다."
        }
      ],
      "correctId": 2
    },
    {
      "number": 26,
      "subject": "2과목 : 네트워크 일반",
      "stem": "VPN(Virtual Private Network)의 구현 기술 중 인터넷 네트워크 상에서 두 호스트 지점 간에 외부의 영향을 받지 않고 가상 경로를 설정해 주는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Tunneling"
        },
        {
          "id": 2,
          "text": "Authentication"
        },
        {
          "id": 3,
          "text": "Encryption"
        },
        {
          "id": 4,
          "text": "Access Control"
        }
      ],
      "correctId": 1
    },
    {
      "number": 27,
      "subject": "2과목 : 네트워크 일반",
      "stem": "IEEE 802 표준과 전송방식이 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "IEEE 802.2 - Wireless LAN"
        },
        {
          "id": 2,
          "text": "IEEE 802.3 - CSMA/CD"
        },
        {
          "id": 3,
          "text": "IEEE 802.4 - Token Bus"
        },
        {
          "id": 4,
          "text": "IEEE 802.5 - Token Ring"
        }
      ],
      "correctId": 1
    },
    {
      "number": 28,
      "subject": "3과목 : NOS",
      "stem": "FTP는 원격 서버에 파일을 주고받을 때 사용하는 프로토콜이다. FTP는 2가지 Mode로 구분되는데, 서버에서 따로 포트 대역을 설정해주고 서버는 임의로 지정된 데이터 포트정보를 클라이언트에 보내 클라이언트에서 해당 포트로 접속하는 방식은 무엇인가?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Active Mode"
        },
        {
          "id": 2,
          "text": "Passive Mode"
        },
        {
          "id": 3,
          "text": "Privileges Mode"
        },
        {
          "id": 4,
          "text": "Proxy Mode"
        }
      ],
      "correctId": 2
    },
    {
      "number": 29,
      "subject": "3과목 : NOS",
      "stem": "서버 관리자 Kim 사원이 리눅스서버(하드웨어)의 HDD 증설을 위해 서버를 종료하기로 하였다. 이에 리눅스서버를 종료하기 위한 명령어가 아닌 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "shutdown –h now"
        },
        {
          "id": 2,
          "text": "poweroff"
        },
        {
          "id": 3,
          "text": "init 6"
        },
        {
          "id": 4,
          "text": "halt"
        }
      ],
      "correctId": 3
    },
    {
      "number": 30,
      "subject": "3과목 : NOS",
      "stem": "서버 관리자 Kim 사원은 DNS 서버를 구축하고자 ′yum′ 을 이용하여 bind를 설치하였으나 설치가 되지 않았다. 이에 ping를 이용하여 외부 네트워크 상태 여부를 확인하였으나 정상이었다. 이에 DNS 서버 주소가 잘못되어 있을 것으로 판단하여 ′cat /etc/( A )′ 내용을 확인하고 수정하였다. ( A )에 해당하는 파일 이름은 무엇인가?",
      "images": [
        "assets/2023-08-20-9.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "resolv.conf"
        },
        {
          "id": 2,
          "text": "networks"
        },
        {
          "id": 3,
          "text": "protocols"
        },
        {
          "id": 4,
          "text": "services"
        }
      ],
      "correctId": 1
    },
    {
      "number": 31,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016의 DNS관리에서 아래 지문과 같은 DNS 설정 방식은?",
      "images": [
        "assets/2023-08-20-10.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "Round Robin"
        },
        {
          "id": 2,
          "text": "Cache Plugin"
        },
        {
          "id": 3,
          "text": "Cache Server"
        },
        {
          "id": 4,
          "text": "Azure AutoScaling"
        }
      ],
      "correctId": 1
    },
    {
      "number": 32,
      "subject": "3과목 : NOS",
      "stem": "′netstat′ 명령어에 사용하는 옵션 설명에 대해 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "-r : 라우팅 테이블을 표시한다."
        },
        {
          "id": 2,
          "text": "-p : PID와 사용중인 프로그램명을 출력한다."
        },
        {
          "id": 3,
          "text": "-t : 연결된 이후에 시간을 표시한다."
        },
        {
          "id": 4,
          "text": "-y : 모든 연결에 대한 TCP 연결 템플릿을 표시한다."
        }
      ],
      "correctId": 3
    },
    {
      "number": 33,
      "subject": "3과목 : NOS",
      "stem": "다음과 같이 파일의 원래 권한은 유지한 채로 모든 사용자들에게 쓰기 가능한 권한을 추가부여할 때, 결과가 다른 명령어는 무엇인가?",
      "images": [
        "assets/2023-08-20-11.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "chmod 666 file"
        },
        {
          "id": 2,
          "text": "chmod a+w file"
        },
        {
          "id": 3,
          "text": "chmod ugo+w file"
        },
        {
          "id": 4,
          "text": "chmod go=w file"
        }
      ],
      "correctId": 4
    },
    {
      "number": 34,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에서 기존에 설정된 ′crontab′을 삭제하려고 할 때 올바른 명령어는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "crontab –u"
        },
        {
          "id": 2,
          "text": "crontab –e"
        },
        {
          "id": 3,
          "text": "crontab –l"
        },
        {
          "id": 4,
          "text": "crontab -r"
        }
      ],
      "correctId": 4
    },
    {
      "number": 35,
      "subject": "3과목 : NOS",
      "stem": "다음의 내용이 설명하고 있는 Linux 시스템 디렉터리는?",
      "images": [
        "assets/2023-08-20-12.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "/home"
        },
        {
          "id": 2,
          "text": "/usr"
        },
        {
          "id": 3,
          "text": "/var"
        },
        {
          "id": 4,
          "text": "/tmp"
        }
      ],
      "correctId": 3
    },
    {
      "number": 36,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에서 사용되고 있는 메모리양과 사용 가능한 메모리 양, 공유 메모리와 가상 메모리에 대한 정보를 볼 수 있는 명령어는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "mem"
        },
        {
          "id": 2,
          "text": "free"
        },
        {
          "id": 3,
          "text": "du"
        },
        {
          "id": 4,
          "text": "cat"
        }
      ],
      "correctId": 2
    },
    {
      "number": 37,
      "subject": "3과목 : NOS",
      "stem": "다음 중 Linux의 명령어 해석기는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Shell"
        },
        {
          "id": 2,
          "text": "Kernel"
        },
        {
          "id": 3,
          "text": "Utility Program"
        },
        {
          "id": 4,
          "text": "Hierarchical File System"
        }
      ],
      "correctId": 1
    },
    {
      "number": 38,
      "subject": "3과목 : NOS",
      "stem": "Linux에서 DNS의 SOA(Start Of Authority) 레코드에 대한 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Zone 파일은 항상 SOA로 시작한다."
        },
        {
          "id": 2,
          "text": "해당 Zone에 대한 네임서버를 유지하기 위한 기본적인 자료가 저장된다."
        },
        {
          "id": 3,
          "text": "Refresh는 주 서버와 보조 서버의 동기 주기를 설정한다."
        },
        {
          "id": 4,
          "text": "TTL 값이 길면 DNS의 부하가 늘어난다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 39,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016의 DNS Server 역할에서 지원하는 ′역방향 조회′에 대한 설명으로 옳은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "클라이언트가 정규화된 도메인 이름을 제공하면 IP주소를 반환하는 것"
        },
        {
          "id": 2,
          "text": "클라이언트가 IP주소를 제공하면 도메인을 반환하는 것"
        },
        {
          "id": 3,
          "text": "클라이언트가 도메인을 제공하면 라운드로빈 방식으로 IP를 반환하는 것"
        },
        {
          "id": 4,
          "text": "클라이언트가 도메인을 제공하면 하위 도메인을 반환하는 것"
        }
      ],
      "correctId": 2
    },
    {
      "number": 40,
      "subject": "3과목 : NOS",
      "stem": "Linux Apache 웹서버에 사용자가 접속 후, 80초간 사용자가 요청이 없을 경우 세션을 종료시키도록 ′httpd.conf′ 파일에서 설정하는 옵션값은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Exec-timeout 80"
        },
        {
          "id": 2,
          "text": "Listen 80"
        },
        {
          "id": 3,
          "text": "KeepAliveTimeout 80"
        },
        {
          "id": 4,
          "text": "NameVirtualHost 80"
        }
      ],
      "correctId": 3
    },
    {
      "number": 41,
      "subject": "3과목 : NOS",
      "stem": "서버 관리자 Park 사원은 Linux 서버를 관리하면서 특정 조건에 맞는 파일 및 디렉터리를 검색하기 위해 ′find′ 명령어를 사용하려고 한다. ′find′ 명령어의 주요 옵션에 대한 설명으로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "′-name′은 지정한 사용자 이름에 해당하는 파일이나 디렉터리를 찾는다."
        },
        {
          "id": 2,
          "text": "′-type′은 지정한 디렉터리 종류에 해당하는 디렉터리 유형을 찾는다."
        },
        {
          "id": 3,
          "text": "′-perm′은 지정한 소유자의 권한만을 고려하여 파일이나 디렉터리를 찾는다."
        },
        {
          "id": 4,
          "text": "′-exec′은 찾은 파일에 대한 삭제 등의 추가적인 명령을 실행할 수 있다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 42,
      "subject": "3과목 : NOS",
      "stem": "서버 담당자 Seo 사원은 Windows Server 2016의 이벤트 뷰어를 통해 서버의 상태를 점검하려고 한다. Windows 로그에 해당하는 항목으로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "하드웨어 이벤트"
        },
        {
          "id": 2,
          "text": "인터넷 익스플로러"
        },
        {
          "id": 3,
          "text": "윈도우즈 파워셸"
        },
        {
          "id": 4,
          "text": "응용 프로그램"
        }
      ],
      "correctId": 4
    },
    {
      "number": 43,
      "subject": "3과목 : NOS",
      "stem": "Linux 운영체제에서 하드웨어 메모리가 가득 차게 되면 논리적인 메모리 저장공간 역할을 수행하게 되는 파티션의 이름은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "SWAP"
        },
        {
          "id": 2,
          "text": "FAT32"
        },
        {
          "id": 3,
          "text": "RAID"
        },
        {
          "id": 4,
          "text": "LVM"
        }
      ],
      "correctId": 1
    },
    {
      "number": 44,
      "subject": "3과목 : NOS",
      "stem": "서버 담당자 Park 사원은 Windows Server 2016의 장애를 대비하여 인증서 키를 백업해 놓았다. 이 인증서 키를 실행창에서 명령어를 통해 복원시키고자 하는데 인증서 관리자를 호출할 수 있는 명령어는 무엇인가?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "eventvwr.msc"
        },
        {
          "id": 2,
          "text": "compmgmt.msc"
        },
        {
          "id": 3,
          "text": "secpol.msc"
        },
        {
          "id": 4,
          "text": "certmgr.msc"
        }
      ],
      "correctId": 4
    },
    {
      "number": 45,
      "subject": "3과목 : NOS",
      "stem": "서버 담당자 Park 사원은 Windows Server 2016에서 다음 조건에 맞는 서비스를 구축하고자 한다. 이에 알맞은 것은?",
      "images": [
        "assets/2023-08-20-13.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "Multihoming"
        },
        {
          "id": 2,
          "text": "DirectAccess"
        },
        {
          "id": 3,
          "text": "VPN"
        },
        {
          "id": 4,
          "text": "Hyper-V"
        }
      ],
      "correctId": 1
    },
    {
      "number": 46,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "L2 LAN 스위치가 이더넷 프레임을 중계 처리할 때 사용하는 주소는 무엇인가?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "MAC 주소"
        },
        {
          "id": 2,
          "text": "IP 주소"
        },
        {
          "id": 3,
          "text": "Post 주소"
        },
        {
          "id": 4,
          "text": "URL 주소"
        }
      ],
      "correctId": 1
    },
    {
      "number": 47,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "게이트웨이(Gateway)의 역할로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "전혀 다른 프로토콜을 채용한 네트워크 간의 인터페이스이다."
        },
        {
          "id": 2,
          "text": "트위스트 페어 케이블 사용 시 이용되는 네트워크 케이블 집선 장치이다."
        },
        {
          "id": 3,
          "text": "케이블의 중계점에서 신호를 전기적으로 증폭한다."
        },
        {
          "id": 4,
          "text": "피지컬 어드레스의 캐시 테이블을 갖는다."
        }
      ],
      "correctId": 1
    },
    {
      "number": 48,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "RAID는 Redundant Array of Independent Disk 혹은 Redundant Array of Inexpensive Disk의 약자로 말 그대로 여러개의 디스크를 묶어 하나의 디스크처럼 사용하는 기술이다. 그러면 다음에서 RAID Level 0(영)의 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "최소 2개의 디스크에 데이터를 동시에 분산 저장한다."
        },
        {
          "id": 2,
          "text": "디스크에 데이터를 분산저장하기 때문에 처리속도가 향상된다."
        },
        {
          "id": 3,
          "text": "스트라이핑(Striping)이라고도 부르는 방식이다."
        },
        {
          "id": 4,
          "text": "2개의 디스크 중 하나만 손상되면 전체 데이터 복구가 가능하다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 49,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "신뢰하지 않는 외부 네트워크와 신뢰하는 내부 네트워크 사이를 지나는 패킷을 미리 정한 규칙에 따라 차단하거나 보내주는 기능을 하는 하드웨어나 소프트웨어를 방화벽(Firewall) 이라고 한다. 다음 중 방화벽의 주요 기능이 아닌 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "통과시킬 접근과 거부할 접근에 따라 허용 또는 차단을 수행한다."
        },
        {
          "id": 2,
          "text": "허용 또는 차단된 접근에 대한 기록을 유지한다."
        },
        {
          "id": 3,
          "text": "메시지 인증, 사용자 인증, 클라이언트 인증 등으로 인증을 수행한다."
        },
        {
          "id": 4,
          "text": "한 방화벽에서 다른 방화벽으로 데이터를 복호화해서 보낸다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 50,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "기업에서 근무하는 네트워크 담당자 Kim 대리는 하나의 물리적인 네트워크 스위치를 영업부, 인사부, 구매부, 기술부 등 각 부서별로 여러 네트워크로 구분하여 사용할 수 있도록 하고자 하며, 부서별로 분리된 네트워크는 3계층 장비를 통해서만 통신이 되도록 하고자 한다. 이 기술 방식은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "VPN(Virtual Private Network)"
        },
        {
          "id": 2,
          "text": "VLAN(Virtual Local Area Network)"
        },
        {
          "id": 3,
          "text": "VCN(Virtual Cloud Network)"
        },
        {
          "id": 4,
          "text": "IPS(Intrusion Prevention System)"
        }
      ],
      "correctId": 2
    }
  ],
  "2023-05-21": [
    {
      "number": 1,
      "subject": "1과목 : TCP/IP",
      "stem": "IPv4 Class 중에서 멀티캐스트 용도로 사용되는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "B Class"
        },
        {
          "id": 2,
          "text": "C Class"
        },
        {
          "id": 3,
          "text": "D Class"
        },
        {
          "id": 4,
          "text": "E Class"
        }
      ],
      "correctId": 3
    },
    {
      "number": 2,
      "subject": "1과목 : TCP/IP",
      "stem": "DNS에서 사용될 때 TTL(Time to Live)의 설명으로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "데이터가 DNS서버 존으로부터 나오기 전에 현재 남은 시간이다."
        },
        {
          "id": 2,
          "text": "데이터가 DNS서버 캐시로부터 나오기 전에 현재 남은 시간이다."
        },
        {
          "id": 3,
          "text": "패킷이 DNS서버 존으로부터 나오기 전에 현재 남은 시간이다."
        },
        {
          "id": 4,
          "text": "패킷이 DNS서버 네임서버 레코드로부터 나오기 전에 현재 남은 시간이다."
        }
      ],
      "correctId": 2
    },
    {
      "number": 3,
      "subject": "1과목 : TCP/IP",
      "stem": "IP Address 중 Class가 다른 주소는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "191.234.149.32"
        },
        {
          "id": 2,
          "text": "198.236.115.33"
        },
        {
          "id": 3,
          "text": "222.236.138.34"
        },
        {
          "id": 4,
          "text": "195.236.126.35"
        }
      ],
      "correctId": 1
    },
    {
      "number": 4,
      "subject": "1과목 : TCP/IP",
      "stem": "C Class의 네트워크를 서브넷으로 나누어 각 서브넷에 4~5 대의 PC를 접속해야 할 때, 서브넷 마스크 값으로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "255.255.255.240"
        },
        {
          "id": 2,
          "text": "255.255.0.192"
        },
        {
          "id": 3,
          "text": "255.255.255.248"
        },
        {
          "id": 4,
          "text": "255.255.255.0"
        }
      ],
      "correctId": 3
    },
    {
      "number": 5,
      "subject": "1과목 : TCP/IP",
      "stem": "Link State 알고리즘을 이용해 서로에게 자신의 현재 상태를 알려주며 네트워크 내 통신을 위해 사용하는 프로토콜은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "OSPF"
        },
        {
          "id": 2,
          "text": "IDRP"
        },
        {
          "id": 3,
          "text": "EGP"
        },
        {
          "id": 4,
          "text": "BGP"
        }
      ],
      "correctId": 1
    },
    {
      "number": 6,
      "subject": "1과목 : TCP/IP",
      "stem": "UDP 헤더에 포함이 되지 않는 항목은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "확인 응답 번호(Acknowledgment Number)"
        },
        {
          "id": 2,
          "text": "소스 포트(Source Port) 주소"
        },
        {
          "id": 3,
          "text": "체크섬(Checksum) 필드"
        },
        {
          "id": 4,
          "text": "목적지 포트(Destination Port) 주소"
        }
      ],
      "correctId": 1
    },
    {
      "number": 7,
      "subject": "1과목 : TCP/IP",
      "stem": "RARP에 대한 설명 중 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "TCP/IP 프로토콜에서 데이터의 전송 서비스를 규정한다."
        },
        {
          "id": 2,
          "text": "TCP/IP 프로토콜의 IP에서 접속 없이 데이터의 전송을 수행하는 기능을 규정한다."
        },
        {
          "id": 3,
          "text": "하드웨어 주소를 IP Address로 변환하기 위해서 사용한다."
        },
        {
          "id": 4,
          "text": "IP에서의 오류(Error) 제어를 위하여 사용되며, 시작 지 호스트의 라우팅 실패를 보고한다."
        }
      ],
      "correctId": 3
    },
    {
      "number": 8,
      "subject": "1과목 : TCP/IP",
      "stem": "ICMP의 Message Type필드의 유형과 질의 메시지 내용을 나타낸 것이다. 타입에 대한 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "3 - Echo Request 질의 메시지에 응답하는데 사용된다."
        },
        {
          "id": 2,
          "text": "4 - 흐름제어 및 폭주제어를 위해 사용된다."
        },
        {
          "id": 3,
          "text": "5 - 대체경로(Redirect)를 알리기 위해 라우터에 사용한다."
        },
        {
          "id": 4,
          "text": "17 - Address Mask Request 장비의 서브넷 마스크를 요구하는데 사용된다."
        }
      ],
      "correctId": 1
    },
    {
      "number": 9,
      "subject": "1과목 : TCP/IP",
      "stem": "IGMP 프로토콜의 주된 기능은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "네트워크 내에 발생된 오류에 관한 보고 기능"
        },
        {
          "id": 2,
          "text": "대용량 파일을 전송하는 기능"
        },
        {
          "id": 3,
          "text": "멀티 캐스트 그룹에 가입한 네트워크 내의 호스트 관리 기능"
        },
        {
          "id": 4,
          "text": "호스트의 IP Address에 해당하는 호스트의 물리주소를 알려주는 기능"
        }
      ],
      "correctId": 3
    },
    {
      "number": 10,
      "subject": "1과목 : TCP/IP",
      "stem": "원격에 있는 호스트 접속시 암호화된 패스워드를 이용하여 보다 안전하게 접속할 수 있도록 rlogin과 같은 프로토콜을 보완하여 만든 프로토콜은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "SSH"
        },
        {
          "id": 2,
          "text": "SNMP"
        },
        {
          "id": 3,
          "text": "SSL"
        },
        {
          "id": 4,
          "text": "Telnet"
        }
      ],
      "correctId": 1
    },
    {
      "number": 11,
      "subject": "1과목 : TCP/IP",
      "stem": "TCP/IP 프로토콜 4 Layer 구조를 하위 계층부터 상위 계층으로 올바르게 나열한 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Network Interface - Internet - Transport - Application"
        },
        {
          "id": 2,
          "text": "Application - Network Interface - Internet - Transport"
        },
        {
          "id": 3,
          "text": "Transport - Application - Network Interface - Internet"
        },
        {
          "id": 4,
          "text": "Internet - Transport - Application - Network Interface"
        }
      ],
      "correctId": 1
    },
    {
      "number": 12,
      "subject": "1과목 : TCP/IP",
      "stem": "FTP 및 TFTP의 특징으로 옳은 것은 무엇인가?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "TFTP는 단순화된 파일을 전송을 위한 프로토콜이며 기본포트는 25번이다."
        },
        {
          "id": 2,
          "text": "FTP의 접속에는 계정접속만 가능하다."
        },
        {
          "id": 3,
          "text": "TFTP의 단점은 UDP방식으로 Data 전송시 데이터 손실가능성이 있다."
        },
        {
          "id": 4,
          "text": "FTP는 대량의 데이터를 고속전송을 위해 UDP을 사용한다."
        }
      ],
      "correctId": 3
    },
    {
      "number": 13,
      "subject": "1과목 : TCP/IP",
      "stem": "TCP Header의 flag 값 중 3-way handshake의 첫 번째 단계인 세션 성립 요청 패킷에 설정되는 flag 값은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "RST"
        },
        {
          "id": 2,
          "text": "ACK"
        },
        {
          "id": 3,
          "text": "URG"
        },
        {
          "id": 4,
          "text": "SYN"
        }
      ],
      "correctId": 4
    },
    {
      "number": 14,
      "subject": "1과목 : TCP/IP",
      "stem": "아래에서 설명하는 기술의 명칭은?",
      "images": [
        "assets/2023-05-21-1.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "WLAN"
        },
        {
          "id": 2,
          "text": "HomeRF"
        },
        {
          "id": 3,
          "text": "ZigBee"
        },
        {
          "id": 4,
          "text": "IrDA"
        }
      ],
      "correctId": 3
    },
    {
      "number": 15,
      "subject": "1과목 : TCP/IP",
      "stem": "인터넷에서 전자 메일을 주고받을 때 사용되는 프로토콜로만 짝지어진 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "HTTP, POP3"
        },
        {
          "id": 2,
          "text": "HTTP, ICMP"
        },
        {
          "id": 3,
          "text": "ICMP, SMTP"
        },
        {
          "id": 4,
          "text": "POP3, SMTP"
        }
      ],
      "correctId": 4
    },
    {
      "number": 16,
      "subject": "1과목 : TCP/IP",
      "stem": "IPv6에서 6000Byte의 패킷이 이더넷 LAN을 통과해야 하는 경우 사용할 확장 헤더는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Source Routing"
        },
        {
          "id": 2,
          "text": "Fragmentation"
        },
        {
          "id": 3,
          "text": "Authentification"
        },
        {
          "id": 4,
          "text": "Destination Option"
        }
      ],
      "correctId": 2
    },
    {
      "number": 17,
      "subject": "1과목 : TCP/IP",
      "stem": "IP의 체크섬(Checksum)에 대한 설명으로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "IP Header의 완전성을 검사한다."
        },
        {
          "id": 2,
          "text": "IP Header와 데이터의 완전성을 검사한다."
        },
        {
          "id": 3,
          "text": "데이터의 완전성을 검사한다."
        },
        {
          "id": 4,
          "text": "TCP 계층에서만 체크섬 계산 및 검증 서비스가 제공된다."
        }
      ],
      "correctId": 1
    },
    {
      "number": 18,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음에 설명하는 기술은 무엇인가?",
      "images": [
        "assets/2023-05-21-2.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "사물인터넷(IoT)"
        },
        {
          "id": 2,
          "text": "유비쿼터스(Ubiquitous)"
        },
        {
          "id": 3,
          "text": "에지 컴퓨팅(Edge Computing)"
        },
        {
          "id": 4,
          "text": "신 클라이언트(Thin client)"
        }
      ],
      "correctId": 3
    },
    {
      "number": 19,
      "subject": "2과목 : 네트워크 일반",
      "stem": "전송효율을 최대로 하기 위해 프레임의 길이를 동적으로 변경시킬 수 있는 ARQ(Automatic Repeat Request)방식은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Adaptive ARQ"
        },
        {
          "id": 2,
          "text": "Go back-N ARQ"
        },
        {
          "id": 3,
          "text": "Selective-Repeat ARQ"
        },
        {
          "id": 4,
          "text": "Stop and Wait ARQ"
        }
      ],
      "correctId": 1
    },
    {
      "number": 20,
      "subject": "2과목 : 네트워크 일반",
      "stem": "OSI 7 Layer에서 Data Link 계층의 기능으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "전송 오류 제어기능"
        },
        {
          "id": 2,
          "text": "Flow 제어기능"
        },
        {
          "id": 3,
          "text": "Text의 압축, 암호기능"
        },
        {
          "id": 4,
          "text": "Link의 관리기능"
        }
      ],
      "correctId": 3
    },
    {
      "number": 21,
      "subject": "2과목 : 네트워크 일반",
      "stem": "패킷교환의 특징에 대한 설명 중 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "패킷과 함께 오류제어를 함으로서 고품질/고신뢰성 통신이 가능하다."
        },
        {
          "id": 2,
          "text": "패킷을 전송 시에만 전송로를 사용하므로 설비 이용 효율이 높다."
        },
        {
          "id": 3,
          "text": "패킷교환의 방식으로는 연결형인 가상회선방식과 비연결형인 데이터그램(Datagram) 두 가지가 있다."
        },
        {
          "id": 4,
          "text": "복수의 상대방과는 통신이 불가능하다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 22,
      "subject": "2과목 : 네트워크 일반",
      "stem": "VPN에 대한 설명으로 (A)에 알맞은 용어는?",
      "images": [
        "assets/2023-05-21-3.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "PPTP"
        },
        {
          "id": 2,
          "text": "L2TP"
        },
        {
          "id": 3,
          "text": "IPSec"
        },
        {
          "id": 4,
          "text": "SSL"
        }
      ],
      "correctId": 3
    },
    {
      "number": 23,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음은 화상 회의를 하기 위한 기술에 관한 내용이다. (A) 안에 들어가는 용어 중 옳은 것은?",
      "images": [
        "assets/2023-05-21-4.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "IRC (Internet Relay Chat)"
        },
        {
          "id": 2,
          "text": "HEVC/H.265 (High Efficiency Video Coding)"
        },
        {
          "id": 3,
          "text": "MIME (Multipurpose Internet Mail Extensions)"
        },
        {
          "id": 4,
          "text": "SIP (Session Initiation Protocol)"
        }
      ],
      "correctId": 4
    },
    {
      "number": 24,
      "subject": "2과목 : 네트워크 일반",
      "stem": "LAN의 매체 접근제어 방식인 CSMA/CD 기술에 대한 설명으로 옳은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "CSMA/CD 방식은 링형 통신망인 이더넷에서 주로 사용한다."
        },
        {
          "id": 2,
          "text": "CSMA/CD 방식은 반송파의 존재 여부와 상관없이 데이터를 전송한다."
        },
        {
          "id": 3,
          "text": "CSMA/CD 방식은 반송파가 감지되지 않으면 컴퓨터가 전송매체를 사용하지 않는 것으로 판단하여 데이터를 전송한다."
        },
        {
          "id": 4,
          "text": "CSMA/CD 방식은 통신량이 많아지면 채널이용율이 높아져서 지연시간을 예측할 수 있다."
        }
      ],
      "correctId": 3
    },
    {
      "number": 25,
      "subject": "2과목 : 네트워크 일반",
      "stem": "기가비트 이더넷은 약 1Gbps의 전송속도를 지원하는 이더넷으로 기존의 이더넷뿐만 아니라 고속 이더넷과도 호환이 가능하다. 다음 중 기가비트 이더넷에 대한 규격으로 옳은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "1000Base-SX"
        },
        {
          "id": 2,
          "text": "1000Base-NX"
        },
        {
          "id": 3,
          "text": "1000Base-BX"
        },
        {
          "id": 4,
          "text": "1000Base-AX"
        }
      ],
      "correctId": 1
    },
    {
      "number": 26,
      "subject": "2과목 : 네트워크 일반",
      "stem": "네트워크의 구성(Topology)에서 링형(Ring)에 관한 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "장애발생시 쉽게 발견할 수 있다."
        },
        {
          "id": 2,
          "text": "노드간의 연결을 최소화하는 목적으로 설계되었다."
        },
        {
          "id": 3,
          "text": "한 통신장치의 오류가 전체 네트워크에 영향을 준다."
        },
        {
          "id": 4,
          "text": "확장성이 뛰어나다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 27,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음 지문에서 설명하는 모바일 셀룰러시스템의 동작을 무엇이라고 하는가?",
      "images": [
        "assets/2023-05-21-5.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "채널체인징"
        },
        {
          "id": 2,
          "text": "페이징"
        },
        {
          "id": 3,
          "text": "핸드오프"
        },
        {
          "id": 4,
          "text": "핸드쉐이크"
        }
      ],
      "correctId": 3
    },
    {
      "number": 28,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016의 DNS 서버에 DNS 레코드를 추가할 때 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "새 호스트(A or AAA)는 호스트 이름에 대한 IP 주소를 등록하는 것이다."
        },
        {
          "id": 2,
          "text": "새 포인터(PTR)는 IP 주소에 대한 FQDN을 등록하는 것이다."
        },
        {
          "id": 3,
          "text": "새 별칭(CNAME)은 서브 도메인을 등록하는 것이다."
        },
        {
          "id": 4,
          "text": "새 메일 교환기(MX)는 메일서버를 등록하는 것이다."
        }
      ],
      "correctId": 3
    },
    {
      "number": 29,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에서 사용자가 내린 명령어를 Kernel에 전달해주는 역할을 하는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "System Program"
        },
        {
          "id": 2,
          "text": "Loader"
        },
        {
          "id": 3,
          "text": "Shell"
        },
        {
          "id": 4,
          "text": "Directory"
        }
      ],
      "correctId": 3
    },
    {
      "number": 30,
      "subject": "3과목 : NOS",
      "stem": "Linux에서 ′manager′라는 파일을, 파일의 소유자가 아닌 사람도 볼 수는 있지만 수정을 못하도록 하는 명령어는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "chmod 777 manager"
        },
        {
          "id": 2,
          "text": "chmod 666 manager"
        },
        {
          "id": 3,
          "text": "chmod 646 manager"
        },
        {
          "id": 4,
          "text": "chmod 644 manager"
        }
      ],
      "correctId": 4
    },
    {
      "number": 31,
      "subject": "3과목 : NOS",
      "stem": "서버 담당자 Park 사원은 데이터를 안전하게 보호하는 일을 하기 위해 BitLocker 기능을 사용하고자 한다. BitLocker를 사용하기 위해서 메인보드와 BIOS에서 지원해야 하는 기능은 무엇인가?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "FSRM"
        },
        {
          "id": 2,
          "text": "NTLM"
        },
        {
          "id": 3,
          "text": "TPM"
        },
        {
          "id": 4,
          "text": "Heartbeat"
        }
      ],
      "correctId": 3
    },
    {
      "number": 32,
      "subject": "3과목 : NOS",
      "stem": "서버 담당자 Park 사원은 Windows Server 2016에서 성능 모니터를 운영하여 서버의 성능을 분석하고자 한다. 다음 중 성능 모니터로 미리 정의한 일정한 주기로 특정 데이터를 수집하고자 성능 모니터 도구를 시작하기 위한 명령어로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "perfmon"
        },
        {
          "id": 2,
          "text": "msconfig"
        },
        {
          "id": 3,
          "text": "dfrg"
        },
        {
          "id": 4,
          "text": "secpol"
        }
      ],
      "correctId": 1
    },
    {
      "number": 33,
      "subject": "3과목 : NOS",
      "stem": "서버 관리자 Kim 사원이 Linux 서버의 ′/root′ 디렉터리를 점검 중 ′/etc/passwd′ 파일이 ′/root′ 디렉터리에 복사되어 있는 것을 발견하였다. 이에 Kim 사원은 ′/root/passwd′ 파일을 삭제하려 했으나 삭제가 되지 않았다. (A)명령어를 사용하여 파일 속성을 출력하였는데 해당 파일에 ′i′ 속성이 설정되어 쓰기 및 삭제가 되지 않는 것을 확인하였다. 해당 명령어 (A)는 무엇인가?",
      "images": [
        "assets/2023-05-21-6.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "file"
        },
        {
          "id": 2,
          "text": "stat"
        },
        {
          "id": 3,
          "text": "lsattr"
        },
        {
          "id": 4,
          "text": "lsblk"
        }
      ],
      "correctId": 3
    },
    {
      "number": 34,
      "subject": "3과목 : NOS",
      "stem": "서버 관리자 Kim 사원이 Linux 서버의 ′/var/log′ 디렉터리를 백업하기 위해 압축프로그램을 이용하여 압축 중, 작업 중인 터미널을 닫아도 실행 중인 프로세스를 백그라운드 프로세스로 작업 될 수 있도록 해주는 명령어는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "mkfs"
        },
        {
          "id": 2,
          "text": "nohup"
        },
        {
          "id": 3,
          "text": "sleep"
        },
        {
          "id": 4,
          "text": "last"
        }
      ],
      "correctId": 2
    },
    {
      "number": 35,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템 관리자는 John사원의 계정인 John의 패스워드 정책을 변경하기 위해 아래 지문과 같이 입력하였다. 10일전 암호변경 경고를 위한 명령으로 ( )안에 알맞은 옵션은?",
      "images": [
        "assets/2023-05-21-7.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "-m 10"
        },
        {
          "id": 2,
          "text": "- L 10"
        },
        {
          "id": 3,
          "text": "- i 10"
        },
        {
          "id": 4,
          "text": "- W 10"
        }
      ],
      "correctId": 4
    },
    {
      "number": 36,
      "subject": "3과목 : NOS",
      "stem": "네임서버 레코드 정보를 변경한지 충분한 시일이 지났지만 특정 기기에서 해당(기존) 도메인으로 접속이 원할한 경우, 컴퓨터에 DNS cache가 갱신되지 않아 발생할 수 있다. DNS cache를 초기화 하는 명령어는 어느것인가?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "ipconfig /displydns"
        },
        {
          "id": 2,
          "text": "ipconfig /flushdns"
        },
        {
          "id": 3,
          "text": "ipconfig /release"
        },
        {
          "id": 4,
          "text": "ipconfig /renew"
        }
      ],
      "correctId": 2
    },
    {
      "number": 37,
      "subject": "3과목 : NOS",
      "stem": "서버 관리자 Kang 사원은 Windows Server 2016 시스템의 보안을 위해 EFS(암호화 파일 시스템)을 사용하려고 한다. EFS에 대한 설명으로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "EFS는 윈도우즈 시스템의 파일에만 암호화 기술을 적용한다."
        },
        {
          "id": 2,
          "text": "EFS는 인증서 파일의 확장자로 CER, P7B, PFX, SST 형식을 지원한다."
        },
        {
          "id": 3,
          "text": "EFS는 개인키를 보호하는 방법으로 암호만을 사용할 수 있다."
        },
        {
          "id": 4,
          "text": "EFS는 사용자만 동일하면 윈도우즈 시스템을 다시 설치해도 암호화된 파일을 열 수 있다."
        }
      ],
      "correctId": 2
    },
    {
      "number": 38,
      "subject": "3과목 : NOS",
      "stem": "서버 관리자 Park 사원은 Windows Server 2016의 Active Directory에서 도메인 사용자 계정을 관리하기 위해 도메인 사용자 계정을 생성/수정/삭제하려고 한다. 다음 중 도메인 사용자 계정을 관리하기 위한 명령어가 아닌 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "dsadd"
        },
        {
          "id": 2,
          "text": "dsmod"
        },
        {
          "id": 3,
          "text": "dsrm"
        },
        {
          "id": 4,
          "text": "net user"
        }
      ],
      "correctId": 4
    },
    {
      "number": 39,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에서 마운트 되었는지 확인하는 명령어로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "fdisk"
        },
        {
          "id": 2,
          "text": "mount"
        },
        {
          "id": 3,
          "text": "df"
        },
        {
          "id": 4,
          "text": "cat /etc/mtab"
        }
      ],
      "correctId": 1
    },
    {
      "number": 40,
      "subject": "3과목 : NOS",
      "stem": "Linux 디렉터리에 대한 소유자와 소유그룹을 변경할 수 있는 명령어는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "chmod"
        },
        {
          "id": 2,
          "text": "chown"
        },
        {
          "id": 3,
          "text": "useradd"
        },
        {
          "id": 4,
          "text": "chage"
        }
      ],
      "correctId": 2
    },
    {
      "number": 41,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템 운영 중 비인가자의 로그인 시도 이력을 확인하기 위한 명령어로 옳은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "lastb"
        },
        {
          "id": 2,
          "text": "xferlog"
        },
        {
          "id": 3,
          "text": "history"
        },
        {
          "id": 4,
          "text": "pkill"
        }
      ],
      "correctId": 1
    },
    {
      "number": 42,
      "subject": "3과목 : NOS",
      "stem": "Linux 서버 운영 중 불필요한 service port가 열려있는지 확인하는 명령어로 옳은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "ps -ef | grep tcp"
        },
        {
          "id": 2,
          "text": "netstat –antp"
        },
        {
          "id": 3,
          "text": "netstat –rn"
        },
        {
          "id": 4,
          "text": "cat /etc/services"
        }
      ],
      "correctId": 2
    },
    {
      "number": 43,
      "subject": "3과목 : NOS",
      "stem": "Linux의 가상 파일시스템으로 동작 중인 프로세스의 상태 정보, 하드웨어 정보, 시스템 정보 등을 확인할 수 있는 디렉터리로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "/boot"
        },
        {
          "id": 2,
          "text": "/etc"
        },
        {
          "id": 3,
          "text": "/proc"
        },
        {
          "id": 4,
          "text": "/lib"
        }
      ],
      "correctId": 3
    },
    {
      "number": 44,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에서 'exam.txt' 파일의 내용을 보려고 하는데, 내용이 많아서 한 페이지를 넘어가 버린다. 한 페이지씩 차례대로 보기 위한 명령은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "cat exam.txt | more"
        },
        {
          "id": 2,
          "text": "cat exam.txt | grep"
        },
        {
          "id": 3,
          "text": "find exam.txt | grep"
        },
        {
          "id": 4,
          "text": "tar exam.txt | grep"
        }
      ],
      "correctId": 1
    },
    {
      "number": 45,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016의 IIS 기본 웹사이트 등록 정보의 필드에 대한 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "IP 주소: 사이트가 사용할 IP 주소를 기록하며, 한 컴퓨터에 2개 이상의 IP가 할당된 경우는 IP의 접속 순서를 지정"
        },
        {
          "id": 2,
          "text": "TCP 포트: 웹서버 시스템의 물리적인 시리얼 포트 번호를 지정"
        },
        {
          "id": 3,
          "text": "연결 수 제한: 웹서버에 연결할 수 있는 연결 수 제한을 지정"
        },
        {
          "id": 4,
          "text": "연결 시간 제한: 웹서버에 접속한 후 일정 시간 동안 움직임이 없으면 세션을 끊도록 지정"
        }
      ],
      "correctId": 2
    },
    {
      "number": 46,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "사람의 머리카락 굵기만큼의 가는 유리 섬유로 정보를 보내고 받는 속도가 가장 빠르고 넓은 대역폭을 가지는 장점도 있지만 구리선에 비해 가격이 비싸고 설치나 유지보수가 어렵다는 단점이 있는 케이블은 무엇인가?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Coaxial Cable"
        },
        {
          "id": 2,
          "text": "Twisted Pair"
        },
        {
          "id": 3,
          "text": "Thin Cable"
        },
        {
          "id": 4,
          "text": "Optical Fiber"
        }
      ],
      "correctId": 4
    },
    {
      "number": 47,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "네트워크 담당자 Kim 사원은 물리적인 하나의 LAN을 논리적으로 여러 개로 나누어 효율적으로 네트워크를 관리하고자 한다. 내부망을 분리할 때 사용되고, 방화벽에서 외부망으로부터 내부망을 보호할 때도 사용할 수 있는 것은 무엇인가?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "NAC"
        },
        {
          "id": 2,
          "text": "VLAN"
        },
        {
          "id": 3,
          "text": "IPS"
        },
        {
          "id": 4,
          "text": "IDS"
        }
      ],
      "correctId": 2
    },
    {
      "number": 48,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "IP 주소와 같은 TCP/IP 통신을 수행하기 위한 네트워크 구성 파라메터들을 동적으로 설정하기 위해 사용되는 표준 네트워크 프로토콜로서 호스트가 네트워크에 접속하고자 할 때마다 IP를 동적으로 할당받을 수 있도록 하는 장치는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "DHCP(Dynamic Host Configuration Protocol)"
        },
        {
          "id": 2,
          "text": "DNS(Domain Name System)"
        },
        {
          "id": 3,
          "text": "IP주소 관리 시스템"
        },
        {
          "id": 4,
          "text": "NAC(Network Access Control)"
        }
      ],
      "correctId": 1
    },
    {
      "number": 49,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "RAID 방식 중 미러링(Mirroring)이라고 하며, 최고의 성능과 고장대비 능력을 발휘하는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "RAID 0"
        },
        {
          "id": 2,
          "text": "RAID 1"
        },
        {
          "id": 3,
          "text": "RAID 3"
        },
        {
          "id": 4,
          "text": "RAID 5"
        }
      ],
      "correctId": 2
    },
    {
      "number": 50,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "무선랜(LAN)은 무선신호 전달방식을 이용하여 두 대 이상의 장치를 연결하는 기술이다. 이를 이용하여 사용자는 근거리 지역에서 이동하면서 지속적으로 네트워크에 접근할 수 있게 된다. 다음의 지문에서 설명하는 와이파이 IEEE 802.11규격은 무엇인가?",
      "images": [
        "assets/2023-05-21-8.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "IEEE 802.11n"
        },
        {
          "id": 2,
          "text": "IEEE 802.11ac"
        },
        {
          "id": 3,
          "text": "IEEE 802.11be"
        },
        {
          "id": 4,
          "text": "IEEE 802.11ax"
        }
      ],
      "correctId": 4
    }
  ],
  "2023-02-26": [
    {
      "number": 1,
      "subject": "1과목 : TCP/IP",
      "stem": "C Class에서 유효한 IP Address는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "33.114.17.24"
        },
        {
          "id": 2,
          "text": "128.46.83.25"
        },
        {
          "id": 3,
          "text": "202.67.13.87"
        },
        {
          "id": 4,
          "text": "222.248.256.34"
        }
      ],
      "correctId": 3
    },
    {
      "number": 2,
      "subject": "1과목 : TCP/IP",
      "stem": "ICMPv6에서 IPv4의 ARP 역할 및 특정 호스트로의 전달 가능 여부 검사 기능을 하는 메시지는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "재지정 메시지(Redirection)"
        },
        {
          "id": 2,
          "text": "에코 요청 메시지(Echo request)"
        },
        {
          "id": 3,
          "text": "이웃 요청과 광고 메시지(Neighbor Solicitation and Advertisement)"
        },
        {
          "id": 4,
          "text": "목적지 도달 불가 메시지(Destination unreachable)"
        }
      ],
      "correctId": 3
    },
    {
      "number": 3,
      "subject": "1과목 : TCP/IP",
      "stem": "TCP 헤더의 플래그 비트로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "URG"
        },
        {
          "id": 2,
          "text": "UTC"
        },
        {
          "id": 3,
          "text": "ACK"
        },
        {
          "id": 4,
          "text": "RST"
        }
      ],
      "correctId": 2
    },
    {
      "number": 4,
      "subject": "1과목 : TCP/IP",
      "stem": "TCP 헤더에는 수신측 버퍼의 크기에 맞춰 송신측에서 데이터의 크기를 적절하게 조절할 수 있게 해주는 필드가 있다. 이 필드를 이용한 흐름 제어 기법은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Sliding Window"
        },
        {
          "id": 2,
          "text": "Stop and Wait"
        },
        {
          "id": 3,
          "text": "Xon/Xoff"
        },
        {
          "id": 4,
          "text": "CTS/RTS"
        }
      ],
      "correctId": 1
    },
    {
      "number": 5,
      "subject": "1과목 : TCP/IP",
      "stem": "인터넷에서 멀티캐스트를 위하여 사용되는 프로토콜은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "IGMP"
        },
        {
          "id": 2,
          "text": "ICMP"
        },
        {
          "id": 3,
          "text": "SMTP"
        },
        {
          "id": 4,
          "text": "DNS"
        }
      ],
      "correctId": 1
    },
    {
      "number": 6,
      "subject": "1과목 : TCP/IP",
      "stem": "원격 컴퓨터에 안전하게 액세스하기 위한 유닉스 기반의 명령 인터페이스 및 프로토콜로, 기본적으로 22번 포트를 사용하고, 클라이언트/서버 연결의 양단은 전자 서명을 사용하여 인증되며, 패스워드는 암호화하여 보호되는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "SSH"
        },
        {
          "id": 2,
          "text": "IPSec"
        },
        {
          "id": 3,
          "text": "SSL"
        },
        {
          "id": 4,
          "text": "PGP"
        }
      ],
      "correctId": 1
    },
    {
      "number": 7,
      "subject": "1과목 : TCP/IP",
      "stem": "서울본사에 근무하는 Kim은 신규부서에 IP를 할당하려고 L3 스위치에 접속하였는데 IP검색 도중에 허가되지 않은 불법 IP 및 mac address를 발견하여 차단조치 하였다. Kim이 L3 스위치에서 불법 IP를 검색하기 위해서 내린 명령어(A)를 선택하시오. (단, 불법적으로 사용된 IP는 아래의 그림이며 사용된 L3 스위치는 Cisco 3750G이다.)",
      "images": [
        "assets/2023-02-26-1.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "rarp"
        },
        {
          "id": 2,
          "text": "vlan"
        },
        {
          "id": 3,
          "text": "cdp"
        },
        {
          "id": 4,
          "text": "arp"
        }
      ],
      "correctId": 4
    },
    {
      "number": 8,
      "subject": "1과목 : TCP/IP",
      "stem": "C Class인 네트워크의 서브넷 마스크가 ′255.255.255.192′ 이라면 둘 수 있는 서브넷의 개수는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "2"
        },
        {
          "id": 2,
          "text": "4"
        },
        {
          "id": 3,
          "text": "192"
        },
        {
          "id": 4,
          "text": "1024"
        }
      ],
      "correctId": 2
    },
    {
      "number": 9,
      "subject": "1과목 : TCP/IP",
      "stem": "다음 중에서 IPv6의 특징이 아닌 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "128bit로 구성된다."
        },
        {
          "id": 2,
          "text": "Broadcast를 사용한다."
        },
        {
          "id": 3,
          "text": "모바일 IP, IPsec 프로토콜 사용이 가능하다."
        },
        {
          "id": 4,
          "text": "IP가 1234::12FB:3:89A0:034C처럼 표시된다."
        }
      ],
      "correctId": 2
    },
    {
      "number": 10,
      "subject": "1과목 : TCP/IP",
      "stem": "다음 응용계층 프로토콜 중에 전송계층의 프로토콜 TCP, UDP를 모두 사용하는 프로토콜은 무엇인가?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "FTP"
        },
        {
          "id": 2,
          "text": "SMTP"
        },
        {
          "id": 3,
          "text": "DNS"
        },
        {
          "id": 4,
          "text": "SNMP"
        }
      ],
      "correctId": 3
    },
    {
      "number": 11,
      "subject": "1과목 : TCP/IP",
      "stem": "다음 출력물에 대한 설명으로 옳지 않은 것은?",
      "images": [
        "assets/2023-02-26-2.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "ping 명령어를 이용하여 목적지(www.icqa.or.kr)와 정상적으로 통신되었을 확인하였다."
        },
        {
          "id": 2,
          "text": "ping 명령어를 이용하여 요청하고 응답받은 데이터의 사이즈는 32바이트이다."
        },
        {
          "id": 3,
          "text": "ping 명령어를 이용하여 요청하고 응답받은 시간은 평균 2ms 이다."
        },
        {
          "id": 4,
          "text": "패킷의 살아 있는 시간(TTL, Time to Live)은 55초이다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 12,
      "subject": "1과목 : TCP/IP",
      "stem": "TLS를 통해 Application 계층 데이터를 암호화하여 보호해 주고 기본포트가 443으로 지정된 프로토콜은 무엇인가?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "HTTPS"
        },
        {
          "id": 2,
          "text": "HTTP"
        },
        {
          "id": 3,
          "text": "FTP"
        },
        {
          "id": 4,
          "text": "SSH"
        }
      ],
      "correctId": 1
    },
    {
      "number": 13,
      "subject": "1과목 : TCP/IP",
      "stem": "SMTP에 대한 설명으로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "WWW에서 사용하는 데이터 전송 프로토콜이다."
        },
        {
          "id": 2,
          "text": "네트워크 장비들을 관리하기 위한 프로토콜이다."
        },
        {
          "id": 3,
          "text": "파일 전송을 위한 프로토콜이다."
        },
        {
          "id": 4,
          "text": "인터넷 전자 우편을 위한 프로토콜이다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 14,
      "subject": "1과목 : TCP/IP",
      "stem": "물리적 하드웨어 주소를 IP Address로 매핑시키는 프로토콜은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "DHCP"
        },
        {
          "id": 2,
          "text": "ICMP"
        },
        {
          "id": 3,
          "text": "ARP"
        },
        {
          "id": 4,
          "text": "RARP"
        }
      ],
      "correctId": 4
    },
    {
      "number": 15,
      "subject": "1과목 : TCP/IP",
      "stem": "UDP 계열 프로토콜로, 원격 관리에 필요한 정보와 서버상태를 관리하는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "FTP"
        },
        {
          "id": 2,
          "text": "DHCP"
        },
        {
          "id": 3,
          "text": "BOOTP"
        },
        {
          "id": 4,
          "text": "SNMP"
        }
      ],
      "correctId": 4
    },
    {
      "number": 16,
      "subject": "1과목 : TCP/IP",
      "stem": "다음 TCP/IP 계층 중 다른 계층에서 동작하는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "IP"
        },
        {
          "id": 2,
          "text": "SMTP"
        },
        {
          "id": 3,
          "text": "RARP"
        },
        {
          "id": 4,
          "text": "ARP"
        }
      ],
      "correctId": 2
    },
    {
      "number": 17,
      "subject": "1과목 : TCP/IP",
      "stem": "다음 보기 중 RIP에 대한 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "디스턴스 벡터(Distance Vector) 라우팅 프로토콜이다."
        },
        {
          "id": 2,
          "text": "메트릭은 Hop Count를 사용한다."
        },
        {
          "id": 3,
          "text": "표준 프로토콜이기 때문에 대부분의 라우터가 지원한다."
        },
        {
          "id": 4,
          "text": "RIPv1, RIPv2 모두 멀티캐스트를 이용하여 광고한다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 18,
      "subject": "2과목 : 네트워크 일반",
      "stem": "IEEE 표준안 중 CSMA/CA에 해당하는 표준은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "802.1"
        },
        {
          "id": 2,
          "text": "802.2"
        },
        {
          "id": 3,
          "text": "802.3"
        },
        {
          "id": 4,
          "text": "802.11"
        }
      ],
      "correctId": 4
    },
    {
      "number": 19,
      "subject": "2과목 : 네트워크 일반",
      "stem": "프로토콜 계층 구조상의 기본 구성요소 중 실체(Entity) 간의 통신 속도 및 메시지 순서를 위한 제어정보는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "타이밍(Timing)"
        },
        {
          "id": 2,
          "text": "의미(Semantics)"
        },
        {
          "id": 3,
          "text": "구문(Syntax)"
        },
        {
          "id": 4,
          "text": "처리(Process)"
        }
      ],
      "correctId": 1
    },
    {
      "number": 20,
      "subject": "2과목 : 네트워크 일반",
      "stem": "OSI 7 Layer 중 데이터 링크 계층의 기능으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "통신 프로토콜을 정의한 OSI 7 Layer 중 세 번째 계층에 해당한다."
        },
        {
          "id": 2,
          "text": "비트를 프레임화 시킨다."
        },
        {
          "id": 3,
          "text": "전송, 형식 및 운용에서의 에러를 검색한다."
        },
        {
          "id": 4,
          "text": "흐름제어를 통하여 데이터 링크 개체간의 트래픽을 제어한다."
        }
      ],
      "correctId": 1
    },
    {
      "number": 21,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음 지문에서 ( ) 안에 들어갈 기술로 옳은 것은?",
      "images": [
        "assets/2023-02-26-3.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "VPN"
        },
        {
          "id": 2,
          "text": "NAT"
        },
        {
          "id": 3,
          "text": "PPP"
        },
        {
          "id": 4,
          "text": "PPPoE"
        }
      ],
      "correctId": 1
    },
    {
      "number": 22,
      "subject": "2과목 : 네트워크 일반",
      "stem": "네트워크 계층의 데이터 단위를 나타내는 용어는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "세그먼트"
        },
        {
          "id": 2,
          "text": "패킷"
        },
        {
          "id": 3,
          "text": "프레임"
        },
        {
          "id": 4,
          "text": "비트"
        }
      ],
      "correctId": 2
    },
    {
      "number": 23,
      "subject": "2과목 : 네트워크 일반",
      "stem": "다음의 (A)에 들어갈 알맞은 용어는 무엇인가?",
      "images": [
        "assets/2023-02-26-4.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "Wireless sensor networks"
        },
        {
          "id": 2,
          "text": "Wireless mesh networks"
        },
        {
          "id": 3,
          "text": "Software defined networks"
        },
        {
          "id": 4,
          "text": "Content delivery networks"
        }
      ],
      "correctId": 2
    },
    {
      "number": 24,
      "subject": "2과목 : 네트워크 일반",
      "stem": "센서 네트워크에서 센서 노드들의 센싱 데이터를 수집하는 노드는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Sink"
        },
        {
          "id": 2,
          "text": "Actuator"
        },
        {
          "id": 3,
          "text": "RFID"
        },
        {
          "id": 4,
          "text": "Access Point"
        }
      ],
      "correctId": 1
    },
    {
      "number": 25,
      "subject": "2과목 : 네트워크 일반",
      "stem": "전송매체를 통한 데이터 전송 시 거리가 멀어질수록 신호의 세기가 약해지는 현상은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "감쇠 현상"
        },
        {
          "id": 2,
          "text": "상호변조 잡음"
        },
        {
          "id": 3,
          "text": "지연 왜곡"
        },
        {
          "id": 4,
          "text": "누화 잡음"
        }
      ],
      "correctId": 1
    },
    {
      "number": 26,
      "subject": "2과목 : 네트워크 일반",
      "stem": "(A)안에 들어가는 용어 중 옳은 것은?",
      "images": [
        "assets/2023-02-26-5.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "WPAN"
        },
        {
          "id": 2,
          "text": "LTE-M"
        },
        {
          "id": 3,
          "text": "NB-IoT"
        },
        {
          "id": 4,
          "text": "LAN"
        }
      ],
      "correctId": 1
    },
    {
      "number": 27,
      "subject": "2과목 : 네트워크 일반",
      "stem": "컴퓨터 추가 설정이 용이하고, 중앙관리가 가능한 네트워크 토폴로지는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Bus"
        },
        {
          "id": 2,
          "text": "Star"
        },
        {
          "id": 3,
          "text": "Ring"
        },
        {
          "id": 4,
          "text": "Mesh"
        }
      ],
      "correctId": 2
    },
    {
      "number": 28,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016의 시스템관리를 위해서 설계된 명령 라인 셀 및 스크립팅 언어로, 강력한 확장성을 바탕으로 서버 상의 수많은 기능의 손쉬운 자동화를 지원하는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "PowerShell"
        },
        {
          "id": 2,
          "text": "C-Shell"
        },
        {
          "id": 3,
          "text": "K-Shell"
        },
        {
          "id": 4,
          "text": "Bourne-Shell"
        }
      ],
      "correctId": 1
    },
    {
      "number": 29,
      "subject": "3과목 : NOS",
      "stem": "다음 그림은 Windows Server 2016의 DNS 관리자의 모습이다. 현재 www라는 동일한 이름으로 3개의 레코드가 등록되어 클라이언트가 도메인을 제공하면 IP주소를 번갈아가며 제공한다. 이처럼 IP 요청을 분산하여 서버 부하를 줄이는 방식을 무엇이라고 하는가?",
      "images": [
        "assets/2023-02-26-6.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "라운드 로빈(Round Robin) 방식"
        },
        {
          "id": 2,
          "text": "큐(Queue) 방식"
        },
        {
          "id": 3,
          "text": "스택(Stack) 방식"
        },
        {
          "id": 4,
          "text": "FIFO(First In First Out) 방식"
        }
      ],
      "correctId": 1
    },
    {
      "number": 30,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016의 Hyper-V에 관한 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "하드웨어 데이터 실행 방지(DEP)가 필요하다."
        },
        {
          "id": 2,
          "text": "서버관리자의 역할 추가를 통하여 Hyper-V 서비스를 제공 할 수 있다."
        },
        {
          "id": 3,
          "text": "스냅숏을 통하여 특정 시점을 기록할 수 있다."
        },
        {
          "id": 4,
          "text": "하나의 서버에는 하나의 가상 컴퓨터만 사용할 수 있다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 31,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016의 DNS Server 역할에서 지원하는 레코드의 형식과 기능의 설명이다. 이 중 잘못 연결된 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "A - 정규화된 도메인 이름을 32비트 IPv4 주소와 연결"
        },
        {
          "id": 2,
          "text": "AAAA - 정규화된 도메인 이름을 128비트 IPv6 주소와 연결"
        },
        {
          "id": 3,
          "text": "CNAME - 실제 도메인 이름과 연결되는 가상 도메인 이름"
        },
        {
          "id": 4,
          "text": "NS - 주어진 사서함에 도달할 수 있는 라우팅 정보를 제공"
        }
      ],
      "correctId": 4
    },
    {
      "number": 32,
      "subject": "3과목 : NOS",
      "stem": "Windows Server 2016에서 IIS 관리자의 기능으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "웹 사이트의 기본 웹 문서 폴더를 변경할 수 있다."
        },
        {
          "id": 2,
          "text": "기본 웹 문서를 추가하거나 기본 웹 문서들의 우선순위를 조정할 수 있다."
        },
        {
          "id": 3,
          "text": "가상 디렉터리의 이름은 실제 경로의 이름과 동일하게 해야 한다."
        },
        {
          "id": 4,
          "text": "디렉터리 검색기능을 활성화하면 기본 문서가 없을 때 파일들의 목록이 나타난다."
        }
      ],
      "correctId": 3
    },
    {
      "number": 33,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에서 'ls' 라는 명령어 사용법을 알아보는 명령어로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "cat ls"
        },
        {
          "id": 2,
          "text": "man ls"
        },
        {
          "id": 3,
          "text": "ls man"
        },
        {
          "id": 4,
          "text": "ls cat"
        }
      ],
      "correctId": 2
    },
    {
      "number": 34,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에서 모든 사용자에게 'sample' 파일의 쓰기 권한을 금지시키고자 할 때 명령어로 올바른 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "chmod a-w sample"
        },
        {
          "id": 2,
          "text": "chmod u-w sample"
        },
        {
          "id": 3,
          "text": "chmod g+rw sample"
        },
        {
          "id": 4,
          "text": "chmod a-r sample"
        }
      ],
      "correctId": 1
    },
    {
      "number": 35,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에서 특정 서비스를 제공하는 Daemon이 살아있는지 확인할 때 사용하는 명령어는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "daemon"
        },
        {
          "id": 2,
          "text": "fsck"
        },
        {
          "id": 3,
          "text": "men"
        },
        {
          "id": 4,
          "text": "ps"
        }
      ],
      "correctId": 4
    },
    {
      "number": 36,
      "subject": "3과목 : NOS",
      "stem": "다음은 Linux 시스템의 계정정보가 담긴 ′/etc/passwd′ 의 내용이다. 다음의 설명 중 옳지 않은 것은?",
      "images": [
        "assets/2023-02-26-7.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "사용자 계정의 ID는 ′user1′ 이다."
        },
        {
          "id": 2,
          "text": "패스워드는 ′x′ 이다."
        },
        {
          "id": 3,
          "text": "사용자의 UID와 GID는 500번이다."
        },
        {
          "id": 4,
          "text": "사용자의 기본 Shell은 ′/bin/bash′ 이다."
        }
      ],
      "correctId": 2
    },
    {
      "number": 37,
      "subject": "3과목 : NOS",
      "stem": "서버 담당자 Park 사원은 Windows Server 2016에서 시스템을 감시하고자 이벤트뷰어 서비스를 점검하려 한다. Windows Server 2016 이벤트 뷰어에는 시스템을 감시하는 4가지 항목의 Windows 로그가 있다. 다음 중 이벤트 뷰어 Windows 로그에 속하지 않는 항목은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "보안"
        },
        {
          "id": 2,
          "text": "Setup"
        },
        {
          "id": 3,
          "text": "시스템"
        },
        {
          "id": 4,
          "text": "사용자 권한"
        }
      ],
      "correctId": 4
    },
    {
      "number": 38,
      "subject": "3과목 : NOS",
      "stem": "서버 담당자가 Windows Server 2016 서버에서 파일 서버 구축에 NTFS와 ReFS 파일시스템을 고려하고 있다. NTFS와 ReFS 파일시스템에 대한 설명으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "NTFS는 퍼미션을 사용할 수 있어서 접근 권한을 사용자 별로 설정 할 수 있다."
        },
        {
          "id": 2,
          "text": "NTFS는 파일 시스템의 암호화를 지원한다."
        },
        {
          "id": 3,
          "text": "ReFS는 데이터 오류를 자동으로 확인하고 수정하는 기능이 있다."
        },
        {
          "id": 4,
          "text": "ReFS는 FAT32의 장점과 호환성을 최대한 유지한다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 39,
      "subject": "3과목 : NOS",
      "stem": "서버 담당자 Park 사원은 Windows Server 2016에서 사용자 및 그룹을 관리하는 업무를 부여받았다. Windows Server 2016에는 기본적으로 3개의 로컬 사용자 계정이 생성되어 있는데, 다음 중 기본적으로 생성되는 계정이 아닌 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "Administrator"
        },
        {
          "id": 2,
          "text": "DefaultAccount"
        },
        {
          "id": 3,
          "text": "Guest"
        },
        {
          "id": 4,
          "text": "root"
        }
      ],
      "correctId": 4
    },
    {
      "number": 40,
      "subject": "3과목 : NOS",
      "stem": "Linux 시스템에서 환경설정과 사용자 정보 등을 가진 디렉터리로 옳은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "/bin"
        },
        {
          "id": 2,
          "text": "/root"
        },
        {
          "id": 3,
          "text": "/etc"
        },
        {
          "id": 4,
          "text": "/proc"
        }
      ],
      "correctId": 3
    },
    {
      "number": 41,
      "subject": "3과목 : NOS",
      "stem": "네트워크관리자 Kim사원은 Active Directory의 'icqa.or.kr' 도메인의 그룹정책을 설정하여 회사 내 PC사용자들의 컴퓨터를 관리하고자 한다. 이 때 Kim사원이 작업할 수 있는 그룹정책 설정으로 옳지 않은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "보안 강화를 위해 사용자의 암호 및 계정 잠금 등을 강제로 적용할 수 있다."
        },
        {
          "id": 2,
          "text": "사용자 계정의 암호 길이, 복잡성 조건 등을 지정할 수 있다."
        },
        {
          "id": 3,
          "text": "사용자가 ′icqa.or.kr′ 도메인 내 어느 PC에서 로그온 하더라도 기존 자신의 PC와 동일한 환경을 제공해 줄 수 있다."
        },
        {
          "id": 4,
          "text": "사용자가 사용할 소프트웨어를 배포할 수 없다."
        }
      ],
      "correctId": 4
    },
    {
      "number": 42,
      "subject": "3과목 : NOS",
      "stem": "다음 중 (ㄱ), (ㄴ)에 들어갈 말로 알맞은 것은?",
      "images": [
        "assets/2023-02-26-8.gif"
      ],
      "choices": [
        {
          "id": 1,
          "text": "ㄱ: 21, ㄴ : 1024"
        },
        {
          "id": 2,
          "text": "ㄱ: 21, ㄴ : 20"
        },
        {
          "id": 3,
          "text": "ㄱ: 20, ㄴ : 21"
        },
        {
          "id": 4,
          "text": "ㄱ: 20, ㄴ : 1024"
        }
      ],
      "correctId": 3
    },
    {
      "number": 43,
      "subject": "3과목 : NOS",
      "stem": "Linux에서 열려있는 port 정보를 확인하는 명령어로 옳은 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "ps"
        },
        {
          "id": 2,
          "text": "pstree"
        },
        {
          "id": 3,
          "text": "getenforce"
        },
        {
          "id": 4,
          "text": "netstat"
        }
      ],
      "correctId": 4
    },
    {
      "number": 44,
      "subject": "3과목 : NOS",
      "stem": "Linux Apache 웹서버 운영 시 service port number를 well-known port가 아닌 다른 port number로 변경하여 사용하려 할때, 'httpd.conf' 설정파일에서 변경해야 할 옵션값은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "KeepAlive"
        },
        {
          "id": 2,
          "text": "DocumentRoot"
        },
        {
          "id": 3,
          "text": "StartServers"
        },
        {
          "id": 4,
          "text": "Listen"
        }
      ],
      "correctId": 4
    },
    {
      "number": 45,
      "subject": "3과목 : NOS",
      "stem": "DHCP로부터 새로운 IP Address를 부여받기 위해 사용되는 명령어 옵션은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "ipconfig /renew"
        },
        {
          "id": 2,
          "text": "ipconfig /release"
        },
        {
          "id": 3,
          "text": "ipconfig /flushdns"
        },
        {
          "id": 4,
          "text": "ipconfig /setclassid"
        }
      ],
      "correctId": 1
    },
    {
      "number": 46,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "내부에 코어(Core)와 이를 감싸는 굴절률이 다른 유리나 플라스틱으로 된 외부 클래딩(Cladding)으로 구성된 전송 매체는?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "이중 나선(Twisted Pair)"
        },
        {
          "id": 2,
          "text": "동축 케이블(Coaxial Cable)"
        },
        {
          "id": 3,
          "text": "2선식 개방 선로(Two-Wire Open Lines)"
        },
        {
          "id": 4,
          "text": "광 케이블(Optical Cable)"
        }
      ],
      "correctId": 4
    },
    {
      "number": 47,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "IP Address의 부족과 내부 네트워크 주소의 보안을 위해 사용하는 방법 중 하나로, 내부에서는 사설 IP Address를 사용하고 외부 네트워크로 나가는 주소는 공인 IP Address를 사용하도록 하는 IP Address 변환 방식은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "DHCP 방식"
        },
        {
          "id": 2,
          "text": "IPv6 방식"
        },
        {
          "id": 3,
          "text": "NAT 방식"
        },
        {
          "id": 4,
          "text": "MAC Address 방식"
        }
      ],
      "correctId": 3
    },
    {
      "number": 48,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "가상 근거리 네트워크(VLAN, Virtual Local Area Network)은 물리적인 케이블이 아닌 소프트웨어에 의해 구성된 LAN으로 정의할 수 있는데, VLAN의 특징으로 맞지 않는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "데이터링크 계층에서 브로드캐스트 도메인(Broadcast Domain)을 나누기 위해 사용하는 기술이다."
        },
        {
          "id": 2,
          "text": "각 스위치는 하나의 브로드캐스트 프레임에 대하여 동일 브로드캐스트 그룹이 아닌 곳에는 전달하지 않는다는 조건을 바탕으로 하고 있다."
        },
        {
          "id": 3,
          "text": "VLAN은 관리자가 서로 다른 논리적 그룹에 대하여 서로 다른 보안정책을 적용할 수 없다."
        },
        {
          "id": 4,
          "text": "스위치는 VLAN 태그가 상이한 네트워크로의 접근을 근본적으로 차단하여 보안성을 유지하게 된다."
        }
      ],
      "correctId": 3
    },
    {
      "number": 49,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "Repeater가 동작하는 OSI 7 Layer의 계층은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "물리 계층"
        },
        {
          "id": 2,
          "text": "응용 계층"
        },
        {
          "id": 3,
          "text": "데이터링크 계층"
        },
        {
          "id": 4,
          "text": "네트워크 계층"
        }
      ],
      "correctId": 1
    },
    {
      "number": 50,
      "subject": "4과목 : 네트워크 운용기기",
      "stem": "RAID의 레벨 중에서 회전 패리티 방식으로 병목현상을 줄이는 것은?",
      "images": [],
      "choices": [
        {
          "id": 1,
          "text": "RAID-2"
        },
        {
          "id": 2,
          "text": "RAID-3"
        },
        {
          "id": 3,
          "text": "RAID-4"
        },
        {
          "id": 4,
          "text": "RAID-5"
        }
      ],
      "correctId": 4
    }
  ]

}
