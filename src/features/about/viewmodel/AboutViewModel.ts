import { useEffect, useState } from 'react'
import type { AboutPersonalInfo, AboutParagraph, AboutSection } from '../models/AboutModels'
import type { Experience } from '../models/ExperienceModels'
import type { Education } from '../models/EducationModels'
import { AboutRepository } from '../repository/AboutRepository'

export function useAboutViewModel() {
  const [personalInfo, setPersonalInfo] = useState<AboutPersonalInfo | null>(null)
  const [aboutText, setAboutText] = useState<AboutParagraph[]>([])
  const [sections, setSections] = useState<AboutSection[]>([])
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [education, setEducation] = useState<Education[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const [info, text, sect, exp, edu] = await Promise.all([
        AboutRepository.getPersonalInfo(),
        AboutRepository.getAboutText(),
        AboutRepository.getSections(),
        AboutRepository.getExperiences(),
        AboutRepository.getEducation(),
      ])
      if (mounted) {
        setPersonalInfo(info)
        setAboutText(text)
        setSections(sect)
        setExperiences(exp)
        setEducation(edu)
        setIsLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  return {
    personalInfo,
    aboutText,
    sections,
    experiences,
    education,
    isLoading,
  }
}
