# Arquitetura e organização do projeto

## Visão geral

Projeto **100% estático**, sem etapa de build, transpilação ou bundler. O navegador
carrega diretamente `index.html`, que referencia os assets em `assets/`.

## Camadas

| Camada        | Arquivo                    | Responsabilidade |
|---------------|----------------------------|------------------|
| Estrutura     | `index.html`               | Marcação semântica das seções: header, hero, pilares, colchões (carrossel), flores, sobre, depoimentos, contato e footer. |
| Apresentação  | `assets/css/styles.css`    | Layout (grid/flex), tipografia (Fraunces, Karla, Caveat), paleta, responsividade e animações. |
| Comportamento | `assets/js/script.js`      | IIFE única com: sombra no header ao rolar, menu mobile, rolagem suave com offset, link ativo via IntersectionObserver, carrossel de produtos, abas de contato e envio do formulário via fetch para a API do Web3Forms. |

## Fluxo de dados do formulário

1. Usuário preenche o formulário em `#formContato`.
2. `script.js` serializa com `FormData` e envia `POST` para `https://api.web3forms.com/submit`.
3. Feedback de sucesso/erro exibido em `#formMsg`.

## Convenções

- Nenhum framework CSS/JS; manter dependências em zero.
- Novas páginas HTML ficam na raiz; novos estilos em `assets/css/` e scripts em `assets/js/`.
- Imagens futuras devem ir para `assets/images/` (hoje estão embutidas em base64 no HTML).
