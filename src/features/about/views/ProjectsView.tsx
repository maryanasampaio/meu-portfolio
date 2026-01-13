import { PageHeader } from '@/features/about/components/PageHeader'
import { SearchBar } from '@/features/about/components/projects/SearchBar'
import { FiltersBar } from '@/features/about/components/projects/FiltersBar'
import { ProjectCard } from '@/features/about/components/projects/ProjectCard'
import { EmptyState } from '@/features/about/components/projects/EmptyState'
import { useProjectsViewModel } from '../viewmodel/ProjectsViewModel'

export function ProjectsView() {
  const viewModel = useProjectsViewModel()

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

        <div className="grid lg:grid-cols-2 gap-8">
          {viewModel.filteredProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
    )
  )
}
