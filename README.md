# Meu Portfólio em React

Atividade 1 de **Tecnologias para Interfaces de Aplicações Web** (ADS · IFTM Uberaba Parque Tecnológico).
Página de apresentação feita com **React 19 + TypeScript + Tailwind CSS v4 + Vite**.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).
Para conferir os tipos e gerar a versão final: `npm run build`.

Requer Node.js instalado.

## Componentes (`src/components`)

| Componente | O que faz |
|---|---|
| `Cabecalho` | Mostra nome, curso e foto; se não houver `avatarUrl`, mostra a inicial do nome. |
| `Painel` | Caixa com título que embrulha qualquer conteúdo usando `children`. |
| `Sobre` | Texto de apresentação, dentro de um `Painel`. |
| `ListaHabilidades` | Lista de habilidades vinda de um array tipado, com `.map()` e `key`. |
| `SeloNivel` | Selo colorido com o nível da habilidade (básico, intermediário ou avançado). |
| `GradeProjetos` | Grade responsiva: 1 coluna no celular, 2 no tablet e 3 no desktop. |
| `CardProjeto` | Card com efeito de hover; o selo "em andamento" e o link só aparecem quando existem. |
| `Contato` | Lista de contatos e redes. |
| `Rodape` | Mostra o ano atual e os créditos. |

Os tipos ficam em `src/types.ts` e os dados em `src/data/portfolio.ts`.

## Print da aplicação

(adicionar print aqui)
