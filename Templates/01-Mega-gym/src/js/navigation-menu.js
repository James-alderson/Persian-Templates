const MENU_OPEN = document.querySelector("#menuOpen")
const MENU_CLOSE = document.querySelector("#menuClose")
const BLACK_FILTER = document.querySelector(".black-filter")

MENU_OPEN.addEventListener("click", open_menu)
MENU_CLOSE.addEventListener("click", close_menu)
BLACK_FILTER.addEventListener("click", close_menu)
window.addEventListener("resize", () => {
  if (window.innerWidth > 991) close_menu()
})

function open_menu() {
  document.body.classList.add("menu-open")
}

function close_menu() {
  document.body.classList.remove("menu-open")
}
