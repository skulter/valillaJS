const toggleBtn = document.querySelector(".nav__toggleBtn");
const menu = document.querySelector(".nav__menu ");
const sns = document.querySelector(".nav__sns");

toggleBtn.addEventListener("click", (event) => {
  menu.classList.toggle("active");
  sns.classList.toggle("active");
});
