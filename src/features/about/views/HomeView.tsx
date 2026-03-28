import { HomeHeader } from '@/features/about/components/home/HomeHeader'
import { SkillsGrid } from '@/features/about/components/home/SkillsGrid'
import { StatsRow } from '@/features/about/components/home/StatsRow'
import { useHomeViewModel } from '../viewmodel/HomeViewModel'

export function HomeView() {
  const viewModel = useHomeViewModel()

  return (
    viewModel.isLoading || !viewModel.personalInfo ? (
      <section className="py-8 md:py-10">
        <div className="max-w-4xl">
          <div className="h-8 w-64 bg-muted rounded mb-4 animate-pulse" />
          <div className="h-5 w-80 bg-muted rounded mb-2 animate-pulse" />
          <div className="h-4 w-full max-w-xl bg-muted rounded mb-6 animate-pulse" />
        </div>
      </section>
    ) : (
    <section className="py-8 md:py-10">
      <div className="max-w-4xl">
        <HomeHeader personalInfo={viewModel.personalInfo} onNavigateToProjects={viewModel.handleNavigateToProjects} />
        <SkillsGrid skills={viewModel.skills} />
        <StatsRow stats={viewModel.stats} />
      </div>
    </section>
    )
  )
}
  
