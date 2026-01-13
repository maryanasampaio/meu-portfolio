import { Code2, Database, Layers } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function HomeView() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Maryana Sampaio
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
            Engenheira de Software
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Desenvolvo aplicações web escaláveis com foco em arquitetura limpa e experiência do usuário. 
            Especializada em desenvolvimento fullstack com React, Node.js e bancos de dados modernos.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projetos"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('[href="/projetos"]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Ver Projetos
            </a>
            <a
              href="https://github.com/maryanasampaio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-input bg-background font-medium hover:bg-accent transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">Frontend</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Interfaces modernas e responsivas
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-xs">React</Badge>
              <Badge variant="secondary" className="text-xs">Next.js</Badge>
              <Badge variant="secondary" className="text-xs">TypeScript</Badge>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">Backend</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              APIs RESTful escaláveis
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-xs">Node.js</Badge>
              <Badge variant="secondary" className="text-xs">Express</Badge>
              <Badge variant="secondary" className="text-xs">NestJS</Badge>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">Banco de Dados</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Modelagem e otimização
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-xs">PostgreSQL</Badge>
              <Badge variant="secondary" className="text-xs">MongoDB</Badge>
              <Badge variant="secondary" className="text-xs">MySQL</Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 text-sm">
          <div>
            <p className="text-2xl font-bold text-primary mb-1">+2</p>
            <p className="text-muted-foreground">Anos de experiência</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary mb-1">5+</p>
            <p className="text-muted-foreground">Linguagens</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary mb-1">12+</p>
            <p className="text-muted-foreground">Tecnologias</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary mb-1">5+</p>
            <p className="text-muted-foreground">Projetos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
