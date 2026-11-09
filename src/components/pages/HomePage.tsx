import { Link } from '@tanstack/react-router'
import { AREAS } from '~/content/areas'
import { ARTICLES, formatDate } from '~/content/articles'
import { FAQ, HOW_IT_WORKS, SITE } from '~/content/site'
import { Faq } from '../Faq'
import { Photo } from '../Photo'
import { SeveranceChecker } from '../SeveranceChecker'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Seus direitos explicados antes de qualquer decisão.</h1>
            <p className="lead">
              Advocacia trabalhista, previdenciária e do consumidor em Belo Horizonte e online. Você entende o
              caso, os riscos e os prazos antes de assinar qualquer coisa.
            </p>
            <div className="ctas">
              <Link to="/contato" hash="consulta" className="btn btn--green btn--lg">
                Agendar consulta
              </Link>
              <a href="#verificador" className="btn btn--outline btn--lg">
                Conferir minha rescisão
              </a>
            </div>
          </div>
          <aside className="card-id" aria-label="Identificação do advogado">
            <div className="card-id-photo">
              <Photo k="retrato" eager />
            </div>
            <div className="card-id-body">
              <p className="card-id-name">{SITE.lawyer}</p>
              <p className="card-id-oab">{SITE.oab}</p>
              <ul>
                {AREAS.map((a) => (
                  <li key={a.slug}>{a.name}</li>
                ))}
              </ul>
              <p className="card-id-addr">
                {SITE.address.district}, {SITE.address.city}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--line">
        <div className="wrap">
          <h2 className="h2">Áreas de atuação</h2>
          <div className="areas">
            {AREAS.map((a) => (
              <Link key={a.slug} to="/areas" hash={a.slug} className="area">
                <h3>{a.name}</h3>
                <p>{a.summary}</p>
                <span className="area-more">Ver detalhes da área</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--green" id="verificador">
        <div className="wrap checker-wrap">
          <div>
            <h2 className="h2">O que entra no seu acerto?</h2>
            <p className="lead">
              Escolha como foi a sua saída e veja as verbas previstas na CLT. É um ponto de partida para
              conferir o termo de rescisão antes de assinar.
            </p>
          </div>
          <SeveranceChecker />
        </div>
      </section>

      <section className="section">
        <div className="wrap how">
          <div>
            <h2 className="h2">Como é o atendimento</h2>
            <ol className="how-list">
              {HOW_IT_WORKS.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="how-photo">
            <Photo k="reuniao" />
          </div>
        </div>
      </section>

      <section className="section section--line">
        <div className="wrap">
          <div className="head-row">
            <h2 className="h2">Artigos</h2>
            <Link to="/artigos" className="link">
              Todos os artigos
            </Link>
          </div>
          <div className="articles">
            {ARTICLES.map((a) => (
              <Link key={a.slug} to="/artigos/$slug" params={{ slug: a.slug }} className="article-card">
                <p className="article-meta">
                  {a.area} · {formatDate(a.date)}
                </p>
                <h3>{a.title}</h3>
                <p>{a.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap faq-wrap">
          <h2 className="h2">Perguntas frequentes</h2>
          <Faq items={FAQ} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="cta-band">
            <h2 className="h2">Tem um prazo correndo?</h2>
            <p>Ações trabalhistas prescrevem em 2 anos e recursos no INSS têm 30 dias. Fale comigo hoje.</p>
            <Link to="/contato" hash="consulta" className="btn btn--brass btn--lg">
              Agendar consulta
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
