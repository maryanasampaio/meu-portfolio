import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '@/features/about/models/ProjectsModels'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group relative rounded-2xl border bg-gradient-to-br from-card to-card/50 p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl font-bold mb-2 truncate group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground font-medium line-clamp-2">
              {project.description}
            </p>
          </div>
          <Badge className="shrink-0 font-semibold" variant={index < 2 ? 'default' : 'secondary'}>
            {project.category}
          </Badge>
        </div>

        <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary/30">
          <p className="text-sm leading-relaxed text-foreground/80">{project.longDescription}</p>
        </div>

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

      {index === 0 && (
        <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
          ⭐ Destaque
        </div>
      )}
    </div>
  )
}
