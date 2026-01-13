import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, ExternalLink, Search } from 'lucide-react'

type Project = {
  name: string
  description: string
  longDescription: string
  technologies: string[]
  github: string
  demo?: string
  category: 'Fullstack' | 'Frontend' | 'Backend' | 'Mobile'
  highlight?: boolean
}

export function ProjectsView() {
  const projects: Project[] = [
    {
      name: 'Sistema de Agendamento - AgendaKi',
      description: 'Plataforma completa para gestão de agendamentos e serviços',
      longDescription:
        'Sistema web fullstack para gerenciamento de agendamentos com autenticação JWT, CRUD completo, painel administrativo e interface responsiva. Inclui sistema de notificações e relatórios.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Express'],
      github: 'https://github.com/maryanasampaio',
      demo: '#',
      category: 'Fullstack',
      highlight: true,
    },
    {
      name: 'E-commerce Moderno',
      description: 'Loja virtual com carrinho, pagamentos e painel admin',
      longDescription:
        'Aplicação e-commerce completa com integração de pagamento, gestão de produtos, sistema de carrinho, autenticação de usuários e painel administrativo robusto.',
      technologies: ['Next.js', 'React', 'MongoDB', 'TypeScript'],
      github: 'https://github.com/maryanasampaio',
      category: 'Fullstack',
      highlight: true,
    },
    {
      name: 'API RESTful - InfoDesk',
      description: 'Backend escalável com arquitetura limpa e documentação completa',
      longDescription:
        'API REST robusta para gerenciamento de informações, com arquitetura em camadas, testes automatizados, documentação completa e deploy em produção.',
      technologies: ['Node.js', 'Express', 'MySQL', 'TypeScript'],
      github: 'https://github.com/maryanasampaio',
      category: 'Backend',
    },
    {
      name: 'Dashboard Analytics',
      description: 'Interface interativa com gráficos e métricas em tempo real',
      longDescription:
        'Dashboard responsivo para visualização de dados com gráficos dinâmicos, filtros avançados e exportação de relatórios. Integração com APIs externas.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/maryanasampaio',
      demo: '#',
      category: 'Frontend',
    },
    {
      name: 'App Mobile - Task Manager',
      description: 'Aplicativo de gerenciamento de tarefas multiplataforma',
      longDescription:
        'Aplicativo mobile para iOS e Android com sincronização em nuvem, notificações push e interface nativa. Offline-first com persistência local.',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/maryanasampaio',
      category: 'Mobile',
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos')

  const allTechs = [...new Set(projects.flatMap((p) => p.technologies))].sort()
  const filters = ['Todos', ...allTechs]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesFilter = selectedFilter === 'Todos' || project.technologies.includes(selectedFilter)

    return matchesSearch && matchesFilter
  })

  return (
    <section className="py-20">
      <div className="max-w-6xl space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Projetos</h2>
          <p className="text-muted-foreground">
            Trabalhos recentes que demonstram minhas habilidades técnicas
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar projetos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-sm">Nenhum projeto encontrado</p>
          </div>
        )}

        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.name} 
              className="group relative rounded-xl border-2 bg-card p-6 hover:border-primary transition-all shadow-sm hover:shadow-xl border-l-[6px] border-l-primary"
              style={{
                borderLeftColor: index % 3 === 0 ? 'hsl(var(--primary))' : index % 3 === 1 ? 'hsl(221, 83%, 63%)' : 'hsl(221, 83%, 43%)'
              }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-base text-muted-foreground font-medium">{project.description}</p>
                    </div>
                    <Badge className="shrink-0 bg-primary/10 text-primary hover:bg-primary/20">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-sm leading-relaxed border-l-2 border-muted pl-4">{project.longDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-medium text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-3 md:justify-start md:pt-2">
                  <Button asChild variant="default" size="default" className="flex-1 md:flex-none md:w-36">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </a>
                  </Button>
                  {project.demo && (
                    <Button asChild variant="outline" size="default" className="flex-1 md:flex-none md:w-36">
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {index === 0 && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  ⭐ Destaque
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
