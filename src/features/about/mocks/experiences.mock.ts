import type { Experience } from '@/features/about/models/ExperienceModels'

export const experiencesMock: Experience[] = [
  {
    role: 'Analista e Desenvolvedora de Software Full Stack',
    company: 'OFM Systems',
    period: 'Out 2024 — Nov 2025 (1 ano e 1 mês)',
    location: 'Maceió — AL',
    responsibilities: [
      'Atuação no desenvolvimento e manutenção de aplicações web',
      'Criação de APIs REST com PHP (Laravel)',
      'Desenvolvimento de interfaces responsivas com React.js, HTML e CSS',
      'Redatora de Software',
      'Uso de Git para versionamento e colaboração em times ágeis',
      'Contribuição para melhoria de fluxos internos, otimizando a experiência do usuário',
    ],
    technologies: ['PHP', 'Laravel', 'React.js', 'HTML', 'CSS', 'Git'],
  },
  {
    role: 'Analista e Desenvolvedora de Software Full Stack',
    company: 'Dismoto Honda',
    period: 'Nov 2024 — Presente (3 meses)',
    location: 'Arapiraca — AL',
    responsibilities: [
      'Desenvolvimento de APIs REST escaláveis com Java e Spring Boot',
      'Integração entre frontend (Angular) e backend, garantindo consistência de contratos',
      'Implementação de autenticação, autorização e boas práticas de segurança no backend',
      'Criação de interfaces responsivas e acessíveis com Angular, HTML e CSS',
      'Automação de fluxos e versionamento com Git, colaboração em times ágeis',
      'Monitoramento de performance e otimizações tanto no frontend quanto no backend',
    ],
    technologies: ['Java', 'Spring Boot', 'TypeScript', 'Angular', 'Git', 'HTML', 'CSS'],
  },
]
