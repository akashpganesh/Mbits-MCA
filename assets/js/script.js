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

document.addEventListener("DOMContentLoaded", () => {
    // Simulate an API request or any async operation
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 1000); // Replace with your actual data loading logic and time

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
    }
});
