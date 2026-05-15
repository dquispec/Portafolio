// Typing animation
const titles = [
  "Analista de Datos Advance",
  "Data Scientist",
  "Estadístico",
  "ML Enthusiast",
];

let titleIndex = 0;
let charIndex = 0;
let deleting = false;
const typedEl = document.getElementById("typedText");

function type() {
  const current = titles[titleIndex];
  if (deleting) {
    typedEl.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(type, 400);
      return;
    }
  } else {
    typedEl.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  }
  setTimeout(type, deleting ? 50 : 80);
}

type();

// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.style.borderBottomColor = window.scrollY > 10 ? "#30363d" : "transparent";
});

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navMobile = document.getElementById("navMobile");

menuBtn.addEventListener("click", () => {
  navMobile.classList.toggle("open");
});

function closeMobile() {
  navMobile.classList.remove("open");
}

// Scroll fade-in
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
  { threshold: 0.12 }
);

document.querySelectorAll(
  ".info-card, .skill-category, .project-card, .about-text, .contact-btn"
).forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// Smooth active nav link highlight
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 80) current = s.getAttribute("id");
  });
  navLinks.forEach((a) => {
    a.style.color = a.getAttribute("href") === `#${current}` ? "var(--accent)" : "";
  });
});
