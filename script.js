console.log("JavaScript läuft");




document.addEventListener("click", function (event) {
    const sheep = document.createElement("div");

    sheep.textContent = "🐑";
    sheep.style.position = "fixed";
    sheep.style.left = event.clientX + "px";
    sheep.style.top = event.clientY + "px";
    sheep.style.fontSize = "35px";
    sheep.style.pointerEvents = "none";
    sheep.style.zIndex = "99999";

    document.body.appendChild(sheep);

    const direction = Math.random() < 0.5 ? -1 : 1;

    sheep.animate([
        {
            transform: "translate(0, 0) rotate(0deg)",
            opacity: 1
        },
        {
            transform: `translate(${direction * 150}px, -180px) rotate(${direction * 360}deg)`,
            opacity: 0
        }
    ], {
        duration: 1200,
        easing: "ease-out"
    });

    setTimeout(function () {
        sheep.remove();
    }, 1200);
});
