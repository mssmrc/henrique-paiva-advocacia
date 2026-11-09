import { SITE } from '~/content/site'

/** Logo provisório: monograma + nome. Troque pelo logo real quando houver. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? ' logo--light' : ''}`}>
      <span className="logo-mono" aria-hidden="true">
        HP
      </span>
      <span className="logo-text">
        <b>{SITE.lawyer}</b>
        <small>Advocacia · {SITE.oab}</small>
      </span>
    </span>
  )
}
