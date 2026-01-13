import { Code2, Database, Layers } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useHomeViewModel } from '../viewmodel/HomeViewModel'

export function HomeView() {
  const viewModel = useHomeViewModel()

  const getIcon = (iconName: string) => {
    const icons = {
      Code2: Code2,
      Layers: Layers,
      Database: Database
    }
    return icons[iconName as keyof typeof icons]
  }

  return (
    viewModel.isLoading || !viewModel.personalInfo ? (
      <section className="py-20 md:py-20">
        <div className="max-w-4xl">
          <div className="h-8 w-64 bg-muted rounded mb-4 animate-pulse" />
          <div className="h-5 w-80 bg-muted rounded mb-2 animate-pulse" />
          <div className="h-4 w-full max-w-xl bg-muted rounded mb-6 animate-pulse" />
        </div>
      </section>
    ) : (
    <section className="py-20 md:py-20">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {viewModel.personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
            {viewModel.personalInfo.title}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            {viewModel.personalInfo.description}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projetos"
              onClick={viewModel.handleNavigateToProjects}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Ver Projetos
            </a>
            <a
              href={viewModel.personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-input bg-background font-medium hover:bg-accent transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {viewModel.skills.map((skill) => {
            const Icon = getIcon(skill.icon)
            return (
              <div key={skill.title} className="p-6 rounded-lg border bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{skill.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {skill.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex items-center gap-8 text-sm">
          {viewModel.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
  )
}
  
