export function Projects() {
  const items = [
    {
      name: 'Sistema de Agendamento',
      desc: 'API REST com autenticação, CRUD completo, regras de negócio e frontend simples.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'React'],
      github: '#',
      demo: '#',
    },
  ]
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Projetos</h2>
      <ul className="grid sm:grid-cols-2 gap-4">
        {items.map((p) => (
          <li key={p.name} className="rounded-md border p-4">
            <h3 className="font-medium">{p.name}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
            <div className="text-xs mt-2">{p.tech.join(' · ')}</div>
            <div className="mt-3 flex gap-3 text-sm">
              <a className="underline underline-offset-4" href={p.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="underline underline-offset-4" href={p.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
