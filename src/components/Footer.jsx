import Icon from './Icon';
import { LOJA, MENU, linkWhatsApp } from '../data/site';
import logoClaro from '../assets/img/logo-claro.webp';

export default function Footer() {
  const { desenvolvedor } = LOJA;

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src={logoClaro} width="500" height="139" loading="lazy" alt="Sonho Verde" />
            </div>
            <p>
              Colchões para noites melhores e flores para os seus momentos mais bonitos — tudo em um só lugar, com
              atendimento próximo e pessoal.
            </p>
            <div className="footer-social">
              {LOJA.instagram && (
                <a href={LOJA.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                  <Icon nome="instagram" />
                </a>
              )}
              <a href={linkWhatsApp()} target="_blank" rel="noopener" aria-label="WhatsApp">
                <Icon nome="whatsapp" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              {MENU.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.rotulo}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              <li><a href={`tel:+${LOJA.whatsapp}`}>{LOJA.telefone}</a></li>
              <li><a href={`mailto:${LOJA.email}`}>{LOJA.email}</a></li>
              <li><a href={LOJA.googleMaps} target="_blank" rel="noopener">{LOJA.endereco}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span>© {new Date().getFullYear()} Sonho Verde — Colchões & Flores. Todos os direitos reservados.</span>
          <span>
            Site desenvolvido por{' '}
            {desenvolvedor.link ? (
              <a href={desenvolvedor.link} target="_blank" rel="noopener">{desenvolvedor.nome}</a>
            ) : (
              <strong>{desenvolvedor.nome}</strong>
            )}
          </span>
        </div>
      </div>
    </footer>
  );
}
