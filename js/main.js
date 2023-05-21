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

var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", "-100%", -100],
            rotate: [100, 0, 0],
        },
        next: {
            origin: "right center",
            translate: [55, 95, -100],
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
