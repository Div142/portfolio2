// Typing
const text = "IT Student | Aspiring Software Developer";
const el = document.querySelector(".typing");
let i = 0;
(function type() {
  if (i < text.length) {
    el.textContent += text.charAt(i++);
    setTimeout(type, 70);
  }
})();

// Block interaction
const blocks = document.querySelectorAll(".block");
const grid = document.querySelector(".block-grid");

blocks.forEach(block => {
  block.addEventListener("click", e => {
    if (e.target.classList.contains("close")) return;

    const isActive = block.classList.contains("active");
    blocks.forEach(b => b.classList.remove("active"));
    grid.classList.remove("dim");

    if (!isActive) {
      block.classList.add("active");
      grid.classList.add("dim");
    }
  });

  block.querySelector(".close").addEventListener("click", e => {
    e.stopPropagation();
    block.classList.remove("active");
    grid.classList.remove("dim");
  });
});

// ESC to close
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    blocks.forEach(b => b.classList.remove("active"));
    grid.classList.remove("dim");
  }
});
