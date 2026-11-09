# AGENTS.md — Guia obrigatório para agentes de IA

> Vale para Cline, Antigravity, Claude, Gemini, DeepSeek e qualquer outro agente.
> **Leia este arquivo inteiro antes de alterar o código.** Detalhes em `docs/`.

---

## 1. O que é o projeto

1. Site **demonstrativo (case de portfólio)** de **Henrique Paiva Advocacia**, advogado autônomo **fictício(a)**.
2. Desenvolvido pela **Runa Web**. O crédito "Desenvolvido por Runa Web" fica no rodapé e **não deve ser removido**.
3. Não há banco de dados, login nem pagamento. O pedido de consulta monta uma mensagem e abre o WhatsApp do visitante.
4. Nomes, telefones, e-mails, endereços, preços e depoimentos são **placeholders**.

**Páginas:** Início (`/`), Áreas de atuação (`/areas`), Sobre (`/sobre`), Artigos (`/artigos`), Artigo (`/artigos/:slug`), Contato (`/contato`), Política de privacidade (`/privacidade`).

---

## 2. Stack

| Camada     | Tecnologia                                            |
| ---------- | ----------------------------------------------------- |
| Framework  | **TanStack Start** (React 19 + TanStack Router, SSR)  |
| Build      | **Vite 8**                                            |
| Hospedagem | **Cloudflare Workers** (deploy com `wrangler`)        |
| Estilo     | **Tailwind v4** + CSS de componentes em `src/styles/` |
| Testes     | **Vitest** · Qualidade: ESLint + Prettier             |

---

## 3. Comandos

```bash
npm install            # instalar dependências (uma vez)
npm run images:baixar  # baixar as fotos placeholder do Unsplash (uma vez)
npm run images:prompts # regenerar public/images/PROMPTS-IA.md após mudar images.json
npm run dev            # site local em http://localhost:3000
npm run check          # typecheck + lint + testes  ← RODE SEMPRE ANTES DE TERMINAR
npm run build          # build de produção
npm run deploy         # build + publicar no Cloudflare
```

---

## 4. Mapa de pastas

```
src/
├── routes/                 PÁGINAS (cada arquivo = uma URL)
│   ├── __root.tsx          layout geral (cabeçalho, rodapé, fontes)
│   ├── index.tsx             /  conteúdo em components/pages/HomePage.tsx
│   ├── areas.tsx             /areas
│   ├── sobre.tsx             /sobre
│   ├── artigos/index.tsx     /artigos
│   ├── artigos/$slug.tsx     /artigos/:slug  404 se o slug não existir
│   ├── contato.tsx           /contato  aceita ?area=
│   ├── privacidade.tsx       /privacidade
├── components/             peças reutilizáveis (Header, Footer, Logo, Photo, Faq, SeveranceChecker, ContactForm…)
├── content/                TEXTOS E DADOS (site.ts, areas.ts, articles.ts, legal.ts, images.json)
├── lib/                    regras puras (whatsapp.ts, severance.ts (regras de verbas rescisórias))
├── styles/ + styles.css    estilos (cores em styles/base.css → :root)
├── server.ts               entrada do Worker (cabeçalhos de segurança e CSP)
└── test/                   testes automáticos
scripts/                    baixar-imagens.mjs · gerar-prompts.mjs
public/                     imagens, favicon, robots.txt
docs/                       especificação e deploy
```

---

## 5. Regras de ouro

| #   | Regra                                                                                   | Por quê                                     |
| --- | --------------------------------------------------------------------------------------- | ------------------------------------------- |
| 1   | **Não remova o crédito "Desenvolvido por Runa Web"** nem o aviso de site demonstrativo. | É um case de portfólio.                     |
| 2   | **Textos e dados ficam em `src/content/`**, não espalhados nas páginas.                 | Trocar o cliente = editar só essa pasta.    |
| 3   | **Imagens: lista única em `src/content/images.json`.** Use `<Photo k="nome" />`.        | O script e os prompts leem o mesmo arquivo. |
| 4   | **Cores e fontes só pelas variáveis CSS** de `src/styles/base.css`.                     | Mudar a identidade em um lugar só.          |
| 5   | **Novo domínio externo** (script, iframe, API) → inclua na CSP em `src/server.ts`.      | Senão o navegador bloqueia.                 |
| 6   | **Nunca `dangerouslySetInnerHTML`.**                                                    | Evita XSS.                                  |
| 7   | **Rode `npm run check` antes de concluir.**                                             | É a rede de segurança do projeto.           |

---

## 6. Convenções

- Textos de interface em **português do Brasil**; variáveis, funções e arquivos em **inglês**.
- Siga o Provimento 205/2021 da OAB: publicidade só informativa, **sem preços, sem promessa de resultado e sem depoimentos de clientes**. Não adicione esses elementos mesmo que outros cases tenham.
- Commits pequenos, em português, dizendo o que mudou e por quê.

---

## 7. Receitas rápidas

- **Publicar um artigo:** adicione um item em `ARTICLES` (`src/content/articles.ts`) com `slug` único. A lista e a página do artigo se atualizam sozinhas.
- **Ajustar o verificador de rescisão:** regras em `src/lib/severance.ts`; testes em `src/test/severance.test.ts`.
- **Trocar nome, OAB, contatos:** `SITE` em `src/content/site.ts`.
- **Trocar uma foto:** salve o arquivo novo em `public/` com o mesmo nome (veja `public/images/LEIA-ME.md`).
- **Mudar cores:** variáveis do `:root` em `src/styles/base.css`.
