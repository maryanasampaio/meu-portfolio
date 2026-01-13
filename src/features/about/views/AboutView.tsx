import profileImage from '@/assets/image.png'

export function AboutView() {
  return (
    <section className="py-20">
      <div className="max-w-4xl space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Sobre</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img 
              src={profileImage} 
              alt="Maryana Sampaio" 
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg"
            />
            <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou estudante de <span className="text-foreground font-medium">Engenharia de Software</span> com experiência prática 
                em desenvolvimento fullstack. Trabalho com arquitetura de aplicações modernas, desde APIs RESTful até interfaces 
                responsivas e intuitivas.
              </p>
              <p>
                Minha abordagem combina análise criteriosa de problemas, código limpo e testes automatizados. Tenho experiência 
                sólida com bancos de dados relacionais e não-relacionais, sempre priorizando performance e manutenibilidade.
              </p>
              <p>
                Busco evoluir como desenvolvedora fullstack, contribuindo em projetos que impactem positivamente usuários e 
                aprendendo com equipes técnicas de alto nível.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-8 border-t">
          <div className="p-6 rounded-lg border bg-card/50">
            <h3 className="text-lg font-semibold mb-3">Formação</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cursando Engenharia de Software, com foco em arquitetura de sistemas, padrões de projeto e 
              metodologias ágeis.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card/50">
            <h3 className="text-lg font-semibold mb-3">Interesses</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Arquitetura de software, sistemas escaláveis, desenvolvimento backend e frontend com 
              frameworks modernos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
