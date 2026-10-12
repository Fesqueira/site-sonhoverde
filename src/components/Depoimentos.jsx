import { useState } from 'react';
import Carrossel from './Carrossel';
import useMediaQuery from '../hooks/useMediaQuery';
import { AVALIACOES, RESUMO_GOOGLE } from '../data/avaliacoes';
import { LOJA } from '../data/site';

// Textos maiores que isso aparecem cortados, com o botão "Ler mais".
const LIMITE_TEXTO = 190;

function CardAvaliacao({ avaliacao }) {
  const [aberto, setAberto] = useState(false);
  const longo = avaliacao.texto.length > LIMITE_TEXTO;

  return (
    <div className="card-depoimento">
      <span className="aspas">“</span>
      <div className="estrelas" role="img" aria-label="5 de 5 estrelas">★★★★★</div>
      <p className={`texto-depo ${longo && !aberto ? 'cortado' : ''}`}>{avaliacao.texto}</p>
      {longo && (
        <button className="ler-mais" onClick={() => setAberto(!aberto)}>
          {aberto ? 'Ler menos' : 'Ler mais'}
        </button>
      )}
      <div className="autor">
        <div className="avatar-vazio" aria-hidden="true">{avaliacao.nome[0].toUpperCase()}</div>
        <div>
          <strong>{avaliacao.nome}</strong>
          <span>Avaliação no Google</span>
        </div>
      </div>
    </div>
  );
}

export default function Depoimentos() {
  const celular = useMediaQuery('(max-width:700px)');
  const tablet = useMediaQuery('(max-width:1020px)');
  const porPagina = celular ? 1 : tablet ? 2 : 3;

  return (
    <section className="secao-depoimentos" id="depoimentos">
      <div className="container">
        <div className="section-head center">
          <span className="script-tag">Quem já passou por aqui</span>
          <h2>O que nossos clientes dizem</h2>
          <a href={LOJA.googleMaps} target="_blank" rel="noopener" className="nota-google">
            <strong>{RESUMO_GOOGLE.nota}</strong>
            <span className="estrelas" aria-hidden="true">★★★★★</span>
            <span>{RESUMO_GOOGLE.total} avaliações no Google</span>
          </a>
        </div>

        <Carrossel porPagina={porPagina} rotulo="a página" className="carrossel-depoimentos">
          {AVALIACOES.map((avaliacao) => (
            <CardAvaliacao key={avaliacao.nome} avaliacao={avaliacao} />
          ))}
        </Carrossel>
      </div>
    </section>
  );
}
