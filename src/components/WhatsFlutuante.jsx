import Icon from './Icon';
import { linkWhatsApp } from '../data/site';

export default function WhatsFlutuante() {
  return (
    <a href={linkWhatsApp()} target="_blank" rel="noopener" className="whats-flutuante" aria-label="Falar no WhatsApp">
      <Icon nome="whatsapp" tamanho={28} />
    </a>
  );
}
