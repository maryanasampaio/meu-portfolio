import { Badge } from '@/components/ui/badge'

export function TechnologiesView() {
  const techGroups = [
    {
      title: 'Linguagens',
      items: ['JavaScript', 'TypeScript', 'PHP', 'Java'],
    },
    {
      title: 'Frameworks',
      items: ['Spring Boot', 'Laravel', 'Angular', 'React'],
    },
    {
      title: 'Banco de Dados',
      items: ['PostgreSQL', 'MySQL', 'MariaDB'],
    },
    {
      title: 'Bibliotecas',
      items: ['Tailwind CSS', 'Shadcn UI' ,'Axios', 'Lucide React', ],
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-3xl space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Tecnologias</h2>
          <p className="text-muted-foreground">
            Stack de ferramentas e linguagens que utilizo em projetos profissionais
          </p>
        </div>

        <div className="space-y-10">
          {techGroups.map((group) => (
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
      </div>
    </section>
  )
}
