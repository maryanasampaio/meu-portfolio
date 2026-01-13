import type { PersonalInfo } from '@/features/about/models/HomeModels'

interface HomeHeaderProps {
  personalInfo: PersonalInfo
  onNavigateToProjects: (e: React.MouseEvent) => void
}

export function HomeHeader({ personalInfo, onNavigateToProjects }: HomeHeaderProps) {
  return (
    <div className="mb-12">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
        {personalInfo.name}
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
        {personalInfo.title}
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
        {personalInfo.description}
      </p>
      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href="#projetos"
          onClick={onNavigateToProjects}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Ver Projetos
        </a>
        <a
          href={personalInfo.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-input bg-background font-medium hover:bg-accent transition-colors"
        >
          GitHub →
        </a>
      </div>
    </div>
  )
}
