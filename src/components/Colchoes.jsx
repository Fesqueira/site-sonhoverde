import Carrossel from './Carrossel';
import Icon from './Icon';
import { COLCHOES } from '../data/colchoes';
import { linkWhatsApp } from '../data/site';

function SlideColchao({ colchao }) {
  const mensagem = `Olá, Janice! Vim pelo site e quero consultar a disponibilidade do colchão ${colchao.nome}.`;
  return (
    <div className="slide-produto">
      <div className="slide-imagem">
        <img src={colchao.imagem} width={colchao.largura} height={colchao.altura} alt={`Colchão ${colchao.nome}`} />
      </div>
      <div className="slide-info">
        <span className="slide-tag">{colchao.tag}</span>
        <h3>{colchao.nome}</h3>
        <p>{colchao.descricao}</p>
        <ul className="slide-lista">
          {colchao.destaques.map((destaque) => (
            <li key={destaque}>
              <Icon nome="check" /> {destaque}
            </li>
          ))}
        </ul>
        <a href={linkWhatsApp(mensagem)} target="_blank" rel="noopener" className="btn btn-primario">
          Consultar disponibilidade
        </a>
      </div>
    </div>
  );
}

export default function Colchoes() {
  return (
    <section className="secao-colchoes" id="colchoes">
      <div className="container">
        <div className="section-head center">
          <span className="script-tag">Descanso de verdade</span>
          <h2>Colchões para todo tipo de sono</h2>
          <p>Conheça alguns dos nossos modelos disponíveis. Fale com a gente para ver medidas, preços e condições.</p>
        </div>

        <Carrossel rotulo="o colchão">
          {COLCHOES.map((colchao) => (
            <SlideColchao key={colchao.nome} colchao={colchao} />
          ))}
        </Carrossel>
      </div>
    </section>
  );
}
