{
    const toggleSourceDisplay = () => {
        const source = document.querySelector(".js-source");
        const biographySource = document.querySelector(".section__link--biographySource");
        biographySource.classList.toggle("section__link--show");
        source.innerText = biographySource.classList.contains("section__link--show")
            ? "Pokaż" : "Ukryj";
    }

    const init = () => {
        const button = document.querySelector(".js-section__button");
        button.addEventListener("click", toggleSourceDisplay);
    }

    init();
}