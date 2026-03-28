import type { Experience } from '@/features/about/models/ExperienceModels'
import { Badge } from '@/components/ui/badge'

interface ExperienceListProps {
  experiences: Experience[]
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="group/list space-y-10">
      {experiences.map((exp) => (
        <div
          key={`${exp.company}-${exp.role}-${exp.period}`}
          className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4"
        >
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-muted/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.15)]" />
          <header className="z-10 mb-2 mt-1 sm:col-span-2">
            <div className="text-sm font-semibold text-foreground dark:text-slate-200 mb-1">{exp.company}</div>
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{exp.period}</div>
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-foreground dark:text-slate-200">
              {exp.role}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">{exp.location}</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-foreground/80 space-y-1">
              {exp.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {exp.technologies.length > 0 && (
              <div className="mt-3 flex flex-wrap" aria-label="Tecnologias usadas">
                {exp.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    className="mr-1.5 mt-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium leading-5 text-primary dark:bg-teal-400/10 dark:text-teal-300 border-primary/30 dark:border-transparent"
                    variant="outline"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
