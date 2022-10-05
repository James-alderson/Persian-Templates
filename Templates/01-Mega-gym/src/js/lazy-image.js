const LAZY_IMAGES = document.querySelectorAll("img[data-src]")

const imageOptions = {
  threshold: 0,
  rootMargin: "0px 0px 100px 0px"
}

const imageObserver = new IntersectionObserver(imageObs, imageOptions)

function imageObs(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return

    let lazyImage = entry.target
    lazyImage.src = lazyImage.dataset.src

    observer.unobserve(entry.target)
  })
}

LAZY_IMAGES.forEach(lazyImage => {
  imageObserver.observe(lazyImage)
})
