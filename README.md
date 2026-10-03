<<<<<<< HEAD
# Sonho Verde — Site Institucional

Site estático de página única (landing page) para a **Sonho Verde — Colchões & Flores**, em Canoas/RS.

## Stack

- HTML5 semântico
- CSS3 puro (sem frameworks nem pré-processadores)
- JavaScript vanilla (ES6+), sem dependências/build
- Integração de formulário via [Web3Forms](https://web3forms.com)
- Compatível com qualquer hospedagem estática (GitHub Pages, Netlify, Vercel, etc.)

## Estrutura de pastas

```
site-sonhoverde/
├── index.html          # Página principal (única página do site)
├── assets/
│   ├── css/
│   │   └── styles.css  # Estilos globais do site
│   └── js/
│       └── script.js   # Comportamentos: menu, carrossel, abas, formulário
├── docs/               # Documentação do projeto
└── README.md
```

## Como executar localmente

Basta abrir `index.html` no navegador, ou servir a pasta com qualquer servidor estático:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Acesse `http://localhost:8000`.

## Configurações pendentes

- `index.html` (formulário de contato): inserir a chave do Web3Forms no campo `access_key`.
- Instagram do rodapé e da seção de contatos: substituir `[Insira o @ do Instagram aqui]`.
- Depoimentos: preencher os cards com relatos reais.
=======
# lp-sonhoverde
A simple but useful LP made for a Simplifica Tech client, envisioning design and simplicity.
>>>>>>> 45c6df79323160caad3029993102fcb3b4023cc7
