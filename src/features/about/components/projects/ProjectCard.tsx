import { Badge } from '@/components/ui/badge'
import { Github } from 'lucide-react'
import type { Project } from '@/features/about/models/ProjectsModels'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group flex flex-col hover:scale-[1.02]">
      {/* Media Section */}
      {(project.videoUrl || project.imageUrl) && (
        <div className="aspect-video w-full bg-muted relative overflow-hidden border-b-2 border-border">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              controls
              preload="metadata"
              poster={project.imageUrl}
              className="w-full h-full object-cover"
            >
              Seu navegador não suporta vídeos.
            </video>
          ) : (
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            />
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow relative bg-card">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <h3 className="text-2xl font-bold text-foreground mb-2 relative z-10">
          {project.name}
        </h3>
        <p className="text-muted-foreground mb-6 flex-grow relative z-10">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6 relative z-10">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-auto relative z-10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all shadow-lg hover:shadow-primary/50"
          >
            <Github size={18} />
            Código
          </a>
        </div>
      </div>
    </div>
  )
}
