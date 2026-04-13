import type { Project } from "@/features/about/models/ProjectsModels";

export const projectsMock: Project[] = [
  {
    name: 'TaskFlow — Gerenciamento de Tarefas',
    description: 'Aplicação fullstack para gerenciamento de tarefas, metas diárias/mensais/anuais e estudos. Possui editor de blocos estilo Notion, notificações push, autenticação JWT e API REST completa. Frontend em React 19 + TypeScript + Tailwind CSS e backend em PHP com Laravel e MySQL.',
    longDescription:
      'Aplicação fullstack com frontend em React 19 + TypeScript + Tailwind CSS e backend em PHP com Laravel e MySQL. Possui metas diárias, mensais e anuais, editor de blocos estilo Notion, notificações push (PWA), autenticação JWT e API REST completa.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'Laravel', 'MySQL'],
    github: 'https://github.com/maryanasampaio/gerenciamento_de_tarefas',
    category: 'Fullstack',
    videoUrl: 'https://media.githubusercontent.com/media/maryanasampaio/meu-portfolio/main/public/videos/Tarefas.mp4',
  },
  {
    name: 'Coffee API',
    description: 'API REST desenvolvida em PHP puro com padrão MVC e sem frameworks. Inclui autenticação JWT, CRUD de usuários, registro de consumo com ownership, histórico diário, ranking por período, versionamento de rotas e validação completa de requisições.',
    longDescription:
      'API REST desenvolvida em PHP puro seguindo o padrão MVC, sem frameworks. Possui autenticação JWT, CRUD de usuários, registro de consumo de café com ownership, histórico diário, ranking por período, versionamento de rotas e validação completa de requisições.',
    technologies: ['PHP', 'MySQL', 'JWT', 'REST API', 'MVC'],
    github: 'https://github.com/maryanasampaio/coffee-api',
    category: 'Backend',
    imageUrl: '/images/CRUD-coffe.png',
    endpoints: [
      'POST /api/v1/login',
      'POST /api/v1/users/{id}/drink',
      'GET  /api/v1/ranking/last-days?days=7',
      'GET  /api/v1/users/{id}/drink/history',
    ],
  },
]
