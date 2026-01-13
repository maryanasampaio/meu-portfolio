export function Technologies() {
  const tech = {
    Linguagens: ['JavaScript', 'TypeScript', 'PHP'],
    Backend: ['Node.js', 'Laravel', 'NestJS'],
    Frontend: ['React', 'Tailwind CSS'],
    Banco: ['PostgreSQL', 'MySQL'],
    Outros: ['Git', 'Docker', 'REST APIs'],
  }
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Tecnologias</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {Object.entries(tech).map(([group, items]) => (
          <div key={group} className="rounded-md border p-4">
            <h3 className="font-medium">{group}</h3>
            <div className="mt-2 text-sm text-muted-foreground">{items.join(' · ')}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
