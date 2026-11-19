import type { ReactNode } from 'react'

type PainelProps = {
  titulo: string
  children: ReactNode
}

export function Painel({ titulo, children }: PainelProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-brand">{titulo}</h2>
      {children}
    </section>
  )
}
