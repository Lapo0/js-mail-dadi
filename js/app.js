// EMAIL UTENTE
// Creare array con email
const email = ['utente1@esempio.com', 'utente2@esempio.com', 'utente3@esempio.com']
console.log(email)


// Chiedere mail all'utente con un prompt, controllando che ci sia nella lista
const emailUtente = prompt('Scrivi la tua mail')
console.log(emailUtente)

let mailEsistente = false

for (let i = 0; i < email.length; i++) {
  if (email[i] === emailUtente) {
    mailEsistente = true
  }
}

/*
if (email.includes(emailUtente)) {
    console.log('La mail inserita è già presente nel database.')
} else {
email.push(emailUtente)
console.log(email)
console.log('La sua mail: "' + emailUtente + '" è stata inserita nel database.' )
}
*/

if (mailEsistente) {
  console.log('La mail inserita è già presente nel database.')
} else {
  email.push(emailUtente)
  console.log(email)
  console.log('La sua mail: "' + emailUtente + '" è stata inserita nel database.' )
}

// GIOCO DEI DADI
// Giocare 10 partite
const numeroPartite = parseInt( prompt('Quante partite vuoi giocare a Dadi?'))

let vittorieUtente = 0
let vittorieComputer = 0

for (let i = 0; i < numeroPartite; i++) {

    // Creare un numero randomico da 1 a 6 per giocatore e per il computer
    const numeroRandomUtente = Math.floor(Math.random() * 6 + 1)
    console.log('Il tuo numero è: ' + numeroRandomUtente)

    const numeroRandomComputer = Math.floor(Math.random() * 6 + 1)
    console.log('Il numero estratto dal computer è: ' + numeroRandomComputer)

    // Stabilire il vincitore in base al numero più alto

    if (numeroRandomUtente > numeroRandomComputer) {
        console.log('Hai vinto :)')
        vittorieUtente++
    } else if (numeroRandomComputer > numeroRandomUtente){
        console.log('Ha vinto il computer :(')
        vittorieComputer++
    } else if (numeroRandomComputer === numeroRandomUtente) {
        console.log('Wow c\'è stato un pareggio!!')
    }
}

console.log('Sul totale di: ' + numeroPartite + ' partite' + ' ne hai vinte ' + vittorieUtente + ' invece il computer ne ha vinte ' + vittorieComputer)
