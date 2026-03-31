// LOADER
window.onload = () => document.getElementById("loader").style.display = "none";

// DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// STICKY NAVBAR
window.onscroll = () => {
  document.getElementById("navbar").classList.toggle("sticky", window.scrollY > 50);
};

// SMOOTH SCROLL OFFSET
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = target.offsetTop - document.getElementById("navbar").offsetHeight;
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // Close mobile menu after click
    document.getElementById('nav-links').classList.remove('active');
  });
});

// MOBILE MENU TOGGLE
document.querySelector('.nav-toggle').onclick = () => {
  document.getElementById('nav-links').classList.add('active');
};
document.getElementById('nav-close').onclick = () => {
  document.getElementById('nav-links').classList.remove('active');
};

// FAKE BOOKING FORM ALERT
document.querySelector(".booking-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your booking request has been received (this is a demo).");
  this.reset();
});
