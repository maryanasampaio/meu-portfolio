import type { Stat } from '@/features/about/models/HomeModels'

interface StatsRowProps {
  stats: Stat[]
}

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="flex items-center gap-8 text-sm">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
          <p className="text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
