// script.js — Centro Espírita

document.addEventListener('DOMContentLoaded', () => {

  // ============ FAQ (acordeão) ============
  const perguntas = document.querySelectorAll('.faq__pergunta');

  perguntas.forEach((botao) => {
    botao.addEventListener('click', () => {
      const resposta = botao.nextElementSibling;
      const estaAberto = botao.getAttribute('aria-expanded') === 'true';

      // fecha todos os outros itens abertos
      perguntas.forEach((outroBotao) => {
        if (outroBotao !== botao) {
          outroBotao.setAttribute('aria-expanded', 'false');
          outroBotao.nextElementSibling.style.maxHeight = null;
        }
      });

      // abre ou fecha o item clicado
      if (estaAberto) {
        botao.setAttribute('aria-expanded', 'false');
        resposta.style.maxHeight = null;
      } else {
        botao.setAttribute('aria-expanded', 'true');
        resposta.style.maxHeight = resposta.scrollHeight + 'px';
      }
    });
  });

});