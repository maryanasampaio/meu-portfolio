import * as React from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const mode = stored ?? (prefersDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', mode === 'dark')
  }, [])
  return <>{children}</>
}
