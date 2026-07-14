# ✅ ToDo List — React

To-Do List desenvolvido em **React + Vite**, evoluído de um projeto de estudo para um app completo de produtividade: prioridades, prazos, progresso, tema claro/escuro, animações e reordenação por arrastar e soltar — tudo persistido localmente no navegador.

🔗 Deploy: [yurisouza-todo-list.vercel.app](https://todo-list-yurisouzadev.netlify.app/)

## ✨ Funcionalidades

- **CRUD de tarefas** — criar, editar (duplo clique) e remover
- **Marcar como concluída**, com barra de progresso animada
- **Filtros** — Todas / Pendentes / Concluídas
- **Prioridade** (baixa, média, alta) com cor própria
- **Data de entrega**, com destaque visual para tarefas atrasadas ou que vencem hoje
- **Drag-and-drop** para reordenar tarefas (disponível no filtro "Todas")
- **Tema claro/escuro**, persistido entre sessões
- **Animações** de entrada, saída e transição com Framer Motion
- **Persistência local** via `localStorage` — funciona 100% offline, sem backend

## 🛠️ Stack

| Camada          | Tecnologia                                       |
| --------------- | ------------------------------------------------- |
| UI              | React 18 + React Router                           |
| Build tool      | Vite                                               |
| Estado          | Context API + hooks customizados                  |
| Estilo          | CSS Modules + variáveis CSS (tema claro/escuro)    |
| Animações       | Framer Motion                                      |
| Drag-and-drop   | dnd-kit                                            |
| Ícones          | lucide-react                                       |
| Persistência    | Web Storage API (`localStorage`)                   |

## 🏗️ Arquitetura

```
src/
├── components/   # UI reutilizável (Botao, CampoTexto, ListaTarefas, ...)
├── constants/     # Enums de prioridade e filtro
├── contexts/       # AppContext + AppContextProvider (estado global)
├── hooks/            # useAppContext
├── layouts/            # LayoutPadrao (Cabecalho + Conteudo + Rodape)
├── pages/                # Inicial, SobreNos, NotFound
├── services/               # Camada de persistência (localStorage)
└── utils/                    # Geração de id, formatação de data
```

Cada componente tem seu próprio CSS Module e um `index.js` de barrel export, mantendo os imports limpos e a estrutura escalável.

## ▶️ Como rodar

Pré-requisitos: [Node.js](https://nodejs.org) 18+ instalado.

```bash
# 1. Instale as dependências
npm install

# 2. Rode em modo desenvolvimento
npm run dev
```

Acesse **http://localhost:5173**.

Outros comandos:

```bash
npm run build     # gera a build de produção em /dist
npm run preview   # serve a build de produção localmente
npm run lint       # roda o eslint
```

> Não é necessário rodar nenhum servidor separado — as tarefas são salvas no `localStorage` do navegador.

## 📌 Próximos passos (ideias de evolução)

- Sincronizar tarefas com um backend real (Firebase, Supabase ou API própria)
- Autenticação de usuário, com listas por conta
- Subtarefas / checklist dentro de cada tarefa
- Testes automatizados (Vitest + Testing Library)

---

Feito por **Yuri Souza**.
