import type { Project } from "@/features/about/models/ProjectsModels";

export const projectsMock: Project[] = [
  {
    name: 'Sistema de Agendamento - AgendaKi',
    description: 'Plataforma completa para gestão de agendamentos e serviços',
    longDescription:
      'Sistema web fullstack para gerenciamento de agendamentos com autenticação JWT, CRUD completo, painel administrativo e interface responsiva. Inclui sistema de notificações e relatórios.',
    technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'REST API'],
    github: 'https://github.com/maryanasampaio',
    demo: '#',
    category: 'Fullstack',
    highlight: true,
    videoUrl: '/src/assets/videos/agendaki-demo.mp4',
  },
  {
    name: 'E-commerce Moderno',
    description: 'Loja virtual com carrinho, pagamentos e painel admin',
    longDescription:
      'Aplicação e-commerce completa com integração de pagamento, gestão de produtos, sistema de carrinho, autenticação de usuários e painel administrativo robusto.',
    technologies: ['React', 'TypeScript', 'PHP', 'Laravel'],
    github: 'https://github.com/maryanasampaio',
    category: 'Fullstack',
    highlight: true,
    videoUrl: '/src/assets/videos/ecommerce-demo.mp4',
  },
  {
    name: 'API RESTful - InfoDesk',
    description: 'Backend escalável com arquitetura limpa e documentação completa',
    longDescription:
      'API REST robusta para gerenciamento de informações, com arquitetura em camadas, testes automatizados, documentação completa e deploy em produção.',
    technologies: ['Node.js', 'TypeScript', 'REST API'],
    github: 'https://github.com/maryanasampaio',
    category: 'Backend',
    videoUrl: '/src/assets/videos/infodesk-demo.mp4',
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
]
