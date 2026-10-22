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






/*Spion*/


document.addEventListener("DOMContentLoaded", function () {
    const spy = document.querySelector("#sheep-spy");
    const message = document.querySelector("#spy-message");

    if (!spy || !message) return;

    const messages = [
        "Pssst ... ich beobachte dich! 👀",
        "Hast du Gras für mich? 🌿",
        "Du hast mich gefunden! 😱",
        "Määäh! Ich war gar nicht hier! 😂",
        "Ist das hier die Schafschule? 🐑"
    ];

    let hideTimer;
    let nextTimer;

    function hideSpy() {
        spy.classList.remove("spy-show");
        spy.classList.add("spy-hide");

        clearTimeout(hideTimer);
        nextTimer = setTimeout(showSpy, 2500 + Math.random() * 4000);
    }

    function showSpy() {
        spy.classList.remove("spy-hide");

        message.textContent =
            messages[Math.floor(Math.random() * messages.length)];

        // Kurz versteckt lassen, dann hervorlugen
        requestAnimationFrame(function () {
            spy.classList.add("spy-show");
        });

        clearTimeout(hideTimer);
        hideTimer = setTimeout(hideSpy, 4000);
    }

    spy.addEventListener("click", function () {
        clearTimeout(hideTimer);
        clearTimeout(nextTimer);

        message.textContent = "ERWISCHT! Tschüüüss! 🏃🐑";

        spy.classList.remove("spy-show");
        spy.classList.add("spy-hide");

        nextTimer = setTimeout(showSpy, 3500);
    });

    // Erste Überraschung nach kurzer Wartezeit
    nextTimer = setTimeout(showSpy, 3000);
});
