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
    break
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
// Creare un numero randomico da 1 a 6 per giocatore e per il computer
const numeroRandomUtente = Math.floor(Math.random() * 6 + 1)
console.log('Il tuo numero è: ' + numeroRandomUtente)

const numeroRandomComputer = Math.floor(Math.random() * 6 + 1)
console.log('Il numero estratto dal computer è: ' + numeroRandomComputer)

// Stabilire il vincitore in base al numero più alto

if (numeroRandomUtente > numeroRandomComputer) {
    console.log('Hai vinto :)')
} else if (numeroRandomComputer > numeroRandomUtente){
    console.log('Ha vinto il computer :(')
} else if (numeroRandomComputer === numeroRandomUtente) {
    console.log('Wow c\'è stato un pareggio!!')
}
