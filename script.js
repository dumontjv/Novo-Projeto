// script.js

// WhatsApp redirecionamento
function abrirWhatsApp() {
  const telefone = "5521996400151";
  const mensagem = encodeURIComponent("Olá! Gostaria de agendar uma sessão.");
  window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
}

// Scroll suave ao topo
const scrollBtn = document.getElementById("scroll-top");
scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Contador animado
const counter = document.getElementById("counter");
let count = 0;
const updateCounter = () => {
  const target = 150; // número real de sessões
  const increment = target / 100;
  const interval = setInterval(() => {
    count += increment;
    counter.innerText = Math.floor(count);
    if (count >= target) {
      counter.innerText = target;
      clearInterval(interval);
    }
  }, 30);
};

window.addEventListener("load", updateCounter);

// Integração com Formspree
const form = document.getElementById("form-contato");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    headers: { 'Accept': 'application/json' },
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      alert("Mensagem enviada com sucesso! Obrigado.");
      form.reset();
    } else {
      return response.json().then(data => {
        throw new Error(data.error || "Erro no envio");
      });
    }
  })
  .catch(err => {
    alert("Ops! Ocorreu um problema: " + err.message);
  });
});

// Tema claro/escuro
const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Animações ao rolar
const fadeIns = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeIns.forEach(el => observer.observe(el));