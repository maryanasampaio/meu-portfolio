import { HomeHeader } from '@/features/about/components/home/HomeHeader'
import { SkillsGrid } from '@/features/about/components/home/SkillsGrid'
import { StatsRow } from '@/features/about/components/home/StatsRow'
import { PageHeader } from '@/features/about/components/PageHeader'
import { ProfileImage } from '@/features/about/components/about/ProfileImage'
import { AboutParagraphs } from '@/features/about/components/about/AboutParagraphs'
import { ExperienceList } from '@/features/about/components/about/ExperienceList'
import { EducationList } from '@/features/about/components/about/EducationList'
import { SearchBar } from '@/features/about/components/projects/SearchBar'
import { FiltersBar } from '@/features/about/components/projects/FiltersBar'
import { ProjectCard } from '@/features/about/components/projects/ProjectCard'
import { EmptyState } from '@/features/about/components/projects/EmptyState'
import { ContactList } from '@/features/about/components/contact/ContactList'
import { useHomeViewModel } from '../viewmodel/HomeViewModel'
import { useAboutViewModel } from '../viewmodel/AboutViewModel'
import { useProjectsViewModel } from '../viewmodel/ProjectsViewModel'
import { useContactViewModel } from '../viewmodel/ContactViewModel'

export function PortfolioView() {
  const homeVM = useHomeViewModel()
  const aboutVM = useAboutViewModel()
  const projectsVM = useProjectsViewModel()
  const contactVM = useContactViewModel()

  const isLoading = homeVM.isLoading || aboutVM.isLoading || projectsVM.isLoading || contactVM.isLoading

  return isLoading ? (
    <section className="py-20">
      <div className="max-w-4xl">
        <div className="h-8 w-64 bg-muted rounded mb-4 animate-pulse" />
        <div className="h-5 w-80 bg-muted rounded mb-2 animate-pulse" />
        <div className="h-4 w-full max-w-xl bg-muted rounded mb-6 animate-pulse" />
      </div>
    </section>
  ) : (
    <div className="pb-24 relative">
       <section id="home" className="pt-8 md:pt-12 pb-12 scroll-mt-20">
        <div className="max-w-4xl w-full">
          {homeVM.personalInfo && (
            <>
              <HomeHeader personalInfo={homeVM.personalInfo} onNavigateToProjects={homeVM.handleNavigateToProjects} />
              <SkillsGrid skills={homeVM.skills} />
              <StatsRow stats={homeVM.stats} />
            </>
          )}
        </div>
      </section>

       <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/50"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-6 text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"></span>
            •••
            <span className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
          </span>
        </div>
      </div>

      {/* About Section */}
      <section id="sobre" className="py-8 scroll-mt-20 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div>
            <PageHeader title="Sobre" />
            {aboutVM.personalInfo && (
              <div className="flex flex-col md:flex-row gap-8 items-start mt-8">
                <ProfileImage src={aboutVM.personalInfo.profileImage} alt={aboutVM.personalInfo.name} />
                <AboutParagraphs paragraphs={aboutVM.aboutText} />
              </div>
            )}
          </div>

          <div className="border-t border-border/30 pt-8">
            <PageHeader title="Experiência Profissional" />
            <div className="mt-8">
              <ExperienceList experiences={aboutVM.experiences} />
            </div>
          </div>

          <div className="border-t border-border/30 pt-8">
            <PageHeader title="Formação Acadêmica" />
            <div className="mt-8">
              <EducationList items={aboutVM.education} />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/50"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-4 text-sm text-muted-foreground">•••</span>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projetos" className="py-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <PageHeader title="Projetos em Destaque" description="Trabalhos recentes que demonstram minhas habilidades técnicas" />

          <div className="space-y-4">
            <SearchBar value={projectsVM.searchTerm} onChange={projectsVM.setSearchTerm} />
            <FiltersBar filters={projectsVM.filters} selectedFilter={projectsVM.selectedFilter} onSelect={projectsVM.setSelectedFilter} />
          </div>

          {projectsVM.filteredProjects.length === 0 && <EmptyState />}

          <div className="grid lg:grid-cols-2 gap-8">
            {projectsVM.filteredProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/50"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-4 text-sm text-muted-foreground">•••</span>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contato" className="py-8 scroll-mt-20">
        <div className="max-w-3xl mx-auto space-y-8">
          {contactVM.pageInfo && (
            <>
              <PageHeader title={contactVM.pageInfo.title} description={contactVM.pageInfo.description} />
              <ContactList contacts={contactVM.contacts} />
            </>
          )}
        </div>
      </section>
    </div>
  )
}
