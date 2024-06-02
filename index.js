// script.js
document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var menuIcon = menuToggle.querySelector("i");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("show");
    if (menu.classList.contains("show")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });

  // Ensure the menu and icon reset correctly on resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menu.classList.remove("show");
      menu.style.transform = "translateX(0)";
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });
});
