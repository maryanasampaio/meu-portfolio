export function Contact() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Contato</h2>
      <ul className="space-y-2 text-sm">
        <li>
          Email: <a className="underline underline-offset-4" href="mailto:email@exemplo.com">email@exemplo.com</a>
        </li>
        <li>
          LinkedIn: <a className="underline underline-offset-4" href="#" target="_blank" rel="noreferrer">/in/seu-perfil</a>
        </li>
        <li>
          GitHub: <a className="underline underline-offset-4" href="#" target="_blank" rel="noreferrer">github.com/seuusuario</a>
        </li>
      </ul>
    </section>
  )
}
