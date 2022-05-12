const rightOpenRectangle = document.querySelector("article>section:nth-of-type(4)");
const topOpenRectangle = document.querySelector("article>section:nth-of-type(5)");

topOpenRectangle.addEventListener("click", () => {
    topOpenRectangle.classList.toggle("open");
});

rightOpenRectangle.addEventListener("click", () => {
    rightOpenRectangle.classList.toggle("open");
});