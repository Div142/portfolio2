// Typing animation
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
