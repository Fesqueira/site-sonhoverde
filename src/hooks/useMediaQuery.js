import { useEffect, useState } from 'react';

// true enquanto a tela bater com a media query (ex.: '(max-width:780px)').
export default function useMediaQuery(query) {
  const [bate, setBate] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const atualizar = () => setBate(mq.matches);
    atualizar();
    mq.addEventListener('change', atualizar);
    return () => mq.removeEventListener('change', atualizar);
  }, [query]);

  return bate;
}
