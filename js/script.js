const curso = document.querySelectorAll(".formacao button");

function ativarCurso(event) {
  const lista = document.getElementById(event.currentTarget.getAttribute("aria-controls")
  );
  const ativo = lista.classList.toggle("ativo");
  event.currentTarget.setAttribute("aria-expanded", ativo);
}

curso.forEach((event) => {
  event.addEventListener("click", ativarCurso);
});

window.addEventListener('scroll', function() {
  const fixedElement = document.getElementById('fixedElement');
  const footer = document.querySelector('.footer');
  
  // Pega as posições do footer e do elemento fixo
  const footerRect = footer.getBoundingClientRect();
  const fixedElementRect = fixedElement.getBoundingClientRect();
  
  // Se o elemento fixo estiver se sobrepondo ao footer, "parar" ele
  if (footerRect.top <= window.innerHeight) {
      fixedElement.classList.add('stopped');
  } else {
      fixedElement.classList.remove('stopped');
  }
});