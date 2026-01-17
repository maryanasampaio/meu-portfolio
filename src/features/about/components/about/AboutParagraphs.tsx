import type { AboutParagraph } from '@/features/about/models/AboutModels'

interface AboutParagraphsProps {
  paragraphs: AboutParagraph[]
}

export function AboutParagraphs({ paragraphs }: AboutParagraphsProps) {
  return (
    <div className="flex-1 space-y-4 text-muted-foreground">
      {paragraphs.map((paragraph, index) => (
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
  )
}
