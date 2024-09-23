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
