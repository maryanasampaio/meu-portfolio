import { useAboutViewModel } from '../viewmodel/AboutViewModel'
import { PageHeader } from '@/features/about/components/PageHeader'
import { ProfileImage } from '@/features/about/components/about/ProfileImage'
import { AboutParagraphs } from '@/features/about/components/about/AboutParagraphs'
import { SectionsGrid } from '@/features/about/components/about/SectionsGrid'
import { ExperienceList } from '@/features/about/components/about/ExperienceList'
import { EducationList } from '@/features/about/components/about/EducationList'

export function AboutView() {
  const viewModel = useAboutViewModel()

  return (
    viewModel.isLoading || !viewModel.personalInfo ? (
      <section className="py-20 justify-center items-center flex">
        <div className="max-w-4xl w-full">
          <div className="h-8 w-48 bg-muted rounded mb-6 animate-pulse" />
          <div className="h-40 w-full bg-muted rounded animate-pulse" />
        </div>
      </section>
    ) : (
    <section className="py-20 justify-center items-center flex">
      <div className="max-w-4xl space-y-16">
        <div>
          <PageHeader title="Sobre" />
          <div className="flex flex-col md:flex-row gap-8 items-start mt-8">
            <ProfileImage src={viewModel.personalInfo.profileImage} alt={viewModel.personalInfo.name} />
            <AboutParagraphs paragraphs={viewModel.aboutText} />
          </div>
        </div>

        <div className="border-t pt-12">
          <PageHeader title="Experiência Profissional" />
          <div className="mt-8">
            <ExperienceList experiences={viewModel.experiences} />
          </div>
        </div>

        <div className="border-t pt-12">
          <PageHeader title="Formação Acadêmica" />
          <div className="mt-8">
            <EducationList items={viewModel.education} />
          </div>
        </div>

        <div className="border-t pt-12">
          <SectionsGrid sections={viewModel.sections} />
        </div>
      </div>
    </section>
    )
  )
}
