import { aboutPersonalInfoMock, aboutTextMock, aboutSectionsMock } from '@/features/about/mocks/about.mock'
import { mockApi } from '@/features/about/mocks/utils'
import type { AboutParagraph, AboutPersonalInfo, AboutSection } from '../models/AboutModels'

export const AboutRepository = {
  async getPersonalInfo(): Promise<AboutPersonalInfo> {
    return mockApi(aboutPersonalInfoMock)
  },
  async getAboutText(): Promise<AboutParagraph[]> {
    return mockApi(aboutTextMock)
  },
  async getSections(): Promise<AboutSection[]> {
    return mockApi(aboutSectionsMock)
  },
}
