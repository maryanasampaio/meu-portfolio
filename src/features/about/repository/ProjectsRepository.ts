import { projectsMock } from '@/features/about/mocks/projects.mock'
import { mockApi } from '@/features/about/mocks/utils'
import type { Project } from '../models/ProjectsModels'

export const ProjectsRepository = {
  async getProjects(): Promise<Project[]> {
    return mockApi(projectsMock)
  },
}
