# Arquitetura e organização do projeto

## Visão geral

Aplicação **React de página única**, empacotada com **Vite**. Não há servidor nem
roteamento: o build (`npm run build`) gera arquivos estáticos em `dist/`.

## Camadas

| Camada        | Caminho                 | Responsabilidade |
|---------------|-------------------------|------------------|
| Casca         | `index.html`            | Metadados (SEO, Open Graph, JSON-LD), fontes e o `<div id="root">` onde o React monta a página. |
| Composição    | `src/App.jsx`           | Ordem das seções: header, hero, pilares, colchões, flores, sobre, depoimentos, contato e footer. |
| Seções        | `src/components/`       | Um componente por seção. `Carrossel` e `Icon` são reaproveitados por várias seções. |
| Conteúdo      | `src/data/`             | Dados da loja (`site.js`), modelos de colchão (`colchoes.js`) e avaliações do Google (`avaliacoes.js`). |
| Comportamento | `src/hooks/`            | `useSecaoAtiva` (link ativo do menu via IntersectionObserver) e `useMediaQuery` (largura de tela). |
| Apresentação  | `src/styles/global.css` | Layout (grid/flex), tipografia (Fraunces, Karla, Caveat), paleta, responsividade e animações. |

## Fluxo de dados do formulário

1. Usuário preenche o formulário na aba "Formulário" da seção de contato.
2. `Contato.jsx` serializa com `FormData` e envia `POST` para `https://api.web3forms.com/submit`,
   usando a chave de `VITE_WEB3FORMS_KEY`.
3. O estado do envio (`parado`, `enviando`, `ok`, `erro`) define o feedback exibido.

## Convenções

- Conteúdo que muda (textos de produto, contatos, avaliações) fica em `src/data/`, não nos componentes.
- Nova seção: criar o componente em `src/components/` e incluí-lo em `App.jsx`.
- Ícones novos entram em `Icon.jsx`; imagens em `src/assets/img/`, em `.webp`.
- CSS em um único arquivo global, organizado por seção; sem framework CSS.
- Navegação entre seções por âncoras (`#id`) com `scroll-margin-top`, sem JavaScript.
