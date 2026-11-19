import type { Contato, Habilidade, Projeto } from '../types'

export const perfil = {
  nome: 'Anna',
  curso: 'Análise e Desenvolvimento de Sistemas',
  instituicao: 'IFTM · Uberaba Parque Tecnológico',
  periodo: 3,
  cidade: 'Uberaba, MG',
  avatarUrl: undefined as string | undefined,
}

export const habilidades: Habilidade[] = [
  { id: 1, nome: 'Linguagem C', nivel: 'intermediário' },
  { id: 2, nome: 'JavaScript', nivel: 'básico' },
  { id: 3, nome: 'React', nivel: 'básico' },
  { id: 4, nome: 'TypeScript', nivel: 'básico' },
  { id: 5, nome: 'Tailwind CSS', nivel: 'básico' },
  { id: 6, nome: 'Banco de Dados', nivel: 'intermediário' },
  { id: 7, nome: 'APIs e integrações', nivel: 'intermediário' },
  { id: 8, nome: 'Suporte técnico', nivel: 'avançado' },
]

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: 'Rastreador de Exposição à Radiação',
    descricao:
      'Aplicação web do projeto de Extensão III para registrar e acompanhar a exposição à radiação.',
    tecnologias: ['React', 'TypeScript', 'Tailwind'],
    emAndamento: true,
  },
  {
    id: 2,
    titulo: 'Integrações via API',
    descricao:
      'Automações e integrações entre sistemas de clientes, feitas no dia a dia do suporte técnico.',
    tecnologias: ['APIs REST', 'JSON', 'Automação'],
    emAndamento: false,
  },
  {
    id: 3,
    titulo: 'Estruturas de Dados em C',
    descricao:
      'Exercícios de listas encadeadas, ponteiros, structs e recursão desenvolvidos na faculdade.',
    tecnologias: ['C', 'Ponteiros', 'Listas encadeadas'],
    emAndamento: false,
    link: 'https://github.com/annacaixeta-lang',
  },
]

export const contatos: Contato[] = [
  {
    id: 1,
    rotulo: 'GitHub',
    valor: 'github.com/annacaixeta-lang',
    href: 'https://github.com/annacaixeta-lang',
  },
]
