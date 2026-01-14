import { aboutPersonalInfoMock, aboutTextMock } from '@/features/about/mocks/about.mock'
import { mockApi } from '@/features/about/mocks/utils'
import type { AboutParagraph, AboutPersonalInfo } from '../models/AboutModels'
import type { Experience } from '../models/ExperienceModels'
import { experiencesMock } from '@/features/about/mocks/experiences.mock'
import type { Education } from '../models/EducationModels'
import { educationMock } from '@/features/about/mocks/education.mock'

export const AboutRepository = {
  async getPersonalInfo(): Promise<AboutPersonalInfo> {
    return mockApi(aboutPersonalInfoMock)
  },
  async getAboutText(): Promise<AboutParagraph[]> {
    return mockApi(aboutTextMock)
  },
  async getExperiences(): Promise<Experience[]> {
    return mockApi(experiencesMock)
  },
  async getEducation(): Promise<Education[]> {
    return mockApi(educationMock)
  },
}
