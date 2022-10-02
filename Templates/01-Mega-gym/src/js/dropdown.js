const DROPDOWN = document.querySelector(".dropdown")
const BTN_DROPDOWN = document.querySelector(".btn-dropdown")

BTN_DROPDOWN.addEventListener("click", open_dropdown)
window.addEventListener("click", event => {
  if (!event.target.closest(".dropdown")) close_dropdown()
})

function open_dropdown() {
  DROPDOWN.classList.toggle("active")
}

function close_dropdown() {
  DROPDOWN.classList.remove("active")
}
