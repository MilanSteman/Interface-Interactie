const rightOpenRectangle = document.querySelector("article>section:nth-of-type(4)");
const topOpenRectangle = document.querySelector("article>section:nth-of-type(5)");

const dPadLeft = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol li:nth-of-type(1)");
const dPadUp = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol li:nth-of-type(2)");
const dPadRight = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol li:nth-of-type(3)");
const dPadDown = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol li:nth-of-type(4)");

const dPad = document.querySelector("article > section:nth-of-type(2) > ol > li:nth-of-type(1) section:nth-of-type(1) ol");

dPadLeft.addEventListener("mousedown", () => dPad.classList.add("left"));
dPadLeft.addEventListener("mouseup", () => dPad.classList.remove("left"));
dPadLeft.addEventListener("mouseout", () => dPad.classList.remove("left"));

dPadUp.addEventListener("mousedown", () => dPad.classList.add("up"));
dPadUp.addEventListener("mouseup", () => dPad.classList.remove("up"));
dPadUp.addEventListener("mouseout", () => dPad.classList.remove("up"));

dPadRight.addEventListener("mousedown", () => dPad.classList.add("right"));
dPadRight.addEventListener("mouseup", () => dPad.classList.remove("right"));
dPadRight.addEventListener("mouseout", () => dPad.classList.remove("right"));

dPadDown.addEventListener("mousedown", () => dPad.classList.add("down"));
dPadDown.addEventListener("mouseup", () => dPad.classList.remove("down"));
dPadDown.addEventListener("mouseout", () => dPad.classList.remove("down"));


topOpenRectangle.addEventListener("click", () => {
    topOpenRectangle.classList.toggle("open");
});

rightOpenRectangle.addEventListener("click", () => {
    rightOpenRectangle.classList.toggle("open");
});