/**
 * Dados gerais do escritório (FICTÍCIOS — troque pelos dados reais do cliente).
 * Atenção ao Provimento 205/2021 da OAB: publicidade informativa, sem preços, sem promessa
 * de resultado e sem depoimentos de clientes.
 */

export const SITE = {
  name: 'Henrique Paiva Advocacia',
  lawyer: 'Henrique Paiva',
  oab: 'OAB/MG 000.000',
  tagline: 'Direito do trabalho, previdenciário e do consumidor, com explicação clara em cada etapa.',
  description:
    'Advogado em Belo Horizonte com atuação em direito trabalhista, previdenciário (INSS) e do consumidor. Atendimento presencial e online.',
  phone: '(31) 3000-0000',
  whatsapp: '(31) 99999-0000',
  whatsappNumber: '5531999990000',
  email: 'contato@exemplo.com.br',
  address: {
    street: 'Av. Exemplo, 1000 — sala 801',
    district: 'Funcionários',
    city: 'Belo Horizonte — MG',
    zip: '00000-000',
    mapQuery: 'Funcionários, Belo Horizonte - MG',
  },
  hours: 'Segunda a sexta, 9h às 18h · Atendimento online com hora marcada',
} as const

/** Texto obrigatório nos sites de case. */
export const DEMO_NOTICE = 'Site demonstrativo. Advogado, registro na OAB, artigos e contatos são fictícios.'
export const DEV_CREDIT = { name: 'Runa Web', text: 'Desenvolvido por' } as const

export const HOW_IT_WORKS: { title: string; text: string }[] = [
  {
    title: 'Primeiro contato',
    text: 'Você conta o caso pelo WhatsApp ou formulário. Respondo em até um dia útil.',
  },
  {
    title: 'Análise dos documentos',
    text: 'Em reunião presencial ou por vídeo, avalio documentos, prazos e caminhos possíveis.',
  },
  {
    title: 'Proposta por escrito',
    text: 'Você recebe a estratégia e o contrato de honorários antes de qualquer decisão.',
  },
  {
    title: 'Acompanhamento',
    text: 'Aviso cada movimentação do processo e explico o que ela significa, sem juridiquês.',
  },
]

export const FAQ: [string, string][] = [
  [
    'A primeira conversa é cobrada?',
    'A triagem inicial pelo WhatsApp é gratuita. A consulta com análise de documentos tem valor informado antes do agendamento, conforme a tabela da OAB/MG.',
  ],
  [
    'Atende só em Belo Horizonte?',
    'Atendo presencialmente em BH e online em todo o Brasil. Processos trabalhistas e previdenciários são eletrônicos, o que permite atuar em outras cidades.',
  ],
  [
    'Qual o prazo para entrar com ação trabalhista?',
    'Até 2 anos depois do fim do contrato, para cobrar os direitos dos últimos 5 anos. Quanto antes você procurar orientação, mais fácil é reunir provas.',
  ],
  [
    'O INSS negou meu benefício. Ainda dá para fazer algo?',
    'Em muitos casos, sim: por recurso administrativo ou ação judicial. O primeiro passo é analisar a carta de indeferimento e o seu CNIS.',
  ],
]
