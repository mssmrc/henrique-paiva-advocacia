import { Link, createFileRoute } from '@tanstack/react-router'
import { Photo } from '~/components/Photo'
import { SITE } from '~/content/site'

export const Route = createFileRoute('/sobre')({
  head: () => ({
    meta: [
      { title: `Sobre · ${SITE.name}` },
      {
        name: 'description',
        content:
          'Conheça Henrique Paiva, advogado com atuação em direito do trabalho, previdenciário e do consumidor.',
      },
    ],
  }),
  component: AboutPage,
})

const TIMELINE = [
  ['2008', 'Bacharel em Direito pela UFMG'],
  ['2009', 'Inscrição na OAB/MG'],
  ['2012', 'Especialização em Direito e Processo do Trabalho'],
  ['2016', 'Especialização em Direito Previdenciário'],
  ['2018', 'Abertura do escritório próprio em Belo Horizonte'],
] as const

const PRINCIPLES = [
  ['Clareza', 'Cada etapa explicada em linguagem simples, por escrito, para você decidir com segurança.'],
  ['Acesso direto', 'Você fala comigo, não com uma central. Respondo mensagens em até um dia útil.'],
  ['Honestidade sobre o caso', 'Se o caminho judicial não vale a pena, eu digo, e explico por quê.'],
] as const

function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap about">
          <div className="about-photo">
            <Photo k="retrato" eager />
          </div>
          <div>
            <h1 className="h1">Henrique Paiva</h1>
            <p className="about-oab">{SITE.oab}</p>
            <p className="lead">
              Advogo há mais de 15 anos para trabalhadores, aposentados e consumidores. Comecei em um grande
              escritório de defesa empresarial, o que me ensinou como as empresas e o INSS argumentam. Hoje
              uso essa experiência do outro lado da mesa.
            </p>
            <p className="about-text">
              Atendo em um escritório pequeno no bairro Funcionários e por vídeo em todo o Brasil. Cada
              cliente tem o meu WhatsApp direto e recebe um resumo por escrito a cada movimentação importante
              do processo.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--line">
        <div className="wrap split">
          <div>
            <h2 className="h2">Formação</h2>
            <ol className="timeline">
              {TIMELINE.map(([y, t]) => (
                <li key={y}>
                  <span>{y}</span>
                  {t}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="h2">Como trabalho</h2>
            <div className="principles">
              {PRINCIPLES.map(([t, d]) => (
                <div key={t}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap office">
          <div className="office-photo">
            <Photo k="escritorio" />
          </div>
          <div>
            <h2 className="h2">O escritório</h2>
            <p className="lead">
              {SITE.address.street}, {SITE.address.district}. A duas quadras da estação de metrô e com
              estacionamento rotativo na rua.
            </p>
            <Link to="/contato" hash="consulta" className="btn btn--green">
              Agendar uma conversa
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
