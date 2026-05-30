'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { aboutInfo, aboutIntro } from '../data/about'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            className="space-y-5 text-zinc-400 leading-7"
          >
            {aboutIntro.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {aboutInfo.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 text-sm border-b border-zinc-800 pb-4"
              >
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
