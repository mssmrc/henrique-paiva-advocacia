import { Link, createFileRoute } from '@tanstack/react-router'
import { ARTICLES, formatDate } from '~/content/articles'
import { SITE } from '~/content/site'

export const Route = createFileRoute('/artigos/')({
  head: () => ({
    meta: [
      { title: `Artigos · ${SITE.name}` },
      {
        name: 'description',
        content: 'Textos curtos sobre direitos trabalhistas, previdenciários e do consumidor.',
      },
    ],
  }),
  component: ArticlesPage,
})

function ArticlesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1 className="h1">Artigos</h1>
          <p className="lead">
            Textos curtos para entender seus direitos. Eles não substituem a análise do seu caso.
          </p>
        </div>
      </section>
      <section className="section section--flush">
        <div className="wrap article-list">
          {ARTICLES.map((a) => (
            <Link key={a.slug} to="/artigos/$slug" params={{ slug: a.slug }} className="article-row">
              <p className="article-meta">
                {a.area} · {formatDate(a.date)} · {a.readTime} de leitura
              </p>
              <h2>{a.title}</h2>
              <p>{a.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
