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
const voiceArray = ["eevee.mp3", "vaporeon.mp3", "jolteon.mp3", "flareon.mp3", "espeon.mp3", "umbreon.mp3", "leafeon.mp3", "glaceon.mp3", "sylveon.mp3"];
const rightButton = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ul > li:nth-of-type(2) button");

let pokeCounter = 0;

const playAudio = () => {
    const audio = new Audio(`${voiceFileDir}/${voiceArray[pokeCounter]}`)
    audio.play();
}

rightButton.addEventListener("click", () => {
    if (background.hasAttribute("class")) {
        playAudio();
    }
})

longButton.addEventListener("click", () => {
    screenTop.classList.toggle("online");
    screenBottom.classList.toggle("online");

    if (background.hasAttribute("class")) {
        background.removeAttribute("class");
    } else {
        background.classList.add(typeArray[pokeCounter]);
    }
});

dPadLeft.addEventListener("mousedown", () => dPad.classList.add("left"));
dPadLeft.addEventListener("mouseup", () => dPad.classList.remove("left"));
dPadLeft.addEventListener("mouseout", () => dPad.classList.remove("left"));

const goNext = () => {
    dPad.classList.add("down");
    if (background.hasAttribute("class")) {

        if (pokeCounter === pokeListBottomChildren.length - 1) {
            pokeCounter = 0;
        } else {
            pokeCounter++;
        }

        for (let i = 0; i < pokeListTopChildren.length; i++) {
            if (i === pokeCounter) {
                pokeListTopChildren[i].classList.add("current");
            } else {
                pokeListTopChildren[i].classList.remove("current");
            }
        }

        background.removeAttribute("class");
        background.classList.add(typeArray[pokeCounter]);

        pokeListTop.scroll({ top: pokeListTopChildren[pokeCounter].offsetTop - 10, left: 0, behavior: 'smooth' });
        pokeListBottom.scroll({ top: pokeListBottomChildren[pokeCounter].offsetTop - 10, left: 0, behavior: 'smooth' });
    }
}

const goPrevious = () => {
    dPad.classList.add("up");
    if (background.hasAttribute("class")) {

        if (pokeCounter === 0) {
            pokeCounter = pokeListBottomChildren.length - 1;

            for (let i = 0; i < pokeListTopChildren.length; i++) {
                if (i === pokeCounter) {
                    pokeListTopChildren[i].classList.add("current");
                } else {
                    pokeListTopChildren[i].classList.remove("current");
                }
            }

            background.removeAttribute("class");
            background.classList.add(typeArray[pokeCounter]);

            pokeListTop.scroll({ top: pokeListTopChildren[pokeCounter].offsetTop, left: 0, behavior: 'smooth' });
            pokeListBottom.scroll({ top: pokeListBottomChildren[pokeCounter].offsetTop, left: 0, behavior: 'smooth' });
        } else {
            pokeCounter--;

            for (let i = 0; i < pokeListTopChildren.length; i++) {
                if (i === pokeCounter) {
                    pokeListTopChildren[i].classList.add("current");
                } else {
                    pokeListTopChildren[i].classList.remove("current");
                }
            }

            background.removeAttribute("class");
            background.classList.add(typeArray[pokeCounter]);

            pokeListTop.scroll({ top: pokeListTopChildren[pokeCounter].offsetTop - 10, left: 0, behavior: 'smooth' });
            pokeListBottom.scroll({ top: pokeListBottomChildren[pokeCounter].offsetTop - 10, left: 0, behavior: 'smooth' });
        }
    }
}

dPadUp.addEventListener("mousedown", () => {
    goPrevious();
});
dPadUp.addEventListener("mouseup", () => dPad.classList.remove("up"));
dPadUp.addEventListener("mouseout", () => dPad.classList.remove("up"));

dPadRight.addEventListener("mousedown", () => dPad.classList.add("right"));
dPadRight.addEventListener("mouseup", () => dPad.classList.remove("right"));
dPadRight.addEventListener("mouseout", () => dPad.classList.remove("right"));

dPadDown.addEventListener("mousedown", () => {
    goNext();
});
dPadDown.addEventListener("mouseup", () => dPad.classList.remove("down"));
dPadDown.addEventListener("mouseout", () => dPad.classList.remove("down"));

const openTopRectangle = () => {
    topOpenRectangle.classList.toggle("open");
}

const openRightRectangle = () => {
    rightOpenRectangle.classList.toggle("open");
}

topOpenRectangle.addEventListener("click", () => {
    openTopRectangle();
});

rightOpenRectangle.addEventListener("click", () => {
    openRightRectangle();
});

for (let i = 0; i < pokeListTopChildren.length; i++) {
    if (i === pokeCounter) {
        pokeListTopChildren[i].classList.add("current");
    } else {
        pokeListTopChildren[i].classList.remove("current");
    }
}

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
    }
})

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
    }

    if (key === "Enter") {
        switch (document.activeElement) {
            case rightOpenRectangle:
                openRightRectangle();
                break;
            case topOpenRectangle:
                openTopRectangle();
                break;
            case dPadUp:
                goPrevious();
                break;
            case dPadDown:
                goNext();
                break;
        }
    }
});

setTimeout(() => {
    openTopRectangle();
    openRightRectangle();
}, 2000);