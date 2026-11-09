/**
 * Verbas rescisórias por tipo de desligamento (CLT). Informativo: não substitui análise do caso.
 * Fontes: CLT arts. 477, 484-A e 487; Lei 8.036/90 (FGTS); Súmula 171 do TST.
 */

export const DISMISSAL_TYPES = {
  semJustaCausa: 'Fui demitido sem justa causa',
  pedido: 'Pedi demissão',
  acordo: 'Saí por acordo com a empresa',
  justaCausa: 'Fui demitido por justa causa',
} as const

export type DismissalType = keyof typeof DISMISSAL_TYPES

export type Item = { label: string; status: 'sim' | 'parcial' | 'nao'; note?: string }

export function severanceItems(type: DismissalType): Item[] {
  const all: Record<DismissalType, Item[]> = {
    semJustaCausa: [
      { label: 'Saldo de salário', status: 'sim' },
      {
        label: 'Aviso prévio',
        status: 'sim',
        note: 'trabalhado ou indenizado, 30 dias + 3 por ano trabalhado',
      },
      { label: '13º salário proporcional', status: 'sim' },
      { label: 'Férias vencidas e proporcionais + 1/3', status: 'sim' },
      { label: 'Saque do FGTS', status: 'sim' },
      { label: 'Multa sobre o FGTS', status: 'sim', note: '40%' },
      { label: 'Seguro-desemprego', status: 'sim', note: 'se cumprir os requisitos de tempo' },
    ],
    pedido: [
      { label: 'Saldo de salário', status: 'sim' },
      { label: 'Aviso prévio', status: 'nao', note: 'você deve cumprir ou pode ser descontado' },
      { label: '13º salário proporcional', status: 'sim' },
      { label: 'Férias vencidas e proporcionais + 1/3', status: 'sim' },
      { label: 'Saque do FGTS', status: 'nao' },
      { label: 'Multa sobre o FGTS', status: 'nao' },
      { label: 'Seguro-desemprego', status: 'nao' },
    ],
    acordo: [
      { label: 'Saldo de salário', status: 'sim' },
      { label: 'Aviso prévio', status: 'parcial', note: 'metade, se indenizado' },
      { label: '13º salário proporcional', status: 'sim' },
      { label: 'Férias vencidas e proporcionais + 1/3', status: 'sim' },
      { label: 'Saque do FGTS', status: 'parcial', note: 'até 80% do saldo' },
      { label: 'Multa sobre o FGTS', status: 'parcial', note: '20%' },
      { label: 'Seguro-desemprego', status: 'nao' },
    ],
    justaCausa: [
      { label: 'Saldo de salário', status: 'sim' },
      { label: 'Aviso prévio', status: 'nao' },
      { label: '13º salário proporcional', status: 'nao' },
      { label: 'Férias vencidas + 1/3', status: 'sim', note: 'as proporcionais não são devidas' },
      { label: 'Saque do FGTS', status: 'nao' },
      { label: 'Multa sobre o FGTS', status: 'nao' },
      { label: 'Seguro-desemprego', status: 'nao' },
    ],
  }
  return all[type]
}
