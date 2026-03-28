import { PageHeader } from '@/features/about/components/PageHeader'
import { TechnologyGroupList } from '@/features/about/components/technologies/TechnologyGroupList'
import { useTechnologiesViewModel } from '../viewmodel/TechnologiesViewModel'

export function TechnologiesView() {
  const viewModel = useTechnologiesViewModel()

  return (
    viewModel.isLoading || !viewModel.pageInfo ? (
      <section className="py-20">
        <div className="max-w-3xl">
          <div className="h-8 w-56 bg-muted rounded mb-3 animate-pulse" />
          <div className="h-4 w-80 bg-muted rounded animate-pulse" />
        </div>
      </section>
    ) : (
    <section className="py-20">
      <div className="max-w-3xl space-y-12">
        <PageHeader title={viewModel.pageInfo.title} description={viewModel.pageInfo.description} />
        <TechnologyGroupList groups={viewModel.technologies} />
      </div>
    </section>
    )
  )
}
