export function typeText({
  element,
  mainText,
  typeSpeed = 30,
}) {
    let textIndex = 0
    let charIndex = 0
    const text = mainText[textIndex]

    const intervalId = setInterval(() => {
        if (charIndex >= text.length) {
            clearInterval(intervalId)
        }
        typeChar()
    }, typeSpeed)

    function typeChar() {
        element.textContent = text.slice(0, charIndex++)
    }
}