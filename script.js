console.log(JavaScript läuft);




document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".zoom-text");
    const popup = document.querySelector("#text-popup");
    const popupContent = document.querySelector("#popup-content");
    const closeButton = document.querySelector("#close-popup");

    if (!popup || !popupContent || !closeButton) return;

    function openPopup(textElement) {
        const bigText = textElement.dataset.big || textElement.textContent;
        popupContent.textContent = bigText;
        popup.style.display = "flex";
        closeButton.focus();
    }

    function closePopup() {
        popup.style.display = "none";
    }

    texts.forEach(function (text) {
        text.addEventListener("click", function () {
            openPopup(text);
        });
    });

    closeButton.addEventListener("click", closePopup);

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });
});
