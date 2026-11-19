import type { Projeto } from '../types'

type CardProjetoProps = {
  projeto: Projeto
}

export function CardProjeto({ projeto }: CardProjetoProps) {
  const { titulo, descricao, tecnologias, emAndamento, link } = projeto

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      {emAndamento && (
        <span className="mb-3 w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          em andamento
        </span>
      )}
      <h3 className="text-lg font-bold text-slate-800">{titulo}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-600">{descricao}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {tecnologias.map((t) => (
          <li key={t} className="rounded-md bg-brand/10 px-2 py-1 text-xs font-medium text-brand">
            {t}
          </li>
        ))}
      </ul>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 text-sm font-semibold text-brand underline hover:text-slate-800 focus:ring-4 focus:ring-sky-300"
        >
          Ver projeto →
        </a>
      )}
    </article>
  )
}
