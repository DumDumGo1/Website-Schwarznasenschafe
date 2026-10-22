console.log(JavaScript läuft);







document.addEventListener("click", function (event) {
    const schaf = document.createElement("span");

    schaf.textContent = "🐑";
    schaf.classList.add("huepf-schaf");

    schaf.style.left = event.clientX + "px";
    schaf.style.top = event.clientY + "px";

    document.body.appendChild(schaf);

    setTimeout(function () {
        schaf.remove();
    }, 1000);
});
