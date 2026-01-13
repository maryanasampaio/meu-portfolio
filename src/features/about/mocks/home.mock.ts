import type { PersonalInfo, Skill, Stat } from "../models/HomeModels"

 
export const homePersonalInfoMock: PersonalInfo = {
  name: 'Maryana Sampaio',
  title: 'Desenvolvedora de Software',
  description:
    'Construo produtos digitais com cuidado e propósito. Curto entender pessoas, simplificar o complexo e entregar soluções que geram impacto real, aprendendo e evoluindo a cada projeto.',
  githubUrl: 'https://github.com/maryanasampaio',
}

export const homeSkillsMock: Skill[] = [
  {
    title: 'Frontend',
    description: 'Interfaces modernas, acessíveis e responsivas',
    technologies: ['Angular', 'React', 'TypeScript', 'HTML', 'CSS'],
    icon: 'Code2',
  },
  {
    title: 'Backend',
    description: 'APIs RESTful escaláveis',
    technologies: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'Node.js'],
    icon: 'Layers',
  },
  {
    title: 'Banco de Dados',
    description: 'Modelagem, consultas e integrações',
    technologies: ['MySQL', 'PL/SQL', 'PostgreSQL'],
    icon: 'Database',
  },
]

export const homeStatsMock: Stat[] = [
  { value: '5+', label: 'Linguagens' },
  { value: '9+', label: 'Tecnologias' },
  { value: '2+', label: 'Anos de experiência' },

]
