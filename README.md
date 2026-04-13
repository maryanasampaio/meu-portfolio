# Portfólio - Maryana Sampaio

Aplicação web de portfólio desenvolvida para apresentar trajetória profissional, experiências, formação acadêmica, contatos e projetos em destaque em uma interface única, responsiva e orientada a navegação por seções.

O projeto foi construído como uma SPA com React, TypeScript e Vite, com foco em performance, organização por features e uma camada visual moderna com Tailwind CSS, componentes reutilizáveis e animações sutis de fundo.

## Visão Geral

- Página única com navegação suave entre as seções Home, Sobre, Projetos e Contato
- Seção inicial com apresentação pessoal, resumo profissional, skills e estatísticas
- Seção Sobre com foto, textos descritivos, experiências profissionais e formação acadêmica
- Seção de projetos com busca, filtros e cards com mídia
- Seção de contato com links e formas de acesso profissional
- Alternância de tema claro e escuro
- Layout responsivo para desktop e mobile

## Stack

### Frontend

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- React Router DOM 7
- TanStack Query 5
- Lucide React

### UI e utilitários

- Radix UI Slot
- class-variance-authority
- clsx
- tailwind-merge
- tailwindcss-animate

## Estrutura do projeto

```text
src/
├── app/
│   ├── query/        # Configuração do client de dados
│   └── router/       # Roteamento principal da aplicação
├── components/
│   └── ui/           # Componentes base reutilizáveis
├── core/
│   ├── components/   # Layout global, background e elementos visuais
│   ├── constants/
│   ├── hooks/
│   ├── theme/
│   └── utils/
├── features/
│   └── about/
│       ├── components/
│       ├── mocks/
│       ├── models/
│       ├── repository/
│       ├── usecases/
│       ├── viewmodel/
│       └── views/
├── lib/
└── types/
```

## Organização da interface

### Home

Apresenta nome, título profissional, descrição curta, principais habilidades e indicadores.

### Sobre

Centraliza resumo profissional, foto, experiência profissional e formação acadêmica.

### Projetos

Exibe projetos em destaque com busca por texto, filtros por tecnologia e suporte a mídia em vídeo nos cards.

### Contato

Reúne os canais profissionais para navegação rápida.

## Projeto em destaque atual

O portfólio destaca o projeto TaskFlow, uma aplicação fullstack de gerenciamento de tarefas, metas e estudos, com frontend em React + TypeScript + Tailwind CSS e backend em Java com Spring Boot e MySQL.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Como executar localmente

### Pré-requisitos

- Node.js 20 ou superior
- npm
- Git LFS

### Instalação

```bash
git clone https://github.com/maryanasampaio/meu-portfolio.git
cd meu-portfolio
git lfs install
git lfs pull
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Por padrão, o Vite disponibiliza a aplicação em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Observações

- O projeto utiliza assets de vídeo para exibição em cards de projeto
- Arquivos grandes de mídia são versionados com Git LFS
- O deploy está preparado para publicação em ambiente estático, como Vercel

## Contato

- GitHub: https://github.com/maryanasampaio
- LinkedIn: https://www.linkedin.com/in/maryanasampaio
