let spielername = "niklas";
const anzahlKarten = 16;
let leben = 3;

console.log(spielername);
console.log("Karten:"+ anzahlKarten);

const ersteKarte = document.querySelector(".karte");
console.log(ersteKarte)

ersteKarte.textContent = "🍎";

ersteKarte.addEventListener("click", function (){
    console.log("Karte wurde geklickt!")
    ersteKarte.style.backgroundColor = "grey";
});

const alleKarten = document.querySelectorAll(".karte");
console.log(alleKarten.length);   // wie viele sind es?
alleKarten.forEach(function (karte) { karte.textContent="AH" });