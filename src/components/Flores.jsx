import Icon from './Icon';
import { linkWhatsApp } from '../data/site';

const OCASIOES = [
  { icone: 'estrela', rotulo: 'Aniversários' },
  { icone: 'coracao', rotulo: 'Casamentos' },
  { icone: 'flor', rotulo: 'Decoração de ambientes' },
  { icone: 'presente', rotulo: 'Presentes surpresa' },
];

// Uma flor do desenho: pétalas giradas em volta de um miolo.
function FlorDesenhada({ x, y, rx, ry, angulos, corPetala, raioMiolo, corMiolo }) {
  return (
    <g transform={`translate(${x},${y})`}>
      {angulos.map((angulo) => (
        <ellipse key={angulo} rx={rx} ry={ry} fill={corPetala} transform={`rotate(${angulo})`} />
      ))}
      <circle r={raioMiolo} fill={corMiolo} />
    </g>
  );
}

function IlustracaoFlores() {
  return (
    <svg viewBox="0 0 300 300" fill="none" aria-hidden="true">
      <circle cx="150" cy="150" r="140" fill="#F6E2E7" />
      <FlorDesenhada x={150} y={150} rx={30} ry={55} angulos={[0, 72, 144, 216, 288]} corPetala="#D98CA0" raioMiolo={26} corMiolo="#D9963F" />
      <FlorDesenhada x={85} y={225} rx={16} ry={30} angulos={[15, -100, 140]} corPetala="#A9BE95" raioMiolo={12} corMiolo="#6A8852" />
      <FlorDesenhada x={225} y={90} rx={13} ry={24} angulos={[20, -95, 150]} corPetala="#ffffff" raioMiolo={10} corMiolo="#D9963F" />
    </svg>
  );
}

export default function Flores() {
  return (
    <section className="secao-flores" id="flores">
      <div className="container">
        <div className="flores-layout">
          <div className="flor-ilustracao">
            <IlustracaoFlores />
          </div>
          <div className="flores-texto">
            <span className="script-tag">Momentos que florescem</span>
            <h2>Flores para cada sentimento</h2>
            <p>
              Arranjos e buquês montados na hora, para presentear, decorar ou celebrar datas especiais — com a mesma
              atenção que colocamos em cada colchão.
            </p>
            <div className="ocasioes-grid">
              {OCASIOES.map((ocasiao) => (
                <div className="ocasiao-card" key={ocasiao.rotulo}>
                  <Icon nome={ocasiao.icone} />
                  <span>{ocasiao.rotulo}</span>
                </div>
              ))}
            </div>
            <a
              href={linkWhatsApp('Olá, Janice! Vim pelo site da Sonho Verde e quero montar um buquê.')}
              target="_blank"
              rel="noopener"
              className="btn btn-whats"
            >
              <Icon nome="whatsapp" />
              <span>Monte seu buquê pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
