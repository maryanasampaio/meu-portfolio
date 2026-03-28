import type { Contact, PageInfo } from "../models/ContactModels"

 
export const contactsMock: Contact[] = [
  { icon: 'Mail', label: 'Email', value: 'maryanacem.star2@gmail.com', href: 'mailto:maryanacem.star2@gmail.com' },
  { icon: 'Linkedin', label: 'LinkedIn', value: 'linkedin.com/in/maryanasampaio', href: 'https://www.linkedin.com/in/maryanasampaio' },
  { icon: 'Github', label: 'GitHub', value: 'github.com/maryanasampaio', href: 'https://github.com/maryanasampaio' },
  { icon: 'Instagram', label: 'Instagram', value: '@maryy4n4', href: 'https://www.instagram.com/maryy4n4/' },
]

export const contactsPageInfoMock: PageInfo = {
  title: 'Contato',
  description:
    'Aberta a oportunidades de trabalho. Entre em contato através dos canais abaixo.',
}
