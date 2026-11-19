import { Painel } from './Painel'

export function Sobre() {
  return (
    <Painel titulo="Sobre mim">
      <p className="leading-relaxed text-slate-700">
        Sou estudante de Análise e Desenvolvimento de Sistemas no IFTM e trabalho com suporte
        técnico e integrações. Gosto de entender como as coisas funcionam por baixo: comecei em C,
        com ponteiros e listas encadeadas, e agora estou aprendendo a construir interfaces com
        React, TypeScript e Tailwind.
      </p>
    </Painel>
  )
}
