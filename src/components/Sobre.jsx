import fotoJanice from '../assets/img/janice.webp';

export default function Sobre() {
  return (
    <section className="secao-sobre" id="sobre">
      <div className="container sobre-layout">
        <div className="sobre-foto">
          <div className="anel"></div>
          <img src={fotoJanice} width="800" height="1224" loading="lazy" alt="Foto da proprietária da Sonho Verde" />
        </div>
        <div className="sobre-texto">
          <span className="script-tag">Quem sou eu?</span>
          <h2>A pessoa por trás da Sonho Verde</h2>
          <p>
            Meu nome é <strong>Janice Rodrigues</strong> e há mais de 10 anos trabalho com colchões, vendendo com muito
            carinho o conforto que seu sono precisa. Comecei com o sonho de ajudar as pessoas a dormirem melhor e, pelo
            caminho, descobri que flores também fazem parte disso — porque bem-estar é sono tranquilo e momentos bonitos
            no dia a dia.
          </p>
          <p>
            Hoje atendo cada cliente pessoalmente, ajudando a escolher o colchão certo e montando arranjos com carinho
            para cada ocasião. Se precisar de uma indicação, pode me chamar direto no WhatsApp.
          </p>
          <span className="sobre-assinatura">— Janice Rodrigues</span>
        </div>
      </div>
    </section>
  );
}
