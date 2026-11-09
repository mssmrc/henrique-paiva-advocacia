# Especificação — Henrique Paiva Advocacia (case)

> Case de portfólio da **Runa Web**. O crédito "Desenvolvido por Runa Web" fica no rodapé do site e
> não deve ser removido.

## Objetivo

Mostrar a advogados autônomos como um site pode **gerar confiança e consultas respeitando as regras
de publicidade da OAB**: conteúdo útil (verificador e artigos), clareza sobre áreas e documentos e
contato direto pelo WhatsApp.

## Público do site

Trabalhadores recém-desligados, segurados do INSS (aposentadoria, BPC, auxílio) e consumidores com
problemas com bancos, companhias aéreas e lojas, em Belo Horizonte e online.

## Páginas

| Página           | Conteúdo principal                                                                           |
| ---------------- | -------------------------------------------------------------------------------------------- |
| Início           | Proposta, cartão de identificação, áreas, verificador de rescisão, atendimento, artigos, FAQ |
| Áreas de atuação | Três áreas com temas atendidos e documentos para levar à consulta                            |
| Sobre            | Apresentação, formação, princípios e escritório                                              |
| Artigos          | Lista e página de cada artigo (rota dinâmica `/artigos/$slug`)                               |
| Contato          | Formulário com aviso de sigilo, endereço, horário e mapa                                     |
| Privacidade      | Modelo de política (LGPD)                                                                    |

## Funcionalidades

- **Verificador de verbas rescisórias**: escolhe-se o tipo de saída (sem justa causa, pedido, acordo
  ou justa causa) e a tabela mostra o que é devido, conforme a CLT.
- **Artigos** com rota dinâmica, metatags por artigo e página 404 para endereços inexistentes.
- **Pedido de consulta** pelo WhatsApp, com aceite de que não se devem enviar documentos sensíveis.

## Regras da OAB aplicadas (Provimento 205/2021)

- Sem preços de honorários, sem promessa de resultado e sem depoimentos de clientes.
- Nome e número de inscrição na OAB visíveis no topo, no cartão e no rodapé.
- Conteúdo informativo, com aviso de que não substitui a consulta.

## Identidade visual

| Token     | Valor     | Uso                                |
| --------- | --------- | ---------------------------------- |
| `--paper` | `#f4f5f1` | Fundo                              |
| `--green` | `#1d3b2f` | Botões, faixas escuras, rodapé     |
| `--brass` | `#c49a3a` | Sublinhados, marcadores e detalhes |
| `--ink`   | `#15221c` | Texto                              |

- **Tipografia:** Libre Caslon Text (títulos) e IBM Plex Sans (texto).
- **Marca visual:** o cartão de identificação no topo e a tabela do verificador, com marcas de direito.
- Fugimos do azul-marinho com dourado, muito comum em sites de advocacia.
