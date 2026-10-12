import Icon from './Icon';
import fotoHero from '../assets/img/hero-janice.webp';

const SELOS = [
  { destaque: '+15 anos', texto: 'de bairro, cuidando de você' },
  { destaque: '2 em 1', texto: 'colchões e floricultura' },
  { destaque: '100%', texto: 'atendimento no WhatsApp' },
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-conteudo">
          <span className="script-tag">Sonho Verde</span>
          <h1>Durma melhor. Floresça sempre.</h1>
          <p className="lead">
            Colchões pensados para o seu descanso e flores para os momentos que merecem ser lembrados — tudo com o
            cuidado de quem trata cada cliente como vizinho.
          </p>
          <div className="hero-acoes">
            <a href="#colchoes" className="btn btn-primario">Ver colchões</a>
            <a href="#flores" className="btn btn-secundario">Ver flores</a>
          </div>
          <div className="hero-selo">
            {SELOS.map((selo) => (
              <div key={selo.destaque}>
                <strong>{selo.destaque}</strong>
                <span>{selo.texto}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-imagem">
          <div className="moldura">
            <img
              src={fotoHero}
              width="720"
              height="918"
              fetchPriority="high"
              alt="Proprietária da Sonho Verde apresentando um colchão e um arranjo de flores"
            />
          </div>
          <div className="flutuante f1">
            <Icon nome="lua" />
            Noites tranquilas
          </div>
          <div className="flutuante f2">
            <Icon nome="flor" />
            Flores frescas
          </div>
        </div>
      </div>
    </section>
  );
}
