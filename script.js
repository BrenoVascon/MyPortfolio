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



const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});


window.sr = ScrollReveal({reset: true});



ScrollReveal().reveal('.me, .me-p, .myskills, .tecnologias', {delay: 600});