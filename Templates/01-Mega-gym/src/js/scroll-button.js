const ELEMENT_SCROLL = document.querySelector(".quick-info")
const BUTTON_SCROLL = document.querySelector(".btn-scroll")

window.addEventListener("scroll", toggle_class)
window.addEventListener("load", toggle_class)
BUTTON_SCROLL.addEventListener("click", scroll_top)

function toggle_class() {
  let windowPosition = window.innerHeight + window.scrollY

  if (windowPosition >= ELEMENT_SCROLL.offsetTop) {
    BUTTON_SCROLL.classList.add("show")
  }
  else {
    BUTTON_SCROLL.blur()
    BUTTON_SCROLL.classList.remove("show")
  }
}

function scroll_top() {
  window.scrollTo({ top: 0 })
}
