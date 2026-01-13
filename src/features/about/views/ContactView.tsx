import { Mail, Linkedin, Github, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useContactViewModel } from '../viewmodel/ContactViewModel'

export function ContactView() {
  const viewModel = useContactViewModel()

  const getIcon = (iconName: string) => {
    const icons = {
      Mail,
      Linkedin,
      Github,
      Instagram,
    }
    return icons[iconName as keyof typeof icons]
  }

  return (
    viewModel.isLoading || !viewModel.pageInfo ? (
      <section className="py-20">
        <div className="max-w-3xl">
          <div className="h-8 w-40 bg-muted rounded mb-3 animate-pulse" />
          <div className="h-4 w-96 bg-muted rounded animate-pulse" />
        </div>
      </section>
    ) : (
    <section className="py-20">
      <div className="max-w-3xl space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {viewModel.pageInfo.title}
          </h2>
          <p className="text-muted-foreground">
            {viewModel.pageInfo.description}
          </p>
        </div>

        <div className="space-y-6">
          {viewModel.contacts.map((contact) => {
            const Icon = getIcon(contact.icon)
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
  )
}


