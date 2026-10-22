console.log(JavaScript läuft);




document.querySelectorAll("main p, main h2, main h3").forEach(text => {
    text.addEventListener("click", () => {
        text.style.transform = "scale(1.05)";
        setTimeout(() => {
            text.style.transform = "scale(1)";
        }, 300);
    });
});





// 🐑 Schaf-Mauszeiger
document.body.style.cursor = "none";

const sheep = document.createElement("div");
sheep.textContent = "🐑";
sheep.style.cssText = `
    position: fixed;
    font-size: 30px;
    pointer-events: none;
    z-index: 999999;
    display: none;
`;

document.body.appendChild(sheep);

document.addEventListener("mousemove", function(e) {
    sheep.style.display = "block";
    sheep.style.left = e.clientX + "px";
    sheep.style.top = e.clientY + "px";
});

// 🖤 Beim Klicken wird es schwarz
document.addEventListener("mousedown", function() {
    sheep.textContent = "🐑";
    sheep.style.filter = "brightness(0)";
});

document.addEventListener("mouseup", function() {
    sheep.style.filter = "none";
});