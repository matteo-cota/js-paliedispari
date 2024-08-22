//*Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
//Dichiariamo chi ha vinto.




// Funzione per generare un numero casuale tra 1 e 5
function generaNumero() {
    return Math.floor(Math.random() * 5) + 1;
}


// Funzione per verificare se un numero è pari o dispari
function isPari(numero) {
    return numero % 2 === 0;
}

// Event listener per il pulsante "Gioca"
document.getElementById('gioca').addEventListener('click', function() {
    const scelta = document.getElementById('scelta').value;
    const numeroUtente = parseInt(document.getElementById('numeroUtente').value);
    const risultato = document.getElementById('risultatoGioco'); 
    
    
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
        risultato.textContent = 'Inserisci un numero valido tra 1 e 5!';
        console.log('Inserisci un numero valido tra 1 e 5!');
        return;
    }

    const numeroComputer = generaNumero();
    const somma = numeroUtente + numeroComputer;
    const pari = isPari(somma);
    const vincitore = (pari && scelta === 'pari') || (!pari && scelta === 'dispari') ? 'Hai vinto!' : 'Hai perso!';

    risultato.textContent = `Hai scelto ${numeroUtente} e il computer ha scelto ${numeroComputer}. La somma è ${somma} (${pari ? 'pari' : 'dispari'}). ${vincitore}`;
    console.log(`Hai scelto ${numeroUtente} e il computer ha scelto ${numeroComputer}. La somma è ${somma} (${pari ? 'pari' : 'dispari'}). ${vincitore}`);

});

