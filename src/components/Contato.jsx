import { useState } from 'react';
import Icon from './Icon';
import { LOJA, linkWhatsApp } from '../data/site';

// A chave do Web3Forms fica no arquivo .env (veja o .env.example).
const CHAVE_WEB3FORMS = import.meta.env.VITE_WEB3FORMS_KEY;

function Formulario() {
  // estado do envio: 'parado' | 'enviando' | 'ok' | 'erro'
  const [estado, setEstado] = useState('parado');

  async function enviar(e) {
    e.preventDefault();
    const form = e.target;
    const dados = Object.fromEntries(new FormData(form).entries());
    setEstado('enviando');
    try {
      const resposta = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: CHAVE_WEB3FORMS,
          subject: 'Novo contato pelo site — Sonho Verde',
          ...dados,
        }),
      });
      const resultado = await resposta.json();
      if (!resultado.success) throw new Error(resultado.message || 'Falha no envio');
      setEstado('ok');
      form.reset();
    } catch {
      setEstado('erro');
    }
  }

  return (
    <form onSubmit={enviar}>
      {/* campo-armadilha: gente não vê, robô de spam preenche e o Web3Forms descarta */}
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="form-grid">
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="Nome" required placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="telefone">WhatsApp / Telefone</label>
          <input type="tel" id="telefone" name="Telefone" required placeholder="(00) 00000-0000" />
        </div>
        <div className="full">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="E-mail" required placeholder="seu@email.com" />
        </div>
        <div className="full">
          <label htmlFor="assunto">Tenho interesse em</label>
          <select id="assunto" name="Assunto">
            <option>Colchões</option>
            <option>Flores</option>
            <option>Os dois</option>
            <option>Outro assunto</option>
          </select>
        </div>
        <div className="full">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="Mensagem" required placeholder="Conte um pouco do que você precisa"></textarea>
        </div>
      </div>
      <button type="submit" className="btn btn-primario btn-enviar" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
      </button>
      {estado === 'ok' && (
        <div className="form-msg ok">Mensagem enviada! Retornaremos em breve pelo WhatsApp ou e-mail.</div>
      )}
      {estado === 'erro' && (
        <div className="form-msg erro">
          Não foi possível enviar agora. Tente novamente ou fale direto pelo WhatsApp.
        </div>
      )}
    </form>
  );
}

function ItemContato({ icone, titulo, children, largo }) {
  return (
    <div className={`contato-item ${largo ? 'full' : ''}`}>
      <div className="icone-contato">
        <Icon nome={icone} />
      </div>
      <div>
        <strong>{titulo}</strong>
        {children}
      </div>
    </div>
  );
}

function ListaContatos() {
  return (
    <div className="contatos-lista">
      <ItemContato icone="whatsapp" titulo="WhatsApp">
        <a href={linkWhatsApp()} target="_blank" rel="noopener">Janice</a>
      </ItemContato>
      <ItemContato icone="telefone" titulo="Telefone">
        <a href={`tel:+${LOJA.whatsapp}`}>{LOJA.telefone}</a>
      </ItemContato>
      <ItemContato icone="pin" titulo="Endereço">
        <a href={LOJA.googleMaps} target="_blank" rel="noopener">{LOJA.endereco}</a>
      </ItemContato>
      <ItemContato icone="relogio" titulo="Horário de funcionamento">
        <span>{LOJA.horario}</span>
      </ItemContato>
      {LOJA.instagram && (
        <ItemContato icone="instagram" titulo="Instagram" largo>
          <a href={LOJA.instagram} target="_blank" rel="noopener">
            @{LOJA.instagram.replace(/\/$/, '').split('/').pop()}
          </a>
        </ItemContato>
      )}
    </div>
  );
}

const ABAS = [
  { id: 'formulario', rotulo: 'Formulário' },
  { id: 'contatos', rotulo: 'Nossos contatos' },
];

export default function Contato() {
  const [aba, setAba] = useState('formulario');

  return (
    <section className="secao-contato" id="contato">
      <div className="container">
        <div className="section-head center">
          <span className="script-tag">Vamos conversar?</span>
          <h2>Fale com a Sonho Verde</h2>
          <p>Preencha o formulário ou fale direto com a gente pelos contatos abaixo.</p>
        </div>

        <div className="contato-box">
          <div className="abas-nav">
            {ABAS.map((item) => (
              <button
                key={item.id}
                className={`aba-btn ${aba === item.id ? 'ativa' : ''}`}
                onClick={() => setAba(item.id)}
              >
                {item.rotulo}
              </button>
            ))}
          </div>

          {/* as duas abas ficam montadas para o formulário não perder o que foi digitado */}
          <div className={`aba-conteudo ${aba === 'formulario' ? 'ativa' : ''}`}>
            <Formulario />
          </div>
          <div className={`aba-conteudo ${aba === 'contatos' ? 'ativa' : ''}`}>
            <ListaContatos />
          </div>
        </div>
      </div>
    </section>
  );
}
