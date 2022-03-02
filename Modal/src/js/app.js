const modalBtn = document.querySelector(".modalBtn");
const modalClose = document.querySelector(".modal__close");
const modalLayout = document.querySelector(".modal__layout");
const modal = document.querySelector(".modal");
modalBtn.addEventListener("click", () => {
  modalLayout.classList.toggle("hidden");
  modal.style.visibility =
    modal.style.visibility === "hidden" ? "visible" : "hidden";
});
modalClose.addEventListener("click", () => {
  modalLayout.classList.toggle("hidden");
  modal.style.visibility =
    modal.style.visibility === "hidden" ? "visible" : "hidden";
});
