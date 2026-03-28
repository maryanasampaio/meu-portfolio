import { Code2, Database, Layers, Puzzle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Skill } from '@/features/about/models/HomeModels'

interface SkillsGridProps {
  skills: Skill[]
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const getIcon = (iconName: string) => {
    const icons = {
      Code2,
      Layers,
      Database,
      Puzzle,
    }
    return icons[iconName as keyof typeof icons] || Code2
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {skills.map((skill) => {
        const Icon = getIcon(skill.icon)
        return (
          <div key={skill.title} className="p-6 rounded-lg border bg-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">{skill.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {skill.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
