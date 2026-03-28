 import { contactsMock, contactsPageInfoMock } from '@/features/about/mocks/contacts.mock'
import { mockApi } from '@/features/about/mocks/utils'
import type { Contact, PageInfo } from '../models/ContactModels'

export const ContactRepository = {
  async getContacts(): Promise<Contact[]> {
    return mockApi(contactsMock)
  },
  async getPageInfo(): Promise<PageInfo> {
    return mockApi(contactsPageInfoMock)
  },
}
