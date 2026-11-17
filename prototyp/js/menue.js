// ---------- Begrüßung mit dem Namen aus dem Formular ----------

// Die Startseite schickt den Namen per GET: menue.html?name=Niklas
const parameter = new URLSearchParams(window.location.search);
let spielerName = parameter.get("name");

// Den Namen merken, damit er auch beim nächsten Besuch noch da ist.
// try/catch, weil der Speicher z.B. im privaten Modus gesperrt sein kann.
try {
    if (spielerName) {
        localStorage.setItem("spielerName", spielerName);
    } else {
        spielerName = localStorage.getItem("spielerName");
    }
} catch (fehler) {
    console.log("Kein Zugriff auf localStorage:", fehler);
}

if (spielerName) {
    // textContent statt innerHTML, damit eingegebenes HTML nicht ausgeführt wird
    document.querySelector(".begruessung").textContent = "Willkommen, " + spielerName + ".";
}


// ---------- Abblenden beim Klick auf einen Hotspot ----------

const ueberblendung = document.querySelector(".ueberblendung");
const wenigerBewegung = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll(".hotspot").forEach(function (hotspot) {
    hotspot.addEventListener("click", function (event) {
        if (wenigerBewegung) {
            return; // ganz normal dem Link folgen
        }

        event.preventDefault(); // Link noch nicht sofort öffnen
        ueberblendung.classList.add("aktiv");

        // Erst wenn der Bildschirm schwarz ist, zur Zielseite wechseln
        setTimeout(function () {
            window.location.href = hotspot.href;
        }, 500);
    });
});

// Mit dem Zurück-Button kommt der Browser auf die schon schwarze Seite zurück,
// deshalb die Überblendung beim Wiederanzeigen entfernen.
window.addEventListener("pageshow", function () {
    ueberblendung.classList.remove("aktiv");
});
