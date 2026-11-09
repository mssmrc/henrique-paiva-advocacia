import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ARTICLES, formatDate, getArticle } from '~/content/articles'
import { SITE } from '~/content/site'

export const Route = createFileRoute('/artigos/$slug')({
  loader: ({ params }) => {
    const article = getArticle(params.slug)
    if (!article) throw notFound()
    return article
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} · ${SITE.name}` },
          { name: 'description', content: loaderData.summary },
          { property: 'og:type', content: 'article' },
        ]
      : [],
  }),
  component: ArticlePage,
})

function ArticlePage() {
  const a = Route.useLoaderData()
  const others = ARTICLES.filter((x) => x.slug !== a.slug)

  return (
    <article className="section">
      <div className="wrap article">
        <Link to="/artigos" className="back">
          Todos os artigos
        </Link>
        <p className="article-meta">
          {a.area} · {formatDate(a.date)} · {a.readTime} de leitura
        </p>
        <h1 className="h1">{a.title}</h1>
        <p className="lead">{a.summary}</p>
        <div className="article-body">
          {a.body.map((b, i) => (
            <div key={i}>
              {b.heading && <h2>{b.heading}</h2>}
              <p>{b.text}</p>
            </div>
          ))}
        </div>
        <aside className="article-cta">
          <p>
            <b>Ficou com dúvida sobre o seu caso?</b> Cada situação tem detalhes que mudam o resultado.
          </p>
          <Link to="/contato" hash="consulta" className="btn btn--green">
            Falar com o advogado
          </Link>
        </aside>
        <p className="article-sign">
          Por {SITE.lawyer}, {SITE.oab}
        </p>
        <nav className="article-more" aria-label="Outros artigos">
          <h2>Leia também</h2>
          {others.map((o) => (
            <Link key={o.slug} to="/artigos/$slug" params={{ slug: o.slug }}>
              {o.title}
            </Link>
          ))}
        </nav>
      </div>
    </article>
  )
}
