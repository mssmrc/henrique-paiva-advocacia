import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { DISMISSAL_TYPES, severanceItems, type DismissalType } from '~/lib/severance'

const MARK = { sim: '✓', parcial: '½', nao: '—' } as const
const LABEL = { sim: 'Tem direito', parcial: 'Em parte', nao: 'Não tem direito' } as const

/** Verificador de verbas rescisórias: escolha o tipo de saída e veja o que entra no acerto. */
export function SeveranceChecker() {
  const [type, setType] = useState<DismissalType>('semJustaCausa')
  const items = severanceItems(type)

  return (
    <div className="checker">
      <fieldset className="checker-options">
        <legend>Como foi a sua saída?</legend>
        <div className="checker-grid">
          {(Object.keys(DISMISSAL_TYPES) as DismissalType[]).map((t) => (
            <label key={t} className={type === t ? 'is-active' : undefined}>
              <input type="radio" name="tipo" value={t} checked={type === t} onChange={() => setType(t)} />
              {DISMISSAL_TYPES[t]}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="checker-result" aria-live="polite">
        <table>
          <caption className="sr-only">Verbas para: {DISMISSAL_TYPES[type]}</caption>
          <thead>
            <tr>
              <th scope="col">Verba</th>
              <th scope="col">Situação</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.label} className={`is-${i.status}`}>
                <th scope="row">
                  {i.label}
                  {i.note && <small>{i.note}</small>}
                </th>
                <td>
                  <span className="mark" aria-hidden="true">
                    {MARK[i.status]}
                  </span>
                  {LABEL[i.status]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="checker-note">
          Regra geral da CLT, para contratos por prazo indeterminado. Valores e exceções dependem do seu caso.{' '}
          <Link to="/artigos/$slug" params={{ slug: 'o-que-voce-recebe-na-demissao' }}>
            Entenda cada verba
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
