import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeView } from '@/features/home/views/HomeView'
import { AboutView } from '@/features/about/views/AboutView'
import { ProjectsView } from '@/features/projects/views/ProjectsView'
import { TechnologiesView } from '@/features/technologies/views/TechnologiesView'
import { ContactView } from '@/features/contact/views/ContactView'
import { AppLayout } from '@/core/components/AppLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomeView /> },
      { path: 'sobre', element: <AboutView /> },
      { path: 'projetos', element: <ProjectsView /> },
      { path: 'tecnologias', element: <TechnologiesView /> },
      { path: 'contato', element: <ContactView /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
