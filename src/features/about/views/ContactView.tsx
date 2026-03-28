import { PageHeader } from '@/features/about/components/PageHeader'
import { ContactList } from '@/features/about/components/contact/ContactList'
import { useContactViewModel } from '../viewmodel/ContactViewModel'

export function ContactView() {
  const viewModel = useContactViewModel()

  return (
    viewModel.isLoading || !viewModel.pageInfo ? (
      <section className="py-20">
        <div className="max-w-3xl">
          <div className="h-8 w-40 bg-muted rounded mb-3 animate-pulse" />
          <div className="h-4 w-96 bg-muted rounded animate-pulse" />
        </div>
      </section>
    ) : (
    <section className="py-20">
      <div className="max-w-3xl space-y-12">
        <PageHeader title={viewModel.pageInfo.title} description={viewModel.pageInfo.description} />
        <ContactList contacts={viewModel.contacts} />
      </div>
    </section>
    )
  )
}


