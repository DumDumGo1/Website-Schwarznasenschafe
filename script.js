console.log(JavaScript läuft);








const meadow = document.querySelector("#season-meadow");
const seasonButtons = document.querySelectorAll(".season-button");
const seasonTitle = document.querySelector("#season-title");
const seasonDescription = document.querySelector("#season-description");
const particlesContainer = document.querySelector(".season-particles");

const seasons = {
    spring: {
        title: "Frühling im Wallis",
        description: "Die Wiesen erwachen und die ersten Blumen blühen.",
        particles: ["🌸", "🌼", "🌿"],
        mountain: "Die Natur wird wieder grün."
    },
    summer: {
        title: "Sommer auf der Alp",
        description: "Saftige Weiden und lange Tage in den Bergen.",
        particles: ["🌿", "🌼", "🍃"],
        mountain: "Die Schafe geniessen die Alpweiden."
    },
    autumn: {
        title: "Herbst im Wallis",
        description: "Goldene Farben schmücken die Berglandschaft.",
        particles: ["🍂", "🍁", "🍃"],
        mountain: "Die Tage werden kürzer und kühler."
    },
    winter: {
        title: "Winter in den Alpen",
        description: "Schnee bedeckt die Landschaft und die Berge.",
        particles: ["❄️", "❄️", "❅"],
        mountain: "Das dichte Fell schützt die Schafe vor Kälte."
    }
};

function createParticles(season) {
    particlesContainer.replaceChildren();

    const symbols = seasons[season].particles;

    // Im Winter etwas mehr Schneeflocken
    const count = season === "winter" ? 22 : 12;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement("span");

        particle.className = "season-particle";
        particle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.setProperty(
            "--start-x",
            Math.random() * 100 + "%"
        );

        particle.style.setProperty(
            "--duration",
            (5 + Math.random() * 6) + "s"
        );

        particle.style.setProperty(
            "--delay",
            (-Math.random() * 10) + "s"
        );

        particle.style.setProperty(
            "--drift",
            (-35 + Math.random() * 70) + "px"
        );

        particle.style.setProperty(
            "--particle-size",
            (12 + Math.random() * 12) + "px"
        );

        particlesContainer.appendChild(particle);
    }
}

function changeSeason(season) {
    if (!seasons[season]) return;

    // Landschaft und Farben wechseln
    meadow.classList.remove(
        "spring", "summer", "autumn", "winter"
    );
    meadow.classList.add(season);

    // Titel und Beschreibung anpassen
    seasonTitle.textContent = seasons[season].title;
    seasonDescription.textContent = seasons[season].description;

    // Aktive Schaltfläche markieren
    seasonButtons.forEach(function (button) {
        const isActive = button.dataset.season === season;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    // Blumen, Blätter oder Schneeflocken erzeugen
    createParticles(season);
}

// Auf Klick reagieren
seasonButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        changeSeason(button.dataset.season);
    });
});

// Anfangszustand
changeSeason("spring");
