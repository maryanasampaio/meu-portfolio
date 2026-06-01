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
  {
    name: 'Produtores Rurais API',
    description: 'API REST desenvolvida com NestJS, TypeORM e PostgreSQL para cadastro de produtores rurais, fazendas e culturas plantadas. Possui validação de CPF/CNPJ, regras de negócio para áreas, paginação, soft delete, migrations, rate limiting e indicadores agregados por estado.',
    longDescription:
      'API REST com NestJS, TypeORM e PostgreSQL para gestão de produtores rurais. Inclui validação de CPF/CNPJ, regras de área (agricultável + vegetação ≤ total), paginação, soft delete, migrations, rate limiting configurável, Docker Compose e indicadores agregados por fazendas, hectares e culturas por estado.',
    technologies: ['NestJS', 'TypeORM', 'PostgreSQL', 'Docker', 'Jest', 'REST API'],
    github: 'https://github.com/maryanasampaio/produtores',
    category: 'Backend',
    endpoints: [
      'POST /produtores',
      'GET  /produtores?page=1&limit=10',
      'GET  /indicadores/total-fazendas',
      'GET  /indicadores/culturas-por-estado',
    ],
  },
  {
    name: 'ADS',
    description: 'Aplicação fullstack para automatização de atendimento e gestão comercial, com funil de conversão, distribuição inteligente de leads e integração com bot automático no WhatsApp.',
    longDescription:
      'Projeto desenvolvido em grupo com objetivo de automatizar processos de atendimento e gestão comercial. A solução contempla gestão de contatos, acompanhamento de etapas do funil, distribuição automatizada de leads e operação online integrada a um bot no WhatsApp. Arquitetura fullstack com frontend em Angular e backend em Java com Spring Boot.',
    technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'REST API'],
    category: 'Fullstack',
    isGroupParticipation: true,
    videoUrl: '/videos/crm.mp4',
  },
  {
    name: 'Util Lar — Gestão de Loja de Móveis',
    description: 'Plataforma fullstack para gestão de loja de móveis novos e usados, com controle de estoque, sistema de favoritos, notificações push, simulador financeiro inspirado no Infinity Pay e dashboard administrativo com indicadores de desempenho. Implementada como PWA para instalação mobile sem lojas de aplicativos.',
    longDescription:
      'Aplicação fullstack desenvolvida para resolver problemas reais de gestão de uma loja de móveis: organização do estoque, divulgação dos produtos, acompanhamento das vendas e análise dos resultados financeiros. Funcionalidades incluem CRUD de produtos, controle de estoque com marcação de vendidos, listagem paginada com filtros inteligentes por categoria/marca/preço/data, sistema de favoritos, notificações de novos produtos, compartilhamento de anúncios, simulador financeiro com comparação de cenários e dashboard com histórico de lucros, produtos vendidos, ranking de desempenho e indicadores para tomada de decisão. Desenvolvida como PWA para instalação direta no celular.',
    technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'REST API', 'MariaDB'],
    demo: 'https://util-lar.com/',
    category: 'Fullstack',
    videoUrl: '/videos/Video Project 13.mp4',
  },
]
