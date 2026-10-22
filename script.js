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








const title = document.querySelector("header h1");
let clicks = 0;
let resetTimer;

if (title) {
    title.style.cursor = "pointer";
    title.title = "Psst ... fünf Klicks starten eine Überraschung!";

    title.addEventListener("click", function () {
        clicks++;

        clearTimeout(resetTimer);
        resetTimer = setTimeout(function () {
            clicks = 0;
        }, 2000);

        if (clicks >= 5) {
            clicks = 0;
            startSheepParty();
        }
    });
}

function startSheepParty() {
    const party = document.createElement("div");

    party.style.cssText = `
        position: fixed;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
        z-index: 999999;
    `;

    document.body.appendChild(party);

    // Schafe und Konfetti erzeugen
    for (let i = 0; i < 35; i++) {
        const item = document.createElement("div");
        const isSheep = i < 10;

        item.textContent = isSheep
            ? ["🐑", "🐏"][Math.floor(Math.random() * 2)]
            : ["🎉", "✨", "🌸", "🎊", "💚"][
                Math.floor(Math.random() * 5)
            ];

        item.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: -60px;
            font-size: ${isSheep ? 35 : 18 + Math.random() * 18}px;
        `;

        party.appendChild(item);

        const duration = 1800 + Math.random() * 2200;

        item.animate([
            {
                transform: "translateY(-60px) rotate(0deg) scale(0.7)"
            },
            {
                transform:
                    `translateY(${window.innerHeight + 100}px)
                     rotate(${Math.random() * 900 - 450}deg)
                     scale(1.2)`
            }
        ], {
            duration: duration,
            easing: "ease-in",
            fill: "forwards"
        });
    }

    // Lustige Party-Nachricht
    const message = document.createElement("div");
    message.textContent = "🐑 MÄÄÄH! SCHAF-PARTY! 🎉";

    message.style.cssText = `
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        text-align: center;
        font-size: clamp(22px, 5vw, 42px);
        font-weight: bold;
        color: white;
        text-shadow: 2px 2px 8px #06402B;
        animation: sheepBounce 0.4s infinite alternate;
    `;

    party.appendChild(message);

    // Party nach 4 Sekunden beenden
    setTimeout(function () {
        party.remove();
    }, 4000);
}
