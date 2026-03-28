import type { PersonalInfo, Skill, Stat } from "../models/HomeModels"

 
export const homePersonalInfoMock: PersonalInfo = {
  name: 'Maryana Sampaio',
  title: 'Desenvolvedora de Software',
  description:
    'Apaixonada por tecnologia, busco transformar ideias em soluções reais com foco em qualidade, impacto e evolução contínua.',
  githubUrl: 'https://github.com/maryanasampaio',
  linkedinUrl: 'https://www.linkedin.com/in/maryanasampaio',
}

export const homeSkillsMock: Skill[] = [
  {
    title: 'Frontend',
    description: 'Interfaces modernas, acessíveis e responsivas',
    technologies: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
    icon: 'Code2',
  },
  {
    title: 'Backend',
    description: 'APIs RESTful escaláveis',
    technologies: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'Node.js', 'REST API'],
    icon: 'Layers',
  },
  {
    title: 'Database',
    description: 'Modelagem, consultas e integrações',
    technologies: ['MySQL', 'PL/SQL', 'PostgreSQL', 'Modelagem de Dados'],
    icon: 'Database',
  },
]

export const homeStatsMock: Stat[] = [
  { value: '5+', label: 'Linguagens' },
  { value: '9+', label: 'Tecnologias' },
  { value: '12+', label: 'Projetos' },
  { value: '2+', label: 'Anos de experiência' },

]
