let spielername = "niklas";
const anzahlKarten = 16;
let leben = 3;

console.log(spielername);
console.log("Karten:"+ anzahlKarten);

const symbols = ["🍎", "🍌", "🍇", "🍒", "🥝", "🍔", "🍕", "🍦"];

// Jedes Symbol zweimal: erst alle 8, dann nochmal alle 8 = 16 Karten
const paare = [...symbols, ...symbols];
console.log(paare);
console.log(paare.length);


const alleKarten = document.querySelectorAll(".karte");
/*console.log(alleKarten.length);   // wie viele sind es?
alleKarten.forEach(function (karte) { 
    karte.addEventListener("click", function (){
        console.log("Karte wurde geklickt!")
        karte.classList.toggle("aufgedeckt");
        karte.textContent = "🍎";
    });
});
*/

function mischen(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


mischen(paare);

alleKarten.forEach(function (karte, index) {
    karte.dataset.symbol = paare[index]
    karte.textContent = "";
    karte.addEventListener("click", function (){
        console.log("Karte "+ index + " wurde geklcikt")
        karte.classList.toggle("aufgedeckt");
        if(karte.classList.contains("aufgedeckt")){
            karte.textContent = paare[index];
        }else{
            karte.textContent = "";
        }
        
    })
})

