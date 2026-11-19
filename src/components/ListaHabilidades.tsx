import type { Habilidade } from '../types'
import { Painel } from './Painel'
import { SeloNivel } from './SeloNivel'

type ListaHabilidadesProps = {
  habilidades: Habilidade[]
}

export function ListaHabilidades({ habilidades }: ListaHabilidadesProps) {
  return (
    <Painel titulo="Habilidades">
      <ul className="space-y-2">
        {habilidades.map((h) => (
          <li
            key={h.id}
            className="flex items-center justify-between rounded-lg bg-slate-100 p-3 text-slate-800"
          >
            <span>{h.nome}</span>
            <SeloNivel nivel={h.nivel} />
          </li>
        ))}
      </ul>
    </Painel>
  )
}
