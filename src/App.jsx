import Header from './components/Header';
import Hero from './components/Hero';
import Pilares from './components/Pilares';
import Colchoes from './components/Colchoes';
import Flores from './components/Flores';
import Sobre from './components/Sobre';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsFlutuante from './components/WhatsFlutuante';

// A página inteira, na ordem em que aparece na tela.
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pilares />
        <Colchoes />
        <Flores />
        <Sobre />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsFlutuante />
    </>
  );
}
