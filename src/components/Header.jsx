import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import useSecaoAtiva from '../hooks/useSecaoAtiva';
import { MENU, linkWhatsApp } from '../data/site';
import logo from '../assets/img/logo.webp';

const IDS_DO_MENU = MENU.map((item) => item.id);

export default function Header() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const secaoAtiva = useSecaoAtiva(IDS_DO_MENU);
  const navRef = useRef(null);
  const botaoRef = useRef(null);

  // sombra no cabeçalho depois de rolar um pouco
  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 30);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  // menu mobile fecha com Esc ou clicando fora dele
  useEffect(() => {
    if (!menuAberto) return;
    const aoTeclar = (e) => {
      if (e.key === 'Escape') setMenuAberto(false);
    };
    const aoClicar = (e) => {
      if (!navRef.current.contains(e.target) && !botaoRef.current.contains(e.target)) setMenuAberto(false);
    };
    document.addEventListener('keydown', aoTeclar);
    document.addEventListener('click', aoClicar);
    return () => {
      document.removeEventListener('keydown', aoTeclar);
      document.removeEventListener('click', aoClicar);
    };
  }, [menuAberto]);

  return (
    <header className={rolou ? 'scrolled' : ''}>
      <div className="container nav-wrap">
        <a href="#inicio" className="logo-link">
          <img src={logo} width="500" height="159" alt="Sonho Verde — Colchões & Flores" />
        </a>

        <nav className={`menu-principal ${menuAberto ? 'aberto' : ''}`} id="menuPrincipal" ref={navRef}>
          <ul>
            {MENU.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`link-menu ${secaoAtiva === item.id ? 'ativo' : ''}`}
                  onClick={() => setMenuAberto(false)}
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <a href={linkWhatsApp()} target="_blank" rel="noopener" className="btn btn-whats">
            <Icon nome="whatsapp" />
            <span>WhatsApp</span>
          </a>
          <button
            className={`menu-toggle ${menuAberto ? 'aberto' : ''}`}
            ref={botaoRef}
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
            aria-controls="menuPrincipal"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
