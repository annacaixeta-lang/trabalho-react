export type Nivel = 'básico' | 'intermediário' | 'avançado'

export type Habilidade = {
  id: number
  nome: string
  nivel: Nivel
}

export type Projeto = {
  id: number
  titulo: string
  descricao: string
  tecnologias: string[]
  emAndamento: boolean
  link?: string
}

export type Contato = {
  id: number
  rotulo: string
  valor: string
  href: string
}
