import { Children, useRef, useState } from 'react';
import Icon from './Icon';

// Carrossel genérico: recebe os slides como filhos.
// porPagina = quantos aparecem lado a lado (1 nos colchões, até 3 nas avaliações).
export default function Carrossel({ children, porPagina = 1, rotulo = 'item', className = '' }) {
  const itens = Children.toArray(children);
  const totalPaginas = Math.ceil(itens.length / porPagina);
  const [pagina, setPagina] = useState(0);
  const toque = useRef(null);

  // Se a tela mudou de tamanho e sobraram menos páginas, não deixa passar da última.
  const paginaAtual = Math.min(pagina, totalPaginas - 1);

  function irPara(i) {
    setPagina((i + totalPaginas) % totalPaginas);
  }

  function aoTocar(e) {
    toque.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }

  function aoSoltar(e) {
    if (!toque.current) return;
    const dx = e.changedTouches[0].clientX - toque.current.x;
    const dy = e.changedTouches[0].clientY - toque.current.y;
    toque.current = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) irPara(paginaAtual + (dx < 0 ? 1 : -1));
  }

  return (
    <div className={`carrossel-wrap ${className}`}>
      <div className="carrossel-viewport">
        <div
          className="carrossel-track"
          style={{ transform: `translateX(-${paginaAtual * 100}%)` }}
          onTouchStart={aoTocar}
          onTouchEnd={aoSoltar}
        >
          {itens.map((item, i) => (
            <div
              className="carrossel-item"
              key={i}
              style={{ flexBasis: `${100 / porPagina}%` }}
              // slides fora da tela não recebem foco do teclado nem são lidos
              inert={Math.floor(i / porPagina) !== paginaAtual}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {totalPaginas > 1 && (
        <div className="carrossel-controles">
          <button className="carrossel-btn" onClick={() => irPara(paginaAtual - 1)} aria-label="Anterior">
            <Icon nome="setaEsquerda" />
          </button>
          {totalPaginas <= 8 ? (
            <div className="carrossel-dots">
              {Array.from({ length: totalPaginas }, (_, i) => (
                <button
                  key={i}
                  className={i === paginaAtual ? 'ativo' : ''}
                  onClick={() => irPara(i)}
                  aria-label={`Ir para ${rotulo} ${i + 1}`}
                />
              ))}
            </div>
          ) : (
            <span className="carrossel-contador">
              {paginaAtual + 1} / {totalPaginas}
            </span>
          )}
          <button className="carrossel-btn" onClick={() => irPara(paginaAtual + 1)} aria-label="Próximo">
            <Icon nome="setaDireita" />
          </button>
        </div>
      )}
    </div>
  );
}
