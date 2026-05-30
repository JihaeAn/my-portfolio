import PrintButton from '@/app/resume-kh/PrintButton'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '안지해 | 이력서',
}

export default function ResumeJihaePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[760px] mx-auto px-10 py-14 print:px-10 print:py-8">

        {/* ── HEADER ── */}
        <div className="mb-8 print:mb-6 flex items-center gap-8">
          <Image
            src="/images/profile.jpeg"
            alt="안지해 프로필"
            width={150}
            height={150}
            className="rounded-full object-cover shrink-0"
          />
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 mb-2">안지해</h1>
            <p className="text-[17px] text-zinc-800 mb-1">Backend Developer</p>
            <p className="text-[14px] text-zinc-500 mb-6">2000.06.15 (27세)</p>
            <div className="flex flex-col gap-y-1 text-[15px] text-zinc-500">
              <div className="flex items-center gap-x-2">
                <a href="mailto:dkswlgo6615@naver.com" className="hover:text-zinc-800">dkswlgo6615@naver.com</a>
                <span className="text-zinc-300">·</span>
                <span>010-9330-9892</span>
              </div>
              <div className="flex items-center gap-x-2">
                <a href="https://github.com/JihaeAn" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800">GitHub ↗</a>
                <span className="text-zinc-300">·</span>
                <a href="https://jji-sun.tistory.com/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800">Blog ↗</a>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 소개 ── */}
        <Section title="저는 이런 사람이에요 !">
          <ul className="space-y-1.5">
            {[
              '반복되는 로직을 공통 라이브러리로 표준화하여 팀의 개발 생산성을 개선하는, 확장성에 진심인 개발자입니다.',
              '객체의 책임 분리를 기반으로 유연한 구조를 설계하며, 지속적인 코드 리뷰와 복기를 통해 기술적 부채를 해결하는 과정에 흥미를 느낍니다.',
              '레거시 인증 체계를 JWT 기반의 Stateless 아키텍처로 개선하여 보안성과 확장성을 동시에 확보한 경험이 있습니다.',
              '기술적 의사결정 과정에서 팀원들과 적극적으로 논의하며, 단순 구현을 넘어 비즈니스 가치를 함께 창출하는 협업을 지향합니다.',
            ].map((text, i) => (
              <li key={i} className="flex gap-2 text-[14px] text-zinc-600 leading-7 list-none">
                <span className="text-zinc-300 shrink-0 mt-0.5">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* ── 경력 ── */}
        <Section title="프로젝트 경험">
          <div className="space-y-12 print:space-y-10">

            {/* 미트매치 */}
            <ProjectBlock
              title="미트매치"
              subtitle="축산물 거래소 플랫폼"
              tag="실무"
              period="2025.02 — 2025.12"
              links={[{ label: 'Site', href: 'https://www.meatmatch.co.kr/' }]}
              tech="Java · Spring Boot · MySQL · MyBatis · JUnit · Git · Slack · Jira · Figma"
              bullets={[
                {
                  title: '동시성 제어 및 분산락 공통 라이브러리 개발 (사내 패키지 배포)',
                  links: [{ label: 'Blog', href: 'https://jji-sun.tistory.com/123' }],
                  results: [
                    '배포 이후 실시간 출고 프로세스 내 중복 승인 및 상태 꼬임 장애 발생률 0% 달성',
                    '동시성 제어 구현 코드를 어노테이션 한 줄로 추상화하여, 기존 대비 관련 기능 개발 생산성 및 코드 가독성 대폭 향상',
                  ],
                  details: [
                    {
                      label: '배경 및 문제 정의',
                      items: [
                        '축산물 출고 시스템에서 다수의 작업자가 동시 요청 시, 경쟁 상태로 인한 중복 재고 트랜잭션 및 데이터 정합성 오류 발생',
                        '파편화된 동시성 제어 로직은 누락 및 유지보수 비용을 증가시킨다고 판단, 재사용 가능한 공통 모듈화를 목표로 설정',
                      ],
                    },
                    {
                      label: '해결 과정 및 아키텍처 설계',
                      items: [
                        'Redis 부하를 최소화하고 분산 환경 내 신뢰성을 확보하기 위해 Redisson 기반의 분산락 구조 선택',
                        '비즈니스 로직과 분산락 처리 로직을 분리하기 위해 커스텀 어노테이션과 Spring AOP를 활용한 선언적 분산락 컴포넌트 설계',
                        '락의 해제와 트랜잭션 커밋 시점의 정합성 문제를 해결하기 위해 AOP 프록시와 트랜잭션 생명주기 동기화 구조 적용',
                        '사내 Gradle 환경에서 의존성 충돌을 방지하기 위해 버전을 격리하고, 팀원들이 즉시 도입 가능한 가이드 문서 작성 및 배포',
                      ],
                    },
                  ],
                },
                {
                  title: '축산물 담보대출 플랫폼 미트뱅크 신규 아키텍처 설계 및 핵심 도메인 개발',
                  results: [
                    '플랫폼 출시 이후 누적 260억 원 규모의 대출 프로세스를 장애 없이 안정적으로 운영 (2026.02 기준)',
                    '철저한 도메인 분석을 통해 금융 계산 오류 리스크를 사전에 제거하고, 플랫폼 내 핵심 금융 운영 기준 확립',
                    '내부 QA 문서 도입 후 이슈 70% 감소'
                  ],
                  details: [
                    {
                      label: '배경 및 문제 정의',
                      items: [
                        '미트매치 플랫폼 내 신규 금융 서비스 런칭을 위해, 접수부터 심사, 이자 정산, 상환 및 담보물 출고에 이르는 대출 생명주기 전반의 백엔드 시스템 설계 및 구현 주도',
                        '이자 계산(단리/복리) 정책의 도메인 혼선을 식별하고, 금융 리스크를 방지하기 위한 비즈니스 표준 정립 필요성 제시',
                      ],
                    },
                    {
                      label: '해결 과정',
                      items: [
                        '금융 도메인 정책 정립 및 계산 로직 고도화: 7일간의 복잡한 이자 발생 케이스를 완벽히 분석 및 재정의하여 전사 표준 금융 계산식 정립',
                        '비즈니스 주도성을 통한 정책 수립: 대출 연체 및 부실 채권 발생 시 담보물 처분을 위한 \'공매 처리 프로세스\' 기획 부재 상황에서, 타 금융 서비스 분석을 바탕으로 공매 정책 초안 수립 및 예외 프로세스 아키텍처 반영',
                        'QA 기준 부재 문제를 인지하고 내부 QA 테스트 문서를 최초로 구축 · 공유 → 테스트 기준 표준화 및 커뮤니케이션 비용 절감, 배포 전 이슈 사전 차단'
                      ],
                    },
                  ],
                },
              ]}
            />

            {/* 포유페이 */}
            <ProjectBlock
              title="포유페이"
              subtitle="정산 등 PG 시스템"
              tag="실무"
              period="2025.01 — 진행 중"
              tech="Java · Spring Boot · MySQL · JPA · Redis · Git · Jira"
              bullets={[
                {
                  title: '인증 체계 고도화: 레거시 세션 기반에서 JWT/Redis 구조로의 전환',
                  results: [
                    '인증 아키텍처의 Stateless 전환을 통해 서버 스케일 아웃이 완전히 자유로운 구조로 개선',
                    'PG 도메인에 걸맞은 높은 수준의 보안 표준을 확립하여, 파트너사 및 가맹점 연동 시 기술적 신뢰도 확보',
                  ],
                  details: [
                    {
                      label: '배경 및 문제 정의',
                      items: [
                        '기존 쿠키/세션 기반 인증 구조로 인해 서버 스케일 아웃 시 인증 세션 동기화 병목 및 서버 메모리 부하 가중 우려',
                        '파트너사 연동 시 클라이언트 측 민감 정보 노출 리스크를 최소화하기 위해 Stateless 인증 구조로의 개편 주도',
                      ],
                    },
                    {
                      label: '해결 과정 및 아키텍처 설계',
                      items: [
                        '페이로드 파싱을 통한 정보 유출 리스크를 방지하고자, 내부 순차 PK 대신 유동적이고 추측 불가능한 고유 UUID를 페이로드 식별자로 채택하여 보안성을 강화함',
                        'Redis 기반의 분산 토큰 관리 시스템 구축: Access Token 만료 시간을 단축하여 보안성을 높이고, Refresh Token을 Redis에서 만료 시간(TTL)을 지정해 관리함으로써 서버 메모리 의존성 제거 및 성능 최적화',
                        '토큰 탈취 시나리오에 대응하기 위해 Refresh Token 재발급 시 기존 토큰을 무효화하는 로직을 구현하고, 안정적인 서비스를 위한 토큰 자동 갱신 프로세스 정립',
                      ],
                    },
                  ],
                },
                {
                  title: '30만 건 거래내역 조회 쿼리 최적화 및 인덱스 튜닝',
                  results: [
                    '정산 및 거래내역 조회 쿼리 속도를 기존 `551ms`에서 `82ms`로 약 85% 단축',
                  ],
                  details: [
                    {
                      label: '배경 및 문제 정의',
                      items: [
                        '2차 PG(결제 대행) 플랫폼의 핵심 데이터인 거래내역 테이블에서 가맹점별 거래 조회 및 정산 데이터 호출 시 지속적인 조회 지연 및 타임아웃 리스크 발생',
                        '가장 빈번하게 검색 조건 및 조인 키로 사용되는 서비스ID 컬럼이 인덱스에서 누락되어 있고, 기존 복합 인덱스의 컬럼 순서가 비효율적으로 배치되어 Full Table Scan이 발생하는 문제 식별',
                      ],
                    },
                    {
                      label: '해결 과정 및 기술적 접근',
                      items: [
                        '실행 계획(EXPLAIN) 분석: 쿼리 실행 계획을 통해 옵티마이저의 탐색 경로를 확인하고, 비효율적인 스캔 범위를 유발하는 쿼리 구조 분석',
                        '복합 인덱스 재설계: 카디널리티가 높은 서비스ID를 선두 컬럼으로 배치하고, 자주 함께 조회되는 조건인 취소일시를 조합한 최적의 복합 인덱스 전략 수립',
                        '운영 리스크 관리: 실서비스 운영 중 대용량 테이블에 인덱스를 추가할 때 발생할 수 있는 테이블 락 및 쓰기(Insert) 성능 저하 영향을 사전에 검증하고, 대외 트래픽 최소화 시간대에 무장애 적용',
                      ],
                    },
                  ],
                },
              ]}
            />

          </div>
        </Section>

        <Divider />

        {/* ── 기술 스택 ── */}
        <Section title="기술 스택">
          <div className="space-y-4">
            <SkillGroup label="Back-End" items={['Java', 'Spring Boot', 'MySQL', 'Redis', 'JPA', 'MyBatis']} />
            <SkillGroup label="Collaboration & Tools" items={['Slack', 'Git', 'Github', 'Jira', 'Confluence']} />
            <SkillGroup label="Architecture" items={['REST API', 'DDD']} />
            <SkillGroup label="Infra" items={['AWS EC2', 'AWS S3', 'Docker']} />
          </div>
        </Section>

        <Divider />

        {/* ── 기술 블로그 ── */}
        <Section title="기술 블로그">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <a
                  href="https://jji-sun.tistory.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
                >
                  기술 블로그 바로가기 ↗
                </a>
                <p className="text-[13px] text-zinc-400 mt-0.5">학습 내용 및 기술적 고민을 정리하는 블로그</p>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <a
                  href="https://github.com/JihaeAn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
                >
                  GitHub 바로가기 ↗
                </a>
                <p className="text-[13px] text-zinc-400 mt-0.5">개인 프로젝트 및 코드 저장소</p>
              </div>
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── 경력 ── */}
        <Section title="경력">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[15px] text-zinc-700">포유소프트 <span className="text-zinc-500">(재직 중)</span></p>
                <p className="text-[13px] text-zinc-400 mt-0.5">서비스 개발팀 / 프로</p>
              </div>
              <span className="text-[13px] text-zinc-400 shrink-0">2025.01 — 현재</span>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[15px] text-zinc-700">쏘프 <span className="text-zinc-500">(퇴사)</span></p>
                <p className="text-[13px] text-zinc-400 mt-0.5">IT 사업본부 / 주임</p>
              </div>
              <span className="text-[13px] text-zinc-400 shrink-0">2024.02 — 2024.08</span>
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── 자격증 ── */}
        <Section title="자격증">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[15px] text-zinc-700">정보처리산업기사</p>
                <p className="text-[13px] text-zinc-400 mt-0.5">한국산업인력공단</p>
              </div>
              <span className="text-[13px] text-zinc-400 shrink-0">2025.12.24</span>
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── 학력 ── */}
        <Section title="학력">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[15px] text-zinc-700">한국방송통신대학교 <span className="text-zinc-500">(재학 중)</span></p>
                <p className="text-[13px] text-zinc-400 mt-0.5">컴퓨터과학과 </p>
              </div>
              <span className="text-[13px] text-zinc-400 shrink-0">2025.03 — 현재</span>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[15px] text-zinc-700">한양여자대학교 <span className="text-zinc-500">(졸업)</span></p>
                <p className="text-[13px] text-zinc-400 mt-0.5">실무영어과</p>
              </div>
              <span className="text-[13px] text-zinc-400 shrink-0">2020.03 — 2022.02</span>
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── 교육 ── */}
        <Section title="교육">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[15px] text-zinc-700">데이터융합 JAVA 응용 SW개발자 취업과정 <span className="text-zinc-500">(수료)</span></p>
                <p className="text-[13px] text-zinc-400 mt-0.5">중앙정보처리학원</p>
              </div>
              <span className="text-[13px] text-zinc-400 shrink-0">2023.07 — 2024.01</span>
            </div>
          </div>
        </Section>

      </div>

      <PrintButton />
    </div>
  )
}

/* ── Helpers ── */

function Divider() {
  return <hr className="border-zinc-200 my-7 print:my-4" />
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest mb-4 print:mb-2">{title}</h2>
      {children}
    </section>
  )
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-zinc-500 mb-1.5">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map(item => (
          <span key={item} className="text-[13px] text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded">{item}</span>
        ))}
      </div>
    </div>
  )
}

type Detail = string | { label: string; items: string[] }
type Bullet = string | { title: string; results: string[]; details: Detail[]; links?: { label: string; href: string }[] }

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i} className="font-semibold text-zinc-800">{part.slice(2, -2)}</strong>
    if (part.startsWith('`') && part.endsWith('`'))
      return <code key={i} className="text-[13px] font-mono bg-zinc-100 px-1 rounded">{part.slice(1, -1)}</code>
    return part
  })
}

function ProjectBlock({
  title,
  subtitle,
  tag,
  period,
  links,
  tech,
  bullets,
}: {
  title: string
  subtitle?: string
  tag: string
  period: string
  links?: { label: string; href: string }[]
  tech: string
  bullets: Bullet[]
}) {
  return (
    <div>
      <div className="mb-3">
        <div className="flex items-center justify-between mb-0.5">
          <div className="flex items-baseline gap-2">
            <h3 className="text-lg font-bold text-zinc-900">{title}</h3>
            <span className="text-[13px] text-indigo-500 font-mono">{tag}</span>
          </div>
          <span className="text-[13px] text-zinc-400 shrink-0">{period}</span>
        </div>
        {(subtitle || (links && links.length > 0)) && (
          <div className="flex items-center gap-2 mb-1">
            {subtitle && <p className="text-sm text-zinc-500">{subtitle}</p>}
            {links?.map((l, i) => (
              <span key={l.label} className="flex items-center gap-2">
                {(i > 0 || subtitle) && <span className="text-zinc-300 text-xs">·</span>}
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
                >
                  {l.label} ↗
                </a>
              </span>
            ))}
          </div>
        )}
        <p className="text-[13px] text-zinc-400 font-mono">{tech}</p>
      </div>
      <ul className="space-y-4 print:space-y-3">
        {bullets.map((b, i) =>
          typeof b === 'string' ? (
            <li key={i} className="flex gap-2 text-sm text-zinc-700 leading-6">
              <span className="text-zinc-400 shrink-0 mt-0.5">•</span>
              {b}
            </li>
          ) : (
            <li key={i} className="flex gap-2">
              <span className="text-zinc-400 shrink-0 mt-0.5">•</span>
              <div className="space-y-1.5 w-full">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <p className="text-[15px] font-semibold text-zinc-800 leading-snug">{b.title}</p>
                  {b.links?.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors shrink-0">
                      {l.label} ↗
                    </a>
                  ))}
                </div>
                {b.results.length > 0 && (
                  <div className="border-l-2 border-indigo-100 pl-2.5">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-0.5">성과</p>
                    <ul className="space-y-0.5">
                      {b.results.map((r, j) => (
                        <li key={j} className="flex gap-1.5 text-sm
                         text-indigo-500 font-medium leading-6">
                          <span className="shrink-0">→</span>
                          <span>{renderInline(r)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <ul className="space-y-0.5">
                  {b.details.map((d, j) =>
                    typeof d === 'string' ? (
                      <li key={j} className="flex gap-1.5 text-sm text-zinc-500 leading-6">
                        <span className="text-zinc-300 shrink-0">–</span>
                        <span>{renderInline(d)}</span>
                      </li>
                    ) : (
                      <li key={j} className="list-none mt-1.5">
                        <p className="text-[13px] font-semibold text-zinc-700 mb-1">{d.label}</p>
                        <ul className="space-y-0.5">
                          {d.items.map((item, k) => (
                            <li key={k} className="flex gap-1.5 text-sm text-zinc-500 leading-6">
                              <span className="text-zinc-300 shrink-0">–</span>
                              <span>{renderInline(item)}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
