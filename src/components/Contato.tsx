import type { Contato as ContatoTipo } from '../types'
import { Painel } from './Painel'

type ContatoProps = {
  contatos: ContatoTipo[]
}

export function Contato({ contatos }: ContatoProps) {
  return (
    <Painel titulo="Contato">
      <ul className="space-y-2">
        {contatos.map((c) => (
          <li key={c.id} className="text-slate-700">
            <span className="font-semibold">{c.rotulo}: </span>
            <a href={c.href} className="text-brand underline hover:text-slate-900">
              {c.valor}
            </a>
          </li>
        ))}
      </ul>
    </Painel>
  )
}
