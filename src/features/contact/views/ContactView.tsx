import { Mail, Linkedin, Github, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactView() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'maryanacem.star2@gmail.com',
      href: 'mailto:maryanacem.star2@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/maryanasampaio',
      href: 'https://www.linkedin.com/in/maryanasampaio',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/maryanasampaio',
      href: 'https://github.com/maryanasampaio',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@maryy4n4',
      href: 'https://www.instagram.com/maryy4n4/',
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-3xl space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contato</h2>
          <p className="text-muted-foreground">
            Aberta a oportunidades de trabalho fullstack júnior. Entre em contato através dos canais abaixo.
          </p>
        </div>

        <div className="space-y-6">
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <div key={contact.label} className="flex items-center gap-4">
                <Icon className="w-5 h-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">{contact.label}</p>
                  <Button asChild variant="link" className="h-auto p-0 text-base">
                    <a href={contact.href} target="_blank" rel="noreferrer">
                      {contact.value}
                    </a>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

