import { Button } from '@/components/ui/button'

interface FiltersBarProps {
  filters: string[]
  selectedFilter: string
  onSelect: (filter: string) => void
}

export function FiltersBar({ filters, selectedFilter, onSelect }: FiltersBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={selectedFilter === filter ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onSelect(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}
