import type { PersonalInfo, Skill, Stat } from "../models/HomeModels"

 
export const homePersonalInfoMock: PersonalInfo = {
  name: 'Maryana Sampaio',
  title: 'Engenheira de Software',
  description:
    'Desenvolvo aplicações web escaláveis com foco em arquitetura limpa e experiência do usuário. Especializada em desenvolvimento fullstack com React, Node.js e bancos de dados modernos.',
  githubUrl: 'https://github.com/maryanasampaio',
}

export const homeSkillsMock: Skill[] = [
  {
    title: 'Frontend',
    description: 'Interfaces modernas e responsivas',
    technologies: ['React', 'Next.js', 'TypeScript'],
    icon: 'Code2',
  },
  {
    title: 'Backend',
    description: 'APIs RESTful escaláveis',
    technologies: ['Node.js', 'Express', 'NestJS'],
    icon: 'Layers',
  },
  {
    title: 'Banco de Dados',
    description: 'Modelagem e otimização',
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL'],
    icon: 'Database',
  },
]

export const homeStatsMock: Stat[] = [
  { value: '+2', label: 'Anos de experiência' },
  { value: '5+', label: 'Linguagens' },
  { value: '12+', label: 'Tecnologias' },
  { value: '5+', label: 'Projetos' },
]
