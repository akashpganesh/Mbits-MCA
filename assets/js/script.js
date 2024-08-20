var toggle = document.getElementById("toggle-ul")

const toggleMenu = () => {
    toggle.style.transform = "translateX(-50%)"
}

const toggleClose = () => {
    toggle.style.transform = "translateX(-100%)"
}

const openImg = (imgSrc) => {
    imgDisp = document.getElementById('image-disp');
    imgContent = document.getElementById('img-content');

    imgDisp.style.display = 'flex';
    imgContent.src = imgSrc;
}

const closeImg = () => {
    imgDisp = document.getElementById('image-disp');
    imgDisp.style.display = 'none';
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

document.getElementById("y-2023").addEventListener("click", function() {
    window.location.href = "./Gallery/year2023.html";
});