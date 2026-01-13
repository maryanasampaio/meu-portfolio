import { useState, useMemo, useEffect } from 'react'
import type { Project } from '../models/ProjectsModels'
import { ProjectsRepository } from '../repository/ProjectsRepository'

export function useProjectsViewModel() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    let mounted = true
    ;(async () => {
      const data = await ProjectsRepository.getProjects()
      if (mounted) {
        setProjects(data)
        setIsLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos')

  const allTechs = useMemo(
    () => [...new Set(projects.flatMap((p) => p.technologies))].sort(),
    [projects]
  )

  const filters = useMemo(() => ['Todos', ...allTechs], [allTechs])

  const filteredProjects = useMemo(() =>
    projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesFilter = selectedFilter === 'Todos' || project.technologies.includes(selectedFilter)

      return matchesSearch && matchesFilter
    }),
    [projects, searchTerm, selectedFilter]
  )

  return {
    searchTerm,
    setSearchTerm,
    selectedFilter,
    setSelectedFilter,
    filters,
    filteredProjects,
    isLoading
  }
}
