'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'

/* ── Navbar ── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-white font-semibold tracking-tight">안지해</span>
        <div className="flex gap-8 text-sm text-zinc-400">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-sm font-mono mb-4"
        >
          안녕하세요, 저는
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-4"
        >
          안지해
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-5xl font-bold text-zinc-500 tracking-tight mb-8"
        >
          백엔드 개발자
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl text-zinc-400 text-lg leading-relaxed mb-10"
        >
          반복되는 로직을 표준화하고, 예외 처리 아키텍처를 설계하며<br />
          확장 가능한 시스템을 만드는 것을 좋아합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4"
        >
          <a
            href="#experience"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            경력 보기
          </a>
          <a
            href="https://github.com/JihaeAn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
          >
            GitHub
          </a>
          <a
            href="/resume"
            className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
          >
            이력서 보기
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ── About ── */
function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const bullets = [
    '반복되는 로직을 공통 라이브러리로 표준화하여 팀의 개발 생산성을 개선하는, 확장성에 진심인 개발자입니다.',
    '불규칙한 에러 응답을 표준화된 예외 처리 아키텍처로 리팩터링하여 시스템 안정성을 확보하고, 동료의 디버깅 효율을 개선하는 데 즐거움을 느낍니다.',
    '객체의 책임 분리를 기반으로 유연한 구조를 설계하며, 지속적인 코드 리뷰와 복기를 통해 기술적 부채를 해결하는 과정에 흥미를 느낍니다.',
    '레거시 인증 체계를 JWT 기반의 Stateless 아키텍처로 개선하여 보안성과 확장성을 동시에 확보한 경험이 있습니다.',
    '기술적 의사결정 과정에서 팀원들과 적극적으로 논의하며, 단순 구현을 넘어 비즈니스 가치를 함께 창출하는 협업을 지향합니다.',
  ]

  const info = [
    { label: 'Email', value: 'dkswlgo6615@naver.com', href: 'mailto:dkswlgo6615@naver.com' },
    { label: 'Phone', value: '010-9330-9892' },
    { label: 'GitHub', value: 'github.com/JihaeAn', href: 'https://github.com/JihaeAn' },
    { label: 'Blog', value: 'jji-sun.tistory.com', href: 'https://jji-sun.tistory.com/' },
  ]

  return (
    <section id="about" className="py-36 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-mono mb-2">01. About Me</p>
          <h2 className="text-3xl font-bold text-white mb-14">소개</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {bullets.map((text, i) => (
              <div key={i} className="flex gap-3 text-zinc-400 leading-7 text-sm">
                <span className="text-indigo-400 shrink-0 mt-1">▸</span>
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {info.map((item) => (
              <div key={item.label} className="flex gap-4 text-sm border-b border-zinc-800 pb-4">
                <span className="text-zinc-500 w-16 shrink-0">{item.label}</span>
                {'href' in item ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-zinc-300">{item.value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Skills ── */
function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillGroups = [
    { category: 'Back-End', skills: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'JPA', 'MyBatis'] },
    { category: 'Collaboration & Tools', skills: ['Slack', 'Git', 'Github', 'Jira', 'Confluence'] },
    { category: 'Architecture', skills: ['REST API', 'DDD'] },
    { category: 'Infra', skills: ['AWS EC2', 'AWS S3', 'Docker'] },
  ]

  return (
    <section id="skills" className="py-36 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-mono mb-2">02. Skills</p>
          <h2 className="text-3xl font-bold text-white mb-14">기술 스택</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-7"
            >
              <h3 className="text-white font-semibold mb-5">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Experience ── */
type ExperienceBullet = {
  title: string
  results: string[]
  details: string[]
  links?: { label: string; href: string }[]
}

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i} className="font-semibold text-zinc-200">{part.slice(2, -2)}</strong>
    if (part.startsWith('`') && part.endsWith('`'))
      return <code key={i} className="text-xs font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-indigo-300">{part.slice(1, -1)}</code>
    return part
  })
}

function ExperienceCard({
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
  bullets: ExperienceBullet[]
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
      <div className="mb-6">
        <div className="flex items-start justify-between mb-1">
          <div className="flex items-baseline gap-2">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="text-xs text-indigo-400 font-mono">{tag}</span>
          </div>
          <span className="text-sm text-zinc-500 shrink-0 ml-4">{period}</span>
        </div>
        {(subtitle || (links && links.length > 0)) && (
          <div className="flex items-center gap-2 mb-2">
            {subtitle && <p className="text-sm text-zinc-500">{subtitle}</p>}
            {links?.map((l, i) => (
              <span key={l.label} className="flex items-center gap-2">
                {(i > 0 || subtitle) && <span className="text-zinc-600 text-xs">·</span>}
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {l.label} ↗
                </a>
              </span>
            ))}
          </div>
        )}
        <p className="text-xs text-zinc-500 font-mono">{tech}</p>
      </div>

      <ul className="space-y-5">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-indigo-400 shrink-0 mt-0.5">▸</span>
            <div className="space-y-2 w-full">
              <div className="flex items-baseline gap-2 flex-wrap">
                <p className="text-[15px] font-semibold text-zinc-200 leading-snug">{b.title}</p>
                {b.links?.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors shrink-0"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
              <ul className="space-y-1">
                {b.details.map((d, j) => (
                  <li key={j} className="flex gap-2 text-sm text-zinc-500 leading-6">
                    <span className="text-zinc-600 shrink-0">–</span>
                    <span>{renderInline(d)}</span>
                  </li>
                ))}
              </ul>
              {b.results.length > 0 && (
                <div className="mt-2 pt-2 border-l-2 border-indigo-500/30 pl-3">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">성과</p>
                  <ul className="space-y-0.5">
                    {b.results.map((r, j) => (
                      <li key={j} className="flex gap-2 text-sm text-indigo-400 font-medium leading-6">
                        <span className="shrink-0">→</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: '미트매치',
      subtitle: '축산물 거래소 플랫폼',
      tag: '실무',
      period: '2025.02 — 2025.12',
      links: [{ label: 'Site', href: 'https://www.meatmatch.co.kr/' }],
      tech: 'Java · Spring Boot · MySQL · JUnit · Git · Slack · Jira · Figma',
      bullets: [
        {
          title: '미트뱅크(축산물 담보대출 서비스) 신규 개발',
          results: [
            '(2025.09 기준) 누적 180억 원 규모 대출 프로세스 안정적 운영',
            '금융 계산 오류 리스크 제거 및 운영 기준 정립',
          ],
          details: [
            '미트매치 플랫폼 내 신규 금융 서비스로, 축산물을 담보로 한 대출 프로세스(접수~상환·출고) 전반 설계 및 구현',
            '정책 정의서 내 단리/복리 혼선을 식별하고, 7일의 이자 발생 케이스를 재정의하여 계산 로직 전면 개선 → 유관 부서 협의를 통해 전사 표준 로직으로 채택',
            '이자 정산 및 출고 처리 로직을 동시성 이슈를 고려해 재설계하고 모듈화하여 안정성과 유지보수성 향상',
            '기획 부재 상황에서 내부 정책 분석 · 유사 금융 서비스 분석을 통해 공매 처리 정책 초안 수립 및 실제 서비스 적용',
          ],
        },
        {
          title: '미트뱅크 수입판매 서비스 신규 개발',
          results: ['내부 QA 문서 도입 후 이슈 70% 감소'],
          details: [
            '미트매치 플랫폼 내 수입 축산물 대금 결제를 위한 금융 모듈 신규 개발',
            '메인 백엔드 개발자로서 접수, 심사, 승인/거절, 출고, 진행 현황 등 전반적인 사용자 API 설계 및 구현',
            'QA 기준 부재 문제를 인지하고 내부 QA 테스트 문서를 최초로 구축 · 공유 → 테스트 기준 표준화 및 커뮤니케이션 비용 절감, 배포 전 이슈 사전 차단',
          ],
        },
        {
          title: '미트매치 플랫폼 고도화 / 유지보수',
          results: [
            '리팩터링 후 장애 0건',
            '코드 중복률 30% 감소',
          ],
          details: [
            '초기 레거시 코드 및 테이블 구조를 분석하여 공통 코드 모듈화 및 스키마 리팩터링 수행',
            '기능 영향 범위 분석 및 전체 기능 테스트를 통해 안정성 검증 후 점진적 개선 적용',
            '신규 요구사항 반영 및 버그 대응을 통해 안정적 서비스 운영 지원',
          ],
        },
      ],
    },
    {
      title: '포유소프트',
      subtitle: '정산 등 PG 시스템',
      tag: '실무',
      period: '2025.01 — 진행 중',
      tech: 'Java · Spring Boot · MySQL · Redis · Git · Jira',
      bullets: [
        {
          title: '여러 레포지토리에서 반복되는 로직을 공통 라이브러리로 표준화',
          links: [{ label: 'Blog', href: 'https://jji-sun.tistory.com/123' }],
          results: ['기존 대비 코드 작성량 30% 감소'],
          details: [
            'GitHub Packages를 통해 배포하여 4개의 프로젝트에 적용',
          ],
        },
        {
          title: '전사 공통 예외 처리 아키텍처 설계 및 표준화',
          results: ['예외 발생 시 원인 파악 시간 단축 및 도입 이후 현재까지 예외 미처리로 인한 런타임 에러 0건 유지'],
          details: [
            '잔존해 있던 불규칙한 에러 응답 구조와 예외 처리 부재로 인한 시스템 디버깅 효율 저하 및 클라이언트 대응 혼선 발생',
            '`@RestControllerAdvice`와 `ExceptionHandler`를 활용한 글로벌 예외 처리 메커니즘 구축',
            '커스텀 `ServiceException`을 최상위 객체로 설계하고, 각 도메인별(User, Payment 등) 전용 예외가 이를 상속받도록 하여 예외 계층 구조 확립',
          ],
        },
        {
          title: '레거시 세션 방식에서 JWT 기반 인증 체계로 전환',
          results: [
            'PG사의 핵심인 인증/보안 로직을 강화하여 PG사 및 파트너사와의 기술적 신뢰 관계 강화',
            '서버 메모리 의존성을 제거하여 스케일 아웃이 용이한 환경을 구축하고, 대규모 트래픽 대응 기반 마련',
          ],
          details: [
            '클라이언트 측에 사용자 식별 정보가 노출되는 보안 취약점을 해결하기 위해 Stateless 인증 구조로의 전환 주도',
            'Access Token의 만료 시간을 짧게 설정하고, Redis를 활용한 Refresh Token 관리를 통해 보안성과 사용자 편의성을 동시에 확보',
          ],
        },
      ],
    },
  ]

  return (
    <section id="experience" className="py-36 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-mono mb-2">03. Experience</p>
          <h2 className="text-3xl font-bold text-white mb-14">경력</h2>
        </motion.div>

        <div className="space-y-7">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + 0.15 * i }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Education ── */
function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const educations = [
    {
      school: '한국방송통신대학교',
      status: '재학 중',
      major: '컴퓨터과학과',
      period: '2025.03 — 현재',
    },
    {
      school: '데이터융합 JAVA 응용 SW개발자 취업과정',
      status: '수료',
      major: '중앙정보처리학원',
      period: '2023.07 — 2024.01',
    },
    {
      school: '한양여자대학교',
      status: '졸업',
      major: '실무영어과',
      period: '2020.03 — 2022.02',
    },
  ]

  return (
    <section id="education" className="py-36 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-mono mb-2">04. Education & Blog</p>
          <h2 className="text-3xl font-bold text-white mb-14">학력 & 블로그</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="text-white font-semibold text-lg">학력</h3>
            {educations.map((edu) => (
              <div key={edu.school} className="flex items-start justify-between border-b border-zinc-800 pb-4">
                <div>
                  <p className="text-zinc-300 text-sm font-medium">
                    {edu.school}{' '}
                    <span className="text-zinc-500 font-normal">({edu.status})</span>
                  </p>
                  <p className="text-zinc-500 text-xs mt-0.5">{edu.major}</p>
                </div>
                <span className="text-zinc-500 text-xs shrink-0 ml-4">{edu.period}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            <h3 className="text-white font-semibold text-lg">기술 블로그</h3>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <a
                href="https://jji-sun.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
              >
                기술 블로그 바로가기 ↗
              </a>
              <p className="text-zinc-500 text-sm mt-2 leading-6">
                학습 내용 및 기술적 고민을 정리하는 블로그
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-zinc-800 bg-black">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-sm">© 2025 안지해. Built with Next.js & Tailwind CSS.</p>
        <div className="flex gap-6 text-sm text-zinc-600">
          <a href="mailto:dkswlgo6615@naver.com" className="hover:text-zinc-400 transition-colors">
            Email
          </a>
          <a
            href="https://github.com/JihaeAn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://jji-sun.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400 transition-colors"
          >
            Blog
          </a>
          <a href="/resume" className="hover:text-zinc-400 transition-colors">
            이력서
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ── Page ── */
export default function JihaePage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </div>
  )
}
