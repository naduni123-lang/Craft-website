// ========== MOBILE NAV TOGGLE ==========
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ========== FOOTER YEAR ==========
document.getElementById("year").textContent = new Date().getFullYear();

// ========== CONTACT FORM (FRONT-END ONLY) ==========
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.style.color = "#f97316";
    return;
  }

  formStatus.textContent = "Thank you! Your message has been sent.";
  formStatus.style.color = "#4ade80";
  contactForm.reset();
});

// ========== SCROLL REVEAL ==========
const revealSections = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealSections.forEach((section) => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
