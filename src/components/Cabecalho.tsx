type CabecalhoProps = {
  nome: string
  curso: string
  instituicao: string
  periodo: number
  cidade: string
  avatarUrl?: string
}

export function Cabecalho({ nome, curso, instituicao, periodo, cidade, avatarUrl }: CabecalhoProps) {
  return (
    <header className="bg-brand text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-12 text-center sm:flex-row sm:text-left">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={`Foto de ${nome}`}
            className="size-28 rounded-full border-4 border-white/60 object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex size-28 items-center justify-center rounded-full border-4 border-white/60 bg-white/20 text-5xl font-bold"
          >
            {nome.charAt(0)}
          </div>
        )}
        <div>
          <h1 className="text-4xl font-bold">{nome}</h1>
          <p className="mt-1 text-lg">
            {curso} · {periodo}º período
          </p>
          <p className="text-sm text-white/80">
            {instituicao} · {cidade}
          </p>
        </div>
      </div>
    </header>
  )
}
