const curso = document.querySelectorAll(".curso button");

function ativarCurso(event) {
  const curso = event.currentTarget;
  const controls = curso.getAttribute("aria-controls");
  const lista = document.getElementById(controls);

  lista.classList.toggle("ativa");
  const ativa = lista.classList.contains("ativa");
  curso.setAttribute("aria-expanded", ativa);
}

function eventosCurso(curso) {
  curso.addEventListener("click", ativarCurso);
}

curso.forEach(eventosCurso);
