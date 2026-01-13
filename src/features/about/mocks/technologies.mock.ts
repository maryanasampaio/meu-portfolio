import type { PageInfo, TechnologyGroup } from "../models/TechnologiesModels"

 
export const technologiesMock: TechnologyGroup[] = [
  { title: 'Linguagens', items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Java'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'React Native'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Laravel'] },
  { title: 'Banco de Dados', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
]

export const technologiesPageInfoMock: PageInfo = {
  title: 'Tecnologias',
  description: 'Stack de ferramentas e linguagens que utilizo em projetos profissionais',
}
