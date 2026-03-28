import { Mail, Linkedin, Github, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Contact } from '@/features/about/models/ContactModels'

interface ContactListProps {
  contacts: Contact[]
}

export function ContactList({ contacts }: ContactListProps) {
  const getIcon = (iconName: string) => {
    const icons = { Mail, Linkedin, Github, Instagram }
    return icons[iconName as keyof typeof icons]
  }

  return (
    <div className="space-y-6">
      {contacts.map((contact) => {
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
  )
}
