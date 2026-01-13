 import { technologiesMock, technologiesPageInfoMock } from '@/features/about/mocks/technologies.mock'
import { mockApi } from '@/features/about/mocks/utils'
import type { PageInfo, TechnologyGroup } from '../models/TechnologiesModels'

export const TechnologiesRepository = {
  async getTechnologies(): Promise<TechnologyGroup[]> {
    return mockApi(technologiesMock)
  },
  async getPageInfo(): Promise<PageInfo> {
    return mockApi(technologiesPageInfoMock)
  },
}
