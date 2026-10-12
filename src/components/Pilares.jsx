import Icon from './Icon';

export default function Pilares() {
  return (
    <section className="pilares">
      <div className="container">
        <div className="grid-pilares">
          <div className="pilar colchoes">
            <div className="icone-pilar">
              <Icon nome="lua" />
            </div>
            <h3>Colchões para todo tipo de sono</h3>
            <p>
              Firmeza, maciez ou equilíbrio — te ajudamos a encontrar o colchão certo para acordar disposto todos os
              dias.
            </p>
            <a href="#colchoes" className="saiba-mais">Conhecer os modelos →</a>
          </div>
          <div className="pilar flores">
            <div className="icone-pilar">
              <Icon nome="flor" />
            </div>
            <h3>Flores para cada ocasião</h3>
            <p>
              Buquês, arranjos e plantas para presentear, decorar ou simplesmente alegrar o dia de alguém especial.
            </p>
            <a href="#flores" className="saiba-mais">Ver a floricultura →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
