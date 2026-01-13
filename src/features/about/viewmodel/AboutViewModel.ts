import { useEffect, useState } from 'react'
import type { AboutPersonalInfo, AboutParagraph, AboutSection } from '../models/AboutModels'
import { AboutRepository } from '../repository/AboutRepository'

export function useAboutViewModel() {
  const [personalInfo, setPersonalInfo] = useState<AboutPersonalInfo | null>(null)
  const [aboutText, setAboutText] = useState<AboutParagraph[]>([])
  const [sections, setSections] = useState<AboutSection[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const [info, text, sect] = await Promise.all([
        AboutRepository.getPersonalInfo(),
        AboutRepository.getAboutText(),
        AboutRepository.getSections(),
      ])
      if (mounted) {
        setPersonalInfo(info)
        setAboutText(text)
        setSections(sect)
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
    isLoading,
  }
}
