let button = document.querySelector(".js-section__button");
let source = document.querySelector(".js-source");
let show = document.querySelector(".section__link--show");
let biographySource = document.querySelector(".section__link--biographySource");

button.addEventListener("click", () => {
    biographySource.classList.toggle("section__link--show");

    source.innerText = biographySource.classList.contains("section__link--show")
        ? "Pokaż" : "Ukryj";
});