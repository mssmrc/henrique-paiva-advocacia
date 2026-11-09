/** Artigos informativos (conteúdo de exemplo para o case). */
export type Article = {
  slug: string
  title: string
  summary: string
  date: string
  readTime: string
  area: string
  body: { heading?: string; text: string }[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'o-que-voce-recebe-na-demissao',
    title: 'O que você recebe em cada tipo de demissão',
    summary: 'Sem justa causa, pedido de demissão, justa causa ou acordo: veja o que muda no acerto.',
    date: '2026-10-14',
    readTime: '4 min',
    area: 'Trabalhista',
    body: [
      {
        text: 'O tipo de desligamento define quais verbas entram no termo de rescisão. Antes de assinar, vale conferir item por item.',
      },
      {
        heading: 'Dispensa sem justa causa',
        text: 'É a situação com mais direitos: saldo de salário, aviso prévio, 13º e férias proporcionais com 1/3, férias vencidas, saque do FGTS com multa de 40% e, cumpridos os requisitos, seguro-desemprego.',
      },
      {
        heading: 'Pedido de demissão',
        text: 'Você recebe saldo de salário, 13º proporcional e férias vencidas e proporcionais com 1/3. Não há saque do FGTS, multa de 40% nem seguro-desemprego, e o aviso prévio deve ser cumprido ou pode ser descontado.',
      },
      {
        heading: 'Acordo entre as partes',
        text: 'Previsto no art. 484-A da CLT: metade do aviso prévio indenizado, multa de 20% do FGTS, saque de até 80% do saldo e as demais verbas integrais. Não dá direito ao seguro-desemprego.',
      },
      {
        heading: 'Justa causa',
        text: 'Restam o saldo de salário e as férias vencidas com 1/3. Como é a penalidade mais grave, a empresa precisa provar a falta. Se a justa causa foi injusta, ela pode ser revertida na Justiça.',
      },
      {
        text: 'O prazo para pagamento das verbas é de 10 dias após o fim do contrato. Atrasou? A empresa deve uma multa equivalente a um salário.',
      },
    ],
  },
  {
    slug: 'inss-negou-meu-beneficio',
    title: 'O INSS negou meu benefício. E agora?',
    summary: 'Os motivos mais comuns de indeferimento e os dois caminhos para contestar.',
    date: '2026-09-22',
    readTime: '3 min',
    area: 'Previdenciário',
    body: [
      {
        text: 'A carta de indeferimento informa o motivo da negativa. É por ela que começamos, junto com o extrato do CNIS, que mostra os períodos e salários que o INSS reconhece.',
      },
      {
        heading: 'Motivos mais comuns',
        text: 'Períodos de trabalho que não aparecem no CNIS, falta de documento que comprove atividade especial, perícia médica desfavorável e erro no cálculo do tempo de contribuição.',
      },
      {
        heading: 'Recurso administrativo',
        text: 'Pode ser feito em até 30 dias pelo Meu INSS. É indicado quando falta só um documento ou houve erro evidente.',
      },
      {
        heading: 'Ação judicial',
        text: 'Quando o recurso não resolve ou o caso exige nova perícia, a ação na Justiça Federal costuma ser o caminho. Em causas de até 60 salários mínimos, ela tramita no Juizado Especial Federal.',
      },
    ],
  },
  {
    slug: 'voo-cancelado-direitos',
    title: 'Voo cancelado ou atrasado: seus direitos',
    summary: 'Assistência, reacomodação e quando cabe indenização por danos morais.',
    date: '2026-08-30',
    readTime: '3 min',
    area: 'Consumidor',
    body: [
      {
        text: 'As regras da ANAC (Resolução 400) definem a assistência que a companhia deve dar a partir do horário original do voo.',
      },
      {
        heading: 'A partir de 1, 2 e 4 horas',
        text: 'Com 1 hora de atraso, a empresa deve oferecer meios de comunicação; com 2 horas, alimentação; com 4 horas, hospedagem quando houver pernoite, além de transporte.',
      },
      {
        heading: 'Reacomodação ou reembolso',
        text: 'Em cancelamentos e atrasos acima de 4 horas, você escolhe entre reacomodação, reembolso integral ou outro meio de transporte.',
      },
      {
        heading: 'Indenização',
        text: 'Quando o problema causa prejuízo concreto, como perda de compromisso ou de diária de hotel, pode caber indenização. Guarde cartões de embarque, comprovantes e protocolos.',
      },
    ],
  },
]

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug)
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
