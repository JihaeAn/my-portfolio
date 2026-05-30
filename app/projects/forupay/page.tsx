import type { Metadata } from 'next'
import ProjectDetail from '../../components/ProjectDetail'
import { forupayOverview, forupayAchievements } from '../../data/forupay'

export const metadata: Metadata = {
  title: '포유페이 | 안지해',
  description: 'PG 정산 시스템 포유페이 프로젝트 상세',
}

export default function ForupayPage() {
  return (
    <ProjectDetail
      title="포유페이"
      overview={forupayOverview}
      achievements={forupayAchievements}
    />
  )
}
