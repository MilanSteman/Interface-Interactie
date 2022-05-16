const rightOpenRectangle = document.querySelector("article>section:nth-of-type(4)");
const topOpenRectangle = document.querySelector("article>section:nth-of-type(5)");

const dPadLeft = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol li:nth-of-type(1)");
const dPadUp = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol li:nth-of-type(2)");
const dPadRight = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol li:nth-of-type(3)");
const dPadDown = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol li:nth-of-type(4)");

const dPad = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol");

const pokeListTop = document.querySelector("article > section:nth-of-type(5) > ol:nth-of-type(2) > li:nth-of-type(1) > section ol");
const pokeListTopChildren = document.querySelectorAll("article > section:nth-of-type(5) > ol:nth-of-type(2) > li:nth-of-type(1) > section ol > li");

const pokeListBottom = document.querySelector("article > section:nth-of-type(1) > ol:nth-of-type(1) > li:nth-of-type(1) > section ol");
const pokeListBottomChildren = document.querySelectorAll("article > section:nth-of-type(1) > ol:nth-of-type(1) > li:nth-of-type(1) > section ol > li");

let pokeCounter = 0;

console.log(pokeListTop)
dPadLeft.addEventListener("mousedown", () => dPad.classList.add("left"));
dPadLeft.addEventListener("mouseup", () => dPad.classList.remove("left"));
dPadLeft.addEventListener("mouseout", () => dPad.classList.remove("left"));

dPadUp.addEventListener("mousedown", () => {
    dPad.classList.add("up");
    if (pokeCounter === 0) {
        pokeCounter = pokeListBottomChildren.length - 1;

        for (let i = 0; i < pokeListTopChildren.length; i++) {
            if (i === pokeCounter) {
                pokeListTopChildren[i].classList.add("current");
            } else {
                pokeListTopChildren[i].classList.remove("current");
            }
        }

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

        pokeListTop.scroll({ top: pokeListTopChildren[pokeCounter].offsetTop - 10, left: 0, behavior: 'smooth' });
        pokeListBottom.scroll({ top: pokeListBottomChildren[pokeCounter].offsetTop - 10, left: 0, behavior: 'smooth' });
    }
    console.log(pokeCounter);
});
dPadUp.addEventListener("mouseup", () => dPad.classList.remove("up"));
dPadUp.addEventListener("mouseout", () => dPad.classList.remove("up"));

dPadRight.addEventListener("mousedown", () => dPad.classList.add("right"));
dPadRight.addEventListener("mouseup", () => dPad.classList.remove("right"));
dPadRight.addEventListener("mouseout", () => dPad.classList.remove("right"));

dPadDown.addEventListener("mousedown", () => {
    dPad.classList.add("down");
    console.log(pokeListBottomChildren.length)
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

    pokeListTop.scroll({ top: pokeListTopChildren[pokeCounter].offsetTop - 10, left: 0, behavior: 'smooth' });
    pokeListBottom.scroll({ top: pokeListBottomChildren[pokeCounter].offsetTop - 10, left: 0, behavior: 'smooth' });
    console.log(pokeCounter);
});
dPadDown.addEventListener("mouseup", () => dPad.classList.remove("down"));
dPadDown.addEventListener("mouseout", () => dPad.classList.remove("down"));

topOpenRectangle.addEventListener("click", () => {
    topOpenRectangle.classList.toggle("open");
});

rightOpenRectangle.addEventListener("click", () => {
    rightOpenRectangle.classList.toggle("open");
});

for (let i = 0; i < pokeListTopChildren.length; i++) {
    if (i === pokeCounter) {
        pokeListTopChildren[i].classList.add("current");
    } else {
        pokeListTopChildren[i].classList.remove("current");
    }
}