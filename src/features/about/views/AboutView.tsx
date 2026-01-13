import { useAboutViewModel } from '../viewmodel/AboutViewModel'

export function AboutView() {
  const viewModel = useAboutViewModel()

  return (
    viewModel.isLoading || !viewModel.personalInfo ? (
      <section className="py-20 justify-center items-center flex">
        <div className="max-w-4xl w-full">
          <div className="h-8 w-48 bg-muted rounded mb-6 animate-pulse" />
          <div className="h-40 w-full bg-muted rounded animate-pulse" />
        </div>
      </section>
    ) : (
    <section className="py-20 justify-center items-center flex">
      <div className="max-w-4xl space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Sobre</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img 
              src={viewModel.personalInfo.profileImage} 
              alt={viewModel.personalInfo.name} 
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg"
            />
            <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed">
              {viewModel.aboutText.map((paragraph, index) => (
                <p key={index}>
                  {paragraph.highlight ? (
                    <>
                      {paragraph.highlight.position === 'start' ? (
                        <>
                          Sou estudante de <span className="text-foreground font-medium">{paragraph.highlight.text}</span> com experiência prática 
                          em desenvolvimento fullstack. Trabalho com arquitetura de aplicações modernas, desde APIs RESTful até interfaces 
                          responsivas e intuitivas.
                        </>
                      ) : (
                        paragraph.content
                      )}
                    </>
                  ) : (
                    paragraph.content
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-8 border-t">
          {viewModel.sections.map((section) => (
            <div key={section.title} className="p-6 rounded-lg border bg-card/50">
              <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
  )
}
