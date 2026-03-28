import type { Project } from "@/features/about/models/ProjectsModels";

export const projectsMock: Project[] = [
  {
    name: 'Sistema Corporativo',
    description: 'Aplicação enterprise com gestão completa de processos',
    longDescription:
      'Sistema corporativo robusto com módulos integrados, autenticação empresarial, relatórios avançados e gestão de permissões.',
    technologies: ['Angular', 'Java', 'Spring Boot'],
    github: 'https://github.com/maryanasampaio',
    category: 'Fullstack',
    videoUrl: '/src/assets/videos/taskmanager-demo.mp4',
  },
  {
    name: 'Dashboard Analytics',
    description: 'Interface interativa com gráficos e métricas em tempo real',
    longDescription:
      'Dashboard responsivo para visualização de dados com gráficos dinâmicos, filtros avançados e exportação de relatórios. Integração com APIs externas.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
    github: 'https://github.com/maryanasampaio',
    demo: '#',
    category: 'Frontend',
    videoUrl: '/src/assets/videos/dashboard-demo.mp4',
  },
]
