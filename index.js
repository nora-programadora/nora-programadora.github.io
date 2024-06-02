// script.js
// script.js
document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var menuIcon = menuToggle.querySelector("i");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("show");
    if (menu.classList.contains("show")) {
      menu.style.transform = "translateX(0)";
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    } else {
      menu.style.transform = "translateX(-100%)";
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });
});
