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

  // Title text effect

  const texts = ["Software Engineer", "Web Developer", "Tech Enthusiast"];
  let currentIndex = 0;
  const changingTextElement = document.getElementById("changing-text");

  function typeEffect(text, i, callback) {
    if (i < text.length) {
      changingTextElement.innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      setTimeout(() => typeEffect(text, i + 1, callback), 100);
    } else if (typeof callback == "function") {
      setTimeout(callback, 700);
    }
  }

  function deleteEffect(text, i, callback) {
    if (i >= 0) {
      changingTextElement.innerHTML =
        text.substring(0, i) + '<span aria-hidden="true"></span>';
      setTimeout(() => deleteEffect(text, i - 1, callback), 50);
    } else if (typeof callback == "function") {
      setTimeout(callback, 300);
    }
  }

  function loopText() {
    typeEffect(texts[currentIndex], 0, () => {
      setTimeout(() => {
        deleteEffect(texts[currentIndex], texts[currentIndex].length, () => {
          currentIndex = (currentIndex + 1) % texts.length;
          loopText();
        });
      }, 2000);
    });
  }

  loopText();
});
