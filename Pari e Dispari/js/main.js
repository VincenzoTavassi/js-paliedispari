// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

const numeroPc = numeroRandom(1, 5);
let pariDispari = prompt('Scegli se il numero sarà pari o dispari');

// controllo scrittura pari e dispari 
while (pariDispari != 'pari' && pariDispari != 'dispari') {
    pariDispari = prompt('Scrivi solo "pari" o "dispari"');
}

let numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));

// controllo numero utente nel range e valido 
while (isNaN(numeroUtente) || numeroUtente > 5 || numeroUtente <= 0) {
    numeroUtente = parseInt(prompt('Hai sbagliato. Scegli un numero da 1 a 5'));
}

// somma numero utente e numero pc
let sommaNumeri = numeroPc + numeroUtente;

// se ciò che ritorna la funzione pari/dispari è uguale alla scelta dell'utente, ha vinto 
if (isEven(sommaNumeri) == pariDispari) {
    alert('Hai vinto. Il numero era ' + sommaNumeri);
} else {
    alert('Hai perso. Il numero era ' + sommaNumeri);
}


// funzione per stabilire se un numero è pari o dispari 
function isEven(num) {
    if (num % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

// funzione per generare  un numero random nel range indicato 
function numeroRandom(min, max) {
    max = parseInt(max);
    min = parseInt(min);

    let risultato = Math.floor(Math.random() * (max - min + 1) + 1);
    return risultato;
}