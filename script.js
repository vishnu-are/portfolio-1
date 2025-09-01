document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar toggle for mobile view
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  window.scrollY > 50
    ? (navbar.style.backgroundColor = "rgba(10, 10, 10, 0.98)")
    : (navbar.style.backgroundColor = "rgba(10, 10, 10, 9.5)");
});

let projects = document.getElementById("projects");
projects.addEventListener("click", () => {
  alert("Projects are not Mentioned at!");
});
