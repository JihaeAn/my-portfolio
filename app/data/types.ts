export type Achievement = {
  number: string
  title: string
  problem: string[]
  root?: string[]
  approach: string[]
  result: string[]
  metrics?: { label: string; before: string; after: string; highlight: string }[]
  tags: string[]
  github?: string
}

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  tag: string
  title: string
  description: string
  period?: string
  tech: string[]
  highlights: string[]
  detailHref?: string
  github?: string
  demo?: string
  links?: ProjectLink[]
}

export type SkillGroup = {
  category: string
  skills: string[]
}
