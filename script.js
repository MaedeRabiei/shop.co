import 'flowbite';
const shopButton = document.getElementById("shopButton");
const shopDropdown = document.getElementById("shopDropdown");

shopButton.addEventListener("click", () => {
    shopDropdown.classList.toggle("invisible");
    shopDropdown.classList.toggle("opacity-0");
    shopDropdown.classList.toggle("translate-y-2");
});