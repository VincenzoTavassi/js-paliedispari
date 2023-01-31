// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('Inserisci una parola');

isPalindroma(parola);

function isPalindroma(userWord) {

    const lunghezzaParola = userWord.length;
    // creo due array per la parola normale e inversa 
    const parolaNormale = [];
    const parolaInversa = [];

    // ciclo la parola nel senso di lettura 
    for (let i = 0; i <= lunghezzaParola - 1; i++) {
        let currentLetter = userWord[i];
        parolaNormale.push(currentLetter);
        console.log(currentLetter);
    }
    // ciclo nel senso inverso 
    for (let y = lunghezzaParola - 1; y >= 0; y--) {
        let reverseLetter = userWord[y];
        parolaInversa.push(reverseLetter);
        console.log(reverseLetter);
    }
    // se anche una sola lettera è diversa la condizione è falsa 
    let parolaPalindroma = true;
    for (let k = 0; k < lunghezzaParola; k++) {
        if (parolaNormale[k] != parolaInversa[k]) {
            parolaPalindroma = false;
        }
        console.log(parolaPalindroma);
        alert(parolaPalindroma);
        return parolaPalindroma;

    }

}
