console.log("JavaScript läuft");





console.log("JavaScript läuft");

document.addEventListener("DOMContentLoaded", function () {
    const sheep = document.createElement("div");

    sheep.textContent = "🐑";
    sheep.style.cssText = `
        position: fixed;
        left: 0;
        top: 0;
        font-size: 30px;
        pointer-events: none;
        z-index: 999999;
        display: none;
    `;

    document.body.appendChild(sheep);

    document.addEventListener("mousemove", function (e) {
        sheep.style.display = "block";
        sheep.style.left = (e.clientX + 5) + "px";
        sheep.style.top = (e.clientY + 5) + "px";
    });

    document.addEventListener("mousedown", function () {
        sheep.style.filter = "brightness(0)";
    });

    document.addEventListener("mouseup", function () {
        sheep.style.filter = "none";
    });
});



