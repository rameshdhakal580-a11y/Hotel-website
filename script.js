// LOADER
window.onload = () => document.getElementById("loader").style.display = "none";

// DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// STICKY NAVBAR
window.onscroll = () => {
  document.getElementById("navbar").classList.toggle("sticky", window.scrollY > 50);
  fadeInSections();
};

// FADE-IN SECTIONS
function fadeInSections() {
  const sections = document.querySelectorAll(".fade-section");
  const triggerBottom = window.innerHeight * 0.9;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < triggerBottom) section.classList.add("visible");
  });
}
fadeInSections();

// FAKE BOOKING FORM ALERT
document.querySelector(".booking-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your booking request has been received (demo).");
  this.reset();
});

// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
