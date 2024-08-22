//*Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma



// Funzione per verificare se una parola è palindroma
function isPalindroma(parola) {
    const parolaReversed = parola.split('').reverse().join('');
    return parola === parolaReversed;
}

// Event listener per il pulsante "Verifica"
document.getElementById('verificaPalindroma').addEventListener('click', function() {
    const parola = document.getElementById('parola').value.trim().toLowerCase();
    const risultato = document.getElementById('risultatoPalindroma');
    
    if (parola === '') {
        risultato.textContent = 'Inserisci una parola!';
        console.log('Inserisci una parola!');
        return;
    }

    if (isPalindroma(parola)) {
        risultato.textContent = `La parola "${parola}" è palindroma.`;
        console.log(`La parola "${parola}" è palindroma.`);
    } else {
        risultato.textContent = `La parola "${parola}" non è palindroma.`;
        console.log(`La parola "${parola}" non è palindroma.`);
    }
});