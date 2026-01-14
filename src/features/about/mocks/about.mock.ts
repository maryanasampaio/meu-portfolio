import profileImage from '@/assets/image.png'
import type { AboutParagraph, AboutPersonalInfo, AboutSection } from '../models/AboutModels'

export const aboutPersonalInfoMock: AboutPersonalInfo = {
  name: 'Maryana Sampaio',
  profileImage,
}

export const aboutTextMock: AboutParagraph[] = [
  {
    content:
      'Sou estudante de Engenharia de Software com experiência prática em desenvolvimento full stack. Trabalho com arquitetura de aplicações modernas, desde APIs RESTful até interfaces responsivas e intuitivas.',
    highlight: { text: 'Engenharia de Software', position: 'start' },
  },
  {
    content:
      'Minha abordagem combina análise criteriosa de problemas, pensamento lógico das soluções e código limpo, sempre priorizando performance e manutenibilidade.',
    highlight: null,
  },
  {
    content:
      'Busco evoluir como desenvolvedora full stack, contribuindo em projetos que impactem positivamente usuários, aprendendo e contribuindo com equipes técnicas de alto nível.',
    highlight: null,
  },
]

export const aboutSectionsMock: AboutSection[] = [
  {
    title: 'Formação',
    description:
      'Cursando Engenharia de Software, com foco em arquitetura de sistemas, padrões de projeto e metodologias ágeis.',
  },
    
  {
    title: 'Interesses',
    description:
      'Arquitetura de software, sistemas escaláveis, desenvolvimento backend e frontend com frameworks modernos.',
  },
]
