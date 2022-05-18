/**
 * Variables
 */

const background = document.querySelector("body");
const rightOpenRectangle = document.querySelector("article>section:nth-of-type(4)");
const topOpenRectangle = document.querySelector("article>section:nth-of-type(5)");

const dPadLeft = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol li:nth-of-type(1) button");
const dPadUp = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol li:nth-of-type(2) button");
const dPadRight = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol li:nth-of-type(3) button");
const dPadDown = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol li:nth-of-type(4) button");

const dPad = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol");

const screenTop = document.querySelector("article > section:nth-of-type(5) > ol:nth-of-type(2) > li:nth-of-type(1) > section");
const screenBottom = document.querySelector("article > section:nth-of-type(1) > ol:nth-of-type(1) > li:nth-of-type(1) > section");

const pokeListTop = document.querySelector("article > section:nth-of-type(5) > ol:nth-of-type(2) > li:nth-of-type(1) > section ol");
const pokeListTopChildren = document.querySelectorAll("article > section:nth-of-type(5) > ol:nth-of-type(2) > li:nth-of-type(1) > section ol > li");

const pokeListBottom = document.querySelector("article > section:nth-of-type(1) > ol:nth-of-type(1) > li:nth-of-type(1) > section ol");
const pokeListBottomChildren = document.querySelectorAll("article > section:nth-of-type(1) > ol:nth-of-type(1) > li:nth-of-type(1) > section ol > li");

const longButton = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) > ol:nth-of-type(1) li:nth-of-type(1) button");
const typeArray = ["normal", "water", "electric", "fire", "psychic", "dark", "grass", "ice", "fairy"];
const voiceFileDir = "assets/audio";
const imagesDir = "assets/images";
const eeveeArray = ["eevee", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon", "sylveon"];
const rightButton = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ul > li:nth-of-type(2) button");

const favicon = document.querySelector("link[rel~='icon']");

let pokeCounter = 0;

/**
 * Functions
 */

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const setMetadata = () => {
    favicon.type = "image/x-icon";
    favicon.rel = "shortcut icon";
    favicon.href = `${imagesDir}/${eeveeArray[pokeCounter]}.gif`;
    document.getElementsByTagName('head')[0].appendChild(favicon);

    document.title = `Eeveelution: ${capitalizeFirstLetter(eeveeArray[pokeCounter])}`
}

const playAudio = () => {
    const audio = new Audio(`${voiceFileDir}/${eeveeArray[pokeCounter]}.mp3`)
    audio.play();
}

const openRectangle = (rectangle) => rectangle.classList.toggle("open");

const setNextPokemon = () => {
    setCurrent();

    background.removeAttribute("class");
    background.classList.add(typeArray[pokeCounter]);

    pokeListTop.scroll({ top: pokeListTopChildren[pokeCounter].offsetTop - 10, left: 0, behavior: 'smooth' });
    pokeListBottom.scroll({ top: pokeListBottomChildren[pokeCounter].offsetTop - 10, left: 0, behavior: 'smooth' });
}

const setCurrent = () => {
    for (let i = 0; i < pokeListTopChildren.length; i++) {
        if (i === pokeCounter) {
            pokeListTopChildren[i].classList.add("current");
        } else {
            pokeListTopChildren[i].classList.remove("current");
        }
    };
};

const goNext = () => {
    dPad.classList.add("down");

    if (background.hasAttribute("class")) {

        if (pokeCounter === pokeListBottomChildren.length - 1) {
            pokeCounter = 0;
        } else {
            pokeCounter++;
        }

        setNextPokemon();
        setMetadata();
    };
};

const goPrevious = () => {
    dPad.classList.add("up");

    if (background.hasAttribute("class")) {

        if (pokeCounter === 0) {
            pokeCounter = pokeListBottomChildren.length - 1;
        } else {
            pokeCounter--;
        }

        setNextPokemon();
        setMetadata();
    };
};

/**
 * Eventlisteners
 */

document.addEventListener("DOMContentLoaded", () => {
    setCurrent();

    // Delay for opening the pokedex
    setTimeout(() => {
        openRectangle(topOpenRectangle);
        openRectangle(rightOpenRectangle);
    }, 2000);
});

document.addEventListener("keydown", (event) => {
    const key = event.key;

    switch (key) {
        case "ArrowLeft":
            dPad.classList.add("left");
            break;
        case "ArrowRight":
            dPad.classList.add("right");
            break;
        case "ArrowUp":
            goPrevious();
            break;
        case "ArrowDown":
            goNext();
            break;
    };

    if (key === "Enter") {
        switch (document.activeElement) {
            case rightOpenRectangle:
                openRectangle(rightOpenRectangle);
                break;
            case topOpenRectangle:
                openRectangle(topOpenRectangle);
                break;
            case dPadUp:
                goPrevious();
                break;
            case dPadDown:
                goNext();
                break;
        };
    };
});

/**
 * Open rectangles
 */

topOpenRectangle.addEventListener("click", () => openRectangle(topOpenRectangle));

rightOpenRectangle.addEventListener("click", () => openRectangle(rightOpenRectangle));

/**
 * D-pad functions
 */

dPadLeft.addEventListener("mousedown", () => dPad.classList.add("left"));
dPadLeft.addEventListener("mouseup", () => dPad.classList.remove("left"));

dPadUp.addEventListener("mousedown", () => {
    goPrevious();
});

dPadUp.addEventListener("mouseup", () => dPad.classList.remove("up"));

dPadRight.addEventListener("mousedown", () => dPad.classList.add("right"));
dPadRight.addEventListener("mouseup", () => dPad.classList.remove("right"));

dPadDown.addEventListener("mousedown", () => {
    goNext();
});

dPadDown.addEventListener("mouseup", () => dPad.classList.remove("down"));

document.addEventListener("keyup", (event) => {
    const key = event.key;

    switch (key) {
        case "ArrowLeft":
            dPad.classList.remove("left");
            break;
        case "ArrowRight":
            dPad.classList.remove("right");
            break;
        case "ArrowUp":
            dPad.classList.remove("up");
            break;
        case "ArrowDown":
            dPad.classList.remove("down")
            break;
    };
});

/**
 * Other buttons
 */

rightButton.addEventListener("click", () => {
    if (background.hasAttribute("class")) {
        playAudio();
    };
});

longButton.addEventListener("click", () => {
    screenTop.classList.toggle("online");
    screenBottom.classList.toggle("online");

    if (background.hasAttribute("class")) {
        background.removeAttribute("class");
    } else {
        background.classList.add(typeArray[pokeCounter]);
    };
});
