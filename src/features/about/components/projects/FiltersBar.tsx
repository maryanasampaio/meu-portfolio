import { Button } from '@/components/ui/button'
import { Layers, Monitor, Server, Smartphone } from 'lucide-react'

const categoryIcons: Record<string, React.ReactNode> = {
  Fullstack: <Layers size={14} />,
  Frontend: <Monitor size={14} />,
  Backend: <Server size={14} />,
  Mobile: <Smartphone size={14} />,
}

interface CategoryTabsProps {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
}

export function CategoryTabs({ categories, selected, onSelect }: Readonly<CategoryTabsProps>) {
  return (
    <div className="flex gap-2 border-b border-border/50 pb-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selected === cat
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          {categoryIcons[cat]}
          {cat}
        </button>
      ))}
    </div>
  )
}

interface FiltersBarProps {
  filters: string[]
  selectedFilter: string
  onSelect: (filter: string) => void
}

export function FiltersBar({ filters, selectedFilter, onSelect }: Readonly<FiltersBarProps>) {
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
