function initAccordion() {
  const accordionList = document.querySelectorAll(".js-formacao button");
  if (accordionList.length) {
    function activeAccordion(event) {
      const lista = document.getElementById(
        event.currentTarget.getAttribute("aria-controls")
      );
      const ativo = lista.classList.toggle("ativo");
      event.currentTarget.setAttribute("aria-expanded", ativo);
    }

    accordionList.forEach((event) => {
      event.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll()