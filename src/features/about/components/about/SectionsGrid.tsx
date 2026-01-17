import type { AboutSection } from '@/features/about/models/AboutModels'

interface SectionsGridProps {
  sections: AboutSection[]
}

export function SectionsGrid({ sections }: SectionsGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 pt-8 border-t">
      {sections.map((section) => (
        <div key={section.title} className="p-6 rounded-lg border bg-card/50">
          <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
          <p className="text-muted-foreground text-sm">{section.description}</p>
        </div>
      ))}
    </div>
  )
}
