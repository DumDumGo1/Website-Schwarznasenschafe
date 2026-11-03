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
                  MÄÄÄÄÄÄH!
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




const quizFragen = [
    {
        frage: "Aus welcher Region stammen Schwarznasenschafe?",
        antworten: ["Wallis", "Tessin", "Bern", "Jura"],
        richtig: 0
    },
    {
        frage: "Welche Farbe hat die Nase?",
        antworten: ["Rosa", "Schwarz", "Braun", "Grau"],
        richtig: 1
    },
    {
        frage: "Was fressen Schwarznasenschafe hauptsächlich?",
        antworten: ["Fleisch", "Fisch", "Gras und Kräuter", "Insekten"],
        richtig: 2
    },
    {
        frage: "Zu welcher Tiergruppe gehören Schafe?",
        antworten: ["Säugetiere", "Reptilien", "Vögel", "Amphibien"],
        richtig: 0
    },
    {
        frage: "Wie nennt man ein Schafbaby?",
        antworten: ["Fohlen", "Kalb", "Küken", "Lamm"],
        richtig: 3
    },
    {
        frage: "Wofür ist das dichte Schaffell nützlich?",
        antworten: [
            "Zum Fliegen",
            "Zum Schutz vor Kälte",
            "Zum Schwimmen",
            "Zum Klettern"
        ],
        richtig: 1
    },
    {
        frage: "Wie nennt man das männliche Schaf?",
        antworten: ["Widder", "Hengst", "Stier", "Eber"],
        richtig: 0
    },
    {
        frage: "Wie nennt man weibliche Schafe?",
        antworten: ["Ziegen", "Kühe", "Auen", "Stuten"],
        richtig: 2
    },
    {
        frage: "Was machen Schafe beim Wiederkäuen?",
        antworten: [
            "Sie kauen ihre Nahrung nochmals",
            "Sie trinken nur Wasser",
            "Sie schlafen beim Fressen",
            "Sie schlucken Steine"
        ],
        richtig: 0
    },
    {
        frage: "Zu welcher Tierfamilie gehören Schwarznasenschafe?",
        antworten: ["Katzen", "Hunde", "Pferde", "Schafe"],
        richtig: 3
    }
];

let quizIndex = 0;
let quizPunkte = 0;

function quizStarten() {
    quizIndex = 0;
    quizPunkte = 0;

    document.getElementById("quiz-fenster").style.display = "block";

    quizAnzeigen();
}

function quizSchliessen() {
    document.getElementById("quiz-fenster").style.display = "none";
}

function quizAnzeigen() {
    const inhalt = document.getElementById("quiz-inhalt");
    const frage = quizFragen[quizIndex];

    inhalt.innerHTML = `
        <h2>🐑 Schaf-Quiz</h2>

        <p>Frage ${quizIndex + 1} von ${quizFragen.length}</p>

        <h3>${frage.frage}</h3>

        <div id="quiz-antworten"></div>

        <p id="quiz-rueckmeldung"></p>

        <button id="quiz-weiter"
            style="display:none"
            onclick="quizNaechsteFrage()">
            Weiter ➜
        </button>
    `;

    const antworten = document.getElementById("quiz-antworten");

    frage.antworten.forEach((antwort, index) => {
        const knopf = document.createElement("button");

        knopf.className = "quiz-antwort";
        knopf.textContent = antwort;

        knopf.onclick = function() {
            quizAntwort(index);
        };

        antworten.appendChild(knopf);
    });
}

function quizAntwort(auswahl) {
    const frage = quizFragen[quizIndex];

    const knoepfe = document.querySelectorAll(".quiz-antwort");

    knoepfe.forEach(knopf => {
        knopf.disabled = true;
    });

    const rueckmeldung = document.getElementById("quiz-rueckmeldung");

    if (auswahl === frage.richtig) {
        quizPunkte++;
        rueckmeldung.textContent = "🎉 Richtig! Sehr gut!";
    } else {
        rueckmeldung.textContent =
            "🐑 Nicht ganz! Richtig wäre: " +
            frage.antworten[frage.richtig];
    }

    document.getElementById("quiz-weiter").style.display = "block";
}

function quizNaechsteFrage() {
    quizIndex++;

    if (quizIndex < quizFragen.length) {
        quizAnzeigen();
    } else {
        quizEnde();
    }
}

function quizEnde() {
    const inhalt = document.getElementById("quiz-inhalt");

    let nachricht = "Weiter üben, Schaf-Detektiv! 🕵️";

    if (quizPunkte === 10) {
        nachricht = "UNGLAUBLICH! Du bist ein Schwarznasenschaf-MEISTER! 👑";
    } else if (quizPunkte >= 7) {
        nachricht = "Wow! Du kennst dich richtig gut aus! 🐑";
    } else if (quizPunkte >= 4) {
        nachricht = "Schon ziemlich gut! Weiter so! 🌟";
    }

    inhalt.innerHTML = `
        <h2>🏆 Quiz beendet!</h2>

        <h3>${quizPunkte} von 10 Punkten!</h3>

        <p>${nachricht}</p>

        <button id="quiz-weiter" onclick="quizStarten()">
            🔄 Noch einmal spielen
        </button>
    `;
}