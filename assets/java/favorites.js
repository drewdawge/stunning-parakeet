const stars = document.getElementsByClassName("star")
console.log("stars:", stars)

for (const star of stars) {
    star.style.fill = localStorage.getItem(star.id)
    star.addEventListener('click', async () => {
        console.log('star clicked on', star.id)
        const starid = star.id
        // toggle fill color
        console.log("color:", window.getComputedStyle(star).getPropertyValue('fill'))
        if (window.getComputedStyle(star).getPropertyValue('fill')  === "rgb(255, 255, 0)") {
            star.style.fill = "none"
            localStorage.setItem(starid, "none")
        } else {
            star.style.fill = "rgb(255, 255, 0)"
            localStorage.setItem(starid, "rgb(255, 255, 0)")
        }
    })
}