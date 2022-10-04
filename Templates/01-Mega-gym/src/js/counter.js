const COUNTERS = document.querySelectorAll(".counter")
const DELAY = 2000
const COUNTER_SPEED = DELAY / 45

const counterOptions = {
  threshold: 0.3
}

const counterObserver = new IntersectionObserver(counterObs, counterOptions)

function counterObs(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return

    counterNumber(entry.target)

    observer.unobserve(entry.target)
  })
}

COUNTERS.forEach(counter => {
  counterObserver.observe(counter)
})


function counterNumber(targetElement) {
  let counter = targetElement
  let counterTarget = +counter.getAttribute("data-target")
  let counterCount = 0
  let counterStep = counterTarget / COUNTER_SPEED

  function updateCounter() {
    counterCount = Math.ceil(counterCount + counterStep)
    counter.innerText = counterCount.toLocaleString()

    if (counterCount < counterTarget) {
      setTimeout(updateCounter, COUNTER_SPEED)
    } else {
      counter.innerText = counterTarget.toLocaleString()
    }
  }
  updateCounter()
}
