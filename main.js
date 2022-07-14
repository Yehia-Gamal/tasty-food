// Burger Menu
let menu = document.getElementById("menu");
let actions = document.getElementById("actions");

menu.addEventListener("click", () => {
  hundlMenu();
});

function hundlMenu() {
  menu.classList.toggle("active");
  actions.classList.toggle("active");
}

// Scroll Top
let btnUp = document.getElementById("back-to-top");

window.onscroll = function () {
  if (window.scrollY >= 400) {
    btnUp.style.visibility = "visible";
  } else {
    btnUp.style.visibility = "hidden";
  }
  btnUp.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Remove Menu Table On Scroll
  menu.classList.remove("active");
  actions.classList.remove("active");
};

let body = document.querySelector("section");

body.onclick = () => {
  menu.classList.remove("active");
  actions.classList.remove("active");
};

// Animation Section Reveal
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("Active");
    } else {
      reveals[i].classList.remove("Active");
    }
  }
}
