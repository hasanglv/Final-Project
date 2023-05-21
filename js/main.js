const heartImg = document.querySelector(".trip-heart-img");
const menu = document.querySelector(".trip_menu");

[heartImg, menu].forEach((element) => {
    element.addEventListener("mouseenter", () => {
        menu.style.opacity = "1";
    });

    element.addEventListener("mouseleave", () => {
        menu.style.opacity = "0";
    });
});

const dropdown = document.querySelector(".dropdown");

function openDropdown() {
    dropdown.style.opacity = "1";
}

function closeDropdown() {
    dropdown.style.opacity = "0";
}

