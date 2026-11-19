import type { Projeto } from '../types'
import { CardProjeto } from './CardProjeto'

type GradeProjetosProps = {
  projetos: Projeto[]
}

export function GradeProjetos({ projetos }: GradeProjetosProps) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-brand">Projetos</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projetos.map((p) => (
          <CardProjeto key={p.id} projeto={p} />
        ))}
      </div>
    </section>
  )
}
