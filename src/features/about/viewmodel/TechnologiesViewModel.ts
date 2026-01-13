import { useEffect, useState } from 'react'
 import { TechnologiesRepository } from '../repository/TechnologiesRepository'
import type { PageInfo, TechnologyGroup } from '../models/TechnologiesModels'

export function useTechnologiesViewModel() {
  const [technologies, setTechnologies] = useState<TechnologyGroup[]>([])
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const [tech, info] = await Promise.all([
        TechnologiesRepository.getTechnologies(),
        TechnologiesRepository.getPageInfo(),
      ])
      if (mounted) {
        setTechnologies(tech)
        setPageInfo(info)
        setIsLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  return {
    technologies,
    pageInfo,
    isLoading,
  }
}
