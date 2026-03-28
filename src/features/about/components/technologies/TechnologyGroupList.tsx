import { Badge } from '@/components/ui/badge'
import type { TechnologyGroup } from '@/features/about/models/TechnologiesModels'

interface TechnologyGroupListProps {
  groups: TechnologyGroup[]
}

export function TechnologyGroupList({ groups }: TechnologyGroupListProps) {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
            {group.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Badge key={item} variant="secondary" className="font-normal">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
