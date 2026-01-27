// Typing
const text = "IT Student | Aspiring Software Developer";
const el = document.querySelector(".typing");
let i = 0;

function type() {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}
type();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));
