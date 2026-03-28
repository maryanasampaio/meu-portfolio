import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PortfolioView } from '@/features/about/views/PortfolioView'
import { AppLayout } from '@/core/components/AppLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <PortfolioView /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
