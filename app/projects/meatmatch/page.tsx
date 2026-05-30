import type { Metadata } from 'next'
import ProjectDetail from '../../components/ProjectDetail'
import { meatmatchOverview, meatmatchAchievements } from '../../data/meatmatch'

export const metadata: Metadata = {
  title: '미트매치 | 안지해',
  description: '축산물 거래소 플랫폼 미트매치 프로젝트 상세',
}

export default function MeatmatchPage() {
  return (
    <ProjectDetail
      title="미트매치"
      overview={meatmatchOverview}
      achievements={meatmatchAchievements}
    />
  )
}
