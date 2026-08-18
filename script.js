import 'flowbite';
const shopButton = document.getElementById("shopButton");
const shopDropdown = document.getElementById("shopDropdown");

shopButton.addEventListener("click", () => {
    shopDropdown.classList.toggle("invisible");
    shopDropdown.classList.toggle("opacity-0");
    shopDropdown.classList.toggle("translate-y-2");
});

const logoSwiper = new Swiper(".logoSwiper", {
    loop: true,

    slidesPerView: 2,
    spaceBetween: 40,

    speed: 5000,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 50,
        },

        768: {
            slidesPerView: 5,
            spaceBetween: 60,
        },

        1024: {
            slidesPerView: 7,
            spaceBetween: 70,
        },
    },
});