import { Outlet, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Github, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'
import { SpotlightBackground } from '@/core/components/SpotlightBackground'
import { FloatingIcons } from '@/core/components/FloatingIcons'

export function AppLayout() {
  return (
    <div className="min-h-dvh flex flex-col relative group/spotlight">
      <SpotlightBackground />
      <FloatingIcons />
      <header className="border-b sticky top-0 z-50 bg-background/80 backdrop-blur">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="font-bold text-xl hover:opacity-70 transition-opacity">
              MS
            </a>
            <nav className="hidden md:flex gap-1">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#sobre">Sobre</NavItem>
              <NavItem href="#projetos">Projetos</NavItem>
              <NavItem href="#contato">Contato</NavItem>
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
            <NavItem href="#home" mobile>
              Home
            </NavItem>
            <NavItem href="#sobre" mobile>
              Sobre
            </NavItem>
            <NavItem href="#projetos" mobile>
              Projetos
            </NavItem>
            <NavItem href="#contato" mobile>
              Contato
            </NavItem>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto max-w-6xl px-4 py-8 selection:bg-teal-300 selection:text-teal-900">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()}{' '}
              <span className="animate-gradient bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-200 dark:to-white bg-clip-text text-transparent font-semibold" style={{ backgroundSize: '200% 200%' }}>
                Maryana Sampaio
              </span>
            </p>
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

function NavItem({ href, children, mobile }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      <Button variant="ghost" size={mobile ? 'sm' : 'default'} asChild>
        <span>{children}</span>
      </Button>
    </a>
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
