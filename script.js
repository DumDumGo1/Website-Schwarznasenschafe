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
