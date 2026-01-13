import { Outlet, Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'

type Props = { admin?: boolean }

export function AppLayout({ admin }: Props) {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b">
        <div className="container mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <Link to={admin ? '/admin' : '/'} className="font-semibold">
            {admin ? 'Admin' : 'Portfólio'}
          </Link>
          <nav className="flex gap-2">
            {admin ? (
              <>
                <NavItem to="/admin">Dashboard</NavItem>
                <NavItem to="/admin/agendamentos">Agendamentos</NavItem>
                <NavItem to="/admin/equipe">Equipe</NavItem>
                <NavItem to="/admin/servicos">Serviços</NavItem>
              </>
            ) : (
              <>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/sobre">Sobre</NavItem>
                <NavItem to="/projetos">Projetos</NavItem>
                <NavItem to="/tecnologias">Tecnologias</NavItem>
                <NavItem to="/contato">Contato</NavItem>
              </>
            )}
          </nav>
          <div className="flex gap-2">
            <ThemeToggle />
            <Button asChild variant="outline">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="container mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} • Seu Nome
        </div>
      </footer>
    </div>
  )
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'text-primary underline underline-offset-4' : 'text-muted-foreground hover:text-foreground'
      }
      end
    >
      <Button variant="ghost" asChild>
        <a>{children}</a>
      </Button>
    </NavLink>
  )
}

function ThemeToggle() {
  function toggle() {
    const el = document.documentElement
    const isDark = el.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }
  return (
    <Button variant="ghost" onClick={toggle}>
      Tema
    </Button>
  )
}
