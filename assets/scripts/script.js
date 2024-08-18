var toggle = document.getElementById("toggle-ul")

const toggleMenu = () => {
    toggle.style.transform = "translateX(-50%)"
}

const toggleClose = () => {
    toggle.style.transform = "translateX(-100%)"
}

toggle.addEventListener('click',() => {
    toggle.style.transform = "translateX(-100%)"
})