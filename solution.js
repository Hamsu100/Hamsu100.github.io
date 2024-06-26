let solution = [
    {
        "question": "Public IP에 대한 설명 중 틀린 것은?",
        "choice": [
            "서버당 1개의 Public IP만 부여가 가능하다.",
            "Outbound시에는 NCP NAT IP로 통신한다.",
            "Classic 환경에서는 KR-1 존의 Public IP는 KR-2 존의 서버에 부여가 불가능하다.",
            "서버를 반납해도 Public IP는 반납되지 않는다."
        ],
        "answer": "Outbound시에는 NCP NAT IP로 통신한다.",
        "example": ""
    },
    {
        "question": "다음중 네이버 클라우드 플랫폼에서 제공하는 상품이 아닌 것은 무엇인가요?",
        "choice": [
            "Cloud Functions",
            "Container Registry",
            "Outpost",
            "SourcePipeline"
        ],
        "answer": "Outpost",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼에는 다양한 상품들이 카테고리로 그룹화되어 있습니다. \"Cloud Hadoop\" 상품은 어떤 카테고리에 속해 있을까요?",
        "choice": [
            "Compute",
            "Database",
            "Analytics",
            "AI-Application Service"
        ],
        "answer": "Analytics",
        "example": ""
    },
    {
        "question": "다음 중, 사용자가 Agent를 설치해야지만 사용할 수 있는 서비스가 아닌 것은?",
        "choice": [
            "Cloud Insight",
            "System Security Checker",
            "CLA",
            "백업 서비스"
        ],
        "answer": "Cloud Insight",
        "example": ""
    },
    {
        "question": "현재 네이버 클라우드 플랫폼에서 제공되지 않는 리전은?",
        "choice": [
            "홍콩",
            "미국 동부",
            "일본",
            "독일"
        ],
        "answer": "미국 동부",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼에서 제공하고 있지 않은 전문화된 클라우드는 어떤 것인가요?",
        "choice": [
            "금융 클라우드",
            "민간 클라우드",
            "공공 클라우드",
            "아카데미 클라우드"
        ],
        "answer": "아카데미 클라우드",
        "example": ""
    },
    {
        "question": "다음 중 콘솔에서 서비스를 신청할 수 없는 서비스는?",
        "choice": [
            "백업 서비스",
            "서버 이미지 생성",
            "스냅샷 기능",
            "모니터링 서비스"
        ],
        "answer": "백업 서비스",
        "example": ""
    },
    {
        "question": "서버 정지가 필요한 경우가 아닌 것은? (복수정답)",
        "choice": [
            "서버 이미지 생성",
            "서버 스펙 변경",
            "서버 반납",
            "공인 IP 부여"
        ],
        "answer": "서버 이미지 생성, 공인 IP 부여",
        "example": ""
    },
    {
        "question": "오토스케일링 설정시 오토 스케일링 그룹(ASG)에서 설정 가능한 내용이 아닌 것은 무엇인가?",
        "choice": [
            "오토스케일링으로 생성될 서버의 OS",
            "오토스케일링에서 사용할 Launch Configuration",
            "서버 증가, 감소 정책",
            "일정 설정"
        ],
        "answer": "오토스케일링으로 생성될 서버의 OS",
        "example": ""
    },
    {
        "question": "다음이 설명하는 내용은 Auto Scaling의 어떤 항목인가?",
        "choice": [
            "쿨다운",
            "헬스체크",
            "기대용량",
            "Policy"
        ],
        "answer": "쿨다운",
        "example": "새로운 서버가 생성 되었다고 해도, Init-Script 실행이나 업데이트 설치 등의 이유로 실제 서비스를 수행할 수 있을 정도로 준비되기까지는 시간이 소요될 수 있습니다. 이것은 실제 Scaling이 수행 중이거나 수행 완료된 이후에 모니터링 이베트 알람이 발생하더라도 무시 하도록 설정한 기간입니다."
    },
    {
        "question": "Data Teleporter에 대한 설명으로 잘못된 것은?",
        "choice": [
            "Data Teleporter 한 대당 100TB의 저장용량을 가지며, 내부적으로 디스크 문제가 최소화될 수 있도록 설계되었습니다.",
            "별도의 요청이 없다면 Data Teleporter는 최초 대여 후 60일 이내에 네이버 클라우드 플랫폼으로 반환되어야 합니다.",
            "Data Teleporter는 고객이 신청한 암호화 키로 256비트 암호화되며, 암호화 키는 장치 내 그 어디에도 저장되지 않습니다.",
            "Linux Server와 Windows Server는 모두 NFS 또는 CIFS 공유 파일시스템으로 연결(mount) 할 수 있습니다."
        ],
        "answer": "별도의 요청이 없다면 Data Teleporter는 최초 대여 후 60일 이내에 네이버 클라우드 플랫폼으로 반환되어야 합니다.",
        "example": ""
    },
    {
        "question": "다음 중, NAS에 대한 설명 중 잘못된 것은?",
        "choice": [
            "NAS는 임계치 설정에 따른 이벤트 알림 기능을 제공한다.",
            "NAS는 일정한 스케줄에 따라 자동 스냅샷을 완성한다.",
            "NAS는 리눅스 서버에서 공유 가능한 CIFS 프로토콜을 제공한다.",
            "네이버클라우드플랫폼에서는 NAS 생성 시 마운트포인트 정보를 제공한다."
        ],
        "answer": "NAS는 리눅스 서버에서 공유 가능한 CIFS 프로토콜을 제공한다.",
        "example": ""
    },
    {
        "question": "베어메탈에 대한 설명 중 틀린 것은?",
        "choice": [
            "3가지 스펙을 제공하고 있다.",
            "OS로 Oracle Linux도 제공한다.",
            "디스크 구성시 RAID 방식을 선택할 수 있다.",
            "내 서버 이미지, 스냅샷, 추가 스토리지 기능은 제공하지 않는다."
        ],
        "answer": "3가지 스펙을 제공하고 있다.",
        "example": ""
    },
    {
        "question": "Bare Metal 서버에 대한 설명 중 틀린 것은?",
        "choice": [
            "RAID 1 구성방식만 제공한다.",
            "요금제는 시간 요금제만 제공한다.",
            "Init Script 사용이 가능하다.",
            "Oracle Linux가 제공된다."
        ],
        "answer": "RAID 1 구성방식만 제공한다.",
        "example": ""
    },
    {
        "question": "다음 중, 네이버 클라우드 플랫폼 서버에 스토리지 추가와 관련하여 틀리게 설명한 것은?",
        "choice": [
            "Linux의 LVM, Window는 동적디스크 할당을 통해 여러 개의 디스크를 하나의 볼륨으로 묶을 수 있습니다.",
            "서버에 연결된 디스크를 다른 서버로 옮길 수 있습니다.",
            "사용 중인 디스크의 크기가 부족할 경우, 최대 15개의 스토리지를 추가할 수 있습니다.",
            "스토리지 당, 100GB, 500GB, 1TB의 단위의 용량만 추가할 수 있습니다."
        ],
        "answer": "스토리지 당, 100GB, 500GB, 1TB의 단위의 용량만 추가할 수 있습니다.",
        "example": ""
    },
    {
        "question": "네이버클라우드플랫폼에서 제공하는 GPU 서버는 VM에 최대 몇 개의 GPU를 제공할 수 있는지 올바른 답을 고르시오.",
        "choice": [
            "1개",
            "2개",
            "4개",
            "그래픽카드 종류마다 장착할 수 있는 개수가 다르다."
        ],
        "answer": "4개",
        "example": ""
    },
    {
        "question": "다음 스토리지 상품 특징에 대한 설명으로 맞는 것은?",
        "choice": [
            "NAS는 10GB, 100GB, 500GB 등 다양한 단위로 스토리지 증가가 가능하다.",
            "Block Storage와 NAS는 모두 공유 가능한 스토리지이다.",
            "NAS는 동적으로 볼륨 사이즈 조정이 가능하고, 자동 스냅샷 및 이벤트 알람 기능을 제공한다.",
            "NAS는 Windows 서버만 이용할 수 있는 스토리지다."
        ],
        "answer": "NAS는 동적으로 볼륨 사이즈 조정이 가능하고, 자동 스냅샷 및 이벤트 알람 기능을 제공한다.",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 VPC 환경에서 멀티존 이용이 가능한 상품은? (복수정답)",
        "choice": [
            "Cloud DB for MySQL",
            "Load Balancer",
            "Server",
            "Cloud Hadoop"
        ],
        "answer": "Cloud DB for MySQL,Load Balancer",
        "example": ""
    },
    {
        "question": "CDN+ 설정 시 설정 항목에 대한 설명 중 올바르지 않은 것은 무엇인가요?",
        "choice": [
            "Purge : CDN 캐시 서버에 저장되어 있는 콘텐츠를 삭제하는 기능",
            "Secure Token : 토큰 기반의 인증으로 허용된 접근에만 콘텐츠를 전달",
            "lgnore Query String : 콘텐츠가 지정된 도메인에만 제공되며 다른 사이트에서 참조되는 것을 방지",
            "Access Log : CDN 사용 로그를 확인할 수 있는 기능"
        ],
        "answer": "lgnore Query String : 콘텐츠가 지정된 도메인에만 제공되며 다른 사이트에서 참조되는 것을 방지",
        "example": ""
    },
    {
        "question": "다음 상품 중 상품 생성 시 CDN을 함께 생성하는 기능이 없는 상품은 무엇인가요?",
        "choice": [
            "VOD Transcoder",
            "Image Optimizer",
            "Live Station",
            "VOD Station"
        ],
        "answer": "VOD Transcoder",
        "example": ""
    },
    {
        "question": "다음 중 VPC에서 사용 가능한 IP 대역은 무엇인가요?",
        "choice": [
            "10.0.0.0/12",
            "172.17.0.0/16",
            "192.168.0.0/8",
            "192.168.1.0/30"
        ],
        "answer": "172.17.0.0/16",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼의 VPC 환경에서 ACG에 대한 설명으로 옳은 것은 무엇인가요?",
        "choice": [
            "프로토콜은 TCP, UDP만 지원한다.",
            "Subnet당 100개 생성이 가능하다.",
            "서버와의 맵핑 정보 변경이 가능하다.",
            "Rule에 우선순위가 있다."
        ],
        "answer": "서버와의 맵핑 정보 변경이 가능하다.",
        "example": ""
    },
    {
        "question": "Image Optimizer에 대한 설명으로 틀린 것을 고르시오.",
        "choice": [
            "이미지 리사이즈 기능을 제공한다.",
            "이미지 크롭 기능을 제공한다.",
            "이미지 자동회전 기능을 제공한다.",
            "이미지 일관 변환 및 저장 기능을 제공한다."
        ],
        "answer": "이미지 일관 변환 및 저장 기능을 제공한다.",
        "example": ""
    },
    {
        "question": "애플리케이션 로드밸런서의 특징으로 틀린 것은 무엇인가요?",
        "choice": [
            "HTTP, HTTPS 프로토콜 지원",
            "고정 IP 제공",
            "URL 기반 분기 가능",
            "별도의 설정 없이 Client IP 확인 가능"
        ],
        "answer": "별도의 설정 없이 Client IP 확인 가능",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼의 VPC 환경에서 ACG 룰이 적용되는 장치는 무엇인가요?",
        "choice": [
            "서버",
            "서버 NIC",
            "IP",
            "Subnet"
        ],
        "answer": "서버 NIC",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 VPC의 Subnet에 대한 설명으로 틀린 것은 무엇인가요?",
        "choice": [
            "Private Subnet과 Public Subnet이 있습니다.",
            "서버들은 Private Subnet과 Public Subnet 모두 위치 시킬 수 있습니다.",
            "공인 IP가 필요한 로드밸런서는 Public Subnet에 위치합니다.",
            "Private Subnet에 있는 서버들은 공인 IP 부여를 할 수 없습니다."
        ],
        "answer": "서버들은 Private Subnet과 Public Subnet 모두 위치 시킬 수 있습니다.",
        "example": ""
    },
    {
        "question": "다음 상품 중 이벤트 설정이 불가능한 상품은 무엇인지 고르시오. (복수정답)",
        "choice": [
            "Server",
            "NAS",
            "Object Storage",
            "CDN+"
        ],
        "answer": "Object Storage, CDN+",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 상품 중 Apache Kafka Cluster를 제공하는 서비스 이름은 무엇인가요?",
        "choice": [
            "Cloud Data Streaming Service",
            "Cloud Search",
            "Data Analytics Service",
            "Cloud Advisor"
        ],
        "answer": "Cloud Data Streaming Service",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼의 Effective Log Search & Analytics의 로그전송 방법이 아닌것은 무엇인가요?",
        "choice": [
            "HTTPS SDK",
            "IOS SDK",
            "SOCK SDK",
            "LOG SDK"
        ],
        "answer": "SOCK SDK",
        "example": ""
    },
    {
        "question": "Workplace에서 제공되지 않는 기능은 무엇인가요?",
        "choice": [
            "결제시스템",
            "인사시스템",
            "스프레드 시트",
            "메신저"
        ],
        "answer": "스프레드 시트",
        "example": ""
    },
    {
        "question": "다음 중, Cloud DB for MySQL과 관련하여 잘못된 설명은?",
        "choice": [
            "Cloud DB for MySQL은 자동 Fail-over 기능을 제공한다.",
            "Cloud DB for MySQL의 최대 백업 파일 보관은 20일이다.",
            "Cloud DB for MySQL은 최대 (?)개의 Slave DB를 생성할 수 있다.",
            "Cloud DB for MySQL은 Slave DB로의 읽기 부하분산이 가능하다."
        ],
        "answer": "Cloud DB for MySQL의 최대 백업 파일 보관은 20일이다.",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 VPC 환경에서의 ACG에 대한 설명 중 틀린 것은?",
        "choice": [
            "아웃바운드에 대한 설정이 가능하다.",
            "접근 허용에 대한 룰을 설정한다.",
            "ACG 하나당 최대 100개의 룰을 적용할 수 있다.",
            "서버는 최대 5개의 ACG를 맵핑할 수 있다."
        ],
        "answer": "서버는 최대 5개의 ACG를 맵핑할 수 있다.",
        "example": ""
    },
    {
        "question": "Security Monitoring에서 제공되지 않는 항목은?",
        "choice": [
            "IDS",
            "IPS",
            "WAF",
            "침해탐지"
        ],
        "answer": "침해탐지",
        "example": ""
    },
    {
        "question": "서버 생성시 init script를 통해 서버를 구성할 수 있습니다. CentOS 7.x 버전의 서버를 생성하면서 HTTPD를 설치하도록 init script에 명령어를 입력하고자 하는 경우 올바른 명령어는 무엇인가요?",
        "choice": [
            "install httpd",
            "yum install httpd",
            "yum install -y httpd",
            "yum install -a httpd"
        ],
        "answer": "yum install -y httpd",
        "example": ""
    },
    {
        "question": "마이크로서버에 대한 설명 중 틀린 것은?",
        "choice": [
            "Network interface를 만들 수 없다.",
            "1vCPU, 1GB 메모리이다.",
            "OS는 CentOS, Ubuntu, Windows를 지원한다.",
            "결제수단 최초 등록 월부터 1년간 이용요금이 무료이다."
        ],
        "answer": "OS는 CentOS, Ubuntu, Windows를 지원한다.",
        "example": ""
    },
    {
        "question": "CentOS를 사용중인 VM에서 파일시스템 증설 관련 내용 중 틀린 것은? (복수정답)",
        "choice": [
            "NCP 콘솔에서 Block Storage 크기 변경 액션을 수행하면 사전 설치된 Agent가 자동으로 파일시스템을 확장한다.",
            "최초 구축 시 Block Storage로 할당하는 부분은 LVM으로 구성하여 파일시스템 확장 필요시 PV, LV를 추가한다.",
            "Block Storage 크기 변경 액션을 통해 자유롭게 할당 용량을 증설/감설 할 수 있다.",
            "Block Storage 크기 변경 액션을 수행하려면, 대상 블록 스토리지가 사용중일 경우 파일시스템을 연결 해제해야 한다."
        ],
        "answer": "Block Storage 크기 변경 액션을 통해 자유롭게 할당 용량을 증설/감설 할 수 있다.",
        "example": ""
    },
    {
        "question": "다음 기능을 이용하기 위해, 사전에 서버 정지가 필수적인 기능은?",
        "choice": [
            "내 서버 이미지",
            "스냅샷",
            "서버 이미지 빌더",
            "서버 반납"
        ],
        "answer": "서버 반납",
        "example": ""
    },
    {
        "question": "다음 중 Block Storage에 대한 설명 중 잘못된 것은?",
        "choice": [
            "데이터 손실 방지를 최우선으로 설계하여 모든 요소가 이중화 되어 있습니다.",
            "2000GB까지 생성 가능하며, 서버 1대당 10개의 스토리지를 사용할 수 있습니다.",
            "기동 중단이나 성능 저하 없이 탄련적으로 성능 변경이 가능합니다.",
            "HDD/SDD 두 가지 타입으로 제공되며 목적에 맞게 적절한 스토리지 종류를 선택하여 사용할 수 있습니다."
        ],
        "answer": "2000GB까지 생성 가능하며, 서버 1대당 10개의 스토리지를 사용할 수 있습니다.",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼에서 제공하는 GPU 카드는?",
        "choice": [
            "P40",
            "T4",
            "V100",
            "P40, T4, V100 모두 제공"
        ],
        "answer": "P40, T4, V100 모두 제공",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 서버에 스토리지 추가를 할 경우 단일 추가 스토리지당 최대 용량은 얼마인가요?",
        "choice": [
            "1TB",
            "2TB",
            "3TB",
            "4TB"
        ],
        "answer": "2TB",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼에 서버를 생성하고 네트워크 구성을 하였을 때, 그에 대한 설명으로 틀린 것은 무엇인가요?",
        "choice": [
            "서버는 기본적으로 10.xxx / 172.16xx / 192.168.xx 대역 중 하나의 사설 IP를 부여 받을수 있다.",
            "서버의 사설망 네트워크 대역은 최소 /28부터 최대 /16 범위까지 설정 가능하다.",
            "Public IP를 연결하면 서버에서 ifconfig/ipconfig 명령어를 칠 시 Public IP가 보인다.",
            "서버는 기본적으로 1Gps 대역폭의 인터페이스를 생성한다."
        ],
        "answer": "Public IP를 연결하면 서버에서 ifconfig/ipconfig 명령어를 칠 시 Public IP가 보인다.",
        "example": ""
    },
    {
        "question": "다음 상품 중 Media 카테고리 상품이 아닌 것은 무엇인가요?",
        "choice": [
            "Live Station",
            "VOD Station",
            "VOD Transcoder",
            "Elastic Transcoder"
        ],
        "answer": "Elastic Transcoder",
        "example": ""
    },
    {
        "question": "Load Balancer 상품에 대한 설명 중 잘못된 것은?",
        "choice": [
            "Classic 플랫폼에서의 헬스체크 주기는 6초이다.",
            "Classic 플랫폼에서는 3번 응답이 없는 경우 Unbind한다.",
            "VPC 플랫폼에서 한 대의 서버는 여러 Target Group에 포함될 수 없다.",
            "VPC 플랫폼에서는 Target Group에서 헬스체크 주기를 수정할 수 있다."
        ],
        "answer": "VPC 플랫폼에서 한 대의 서버는 여러 Target Group에 포함될 수 없다.",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 VPC의 NACL에 대한 설명으로 틀린 것은?",
        "choice": [
            "Subnet 단위로 적용된다.",
            "Allow Deny 규칙 모두 지원한다.",
            "Stateful 방식이다.",
            "우선순위에 따라 규칙을 반영한다."
        ],
        "answer": "Stateful 방식이다.",
        "example": ""
    },
    {
        "question": "Load Balancer로 연결 가능한 프로토콜이 아닌 것은 무엇인가요?",
        "choice": [
            "TCP",
            "UDP",
            "HTTPS",
            "SSL"
        ],
        "answer": "UDP",
        "example": ""
    },
    {
        "question": "VPC 환경에서 Load Balancer를 생성하려고 합니다. Target Group의 디폴트 포트 헬스체크 주기는 얼마인가요?",
        "choice": [
            "6초",
            "10초",
            "30초",
            "1분"
        ],
        "answer": "30초",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼의 VPC 환경에서 서버 NIC 하나에 적용할 수 있는 ACG의 개수는?",
        "choice": [
            "2개",
            "3개",
            "4개",
            "5개"
        ],
        "answer": "3개",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 로드밸런서에서 제공되지 않는 로드 분배 알고리즘은?",
        "choice": [
            "Round Robin",
            "Weighted Round Robin",
            "Least Connection",
            "Source IP Hash"
        ],
        "answer": "Weighted Round Robin",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 VPC 환경에서 제공하는 로드밸런서 중 SSL 인증을 지원하는 로드밸런서는 무엇인가요?",
        "choice": [
            "애플리케이션 로드밸런서",
            "네트워크 로드밸런서",
            "하이브리드 로드밸런서",
            "애플리케이션 프록시 로드밸런서"
        ],
        "answer": "애플리케이션 로드밸런서",
        "example": ""
    },
    {
        "question": "다음 로드밸런서 관련 설명 중 틀린 것은?",
        "choice": [
            "HTTP Keep-Alive : 연결된 Connection을 일정시간 동안 유지하면서 다시 연결을 요청할 때 기존에 연결된 Connection을 재사용하는 옵션",
            "Connection ilde Timeout : 로드밸런서와 연결된 Connection을 유지하는 시간으로 해당 시간이 지나면 Connection이 강제로 Close되어 연결 해제",
            "Proxy Protocol : 로드밸런서에서 TCP, SSL 프로토콜 이용 시, Proxy 환경에서 Connection을 요청하는 클라이언트의 IP 주소를 확인할 수 있는 프로토콜",
            "로드밸런서에서 발급된 CNAME을 고객이 보유한 CNAME과 ROOT DOMAIN에 등록가능"
        ],
        "answer": "로드밸런서에서 발급된 CNAME을 고객이 보유한 CNAME과 ROOT DOMAIN에 등록가능",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 VPC의 Private Subnet에 대한 설명으로 틀린 것은 무엇인가요?",
        "choice": [
            "Private Subnet에 있는 서버들은 공인 IP 부여를 할 수 없습니다.",
            "Private Subnet에 있는 서버들은 Internet Gateway를 통해 외부 인터넷으로 나갈 수있습니다.",
            "네이버 클라우드 플랫폼의 일부 상품들은 기본적으로 Public Subnet에 위치해야 합니다.",
            "Private Subnet을 Public Subnet으로 전환할 수 없습니다."
        ],
        "answer": "Private Subnet에 있는 서버들은 Internet Gateway를 통해 외부 인터넷으로 나갈 수있습니다.",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼에서 하나의 계정으로 만들 수 있는 최대 VPC 갯수는 몇개인가요?",
        "choice": [
            "1개",
            "2개",
            "3개",
            "4개"
        ],
        "answer": "3개",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 Block Storage에서 제공하는 기능이 아닌 것은?",
        "choice": [
            "Detach / Attach 기능",
            "Snapshot 기능",
            "Disk 용량 증설",
            "Disk 용량 축소"
        ],
        "answer": "Disk 용량 축소",
        "example": ""
    },
    {
        "question": "Auto Scaling 구성 시 설정할 수 있는 항목이 아닌 것은?",
        "choice": [
            "NAS",
            "ACG",
            "Load Balancer",
            "VPC / Subnet"
        ],
        "answer": "NAS",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼의 VPC 환경에서 제공하는 로드밸런서 중 세션 유지가 필요한 TCP 기반 애플리케이션에 이용할 수 있는 로드밸런서는 무엇인가요?",
        "choice": [
            "애플리케이션 로드밸런서",
            "네트워크 로드밸런서",
            "네트워크 프록시 로드밸런서",
            "애플리케이션 프록시 로드밸런서"
        ],
        "answer": "네트워크 프록시 로드밸런서",
        "example": ""
    },
    {
        "question": "System Security Checker에서 Linux 서버의 점검 항목이 아닌 것은?",
        "choice": [
            "UMASK 설정관리",
            "Guest 계정 사용 제한",
            "홈 디렉토리 권한 설정",
            "Anonymous FTP 비활성화"
        ],
        "answer": "Guest 계정 사용 제한",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 CLI를 이용하고자 할 때 사용하는 명령어는 무엇인가요?",
        "choice": [
            "Ncpcli",
            "Ncloud",
            "Ncloudcli",
            "Ncli"
        ],
        "answer": "Ncloud",
        "example": ""
    },
    {
        "question": "다음 중 클라우드의 특징에 대해 잘못 설명한 것은 무엇인가요?",
        "choice": [
            "동일한 네트웍 사용량을 기준으로 보면 Legacy 인프라보다 클라우드가 저렴하다.",
            "Scale-In/Out이 Legacy 인프라보다 자유롭다.",
            "요금은 사용량에 따른 종량제를 기본으로 하지만 상품에 따라 정액제 요금도 존재한다.",
            "사용할 수 있는 서버 OS가 제한한다."
        ],
        "answer": "동일한 네트웍 사용량을 기준으로 보면 Legacy 인프라보다 클라우드가 저렴하다.",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼에는 다양한 상품들이 카테고리로 그룹화되어 있습니다. \"VMware on Ncloud\" 상품은 어떤 카테고리에 속해 있을까요?",
        "choice": [
            "Compute",
            "Server",
            "Management",
            "Hybrid & Private Cloud"
        ],
        "answer": "Hybrid & Private Cloud",
        "example": ""
    },
    {
        "question": "다음 중 네이버 클라우드 플랫폼의 Live Station의 특징이 아닌 것은?",
        "choice": [
            "방송 서비스 구현에 꼭 필요한 Thumbnail image를 추출하고 직접 관리할 수 있습니다.",
            "Live Station 생성 시 CDN을 동시에 생성할 수 없기에 별도로 생성 후 따로 연동해줘야 합니다.",
            "Live Station은 사용자가 라이브 방송 도중 일시정지를 하고 다시 재생이 가능하도록 타임머신(Time Shift)기능을 제공합니다.",
            "라이브 방송 종료 후, 녹화 영상을 저장할 수 있습니다."
        ],
        "answer": "Live Station 생성 시 CDN을 동시에 생성할 수 없기에 별도로 생성 후 따로 연동해줘야 합니다.",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 CDN+에 대한 설명 중 틀린 것은?",
        "choice": [
            "사용량에 따라 요금이 다르다.",
            "요금은 일 평균 전송량 X 일 수로 계산된다.",
            "월 전송량 요금에 월 요청 수 요금이 합산되어 진다.",
            "CDN+와 GCDN은 요금 체계가 다르다."
        ],
        "answer": "요금은 일 평균 전송량 X 일 수로 계산된다.",
        "example": ""
    },
    {
        "question": "Application 서비스 각각의 서비스 명과 설명 중 잘못된 것은?",
        "choice": [
            "Clova Speech Recognition : 사람의 목소리를 텍스트로 바꿔주어 다양한 음성인식 서비스에 활용 가능한 서버",
            "Clova Face Recognition : 이미지 속의 얼굴을 감지하고 인식하여 얻은 다양한 정보를 제공할 수 있는 서비스",
            "Papago NMT : 입력한 텍스트를 대규모 학습 데이터를 기반으로 여러 나라의 언어로 지동 번역해주는 서비스",
            "Object Detection : 입력한 텍스트를 자연스러운 목소리로 재생해주는 음성 합성 API서비스"
        ],
        "answer": "Object Detection : 입력한 텍스트를 자연스러운 목소리로 재생해주는 음성 합성 API서비스",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 App Safer에서 앱 실행 환경 탐지가 가능한 부분이 아닌 것은?",
        "choice": [
            "루팅 탐지",
            "애플리케이션 변조 탐지",
            "메모리 변조 탐지",
            "APK 추출 탐지"
        ],
        "answer": "APK 추출 탐지",
        "example": ""
    },
    {
        "question": "VPC 플랫폼 상의 상품 의존성 관계를 [상품 : 의존성] 형태로 나타냈을 때, 올바르지 않은 관계는?",
        "choice": [
            "VPC : 리전",
            "Subnet : Zone",
            "Init Script : Zone",
            "Cloud DB : Multi Zone"
        ],
        "answer": "Init Script : Zone",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼에서는 다양한 소통 채널을 통해 사용자와 소통을 진행하고 있습니다. 현재 네이버 클라우드 플랫폼에서 운영하고 있지 않은 채널은 무엇인가요?",
        "choice": [
            "블로그",
            "유튜브",
            "페이스북",
            "트위터"
        ],
        "answer": "트위터",
        "example": ""
    },
    {
        "question": "Cloud Log Analytics에 저장할 수 있는 최대 로그 용량은?",
        "choice": [
            "100GB",
            "200GB",
            "300GB",
            "사용자가 설정할 수 있다."
        ],
        "answer": "100GB",
        "example": ""
    },
    {
        "question": "Outbound Mailer에서 메일 제목과 본문에서 스프레드 시트나 DB의 열 데이터를 순차적으로 입력하기 위한 기능은?",
        "choice": [
            "변수 치환",
            "대량 변수 입력",
            "치환 태그",
            "DM 입력"
        ],
        "answer": "치환 태그",
        "example": ""
    },
    {
        "question": "Cloud Log Analytics의 최대 저장 기간은?",
        "choice": [
            "30일",
            "120일",
            "180일",
            "사용자가 설정할 수 있다."
        ],
        "answer": "30일",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 챗봇 서비스와 채널 연동되는 서비스가 아닌 것은?",
        "choice": [
            "라인",
            "톡톡",
            "페이스북",
            "트위터"
        ],
        "answer": "트위터",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 AI 서비스에서 제공하지 않는 상품은?",
        "choice": [
            "Clova OCR",
            "Clova Image Recognition",
            "Clova Voice",
            "Clova Face Recognition"
        ],
        "answer": "Clova Image Recognition",
        "example": ""
    },
    {
        "question": "클라우드는 기존 Legacy와 비교하여 다양한 장점이 있습니다. 아래 보기 중 클라우드 장점이 아닌 것은?",
        "choice": [
            "동일한 성능의 서버를 비교하였을 때 Legacy보다 클라우드가 비용 경쟁력이 높다.",
            "서버 구성 시 짧은 시간 내에 구성이 가능하다.",
            "기본적인 보안 장비 및 네트웍이 구성되어 있다.",
            "오토스케일링 플랫폼과 같이 비용 효율적인 상품들이 준비되어 있다."
        ],
        "answer": "동일한 성능의 서버를 비교하였을 때 Legacy보다 클라우드가 비용 경쟁력이 높다.",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼에서 제공하지 않는 OS는?",
        "choice": [
            "CentOS",
            "Oracle Linux",
            "Debian",
            "Ubuntu"
        ],
        "answer": "Debian",
        "example": ""
    },
    {
        "question": "VPC 플랫폼에서 서버 정지 시 요금 할인이 적용되지 않는 서버 타입은?",
        "choice": [
            "Standard",
            "High-CPU",
            "High-Memory",
            "GPU"
        ],
        "answer": "GPU",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼에서 제공하는 시스템 로그 분석 서비스는?",
        "choice": [
            "RUA",
            "CLA",
            "ELSA",
            "SENS"
        ],
        "answer": "CLA",
        "example": ""
    },
    {
        "question": "오토스케일링을 구성하고자 할 때 오토스케일링 그룹(ASG)을 구성하여야 한다. 오토스케일링 그룹에 대한 설명으로 틀린 것은?",
        "choice": [
            "하나의 그룹에서 생성 가능한 최대 서버 대수는 30대이다.",
            "기대 용량은 최소 용량보다 크거나 같아야 한다.",
            "헬스체크 유형에는 서버. 네트워크 트래픽, 로드밸런서가 있다.",
            "하나의 ASG에는 최대 10개의 로드밸런서를 연결할 수 있다."
        ],
        "answer": "헬스체크 유형에는 서버. 네트워크 트래픽, 로드밸런서가 있다.",
        "example": ""
    },
    {
        "question": "VPC 환경 / Classic 2세대 서버의 스펙 중 생성 불가능한 서버 스펙은 무엇인가요?",
        "choice": [
            "vCPU 4개, RAM 8GB",
            "vCPU 8개, RAM 8GB",
            "vCPU 2개, RAM 8GB",
            "vCPU 16개, RAM 128GB"
        ],
        "answer": "vCPU 8개, RAM 8GB",
        "example": ""
    },
    {
        "question": "오토스케일링의 Launch Configuration 구성 시 구성 가능한 항목이 아닌 것을 고르시오.",
        "choice": [
            "생성될 서버의 OS",
            "사전에 만들어놓은 내 서버 이미지",
            "Init Script",
            "로드밸런서"
        ],
        "answer": "로드밸런서",
        "example": ""
    },
    {
        "question": "서버 생성시 init script를 통해 서버를 구성할 수 있습니다. CentOS 7.x 버전의 서버를 생성하면서 HTTPD를 설치한 후, HTTPD가 자동으로 가동되도록 init script에 명령어를 입력하고자 하는 경우 올바른 명령어는 무엇인가요?",
        "choice": [
            "systemctl start httpd",
            "chkconfig start httpd",
            "systemctl enable httpd",
            "chkconfig on httpd"
        ],
        "answer": "systemctl enable httpd",
        "example": ""
    },
    {
        "question": "백업 상품 신청서 작성 시 필요한 정보가 아닌 것은?",
        "choice": [
            "백업 받을 서버의 호스트명",
            "백업 받을 서버의 비공인 IP",
            "백업 프로세스의 CPU 사용량 제한 여부",
            "데이터 사이즈"
        ],
        "answer": "백업 프로세스의 CPU 사용량 제한 여부",
        "example": ""
    },
    {
        "question": "VPC 환경 / Classic 2세대 서버의 Standard 서버 스펙 중 생성 가능한 서버 스펙은 무엇인가요?",
        "choice": [
            "vCPU 2개, RAM 8GB",
            "vCPU 2개, RAM 4GB",
            "vCPU 2개, RAM 16GB",
            "vCPU 4개, RAM 4GB"
        ],
        "answer": "vCPU 2개, RAM 8GB",
        "example": ""
    },
    {
        "question": "서버 패스워드에 대한 설명 중 틀린 것은?",
        "choice": [
            "초기 패스워드는 서버 생성 시 생성한 인증키를 가지고 확인할 수 있다.",
            "서버에서 패스워드를 변경 후 패스워드를 까먹은 경우 기존에 생성한 인증키를 통해 패스워드를 확인할 수 있다.",
            "서버 생성 시 생성한 인증키는 다른 인증키로 교체할 수 있다.",
            "서버 초기 패스워드는 복잡한 문자열로 부여한다."
        ],
        "answer": "서버에서 패스워드를 변경 후 패스워드를 까먹은 경우 기존에 생성한 인증키를 통해 패스워드를 확인할 수 있다.",
        "example": ""
    },
    {
        "question": "SSD 스토리지의 크기가 400GB일 때 MAX IOPS는 얼마인가?",
        "choice": [
            "2000",
            "8000",
            "16000",
            "20000"
        ],
        "answer": "16000",
        "example": ""
    },
    {
        "question": "VPC 환경 / Classic 2세대 서버의 High Memory 서버 스펙 중 생성 가능한 서버 스펙은무엇인가요?",
        "choice": [
            "vCPU 4개, RAM 8GB",
            "vCPU 8개, RAM 8GB",
            "vCPU 2개, RAM 8GB",
            "vCPU 16개, RAM 128GB"
        ],
        "answer": "vCPU 16개, RAM 128GB",
        "example": ""
    },
    {
        "question": "서버 생성 시 선택 가능한 스토리지 종류에 대한 설명 중 틀린 것은?",
        "choice": [
            "SSD 타입은 저장장치가 SSD인 디스크이다.",
            "HDD 타입은 저장장치가 SATA인 디스크이다.",
            "서버 타입에 따라 NVMe 디스크를 사용할 수 있다.",
            "SSD 타입은 MAS IOPS가 지정된다"
        ],
        "answer": "HDD 타입은 저장장치가 SATA인 디스크이다.",
        "example": ""
    },
    {
        "question": "VPC 환경 / Classic 2세대 서버의 High CPU 서버 스펙 중 생성 가능한 서버 스펙은 무엇인가요?",
        "choice": [
            "vCPU 4개, RAM 8GB",
            "vCPU 8개, RAM 8GB",
            "vCPU 2개, RAM 8GB",
            "vCPU 16개, RAM 128GB"
        ],
        "answer": "vCPU 4개, RAM 8GB",
        "example": ""
    },
    {
        "question": "VPC 환경에서 사용 중인 VM에 ACG 관리 작업으로 맞는 것을 고르시오.",
        "choice": [
            "VM 기동 중에는 ACG 변경이 불가능하므로 VM을 정지시킨 후 ACG를 변경한다.",
            "ACG는 서버 NIC에 매핑된다.",
            "하나의 서버는 최대 2개의 ACG와 매핑될 수 있다.",
            "ACG는 VM당 1개만 선택할 수 있으므로 타 VM과 공유하여 사용하지 않는 것이 좋다."
        ],
        "answer": "ACG는 서버 NIC에 매핑된다.",
        "example": ""
    },
    {
        "question": "Linux용 Init Script로 생성 불가능한 스크립트 언어는?",
        "choice": [
            "bash",
            "perl",
            "python",
            "php"
        ],
        "answer": "php",
        "example": ""
    },
    {
        "question": "Bare-Metal 서버 기능 설명으로 맞는 것은?",
        "choice": [
            "스토리지 RAID 설정은 RAID 1, RAID 1+0을 제공한다.",
            "운영체제로 Oracle Linux를 지원한다.",
            "로컬 디스크 추가가 가능하다.",
            "서버 정지 시에는 스토리지 사용 요금만 과금한다."
        ],
        "answer": "운영체제로 Oracle Linux를 지원한다.",
        "example": ""
    },
    {
        "question": "Object Storage에 대한 설명 중 틀린 것은?",
        "choice": [
            "파일 단위의 데이터 저장, 공유, 배포가 가능하여 콘텐츠를 저장하고, 다른 사용자에게 공유하거나 배포할 수 있습니다.",
            "대용량 데이터의 저장소로 활용할 수 있습니다.",
            "네이버 클라우드 플랫폼 사용자가 아닌 외부 사용자에게 파일 접근 권한을 제공하기 위해서는 반드시 \"폴더 공개 하기\" 기능을 사용해야 합니다.",
            "CDN 상품과 연동하여 사용할 수 있습니다."
        ],
        "answer": "네이버 클라우드 플랫폼 사용자가 아닌 외부 사용자에게 파일 접근 권한을 제공하기 위해서는 반드시 \"폴더 공개 하기\" 기능을 사용해야 합니다.",
        "example": ""
    },
    {
        "question": "서버 스토리지에 대한 설명으로 맞는 것은?",
        "choice": [
            "부팅 스토리지가 HDD인 경우, 추가 스토리지로 HDD만 추가할 수 있다.",
            "VM이 운영 중인 상태에서도 Disk 변경이 가능하다.",
            "디스크의 사이즈를 기존보다 크게만 변경이 가능하다.",
            "High-Memory, Bare-Metal 서버의 경우 스토리지 추가가 지원되지 않는다."
        ],
        "answer": "디스크의 사이즈를 기존보다 크게만 변경이 가능하다.",
        "example": ""
    },
    {
        "question": "백업 서비스 설명 중 틀린 것은?",
        "choice": [
            "보관 주기는 백업 주기의 최소 2배 이상이 되어야 합니다.",
            "증분 백업은 전체 백업 이후 백업 디렉토리 내 변경된 데이터만 백업하는 방식이다.",
            "백업된 데이터는 최소 1주부터 52주까지 보관이 가능합니다.",
            "전체 백업은 백업 디렉토리의 모든 데이터를 백업합니다."
        ],
        "answer": "백업된 데이터는 최소 1주부터 52주까지 보관이 가능합니다.",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 백업 상품의 경우, 백업 데이터 보관 기간으로 알맞은 것은?",
        "choice": [
            "최소 1일부터 최대 4주",
            "최소 7일부터 최대 24주",
            "최소 15일부터 최대 36주",
            "최소 30일부터 최대 1년"
        ],
        "answer": "최소 7일부터 최대 24주",
        "example": ""
    },
    {
        "question": "다음 상품 중 Networking 카테고리 상품이 아닌 것은 무엇인가요?",
        "choice": [
            "IPSec VPN",
            "Load Balancer",
            "NAT Gateway",
            "SSL VPN"
        ],
        "answer": "SSL VPN",
        "example": ""
    },
    {
        "question": "다음 중 VPC에서 사용할 수 없는 IP 대역은 무엇인가요?",
        "choice": [
            "10.0.0.0/16",
            "192.168.0.0/24",
            "172.16.0.0/16",
            "172.255.0.0/24"
        ],
        "answer": "172.255.0.0/24",
        "example": ""
    },
    {
        "question": "Classic 환경에서 서버에 부착된 하나의 NIC에 두 개 이상의 IP를 부여하였을 때 발생할 수있는 상황은?",
        "choice": [
            "기존 IP로는 통신이 되나 추가된 IP로 통신이 되지 않는다.",
            "추가된 IP 뿐만 아니라 기존 IP도 통신이 되지 않는다.",
            "서버가 강제 정지된다.",
            "기존 IP는 통신이 안되고 추가된 IP로만 통신이 된다."
        ],
        "answer": "추가된 IP 뿐만 아니라 기존 IP도 통신이 되지 않는다.",
        "example": ""
    },
    {
        "question": "VOD Transcoder에 대한 설명 중 틀린 것은?",
        "choice": [
            "Preser은 1~5까지 설정 가능하다.",
            "Codec는 H.264만 지원한다.",
            "Thumbnail를 자동 생성한다.",
            "Output 경로는 File Storage와 Object Storage에 저장할 수 있다."
        ],
        "answer": "Thumbnail를 자동 생성한다.",
        "example": ""
    },
    {
        "question": "다음 중 VPC에서 사용할 수 없는 IP 대역은 무엇인가요?",
        "choice": [
            "10.0.0.0/8",
            "192.168.1.0/16",
            "172.16.0.0/24",
            "192.168.0.0/24"
        ],
        "answer": "10.0.0.0/8",
        "example": ""
    },
    {
        "question": "VPC 환경에서는 다양한 방식의 로드밸런서를 제공하고 있습니다. 네이버 클라우드 플랫폼에서 제공하고 있지 않은 로드밸런서 방식은 무엇인가요?",
        "choice": [
            "애플리케이션 로드밸런서",
            "네트워크 로드밸런서",
            "네트워크 프록시 로드밸런서",
            "애플리케이션 프록시 로드밸런서"
        ],
        "answer": "애플리케이션 프록시 로드밸런서",
        "example": ""
    },
    {
        "question": "다음 중 CDN+ 설명 중 틀린 것은?",
        "choice": [
            "CDN+는 HTTP/HTTPS 프로토콜을 통해 다양한 원본 서버와의 콘텐츠 연동을 지원합니다.",
            "원본 서버로 고객이 보유 중인 다양한 웹 서버 및 네이버 클라우드 플랫폼의 Storage,Server를 선택할 수 있습니다.",
            "HTTPS로 웹 서비스를 제공하는 경우 콘텐츠가 HTTP로 호출되면 서비스가 불가능합니다.",
            "레퍼러로 등록된 도메인 기준 접근 허용 기능을 제공합니다."
        ],
        "answer": "HTTPS로 웹 서비스를 제공하는 경우 콘텐츠가 HTTP로 호출되면 서비스가 불가능합니다.",
        "example": ""
    },
    {
        "question": "다음에서 설명하는 기능은 어떤 상품을 설명하는 것일까요?",
        "choice": [
            "Load Balancer",
            "IPSec VPN",
            "NAT Gateway",
            "API Gateway"
        ],
        "answer": "NAT Gateway",
        "example": "방화벽과 같이 ACL을 설정하는 외부의 네트웍과 연결시 네이버 클라우드 플랫폼내에 있는 다수의 서버들이 하나의 공인 IP로 해당 외부 네트웍에 접근할 수 있게해주며, Private Subnet에서 외부 인터넷으로 연결이 필요할 때 필수적인 상품"
    },
    {
        "question": "네트워크 로드밸런서의 특징으로 틀린 것은 무엇인가요?",
        "choice": [
            "별도의 설정 없이 Client IP 확인이 가능하다.",
            "분배 알고리즘은 Source IP Hash와 Round Robin 방식만 제공한다.",
            "로드밸런서를 사용하기 위해 서버에 별도의 설정이 필요하다.",
            "HTTP, HTTPS 프로토콜을 지원하지 않는다."
        ],
        "answer": "로드밸런서를 사용하기 위해 서버에 별도의 설정이 필요하다.",
        "example": ""
    },
    {
        "question": "VPC 환경에서 서버를 한 대 생성하였다. 서버 Network Interface에 대한 설명 중 맞는 것은?",
        "choice": [
            "서버 Network Interface는 최대 3개까지 만들 수 있다.",
            "Network Interface 하나에 여러 개의 IP를 부여할 수 있다.",
            "NIC에는 해당 서버를 처음 생성할 때 선택한 Subnet 범위의 IP만 할당할 수 있다.",
            "원하는 사설IP 설정은 불가능하며, DHCP로 자동 할당만 가능하다."
        ],
        "answer": "서버 Network Interface는 최대 3개까지 만들 수 있다.",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 Classic 환경의 로드밸런서와 유사한 VPC 환경에서의 로드밸런서는 어떤 방식인가요?",
        "choice": [
            "애플리케이션 로드밸런서",
            "네트워크 로드밸런서",
            "네트워크 프록시 로드밸런서",
            "애플리케이션 프록시 로드밸런서"
        ],
        "answer": "네트워크 프록시 로드밸런서",
        "example": ""
    },
    {
        "question": "하나의 VPC에 ACG를 최대 몇 개까지 생성 가능한가요?",
        "choice": [
            "5개",
            "100개",
            "300개",
            "500개"
        ],
        "answer": "500개",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼의 VPC 환경에서 ACG에 대한 설명으로 틀린 것은?",
        "choice": [
            "서버와 연결되어 있는 맵핑 정보를 변경할 수 있다.",
            "VPC에 의존적이다.",
            "White List 방식의 방화벽이다.",
            "Inbound에 대해서만 룰 적용이 가능하다."
        ],
        "answer": "Inbound에 대해서만 룰 적용이 가능하다.",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 VPC 환경의 로드밸런서 상품의 설명 중 틀린 것은?",
        "choice": [
            "22번 포트도 로드밸런싱할 수 있다.",
            "VPC 환경에서는 3가지의 로드밸런서가 제공된다.",
            "부하처리 성능에 따라 Small/Medium/Large 중 스펙을 선택할 수 있다.",
            "Proxy 방식의 로드밸런서를 사용하면, 별도의 설정없인 클라이언트의 IP를 확인할 수 없다."
        ],
        "answer": "Proxy 방식의 로드밸런서를 사용하면, 별도의 설정없인 클라이언트의 IP를 확인할 수 없다.",
        "example": ""
    },
    {
        "question": "라이브 스트리밍 서비스를 진행하는데 필요한 모든 Back-end 기능을 지원하며, NAVER Cloud Platform CDN 연동을 통해 원활한 라이브 진행을 할 수 있는 상품은?",
        "choice": [
            "Clova Face Recognition",
            "Live Station",
            "VOD Transcoder",
            "Image Optimizer"
        ],
        "answer": "Live Station",
        "example": ""
    },
    {
        "question": "CDN+ 관련 용어 설명 중 틀린 것은?",
        "choice": [
            "서비스도메인 : 서비스에서 콘텐츠 전송 시 사용자에게 노출되는 도메인",
            "Ignore Query String : CDN 서비스가 원본 서버에 요청할 떄 \"?id=1234\"와 같이 URL에 포함된 GET 파라미터를 제거한 후에 요청",
            "Referrer Domain : 콘텐츠가 지정된 도메인에만 제공되게 하여 다른 사이트에서 참조되는 것을 방지",
            "Cache Expiry : 사용자 요청에 의해 요구되는 콘텐츠를 빠르게 제공하기 위해 캐시 서버에 저장"
        ],
        "answer": "Cache Expiry : 사용자 요청에 의해 요구되는 콘텐츠를 빠르게 제공하기 위해 캐시 서버에 저장",
        "example": ""
    },
    {
        "question": "비공인 IP를 가진 다수의 서버에게 대표 공인 IP를 이용하여 외부 접속이 가능하게 해주는상품은?",
        "choice": [
            "API Gateway",
            "IP Gateway",
            "NAT Gateway",
            "Global Route Manager"
        ],
        "answer": "NAT Gateway",
        "example": ""
    },
    {
        "question": "VPC는 하나의 독립된 네트웍을 구성하게 됩니다. 따라서 VPC를 다수 생성하게 되면 VPC간 통신은 되지 않는데 VPC간 통신을 가능하게 해주는 서비스는 무엇인가요?",
        "choice": [
            "Private Subnet",
            "Public Subnet",
            "VPC Peering",
            "Route Table"
        ],
        "answer": "VPC Peering",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 NAS에 대한 설명 중 틀린 것은?",
        "choice": [
            "볼륨은 최소 500GB에서 최대 10TB까지이다.",
            "볼륨 크기에 따라 IOPS가 달라진다.",
            "볼륨의 확장 축소는 100GB 단위로 가능하다.",
            "볼륨 개수는 계정 당 20개로 제한된다."
        ],
        "answer": "볼륨의 확장 축소는 100GB 단위로 가능하다.",
        "example": ""
    },
    {
        "question": "오브젝트 스토리지의 설명 중 맞는 것은?",
        "choice": [
            "오브젝트 스토리지는 2개의 인증키 사용이 가능합니다.",
            "생성된 버킷 이름은 변경할 수 있습니다.",
            "파일에 대한 공개 여부는 개별 파일에서 설정합니다.",
            "네이버 클라우드 플랫폼의 다른 계정에 공유할 수 없습니다."
        ],
        "answer": "파일에 대한 공개 여부는 개별 파일에서 설정합니다.",
        "example": ""
    },
    {
        "question": "다음 중 클라우드의 비용과 관련이 가장 높은 개념은 무엇인가요?",
        "choice": [
            "TCO (총 소요 비용)",
            "ROI (투자 자본 수익률)",
            "CAPEX (자본적 지출)",
            "OPEX (운영 비용)"
        ],
        "answer": "OPEX (운영 비용)",
        "example": ""
    },
    {
        "question": "Cloud DB 상품에서 제공하고 있지 않은 DBMS는?",
        "choice": [
            "Oracle",
            "MS-SQL",
            "MySQL",
            "Redis"
        ],
        "answer": "Oracle",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼의 보안 상품 중 없는 상품은?",
        "choice": [
            "App Safer",
            "Web Safer",
            "File Safer",
            "Site Safer"
        ],
        "answer": "Web Safer",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼의 GPU 상품에 대한 설명 중 틀린 것은?",
        "choice": [
            "최대 12개의 GPU를 하나의 VM에 할당할 수 있다.",
            "서버를 정지시켜도 요금이 발생한다.",
            "Linux OS를 지원한다.",
            "T4, V100 등의 GPU 카드가 제공된다."
        ],
        "answer": "최대 12개의 GPU를 하나의 VM에 할당할 수 있다.",
        "example": ""
    },
    {
        "question": "다음 중 오브젝트 스토리지 설명 중 틀린 것은?",
        "choice": [
            "버킷 공개하기는 버킷 안의 폴더 및 파일 정보 조회 및 업로드가 가능하다.",
            "파일 공개하기는 파일 정보 조회 및 다운로드/업로드가 가능하다.",
            "버킷 권한은 목록 조회, 업로드, ACL 조회, ACL 수정이 가능하다.",
            "파일 권한은 다운로드, ACL 조회, ACL 수정이 가능하다."
        ],
        "answer": "파일 공개하기는 파일 정보 조회 및 다운로드/업로드가 가능하다.",
        "example": ""
    },
    {
        "question": "네이버 클라우드 플랫폼 VPC 환경에서 제공되는 GPU 서버의 특징으로 틀린 것은?",
        "choice": [
            "NVDIA T4, V100 이용이 가능하다.",
            "서버 1대당 꽂을 수 있는 T4의 최대 개수는 2개이다.",
            "서버 1대당 꽂을 수 있는 V100의 최대 개수는 4개이다.",
            "Grid 기술을 사용할 수 있다."
        ],
        "answer": "서버 1대당 꽂을 수 있는 T4의 최대 개수는 2개이다.",
        "example": ""
    },
    {
        "question": "NAS 상품 설명 중 틀린 것은?",
        "choice": [
            "자체 스냅샷 기능이 제공된다.",
            "Linux Server와 Windows Server 모두 NAS를 마운트할 수 있습니다.",
            "NAS 볼륨은 네이버 클라우드 플랫폼 인프라 내에 있는 서버에서만 마운트 가능합니다.",
            "NAS는 용량 한도 없이 사용할 수 있다."
        ],
        "answer": "NAS는 용량 한도 없이 사용할 수 있다.",
        "example": ""
    },
    {
        "question": "다음 중 Global Route Manager의 로드밸런싱 타입이 아닌 것은?",
        "choice": [
            "Weighted",
            "Round Robin",
            "Geolocation",
            "Source IP Hash"
        ],
        "answer": "Source IP Hash",
        "example": ""
    },
    {
        "question": "내 서버 이미지에 대한 설명으로 틀린 것은?",
        "choice": [
            "내 서버 이미지가 생성되는 동안 서버는 일시적으로 '복제중' 상태이나 서버는 정상적으로 운영된다.",
            "내 서버 이미지를 다른 리전으로 복제할 수 있다.",
            "내 서버 이미지는 오토스케일링의 Launch Configuration에서도 이용이 가능하다.",
            "내 서버 이미지를 이용해 서버를 생성할 때, 원본 서버의 부팅스토리지 종류와 동일하게 생성된다."
        ],
        "answer": "내 서버 이미지를 이용해 서버를 생성할 때, 원본 서버의 부팅스토리지 종류와 동일하게 생성된다.",
        "example": ""
    },
    {
        "question": "네이버 챗봇의 기능이 아닌 것은?",
        "choice": [
            "높은 한국어 정답률",
            "자연어 처리 기술과 머신러닝기반 학습 알고리즘",
            "다국어 미지원",
            "답변 컴포지트 제공"
        ],
        "answer": "다국어 미지원",
        "example": ""
    },
    {
        "question": "다음에서 설명하는 상품의 이름은 무엇인가요?",
        "choice": [
            "Cloud Hadoop",
            "Elasticsearch",
            "Cloud Search",
            "Cloud Log Analytics"
        ],
        "answer": "Cloud Search",
        "example": "사용자의 웹사이트에 검색 기능을 제공하는 상품으로 네이버 형태소 분석 처리기를 기반으로 만들어진 상품"
    }
]
