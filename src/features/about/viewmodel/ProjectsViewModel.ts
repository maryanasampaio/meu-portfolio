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
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos')

  const categories = useMemo(
    () => ['Todos', ...new Set(projects.map((p) => p.category))],
    [projects]
  )

  const allowedTechs = ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'Java', 'Spring Boot', 'PHP', 'Laravel', 'Node.js', 'REST API', 'MySQL', 'JWT', 'MVC']

  const projectsByCategory = useMemo(
    () => selectedCategory === 'Todos' ? projects : projects.filter((p) => p.category === selectedCategory),
    [projects, selectedCategory]
  )

  const allTechs = useMemo(
    () => [...new Set(projectsByCategory.flatMap((p) => p.technologies))].filter(tech => allowedTechs.includes(tech)).sort(),
    [projectsByCategory]
  )

  const filters = useMemo(() => ['Todos', ...allTechs], [allTechs])

  const filteredProjects = useMemo(() =>
    projectsByCategory.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesFilter = selectedFilter === 'Todos' || project.technologies.includes(selectedFilter)

      return matchesSearch && matchesFilter
    }),
    [projectsByCategory, searchTerm, selectedFilter]
  )

  function handleCategoryChange(category: string) {
    setSelectedCategory(category)
    setSelectedFilter('Todos')
  }

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory: handleCategoryChange,
    categories,
    selectedFilter,
    setSelectedFilter,
    filters,
    filteredProjects,
    isLoading
  }
}
