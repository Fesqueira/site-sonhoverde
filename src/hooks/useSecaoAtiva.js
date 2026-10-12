import { useEffect, useState } from 'react';

// Devolve o id da seção que está no meio da tela, para destacar o link do menu.
export default function useSecaoAtiva(ids) {
  const [ativa, setAtiva] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) setAtiva(entrada.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const secao = document.getElementById(id);
      if (secao) observer.observe(secao);
    });
    return () => observer.disconnect();
  }, [ids]);

  return ativa;
}
