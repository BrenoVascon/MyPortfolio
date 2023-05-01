new TypeIt(".auto-text", {
  strings: "Eu sou o Breno.",
  speed: 50,
  waitUntilVisible: true,
}).go();



// new TypeIt(".mytext", {
//   strings: "Olá, bem-vindo(a) ao meu portfólio! Sou um desenvolvedor Front-end apaixonado por criar interfaces impactantes que conectam as pessoas à tecnologia. Com habilidades técnicas sólidas e um olhar atento ao design, sempre busco produzir soluções criativas e eficientes para enfrentar desafios de todos os tipos.",
//   speed: 10,
//   waitUntilVisible: true,
// }).go();






window.sr = ScrollReveal({reset: true});
const icon = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 600) {
    icon.classList.remove('disabled');
  } else {
    icon.classList.add('disabled');
  }
});


ScrollReveal().reveal('.me, .me-p, .myskills, .tecnologias, .myproject, .Projetos, .slider, .image-contact, .form-Contact, RdSociais2', {delay: 600});