import { createFileRoute } from '@tanstack/react-router'
import { ContactForm } from '~/components/ContactForm'
import { AREAS } from '~/content/areas'
import { SITE } from '~/content/site'
import { whatsappLink } from '~/lib/whatsapp'

export const Route = createFileRoute('/contato')({
  // ?area=... vem da página de áreas e só é aceito se existir.
  validateSearch: (search: Record<string, unknown>): { area?: string } => {
    const a = typeof search.area === 'string' ? search.area : undefined
    return a && AREAS.some((x) => x.name === a) ? { area: a } : {}
  },
  head: () => ({
    meta: [
      { title: `Contato · ${SITE.name}` },
      {
        name: 'description',
        content: `Agende uma consulta presencial em BH ou online. ${SITE.address.street}, ${SITE.address.district}.`,
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const { area } = Route.useSearch()
  const map = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.mapQuery)}&output=embed`
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1 className="h1">Agendar consulta</h1>
          <p className="lead">
            Conte o caso em poucas linhas. A mensagem abre pronta no seu WhatsApp e eu respondo em até um dia
            útil.
          </p>
        </div>
      </section>
      <section className="section section--flush">
        <div className="wrap contact">
          <div className="form-card" id="consulta">
            <ContactForm key={area ?? ''} defaultArea={area ?? ''} />
          </div>
          <aside className="contact-info">
            <div>
              <h2>Escritório</h2>
              <p>
                {SITE.address.street}
                <br />
                {SITE.address.district}, {SITE.address.city}
                <br />
                CEP {SITE.address.zip}
              </p>
            </div>
            <div>
              <h2>Contato direto</h2>
              <p>
                <a href={whatsappLink(SITE.whatsappNumber)} target="_blank" rel="noopener noreferrer">
                  WhatsApp {SITE.whatsapp}
                </a>
                <br />
                <a href={`tel:${SITE.phone.replace(/\D/g, '')}`}>Telefone {SITE.phone}</a>
                <br />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
            </div>
            <div>
              <h2>Horário</h2>
              <p>{SITE.hours}</p>
            </div>
          </aside>
        </div>
        <div className="wrap">
          <iframe
            className="map"
            title={`Mapa: ${SITE.address.mapQuery}`}
            src={map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
