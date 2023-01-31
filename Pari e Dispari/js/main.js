// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// const numeroUtente = parseInt(prompt('Scegli un numero'));
const numeroPc = numeroRandom(1, 5);
console.log(numeroPc);
let pariDispari = prompt('Scegli se il numero sarà pari o dispari');
console.log(pariDispari);

while (pariDispari != 'pari' && pariDispari != 'dispari') {
    pariDispari = prompt('Scrivi solo "pari" o "dispari"');
}

let numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));

while (isNaN(numeroUtente) || numeroUtente > 5 || numeroUtente <= 0) {
    numeroUtente = parseInt(prompt('Hai sbagliato. Scegli un numero da 1 a 5'));
}

let sommaNumeri = numeroPc + numeroUtente;
console.log(sommaNumeri);

let numeroPari = false;

if (sommaNumeri % 2 == 0) {
    numeroPari = true;
}
console.log(numeroPari);


if (pariDispari == 'pari' && numeroPari == true) {
    alert('Il numero era pari, hai vinto. Il numero era ' + sommaNumeri);
} else if (pariDispari == 'dispari' && numeroPari == false) {
    alert('Il numero era dispari, hai vinto. Il numero era ' + sommaNumeri);
} else {
    alert('Non hai vinto. Il numero era ' + sommaNumeri);
}



function numeroRandom(min, max) {
    max = parseInt(max);
    min = parseInt(min);

    let risultato = Math.floor(Math.random() * (max - min + 1) + 1);
    return risultato;
}