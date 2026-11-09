import { describe, expect, it } from 'vitest'
import { DISMISSAL_TYPES, severanceItems, type DismissalType } from '~/lib/severance'

const status = (t: DismissalType, label: string) =>
  severanceItems(t).find((i) => i.label.startsWith(label))?.status

describe('severanceItems', () => {
  it('lista os mesmos 7 itens para todos os tipos', () => {
    for (const t of Object.keys(DISMISSAL_TYPES) as DismissalType[]) expect(severanceItems(t)).toHaveLength(7)
  })
  it('sem justa causa dá multa do FGTS e seguro', () => {
    expect(status('semJustaCausa', 'Multa')).toBe('sim')
    expect(status('semJustaCausa', 'Seguro')).toBe('sim')
  })
  it('acordo dá multa parcial e não dá seguro', () => {
    expect(status('acordo', 'Multa')).toBe('parcial')
    expect(status('acordo', 'Seguro')).toBe('nao')
  })
  it('justa causa não dá 13º proporcional', () => {
    expect(status('justaCausa', '13º')).toBe('nao')
  })
})
