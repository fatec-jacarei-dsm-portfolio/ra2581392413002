// Menu mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Header scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Animação de elementos ao scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll(".area-card, .projeto-card").forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});
// Filtragem de projetos
// document.addEventListener("DOMContentLoaded", () => {
//   const filterButtons = document.querySelectorAll(".filter-button");
//   const projectCards = document.querySelectorAll(".projeto-card");

      // Filtro de projetos
      document.addEventListener("DOMContentLoaded", function () {
        const filtroSelect = document.getElementById("filtro-categorias");
        const projetos = document.querySelectorAll(".projeto-card");

        function filtrarProjetos() {
          const categoriaSelecionada = filtroSelect.value;

          projetos.forEach((projeto) => {
            const categoriasProjeto = projeto
              .getAttribute("data-categorias")
              .split(" ");

            if (
              categoriaSelecionada === "todos" ||
              categoriasProjeto.includes(categoriaSelecionada)
            ) {
              projeto.classList.remove("hidden");
              setTimeout(() => {
                projeto.style.display = "block";
              }, 50);
            } else {
              projeto.classList.add("hidden");
              setTimeout(() => {
                projeto.style.display = "none";
              }, 300);
            }
          });
        }

        filtroSelect.addEventListener("change", filtrarProjetos);
        filtrarProjetos();
      });