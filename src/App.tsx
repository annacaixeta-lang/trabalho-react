import { Cabecalho } from './components/Cabecalho'
import { Contato } from './components/Contato'
import { GradeProjetos } from './components/GradeProjetos'
import { ListaHabilidades } from './components/ListaHabilidades'
import { Rodape } from './components/Rodape'
import { Sobre } from './components/Sobre'
import { contatos, habilidades, perfil, projetos } from './data/portfolio'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Cabecalho {...perfil} />

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
        <div className="grid items-start gap-6 md:grid-cols-2">
          <Sobre />
          <ListaHabilidades habilidades={habilidades} />
        </div>
        <GradeProjetos projetos={projetos} />
        <Contato contatos={contatos} />
      </main>

      <Rodape nome={perfil.nome} />
    </div>
  )
}
