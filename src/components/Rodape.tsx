type RodapeProps = {
  nome: string
}

export function Rodape({ nome }: RodapeProps) {
  return (
    <footer className="mt-12 border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {nome} · Feito com React, TypeScript e Tailwind CSS
    </footer>
  )
}
