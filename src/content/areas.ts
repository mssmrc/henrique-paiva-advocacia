import type { ImageKey } from './images'

export type Area = {
  slug: string
  name: string
  summary: string
  intro: string
  topics: string[]
  documents: string[]
  image: ImageKey
}

export const AREAS: Area[] = [
  {
    slug: 'trabalhista',
    name: 'Direito do Trabalho',
    summary: 'Verbas rescisórias, horas extras, vínculo sem carteira, assédio e acidentes de trabalho.',
    intro:
      'Atuo na defesa de trabalhadores, da conferência do acerto rescisório à ação na Justiça do Trabalho, sempre buscando primeiro o acordo quando ele é vantajoso para você.',
    topics: [
      'Cálculo e cobrança de verbas rescisórias',
      'Horas extras, adicional noturno e intervalo',
      'Reconhecimento de vínculo sem carteira assinada',
      'Insalubridade e periculosidade',
      'Acidente de trabalho e estabilidade',
      'Assédio moral e dispensa discriminatória',
    ],
    documents: [
      'Carteira de trabalho',
      'Contracheques',
      'Termo de rescisão (TRCT)',
      'Extrato do FGTS',
      'Conversas e e-mails relevantes',
    ],
    image: 'trabalhista',
  },
  {
    slug: 'previdenciario',
    name: 'Direito Previdenciário',
    summary: 'Aposentadorias, BPC/LOAS, auxílio por incapacidade, pensão por morte e revisões no INSS.',
    intro:
      'Planejo aposentadorias e acompanho pedidos e recursos no INSS. Muitos benefícios são negados por falta de um documento ou por um período não reconhecido no CNIS.',
    topics: [
      'Planejamento de aposentadoria',
      'Aposentadoria especial e por idade',
      'BPC/LOAS para idosos e pessoas com deficiência',
      'Auxílio por incapacidade temporária',
      'Pensão por morte',
      'Revisão de benefícios',
    ],
    documents: [
      'Documento com foto e CPF',
      'Extrato do CNIS (Meu INSS)',
      'Carteiras de trabalho',
      'Carta de indeferimento, se houver',
      'Laudos médicos, nos casos de incapacidade',
    ],
    image: 'previdenciario',
  },
  {
    slug: 'consumidor',
    name: 'Direito do Consumidor',
    summary: 'Cobranças indevidas, negativação, voos cancelados, produtos com defeito e planos de saúde.',
    intro:
      'Ajudo a resolver problemas com bancos, companhias aéreas, operadoras e lojas. Muitos casos se resolvem com notificação extrajudicial; os demais vão ao Juizado Especial.',
    topics: [
      'Cobrança indevida e juros abusivos',
      'Nome negativado sem motivo',
      'Voo cancelado, atrasado ou bagagem extraviada',
      'Produto com defeito ou não entregue',
      'Negativa de cobertura de plano de saúde',
    ],
    documents: [
      'Contrato ou nota fiscal',
      'Protocolos de atendimento',
      'Prints de conversas e e-mails',
      'Faturas e extratos',
    ],
    image: 'consumidor',
  },
]
