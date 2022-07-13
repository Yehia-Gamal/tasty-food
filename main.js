let menu = document.getElementById("menu");
let actions = document.getElementById("actions");

menu.addEventListener("click", () => {
  hundlMenu();
});

function hundlMenu() {
  menu.classList.toggle("active");
  actions.classList.toggle("active");
}
