// Dados gerais da loja. Mudou telefone, endereço ou rede social? É só aqui.

export const LOJA = {
  nome: 'Sonho Verde',
  slogan: 'Colchões & Flores',
  whatsapp: '5551982722468',
  telefone: '(51) 98272-2468',
  email: 'janicesonhoverde@gmail.com',
  endereco: 'Rua Porto Seguro, 951, Canoas - RS',
  horario: '9h às 17h',
  // TODO: preencher com o link do perfil (ex.: https://instagram.com/sonhoverde).
  // Enquanto estiver vazio, o Instagram não aparece no site.
  instagram: '',
  googleMaps: 'https://www.google.com/maps/place/Sonho+Verde/data=!4m2!3m1!1s0x9519717140592d6b:0xf238e4e71837a264?hl=pt-BR',
  // TODO: link do site da Simplifica Tech. Vazio = aparece só o nome, sem link.
  desenvolvedor: { nome: 'Simplifica Tech', link: '' },
};

export const MENU = [
  { id: 'inicio', rotulo: 'Início' },
  { id: 'colchoes', rotulo: 'Colchões' },
  { id: 'flores', rotulo: 'Floricultura' },
  { id: 'sobre', rotulo: 'Quem Somos' },
  { id: 'depoimentos', rotulo: 'Depoimentos' },
  { id: 'contato', rotulo: 'Contato' },
];

// Monta um link de WhatsApp já com a mensagem escrita.
export function linkWhatsApp(mensagem = 'Olá, Janice! Vim pelo site da Sonho Verde.') {
  return `https://wa.me/${LOJA.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
