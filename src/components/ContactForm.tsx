import { useState, type FormEvent } from 'react'
import { AREAS } from '~/content/areas'
import { SITE } from '~/content/site'
import { buildMessage, whatsappLink } from '~/lib/whatsapp'

/** Pedido de consulta: monta a mensagem e abre o WhatsApp. Nada vai para servidor. */
export function ContactForm({ defaultArea = '' }: { defaultArea?: string }) {
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    if (!get('nome') || get('telefone').replace(/\D/g, '').length < 10) {
      setError('Informe seu nome e um WhatsApp com DDD.')
      return
    }
    if (!get('aceite')) {
      setError('Confirme que leu o aviso sobre o envio de informações.')
      return
    }
    setError('')
    const message = buildMessage('Olá, Dr. Henrique. Gostaria de agendar uma consulta.', [
      ['Nome', get('nome')],
      ['WhatsApp', get('telefone')],
      ['Cidade', get('cidade')],
      ['Assunto', get('area')],
      ['Atendimento', get('formato')],
      ['Resumo', get('resumo')],
    ])
    window.open(whatsappLink(SITE.whatsappNumber, message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <label>
          Nome completo
          <input name="nome" autoComplete="name" required />
        </label>
        <label>
          WhatsApp com DDD
          <input
            name="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(31) 90000-0000"
            required
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Assunto
          <select name="area" defaultValue={defaultArea}>
            <option value="">Não sei qual é a área</option>
            {AREAS.map((a) => (
              <option key={a.slug}>{a.name}</option>
            ))}
          </select>
        </label>
        <label>
          Cidade
          <input name="cidade" autoComplete="address-level2" placeholder="Ex.: Contagem — MG" />
        </label>
      </div>
      <fieldset className="radio-row">
        <legend>Prefere atendimento</legend>
        <label>
          <input type="radio" name="formato" value="Online (vídeo)" defaultChecked /> Online
        </label>
        <label>
          <input type="radio" name="formato" value="Presencial em BH" /> Presencial
        </label>
      </fieldset>
      <label>
        Resumo do caso, em poucas linhas
        <textarea
          name="resumo"
          rows={4}
          placeholder="Ex.: fui demitido em agosto e ainda não recebi o acerto"
        />
      </label>
      <label className="check">
        <input type="checkbox" name="aceite" value="sim" />
        <span>
          Entendo que não devo enviar documentos ou dados sensíveis nesta primeira mensagem e que o contato
          não cria vínculo de contratação.
        </span>
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {sent && !error && (
        <p className="form-ok" role="status">
          Abrimos o WhatsApp com sua mensagem. É só tocar em enviar.
        </p>
      )}
      <button className="btn btn--green btn--lg" type="submit">
        Enviar pelo WhatsApp
      </button>
    </form>
  )
}
