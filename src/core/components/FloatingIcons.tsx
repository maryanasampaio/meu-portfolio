import { Code2, Database, Layers, Sparkles, Zap, Cpu, Terminal, Braces } from 'lucide-react'

export function FloatingIcons() {
  const icons = [
    { Icon: Code2, delay: '0s', duration: '20s', left: '10%', top: '20%' },
    { Icon: Database, delay: '2s', duration: '25s', left: '85%', top: '15%' },
    { Icon: Layers, delay: '4s', duration: '22s', left: '15%', top: '70%' },
    { Icon: Sparkles, delay: '1s', duration: '18s', left: '80%', top: '60%' },
    { Icon: Zap, delay: '3s', duration: '24s', left: '50%', top: '10%' },
    { Icon: Cpu, delay: '5s', duration: '26s', left: '70%', top: '80%' },
    { Icon: Terminal, delay: '2.5s', duration: '21s', left: '30%', top: '40%' },
    { Icon: Braces, delay: '4.5s', duration: '23s', left: '90%', top: '40%' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map(({ Icon, delay, duration, left, top }, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-[0.08]"
          style={{
            left,
            top,
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon className="w-16 h-16 text-primary" />
        </div>
      ))}
    </div>
  )
}
