document.addEventListener("DOMContentLoaded", function () {

  const elements = document.querySelectorAll(".appear-on-scroll");

  // Se não houver elementos, não faz nada
  if (!elements.length) return;

  // Fallback para browsers sem IntersectionObserver:
  // mostra logo os elementos (sem animação em vez de ficar tudo invisível)
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        // Delay diferente para esquerda/direita
        if (entry.target.classList.contains("fade-right")) {
          entry.target.style.transitionDelay = "0.3s";
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: "0px 0px -50px 0px"
  });

  elements.forEach(el => observer.observe(el));

});
