# Sonho Verde — Site Institucional

Landing page de página única para a **Sonho Verde — Colchões & Flores**, em Canoas/RS.

## Stack

- React 19
- Vite 8 (servidor de desenvolvimento e build)
- CSS3 puro (sem frameworks nem pré-processadores)
- Integração de formulário via [Web3Forms](https://web3forms.com)
- O build gera arquivos estáticos, compatíveis com qualquer hospedagem (GitHub Pages, Netlify, Vercel, etc.)

## Estrutura de pastas

```
site-sonhoverde/
├── index.html            # Casca da página: metadados e ponto de montagem do React
├── src/
│   ├── main.jsx          # Ponto de entrada
│   ├── App.jsx           # A página inteira, na ordem em que aparece na tela
│   ├── components/       # Um arquivo por seção, mais Carrossel e Icon
│   ├── data/             # Conteúdo editável: loja, colchões e avaliações
│   ├── hooks/            # Link ativo do menu e detecção de largura de tela
│   ├── styles/global.css # Estilos globais do site
│   └── assets/img/       # Imagens (.webp)
├── docs/                 # Documentação do projeto
├── .env.example          # Modelo das variáveis de ambiente
└── README.md
```

## Como executar localmente

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # gera a versão de produção em dist/
npm run preview  # serve a pasta dist/ localmente
```

## Onde editar o conteúdo

- **Telefone, endereço, Instagram, links**: `src/data/site.js`
- **Modelos de colchão**: `src/data/colchoes.js`
- **Avaliações**: `src/data/avaliacoes.js`. São uma cópia das avaliações do Google Maps e não atualizam sozinhas.

## Configurações pendentes

- Formulário de contato: copiar `.env.example` para `.env` e preencher `VITE_WEB3FORMS_KEY`.
- Instagram: preencher `instagram` em `src/data/site.js`. Enquanto estiver vazio, o Instagram não aparece no site.
- Link do desenvolvedor no rodapé: preencher `desenvolvedor.link` em `src/data/site.js`.

## Commits

O histórico segue o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/): `tipo(escopo): descrição`, com os tipos `feat`, `fix`, `docs`, `style`, `refactor`, `build` e `chore`.
