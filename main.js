let menu = document.getElementById("menu");
let actions = document.getElementById("actions");

menu.addEventListener("click", () => {
  hundlMenu();
});

function hundlMenu() {
  menu.classList.toggle("active");
  actions.classList.toggle("active");
}

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
