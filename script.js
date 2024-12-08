const button = document.querySelector(".next-button")
if (button) {
    button.addEventListener("click", () => {
        const intro = document.querySelector(".intro");
        const timeline = document.querySelector(".timeline");
        if (intro && timeline) {
            intro.style.display = "none";
            timeline.style.display = "block";
        }
    });
}