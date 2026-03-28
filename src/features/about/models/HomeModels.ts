export interface PersonalInfo {
  name: string
  title: string
  description: string
  githubUrl: string
  linkedinUrl: string
}

export interface Skill {
  title: string
  description: string
  technologies: string[]
  icon: string
}

export interface Stat {
  value: string
  label: string
}
