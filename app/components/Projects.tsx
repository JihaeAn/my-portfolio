'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { projects } from '../data/projects'
import type { Project } from '../data/types'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-36 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-mono mb-2">03. Projects</p>
          <h2 className="text-3xl font-bold text-white mb-14">프로젝트</h2>
        </motion.div>

        <div className="space-y-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + 0.15 * i }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 rounded-xl p-8 transition-all duration-300">
      {/* 카드 전체를 덮는 상세 페이지 링크 (외부 링크와 앵커 중첩 방지) */}
      {project.detailHref && (
        <Link
          href={project.detailHref}
          aria-label={`${project.title} 자세히 보기`}
          className="absolute inset-0 z-0 rounded-xl"
        />
      )}
      <div className="relative z-10 flex items-start justify-between mb-4 pointer-events-none">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="text-indigo-400 text-xs font-mono">{project.tag}</p>
            {project.period && (
              <>
                <span className="text-zinc-600 text-xs">·</span>
                <p className="text-zinc-500 text-xs font-mono">{project.period}</p>
              </>
            )}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-3 ml-4 shrink-0">
          {project.detailHref && (
            <span className="text-zinc-400 group-hover:text-indigo-400 transition-colors text-sm">
              자세히 보기 →
            </span>
          )}
          {project.links?.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 pointer-events-auto text-zinc-400 hover:text-white transition-colors text-sm"
            >
              {l.label} ↗
            </a>
          ))}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 pointer-events-auto text-zinc-400 hover:text-white transition-colors text-sm"
            >
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 pointer-events-auto text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <p className="text-zinc-400 leading-7 mb-7">{project.description}</p>

      <ul className="space-y-2 mb-7">
        {project.highlights.map((item) => (
          <li key={item} className="text-zinc-500 text-sm flex gap-2 leading-6">
            <span className="text-indigo-400 shrink-0">▸</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
