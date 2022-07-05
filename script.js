"use script"


let button = document.querySelector(".button");
let articleLinks = document.querySelector(".article-links");
let shareIcon = document.querySelector(".share-icon");


button.addEventListener("click", function() {
    toggle();
});


function toggle() {
    articleLinks.classList.toggle("show");
    button.classList.toggle("change-button-background-color");
    shareIcon.classList.toggle("filter");
}




/* Unselect if click is outside out of button or it's accompanying articleLinks */
document.addEventListener("click", (event) => {
    const isClickInside = button.contains(event.target) || articleLinks.contains(event.target);

    if (!isClickInside) {
        articleLinks.classList.remove("show");
        button.classList.remove("change-button-background-color");
        shareIcon.classList.remove("filter");
    }
});