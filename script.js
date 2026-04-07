const phrases = [
  "Aspiring software developer with a systems mindset.",
  "Focused on problem solving, OOP, and strong CS fundamentals.",
  "Building practical projects with clarity and discipline."
];

const typingTarget = document.querySelector(".typing");
const revealItems = document.querySelectorAll(".reveal");
const floatingCards = document.querySelectorAll(".floating-card");
const cursorRing = document.querySelector(".cursor-ring");
const cursorDot = document.querySelector(".cursor-dot");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  if (!typingTarget) return;

  const currentPhrase = phrases[phraseIndex];
  typingTarget.textContent = currentPhrase.slice(0, charIndex);

  const speed = isDeleting ? 30 : 55;

  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex += 1;
  } else if (isDeleting && charIndex > 0) {
    charIndex -= 1;
  } else if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeLoop, 1400);
    return;
  } else {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  setTimeout(typeLoop, speed);
}

function revealImmediately() {
  revealItems.forEach(item => item.classList.add("visible"));
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealImmediately();
}

floatingCards.forEach(card => {
  card.addEventListener("pointerenter", () => {
    card.classList.add("is-hovered");
  });

  card.addEventListener("pointerleave", () => {
    card.classList.remove("is-hovered");
  });
});

function showCursor() {
  if (!cursorRing || !cursorDot) return;
  cursorRing.style.opacity = "1";
  cursorDot.style.opacity = "1";
}

function moveCursor(event) {
  if (!cursorRing || !cursorDot || window.innerWidth <= 720) return;

  const { clientX, clientY } = event;
  cursorDot.style.left = `${clientX}px`;
  cursorDot.style.top = `${clientY}px`;
  cursorRing.style.left = `${clientX}px`;
  cursorRing.style.top = `${clientY}px`;
}

window.addEventListener("mousemove", event => {
  showCursor();
  moveCursor(event);
});

window.addEventListener("mouseleave", () => {
  if (!cursorRing || !cursorDot) return;
  cursorRing.style.opacity = "0";
  cursorDot.style.opacity = "0";
});

typeLoop();
