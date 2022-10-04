const IFRAME_CONTAINER = document.querySelector(".iframe-container")
const HAVE_IFRAME = IFRAME_CONTAINER.querySelector("iframe")
const IFRAME_BUTTON = document.querySelector(".btn-iframe")

IFRAME_BUTTON.addEventListener("click", create_iframe)

function create_iframe(event) {
  if (HAVE_IFRAME) return

  let iframeSrc = event.target.getAttribute("data-src")
  let iframe = document.createElement("iframe")

  IFRAME_CONTAINER.appendChild(iframe)
  IFRAME_BUTTON.classList.add("d-none")

  set_attribute(iframe, {
    "src": iframeSrc,
    "allowfullscreen": "",
    "referrerpolicy": "no-referrer-when-downgrade"
  })
}

function set_attribute(element, attribute) {
  for (let key in attribute) {
    element.setAttribute(key, attribute[key])
  }
}
