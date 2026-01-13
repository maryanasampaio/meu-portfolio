export function SpotlightBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition duration-300"
      style={{
        background:
          'radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)',
      }}
    />
  )
}
