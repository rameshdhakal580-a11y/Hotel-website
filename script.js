// LOADER
window.onload = () => document.getElementById("loader").style.display = "none";

// DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// STICKY NAVBAR & ACTIVE LINKS
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("sticky", window.scrollY > 50);

  const sections = document.querySelectorAll("section, .welcome");
  const scrollPos = window.scrollY + navbar.offsetHeight + 5;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const id = sec.id || "home";
    const navLink = document.querySelector(`nav a[href="#${id}"]`);
    if(scrollPos >= top && scrollPos < bottom) {
      document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
      if(navLink) navLink.classList.add("active");
    }
  });
});

// FAKE BOOKING FORM ALERT
document.querySelector(".booking-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your booking request has been received (this is a demo).");
  this.reset();
});