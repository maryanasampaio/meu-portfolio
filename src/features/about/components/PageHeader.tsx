interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent blur-2xl opacity-50" />
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground text-lg">{description}</p>
        )}
      </div>
    </div>
  )
}
