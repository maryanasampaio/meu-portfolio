import type { Project } from "@/features/about/models/ProjectsModels";

export const projectsMock: Project[] = [
  {
    name: 'Sistema de Agendamento - AgendaKi',
    description: 'Plataforma completa para gestão de agendamentos e serviços',
    longDescription:
      'Sistema web fullstack para gerenciamento de agendamentos com autenticação JWT, CRUD completo, painel administrativo e interface responsiva. Inclui sistema de notificações e relatórios.',
    technologies: ['React', 'Node.js', 'nPostgreSQL', 'TypeScript', 'Express'],
    github: 'https://github.com/maryanasampaio',
    demo: '#',
    category: 'Fullstack',
    highlight: true,
  },
  {
    name: 'E-commerce Moderno',
    description: 'Loja virtual com carrinho, pagamentos e painel admin',
    longDescription:
      'Aplicação e-commerce completa com integração de pagamento, gestão de produtos, sistema de carrinho, autenticação de usuários e painel administrativo robusto.',
    technologies: ['Next.js', 'React', 'MongoDB', 'TypeScript'],
    github: 'https://github.com/maryanasampaio',
    category: 'Fullstack',
    highlight: true,
  },
  {
    name: 'API RESTful - InfoDesk',
    description: 'Backend escalável com arquitetura limpa e documentação completa',
    longDescription:
      'API REST robusta para gerenciamento de informações, com arquitetura em camadas, testes automatizados, documentação completa e deploy em produção.',
    technologies: ['Node.js', 'Express', 'MySQL', 'TypeScript'],
    github: 'https://github.com/maryanasampaio',
    category: 'Backend',
  },
  {
    name: 'Dashboard Analytics',
    description: 'Interface interativa com gráficos e métricas em tempo real',
    longDescription:
      'Dashboard responsivo para visualização de dados com gráficos dinâmicos, filtros avançados e exportação de relatórios. Integração com APIs externas.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/maryanasampaio',
    demo: '#',
    category: 'Frontend',
  },
  {
    name: 'App Mobile - Task Manager',
    description: 'Aplicativo de gerenciamento de tarefas multiplataforma',
    longDescription:
      'Aplicativo mobile para iOS e Android com sincronização em nuvem, notificações push e interface nativa. Offline-first com persistência local.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/maryanasampaio',
    category: 'Mobile',
  },
]
