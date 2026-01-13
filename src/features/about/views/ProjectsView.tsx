import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, ExternalLink, Search } from 'lucide-react'
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
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Projetos</h2>
          <p className="text-muted-foreground">
            Trabalhos recentes que demonstram minhas habilidades técnicas
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar projetos..."
              value={viewModel.searchTerm}
              onChange={(e) => viewModel.setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {viewModel.filters.map((filter) => (
              <Button
                key={filter}
                variant={viewModel.selectedFilter === filter ? 'default' : 'ghost'}
                size="sm"
                onClick={() => viewModel.setSelectedFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {viewModel.filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-sm">Nenhum projeto encontrado</p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {viewModel.filteredProjects.map((project, index) => (
            <div 
              key={project.name} 
              className="group relative rounded-2xl border bg-gradient-to-br from-card to-card/50 p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10 space-y-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold mb-2 truncate group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <Badge 
                    className="shrink-0 font-semibold"
                    variant={index < 2 ? "default" : "secondary"}
                  >
                    {project.category}
                  </Badge>
                </div>
                
                {/* Description */}
                <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary/30">
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {project.longDescription}
                  </p>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="font-medium border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-3">
                  <Button asChild className="flex-1" size="default">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  {project.demo && (
                    <Button asChild variant="outline" className="flex-1" size="default">
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Badge destaque */}
              {index === 0 && (
                <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
                  ⭐ Destaque
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    )
  )
}
