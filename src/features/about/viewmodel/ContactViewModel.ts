import { useEffect, useState } from 'react'
import type { Contact, PageInfo } from '../models/ContactModels'
import { ContactRepository } from '../repository/ContactRepository'

export function useContactViewModel() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const [cts, info] = await Promise.all([
        ContactRepository.getContacts(),
        ContactRepository.getPageInfo(),
      ])
      if (mounted) {
        setContacts(cts)
        setPageInfo(info)
        setIsLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  return {
    contacts,
    pageInfo,
    isLoading,
  }
}
