import { Badge } from '@/components/ui/badge'
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
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {viewModel.pageInfo.title}
          </h2>
          <p className="text-muted-foreground">
            {viewModel.pageInfo.description}
          </p>
        </div>

        <div className="space-y-10">
          {viewModel.technologies.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
  )
}
