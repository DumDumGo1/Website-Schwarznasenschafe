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




/*Chaos Herde*/

document.addEventListener("DOMContentLoaded", function () {
    const magischesSchaf = document.querySelector(".schaf-zauber");

    if (!magischesSchaf) return;

    magischesSchaf.style.cursor = "pointer";

    magischesSchaf.addEventListener("click", function () {
        let herde = document.getElementById("schaf-chaos");

        if (!herde) {
            herde = document.createElement("div");
            herde.id = "schaf-chaos";
            herde.style.cssText = `
                position: fixed;
                inset: 0;
                overflow: hidden;
                pointer-events: none;
                z-index: 99999;
                opacity: 1;
                transition: opacity 1s ease;
            `;
            document.body.appendChild(herde);
        }

        herde.innerHTML = "";
        herde.style.opacity = "1";

        // 100 animierte Schafe simulieren eine riesige Herde
        for (let i = 0; i < 100; i++) {
            const schaf = document.createElement("span");

            schaf.textContent = "🐑";
            schaf.style.cssText = `
                position: absolute;
                left: -100px;
                top: ${Math.random() * 90}%;
                font-size: ${20 + Math.random() * 25}px;
                white-space: nowrap;
                animation: schaf-rennen ${1.5 + Math.random() * 2}s linear ${Math.random() * 1.5}s forwards;
            `;

            herde.appendChild(schaf);
        }

        // Hirte vorne
        const hirte = document.createElement("span");
        hirte.textContent = "🧑‍🌾";
        hirte.style.cssText = `
            position: absolute;
            left: -100px;
            top: 65%;
            font-size: 60px;
            animation: schaf-rennen 2.5s linear forwards;
        `;
        herde.appendChild(hirte);

        // Animation direkt hinzufügen
        if (!document.getElementById("schaf-rennen-style")) {
            const style = document.createElement("style");
            style.id = "schaf-rennen-style";
            style.textContent = `
                @keyframes schaf-rennen {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(100vw + 200px)); }
                }
            `;
            document.head.appendChild(style);
        }

        // Nach 5 Sekunden verblassen
        setTimeout(function () {
            herde.style.opacity = "0";

            setTimeout(function () {
                herde.innerHTML = "";
                herde.style.opacity = "1";
            }, 1100);
        }, 5000);
    });
});





/*Rainbow*/


/* 🌈 GEHEIMES EASTER EGG: SCHAF-REGENBOGEN */

document.addEventListener("DOMContentLoaded", function () {
    const titel = document.querySelector("h1");
    if (!titel) return;

    let klicks = 0;
    let timer;

    titel.style.cursor = "pointer";

    titel.addEventListener("click", function () {
        klicks++;

        clearTimeout(timer);
        timer = setTimeout(function () {
            klicks = 0;
        }, 2000);

        if (klicks >= 5) {
            klicks = 0;

            let magie = document.getElementById("schaf-regenbogen");

            if (magie) magie.remove();

            magie = document.createElement("div");
            magie.id = "schaf-regenbogen";

            magie.style.cssText = `
                position: fixed;
                inset: 0;
                z-index: 100000;
                pointer-events: none;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                background: linear-gradient(
                    135deg,
                    rgba(255, 100, 180, 0.65),
                    rgba(255, 220, 80, 0.65),
                    rgba(80, 220, 150, 0.65),
                    rgba(100, 160, 255, 0.65),
                    rgba(180, 100, 255, 0.65)
                );
                opacity: 0;
                transition: opacity 0.8s;
            `;

            magie.innerHTML = `
                <div style="font-size:90px">🌈</div>
                <div style="font-size:35px;font-weight:bold;color:white;text-align:center;text-shadow:2px 2px 5px #333">
                    MÄÄÄÄÄH!!!
                </div>
                <div style="font-size:45px;margin-top:20px">
                    🐑 ✨ 🐑 🌟 🐑
                </div>
            `;

            document.body.appendChild(magie);

            requestAnimationFrame(function () {
                magie.style.opacity = "1";
            });

            setTimeout(function () {
                magie.style.opacity = "0";

                setTimeout(function () {
                    magie.remove();
                }, 900);
            }, 5000);
        }
    });
});
