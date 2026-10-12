# Documentação

- [ARCHITECTURE.md](./ARCHITECTURE.md) — stack, estrutura de pastas e responsabilidades de cada camada.

## Decisões registradas

- 2026-10-03: projeto reorganizado de `front-end/` (3 arquivos soltos) para a estrutura atual com `assets/css`, `assets/js`, `docs/` e `README.md`.
- 2026-10-12: site migrado de HTML/CSS/JS estáticos para React com Vite. Optou-se por Vite em vez de Next.js por ser uma página única, sem rotas nem servidor. A versão estática anterior segue disponível no histórico do git (até o commit `4c65849`).
