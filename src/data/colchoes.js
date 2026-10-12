import bless from '../assets/img/colchao-bless.webp';
import inspire from '../assets/img/colchao-inspire.webp';
import latitudeOne from '../assets/img/colchao-latitude-one.webp';
import mindPlus from '../assets/img/colchao-mind-plus.webp';

// Cada item vira um slide no carrossel de colchões.
export const COLCHOES = [
  {
    nome: 'Bless',
    tag: 'Equilíbrio noturno',
    imagem: bless,
    largura: 900,
    altura: 449,
    descricao:
      'Para quem busca o equilíbrio perfeito entre firmeza e maciez, com acabamento pillow top acolchoado do início ao fim da noite.',
    destaques: ['Molas ensacadas independentes', 'Pillow top macio e acolchoado', 'Indicado para casais'],
  },
  {
    nome: 'Inspire',
    tag: 'Maciez que inspira',
    imagem: inspire,
    largura: 900,
    altura: 462,
    descricao:
      'Camadas de espuma com tecnologia em gel para uma sensação de frescor a noite toda, em um conforto macio e envolvente.',
    destaques: ['Espuma com gel refrescante', 'Toque macio e envolvente', 'Molas ensacadas reforçadas'],
  },
  {
    nome: 'Latitude One',
    tag: 'Base firme, sono estável',
    imagem: latitudeOne,
    largura: 900,
    altura: 433,
    descricao:
      'Firmeza equilibrada com suporte reforçado, ideal para quem gosta de uma base mais firme sem abrir mão do conforto.',
    destaques: ['Suporte firme e estável', 'Camada em gel para conforto', 'Ótimo custo-benefício'],
  },
  {
    nome: 'Mind+',
    tag: 'Descanso que renova',
    imagem: mindPlus,
    largura: 900,
    altura: 446,
    descricao:
      'Suporte elevado e estrutura reforçada para uma noite de descanso profundo, sem perder a suavidade no toque.',
    destaques: ['Alto suporte (high support)', 'Estrutura reforçada', 'Toque em gel macio'],
  },
];
