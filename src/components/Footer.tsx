import { Link } from '@tanstack/react-router'
import { AREAS } from '~/content/areas'
import { DEMO_NOTICE, DEV_CREDIT, SITE } from '~/content/site'
import { whatsappLink } from '~/lib/whatsapp'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo light />
          <p className="footer-tag">{SITE.tagline}</p>
        </div>
        <nav aria-label="Áreas">
          <h2>Áreas</h2>
          {AREAS.map((a) => (
            <Link key={a.slug} to="/areas" hash={a.slug}>
              {a.name}
            </Link>
          ))}
          <Link to="/artigos">Artigos</Link>
        </nav>
        <div>
          <h2>Escritório</h2>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.district}, {SITE.address.city}
          </p>
          <p className="footer-small">{SITE.hours}</p>
        </div>
        <div>
          <h2>Contato</h2>
          <a href={whatsappLink(SITE.whatsappNumber)} target="_blank" rel="noopener noreferrer">
            WhatsApp {SITE.whatsapp}
          </a>
          <a href={`tel:${SITE.phone.replace(/\D/g, '')}`}>Telefone {SITE.phone}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <Link to="/privacidade">Política de privacidade</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {SITE.name} · {SITE.oab}. Conteúdo informativo, que não substitui a
          consulta a um advogado. {DEMO_NOTICE}
        </p>
        <p className="credit">
          {DEV_CREDIT.text} <strong>{DEV_CREDIT.name}</strong>
        </p>
      </div>
    </footer>
  )
}
