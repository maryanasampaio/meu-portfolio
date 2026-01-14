import { PageHeader } from '@/features/about/components/PageHeader'
import { SearchBar } from '@/features/about/components/projects/SearchBar'
import { FiltersBar } from '@/features/about/components/projects/FiltersBar'
import { ProjectCard } from '@/features/about/components/projects/ProjectCard'
import { EmptyState } from '@/features/about/components/projects/EmptyState'
import { useProjectsViewModel } from '../viewmodel/ProjectsViewModel'

export function ProjectsView() {
  const viewModel = useProjectsViewModel()
  
  const highlightedProjects = viewModel.filteredProjects.filter(p => p.highlight)
  const regularProjects = viewModel.filteredProjects.filter(p => !p.highlight)

  return (
    viewModel.isLoading ? (
      <section className="py-20">
        <div className="max-w-6xl">
          <div className="h-8 w-48 bg-muted rounded mb-4 animate-pulse" />
          <div className="h-4 w-96 bg-muted rounded animate-pulse" />
        </div>
      </section>
    ) : (
    <section className="py-20">
      <div className="max-w-6xl space-y-12">
        <PageHeader title="Projetos" description="Trabalhos recentes que demonstram minhas habilidades técnicas" />

        <div className="space-y-4">
          <SearchBar value={viewModel.searchTerm} onChange={viewModel.setSearchTerm} />
          <FiltersBar filters={viewModel.filters} selectedFilter={viewModel.selectedFilter} onSelect={viewModel.setSelectedFilter} />
        </div>

        {viewModel.filteredProjects.length === 0 && <EmptyState />}

        {/* Projetos em Destaque */}
        {highlightedProjects.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-200">Projetos em Destaque</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {highlightedProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Outros Projetos */}
        {regularProjects.length > 0 && (
          <div className="space-y-6">
            {highlightedProjects.length > 0 && (
              <h3 className="text-2xl font-bold text-slate-200">Outros Projetos</h3>
            )}
            <div className="grid lg:grid-cols-2 gap-8">
              {regularProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
    )
  )
}
