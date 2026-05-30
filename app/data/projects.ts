import type { Project } from './types'

export const projects: Project[] = [
  {
    tag: '실무 프로젝트',
    title: '미트매치',
    description:
      '축산물 거래소 플랫폼. 실시간 출고 프로세스의 동시성 문제를 공통 라이브러리로 표준화하고, 신규 담보대출 플랫폼 미트뱅크의 핵심 금융 도메인을 설계·개발했습니다.',
    period: '2025.02 — 2025.12',
    tech: ['Java', 'Spring Boot', 'MySQL', 'MyBatis', 'Redisson', 'Spring AOP', 'JUnit'],
    highlights: [
      '동시성 제어 분산락 공통 라이브러리 개발 및 사내 패키지 배포 → 중복 승인·상태 꼬임 장애 발생률 0% 달성',
      '커스텀 어노테이션 + Spring AOP로 선언적 분산락 추상화 → 관련 기능 개발 생산성·가독성 향상',
      '미트뱅크 담보대출 플랫폼 신규 아키텍처 설계 및 핵심 금융 도메인 개발 → 누적 260억 원 대출 프로세스 무장애 운영',
      '내부 QA 테스트 문서 최초 구축 → 배포 전 이슈 70% 감소',
    ],
    detailHref: '/projects/meatmatch',
    links: [
      { label: 'Site', href: 'https://www.meatmatch.co.kr/' },
      { label: 'Blog', href: 'https://jji-sun.tistory.com/123' },
    ],
  },
  {
    tag: '실무 프로젝트',
    title: '포유페이',
    description:
      'PG(결제 대행) 정산 시스템. 레거시 세션 기반 인증을 JWT/Redis Stateless 구조로 전환하고, 대용량 거래내역 조회 성능을 개선했습니다.',
    period: '2025.01 — 진행 중',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'Redis'],
    highlights: [
      '레거시 세션 인증 → JWT/Redis 기반 Stateless 구조 전환 → 서버 스케일 아웃이 자유로운 구조 확보',
      'UUID 기반 토큰 식별자 채택 및 Refresh Token TTL 관리로 보안성·성능 동시 강화',
      '30만 건 거래내역 조회 쿼리 인덱스 튜닝 → 응답 속도 551ms → 82ms (약 85% 단축)',
      'EXPLAIN 실행 계획 분석 후 복합 인덱스 재설계, 대외 트래픽 최소 시간대 무장애 적용',
    ],
    detailHref: '/projects/forupay',
  },
]
