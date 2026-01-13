import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '@/pages/client/Home'
import { About } from '@/pages/client/About'
import { Projects } from '@/pages/client/Projects'
import { Technologies } from '@/pages/client/Technologies'
import { Contact } from '@/pages/client/Contact'
import { AdminDashboard } from '@/pages/admin/Dashboard'
import { AdminScheduling } from '@/pages/admin/Scheduling'
import { AdminStaff } from '@/pages/admin/Staff'
import { AdminServices } from '@/pages/admin/Services'
import { AppLayout } from '@/core/components/AppLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <About /> },
      { path: 'projetos', element: <Projects /> },
      { path: 'tecnologias', element: <Technologies /> },
      { path: 'contato', element: <Contact /> },
    ],
  },
  {
    path: '/admin',
    element: <AppLayout admin />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: 'agendamentos', element: <AdminScheduling /> },
      { path: 'equipe', element: <AdminStaff /> },
      { path: 'servicos', element: <AdminServices /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
