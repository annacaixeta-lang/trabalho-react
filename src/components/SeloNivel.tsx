import type { Nivel } from '../types'

type SeloNivelProps = {
  nivel: Nivel
}

const ESTILOS: Record<Nivel, string> = {
  básico: 'bg-sky-100 text-sky-800',
  intermediário: 'bg-amber-100 text-amber-800',
  avançado: 'bg-emerald-100 text-emerald-800',
}

export function SeloNivel({ nivel }: SeloNivelProps) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${ESTILOS[nivel]}`}>
      {nivel}
    </span>
  )
}
