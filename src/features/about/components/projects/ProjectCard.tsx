import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, FileText, Server } from 'lucide-react'
import type { Project } from '@/features/about/models/ProjectsModels'

interface ProjectCardProps {
  project: Project
}

const categoryColors: Record<string, string> = {
  Fullstack: 'bg-violet-500/10 text-violet-500 border-violet-500/20',
  Frontend: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
  Backend: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  Mobile: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  const hasMedia = project.videoUrl || project.imageUrl

  return (
    <div className="bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group flex flex-col hover:scale-[1.02] h-full">
      {/* Media Section - fixed height for all cards */}
      <div className="aspect-video w-full bg-muted relative overflow-hidden border-b-2 border-border">
        {project.videoUrl ? (
          <video
            controls
            preload="metadata"
            playsInline
            poster={project.imageUrl}
            className="w-full h-full object-cover"
          >
            <source src={project.videoUrl} type="video/mp4" />
            <track kind="captions" src="/videos/Tarefas.vtt" srcLang="pt-BR" label="Português" default />
            Seu navegador não suporta vídeos.
          </video>
        ) : project.imageUrl ? (
          <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center p-4">
            <img
              src={project.imageUrl}
              alt={project.name}
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-500/10 via-muted to-emerald-500/5 flex flex-col items-center justify-center gap-3">
            <Server className="w-12 h-12 text-emerald-500/60" />
            <span className="text-xs font-medium text-emerald-500/80 uppercase tracking-widest">API REST</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow relative bg-card">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />

        {/* Category Badge + Title */}
        <div className="flex items-start gap-3 mb-2 relative z-10">
          <h3 className="text-xl font-bold text-foreground flex-1 line-clamp-1">
            {project.name}
          </h3>
          <Badge
            variant="outline"
            className={`shrink-0 text-xs font-medium border ${categoryColors[project.category] ?? 'bg-primary/10 text-primary border-primary/20'}`}
          >
            {project.category}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-4 relative z-10">
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
        <div className="flex gap-3 mt-auto relative z-10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-all shadow-lg hover:shadow-primary/50"
          >
            <Github size={18} />
            Código
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-border bg-card text-foreground py-2 rounded-lg font-medium hover:bg-accent hover:scale-105 transition-all"
            >
              <ExternalLink size={18} />
              Demo
            </a>
          )}
          {project.docs && (
            <a
              href={project.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-border bg-card text-foreground py-2 rounded-lg font-medium hover:bg-accent hover:scale-105 transition-all"
            >
              <FileText size={18} />
              Docs
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
