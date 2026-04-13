import type { PersonalInfo } from '@/features/about/models/HomeModels'
import { Github, Linkedin } from 'lucide-react'

interface HomeHeaderProps {
  personalInfo: PersonalInfo
  onNavigateToProjects: (e: React.MouseEvent) => void
}

export function HomeHeader({ personalInfo }: HomeHeaderProps) {
  return (
    <div className="mb-12">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
        <span
          className="animate-gradient bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-200 dark:to-white bg-clip-text text-transparent font-extrabold"
          style={{ backgroundSize: '200% 200%' }}
        >
          {personalInfo.name}
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
        {personalInfo.title}
      </p>
      <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
        {personalInfo.description}
      </p>
      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href="#projetos"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 hover:scale-105 transition-all shadow-lg hover:shadow-primary/50"
        >
          Ver Projetos
        </a>
        <a
          href={personalInfo.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-input bg-background font-medium hover:bg-accent hover:scale-105 transition-all"
        >
          <Github size={20} />
          GitHub
        </a>
        <a
          href={personalInfo.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-input bg-background font-medium hover:bg-accent hover:scale-105 transition-all"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>
    </div>
  )
}
