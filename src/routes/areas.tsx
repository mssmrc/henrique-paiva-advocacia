import { Link, createFileRoute } from '@tanstack/react-router'
import { Photo } from '~/components/Photo'
import { AREAS } from '~/content/areas'
import { SITE } from '~/content/site'

export const Route = createFileRoute('/areas')({
  head: () => ({
    meta: [
      { title: `Áreas de atuação · ${SITE.name}` },
      {
        name: 'description',
        content:
          'Direito do trabalho, previdenciário (INSS) e do consumidor. Veja os temas atendidos e os documentos para a consulta.',
      },
    ],
  }),
  component: AreasPage,
})

function AreasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1 className="h1">Áreas de atuação</h1>
          <p className="lead">
            O que eu atendo em cada área e quais documentos separar para a primeira consulta.
          </p>
          <nav className="jump" aria-label="Ir para a área">
            {AREAS.map((a) => (
              <a key={a.slug} href={`#${a.slug}`}>
                {a.name}
              </a>
            ))}
          </nav>
        </div>
      </section>
      {AREAS.map((a, i) => (
        <section key={a.slug} id={a.slug} className={`section area-detail${i % 2 ? ' section--line' : ''}`}>
          <div className="wrap area-grid">
            <div className="area-photo">
              <Photo k={a.image} />
            </div>
            <div>
              <h2 className="h2">{a.name}</h2>
              <p className="lead">{a.intro}</p>
              <div className="area-cols">
                <div>
                  <h3>Temas atendidos</h3>
                  <ul className="dash">
                    {a.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Leve para a consulta</h3>
                  <ul className="dash">
                    {a.documents.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link to="/contato" search={{ area: a.name }} hash="consulta" className="btn btn--green">
                Falar sobre {a.name.replace('Direito ', '').toLowerCase()}
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
