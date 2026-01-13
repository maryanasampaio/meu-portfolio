export type ProjectCategory = 'Fullstack' | 'Frontend' | 'Backend' | 'Mobile'

export interface Project {
  name: string
  description: string
  longDescription: string
  technologies: string[]
  github: string
  demo?: string
  category: ProjectCategory
  highlight?: boolean
}
