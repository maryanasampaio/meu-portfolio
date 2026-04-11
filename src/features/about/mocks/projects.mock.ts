import type { Project } from "@/features/about/models/ProjectsModels";

export const projectsMock: Project[] = [
  {
    name: 'TaskFlow — Gerenciamento de Tarefas',
    description: 'Aplicação fullstack completa para tarefas, metas e estudos com editor estilo Notion',
    longDescription:
      'Aplicação fullstack com frontend em React 19 + TypeScript + Tailwind CSS e backend em Java com Spring Boot e MySQL. Possui metas diárias, mensais e anuais, editor de blocos estilo Notion, notificações push (PWA), autenticação JWT e API REST completa.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Java', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/maryanasampaio/gerenciamento_de_tarefas',
    category: 'Fullstack',
    videoUrl: '/videos/Tarefas.mp4',
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
  },
]
