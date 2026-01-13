import { Outlet, Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Github, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export function AppLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b sticky top-0 z-50 bg-background/80 backdrop-blur">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-bold text-xl hover:opacity-70 transition-opacity">
              MS
            </Link>
            <nav className="hidden md:flex gap-1">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/sobre">Sobre</NavItem>
              <NavItem to="/projetos">Projetos</NavItem>
              <NavItem to="/tecnologias">Tecnologias</NavItem>
              <NavItem to="/contato">Contato</NavItem>
            </nav>
            <div className="flex gap-2">
              <ThemeToggle />
              <Button asChild variant="ghost" size="sm">
                <a href="https://github.com/maryanasampaio" target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          <nav className="flex md:hidden gap-1 mt-3 overflow-x-auto">
            <NavItem to="/" mobile>
              Home
            </NavItem>
            <NavItem to="/sobre" mobile>
              Sobre
            </NavItem>
            <NavItem to="/projetos" mobile>
              Projetos
            </NavItem>
            <NavItem to="/tecnologias" mobile>
              Techs
            </NavItem>
            <NavItem to="/contato" mobile>
              Contato
            </NavItem>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Maryana Sampaio</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/maryanasampaio"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/maryanasampaio"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavItem({ to, children, mobile }: { to: string; children: React.ReactNode; mobile?: boolean }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'text-foreground font-medium'
          : 'text-muted-foreground hover:text-foreground transition-colors'
      }
      end
    >
      <Button variant="ghost" size={mobile ? 'sm' : 'default'} asChild>
        <span>{children}</span>
      </Button>
    </NavLink>
  )
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  function toggle() {
    const el = document.documentElement
    const willBeDark = !el.classList.contains('dark')
    el.classList.toggle('dark')
    setIsDark(willBeDark)
    localStorage.setItem('theme', willBeDark ? 'dark' : 'light')
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggle} aria-label="Alternar tema">
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </Button>
  )
}
