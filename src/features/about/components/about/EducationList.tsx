import type { Education } from '@/features/about/models/EducationModels'

interface EducationListProps {
  items: Education[]
}

export function EducationList({ items }: EducationListProps) {
  return (
    <div className="group/list space-y-6">
      {items.map((edu) => (
        <div
          key={`${edu.institution}-${edu.degree}-${edu.period}`}
          className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4"
        >
          <div className="absolute -inset-x-4 -inset-y-2 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-muted/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.15)]" />
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
            {edu.period}
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-foreground dark:text-slate-200">
              <span className="inline-block">
                {edu.degree} · <span className="text-foreground/90 dark:text-slate-300">{edu.institution}</span>
              </span>
            </h3>
            {edu.status && (
              <p className="mt-1 text-xs text-muted-foreground">{edu.status}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
