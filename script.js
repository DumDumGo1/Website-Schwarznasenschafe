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





// ==========================================
// SCHAF-WISSENS-LAPTOP
// ==========================================


// ALLE BEGRIFFE UND IHRE FAKTEN

const sheepFacts = {

    "Gras": "Gras ist eine der wichtigsten Nahrungsquellen der Schwarznasenschafe. Auf den Weiden können sie den Tag mit Grasen verbringen. Mit ihren Lippen und Zähnen nehmen sie die Grashalme auf.",

    "Blumen": "Auf Bergwiesen wachsen viele verschiedene Blumen und Kräuter. Schafe fressen auch manche davon. Artenreiche Wiesen sind wichtige Lebensräume für viele Tiere und Pflanzen.",

    "Alpen": "Die Walliser Schwarznasenschafe stammen aus dem Schweizer Kanton Wallis. Sie sind an das Leben in einer bergigen Umgebung angepasst und können auch auf steileren Weiden unterwegs sein.",

    "Milch": "Wie andere weibliche Schafe geben auch Schwarznasenschafe nach der Geburt eines Lammes Milch. Die Lämmer trinken diese Milch und erhalten dadurch wichtige Nährstoffe.",

    "Lamm": "Ein Lamm ist ein junges Schaf. Nach der Geburt trinkt es zunächst Muttermilch. Mit der Zeit beginnt es zusätzlich Gras und andere Pflanzen zu fressen.",

    "Fell": "Das Fell der Walliser Schwarznasenschafe ist lang, dicht und lockig. Es ist weiss, während Gesicht, Ohren, Knie und Füsse schwarz gefärbt sind.",

    "Heu": "Heu ist getrocknetes Gras. Im Winter, wenn draussen weniger frisches Gras wächst, bekommen Schafe häufig Heu als Futter.",

    "Wolle": "Die Wolle der Schwarznasenschafe wächst ständig nach. Deshalb müssen sie regelmässig geschoren werden. Aus Schafwolle können zum Beispiel Pullover, Decken und Filz hergestellt werden.",

    "Schur": "Bei der Schur wird die Wolle eines Schafes mit einer Schermaschine entfernt. Das geschieht regelmässig, damit das Fell nicht zu lang und schwer wird.",

    "Stall": "Ein Stall bietet Schafen Schutz vor schlechtem Wetter und einen trockenen Platz zum Ruhen. Besonders im Winter und während der Geburt ist ein geschützter Ort wichtig.",

    "Weide": "Auf einer Weide können Schafe grasen, laufen und sich mit ihrer Herde bewegen. Eine gute Weide bietet genügend Futter, Wasser und Schutz.",

    "Wallis": "Das Wallis ist ein Kanton in der Schweiz. Es ist die Heimat der Walliser Schwarznasenschafe. Die Tiere gehören zu den bekanntesten Schafrassen der Region.",

    "Hörner": "Sowohl männliche als auch weibliche Walliser Schwarznasenschafe können Hörner tragen. Diese wachsen seitlich und drehen sich im Laufe der Zeit spiralförmig.",

    "Schäfer": "Ein Schäfer oder eine Schäferin betreut eine Schafherde. Dazu gehören das Füttern, die Kontrolle der Tiere und das Achten auf ihre Gesundheit.",

    "Herde": "Schafe sind Herdentiere. Sie fühlen sich in einer Gruppe besonders wohl und orientieren sich häufig an anderen Schafen.",

    "Herdenschutz": "Herdenschutz bedeutet, Schafe vor Gefahren zu schützen. Dazu können geeignete Zäune, geschützte Nachtplätze und ausgebildete Herdenschutzhunde gehören.",

    "Wasser": "Schafe brauchen täglich frisches Wasser. Besonders bei warmem Wetter und während der Zeit, in der sie ihre Lämmer säugen, ist genügend Wasser wichtig.",

    "Kräuter": "Auf Bergwiesen wachsen viele Kräuter. Sie gehören zur natürlichen Pflanzenvielfalt und können den Schafen als zusätzliche Nahrung dienen.",

    "Geburt": "Die Geburt eines Lammes wird auch Ablammung genannt. Nach der Geburt kümmert sich das Mutterschaf um sein Junges. Das Lamm sollte bald die erste Muttermilch trinken.",

    "Winter": "Im Winter brauchen Schafe einen geschützten Platz, genügend Futter und Wasser. Walliser Schwarznasenschafe haben ein dichtes Fell, das sie vor Kälte schützt.",

    "Widder": "Ein erwachsenes männliches Schaf nennt man Widder. Bei den Walliser Schwarznasenschafen tragen auch Widder die typischen schwarzen Zeichnungen und Hörner.",

    "Mutterschaf": "Ein erwachsenes weibliches Schaf nennt man Mutterschaf oder Aue. Wenn es ein Lamm bekommt, versorgt es dieses mit Milch und Fürsorge.",

    "Hufe": "Schafe laufen auf gespaltenen Hufen. Diese geben ihnen auf vielen Untergründen Halt. Die Hufe müssen regelmässig kontrolliert und bei Bedarf gepflegt werden.",

    "Kanton": "Die Walliser Schwarznasenschafe sind eng mit dem Kanton Wallis verbunden. Dort gehören sie zur traditionellen Landwirtschaft und sind ein bekanntes Symbol der Region."

};


// ELEMENTE AUS DEM HTML HOLEN

const laptop = document.getElementById("sheep-laptop");

const laptopToggle = document.getElementById("laptop-toggle");

const termList = document.getElementById("sheep-term-list");

const factBox = document.getElementById("sheep-fact");

const searchInput = document.getElementById("sheep-search");

const searchButton = document.getElementById("sheep-search-button");

const laptopStatus = document.getElementById("laptop-status");


// LAPTOP ÖFFNEN UND SCHLIESSEN

laptopToggle.addEventListener("click", function () {

    laptop.classList.toggle("is-open");

    if (laptop.classList.contains("is-open")) {

        laptopToggle.innerHTML = "✕ Lexikon schliessen";

        laptopStatus.textContent = "WISSENS-LAPTOP GEÖFFNET";

        setTimeout(function () {

            laptop.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

    } else {

        laptopToggle.innerHTML =
            "<span>✧</span> Das Schaf-Lexikon öffnen <span>➜</span>";

        laptopStatus.textContent = "LAPTOP GESCHLOSSEN";

    }

});


// ALLE BEGRIFFE ANZEIGEN

function renderSheepTerms() {

    termList.innerHTML = "";

    Object.keys(sheepFacts).forEach(function (term) {

        const button = document.createElement("button");

        button.className = "sheep-term";

        button.textContent = term;

        button.addEventListener("click", function () {

            showSheepFact(term);

        });

        termList.appendChild(button);

    });

}


// FAKTEN ANZEIGEN

function showSheepFact(term) {

    factBox.innerHTML = "";

    const icon = document.createElement("span");

    icon.textContent = "🐑";

    const paragraph = document.createElement("p");

    const title = document.createElement("strong");

    title.textContent = term + ": ";

    paragraph.textContent = sheepFacts[term];

    paragraph.prepend(title);

    factBox.appendChild(icon);

    factBox.appendChild(paragraph);

    laptopStatus.textContent =
        "BEGRIFF ENTDECKT: " + term.toUpperCase();


    // AUSGEWÄHLTEN BEGRIFF MARKIEREN

    document.querySelectorAll(".sheep-term").forEach(function (button) {

        button.classList.toggle(
            "active",
            button.textContent === term
        );

    });

}


// BEGRIFF SUCHEN

function searchSheepTerm() {

    const search = searchInput.value.trim().toLowerCase();

    const foundTerm = Object.keys(sheepFacts).find(function (term) {

        return term.toLowerCase() === search;

    });


    if (foundTerm) {

        showSheepFact(foundTerm);

        laptopStatus.textContent = "BEGRIFF GEFUNDEN!";

    } else {

        factBox.innerHTML = `
            <span>🔎</span>
            <p>
                Diesen Begriff kenne ich noch nicht!
                Schau in der Begriffsliste nach.
                Vielleicht entdeckst du dort etwas Spannendes.
            </p>
        `;

        laptopStatus.textContent = "KEIN TREFFER";

    }

}


// SUCHBUTTON

searchButton.addEventListener("click", searchSheepTerm);


// SUCHE AUCH MIT ENTER

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchSheepTerm();

    }

});


// BEGRIFFE BEIM LADEN ANZEIGEN

renderSheepTerms();
