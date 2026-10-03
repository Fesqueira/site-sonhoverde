(function(){
  const header = document.getElementById('topo');
  const menuToggle = document.getElementById('menuToggle');
  const menuPrincipal = document.getElementById('menuPrincipal');
  const linksMenu = document.querySelectorAll('.link-menu');
  const secoes = document.querySelectorAll('section[id], header[id]');

  // header sombra ao rolar
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  });

  // menu mobile
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('aberto');
    menuPrincipal.classList.toggle('aberto');
  });
  linksMenu.forEach(link => link.addEventListener('click', () => {
    menuToggle.classList.remove('aberto');
    menuPrincipal.classList.remove('aberto');
  }));

  // rolagem suave com offset do header fixo
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
      const id = this.getAttribute('href');
      const alvo = document.querySelector(id);
      if(!alvo) return;
      e.preventDefault();
      const offset = 84;
      const top = alvo.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({top, behavior:'smooth'});
    });
  });

  // destaque do link ativo conforme a rolagem
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if(entrada.isIntersecting){
        const id = entrada.target.getAttribute('id');
        linksMenu.forEach(link => {
          link.classList.toggle('ativo', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px'});
  secoes.forEach(sec => observer.observe(sec));

  // carrossel
  const track = document.getElementById('carrosselTrack');
  const slides = track.children;
  const dotsWrap = document.getElementById('carrosselDots');
  let indiceAtual = 0;

  for(let i=0;i<slides.length;i++){
    const dot = document.createElement('button');
    if(i===0) dot.classList.add('ativo');
    dot.addEventListener('click', () => irPara(i));
    dotsWrap.appendChild(dot);
  }
  function irPara(i){
    indiceAtual = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${indiceAtual * 100}%)`;
    [...dotsWrap.children].forEach((d,idx) => d.classList.toggle('ativo', idx===indiceAtual));
  }
  document.getElementById('btnAnterior').addEventListener('click', () => irPara(indiceAtual-1));
  document.getElementById('btnProximo').addEventListener('click', () => irPara(indiceAtual+1));

  // abas de contato
  document.querySelectorAll('.aba-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.aba-btn').forEach(b => b.classList.remove('ativa'));
      document.querySelectorAll('.aba-conteudo').forEach(c => c.classList.remove('ativa'));
      btn.classList.add('ativa');
      document.getElementById('aba-' + btn.dataset.aba).classList.add('ativa');
    });
  });

  // formulário -> Web3Forms
  const form = document.getElementById('formContato');
  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', async function(e){
    e.preventDefault();
    msg.className = 'form-msg';
    const dados = new FormData(form);
    const objeto = Object.fromEntries(dados.entries());
    const botaoEnviar = form.querySelector('button[type="submit"]');
    botaoEnviar.disabled = true;
    botaoEnviar.textContent = 'Enviando...';
    try{
      const resposta = await fetch('https://api.web3forms.com/submit', {
        method:'POST',
        headers:{'Content-Type':'application/json', 'Accept':'application/json'},
        body: JSON.stringify(objeto)
      });
      const resultado = await resposta.json();
      if(resultado.success){
        msg.textContent = 'Mensagem enviada! Retornaremos em breve pelo WhatsApp ou e-mail.';
        msg.className = 'form-msg ok';
        form.reset();
      } else {
        throw new Error(resultado.message || 'Falha no envio');
      }
    }catch(err){
      msg.textContent = 'Não foi possível enviar agora. Tente novamente ou fale direto pelo WhatsApp.';
      msg.className = 'form-msg erro';
    }finally{
      botaoEnviar.disabled = false;
      botaoEnviar.textContent = 'Enviar mensagem';
    }
  });
})();