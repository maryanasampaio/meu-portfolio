 import { homePersonalInfoMock, homeSkillsMock, homeStatsMock } from '@/features/about/mocks/home.mock'
import { mockApi } from '@/features/about/mocks/utils'
import type { PersonalInfo, Skill, Stat } from '../models/HomeModels'

export const HomeRepository = {
  async getPersonalInfo(): Promise<PersonalInfo> {
    return mockApi(homePersonalInfoMock)
  },
  async getSkills(): Promise<Skill[]> {
    return mockApi(homeSkillsMock)
  },
  async getStats(): Promise<Stat[]> {
    return mockApi(homeStatsMock)
  },
}
