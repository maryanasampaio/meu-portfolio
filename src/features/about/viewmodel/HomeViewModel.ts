import { useEffect, useState } from 'react'
import type { PersonalInfo, Skill, Stat } from '../models/HomeModels'
import { HomeRepository } from '../repository/HomeRepository'

export function useHomeViewModel() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null)
  const [skills, setSkills] = useState<Skill[]>([])
  const [stats, setStats] = useState<Stat[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const [info, skillsData, statsData] = await Promise.all([
        HomeRepository.getPersonalInfo(),
        HomeRepository.getSkills(),
        HomeRepository.getStats(),
      ])
      if (mounted) {
        setPersonalInfo(info)
        setSkills(skillsData)
        setStats(statsData)
        setIsLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  const handleNavigateToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    document
      .querySelector('[href="/projetos"]')
      ?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  }

  return {
    personalInfo,
    skills,
    stats,
    isLoading,
    handleNavigateToProjects,
  }
}
