console.log('ciao')

// Creare array con email
const email = ['utente1@esempio.com', 'utente2@esempio.com', 'utente3@esempio.com']
console.log(email)

// Chiedere mail all'utente con un prompt, controllando che ci sia nella lista
const emailUtente = prompt('Scrivi la tua mail')
console.log(emailUtente)

email.push(emailUtente)
console.log(email)
console.log('La sua mail: "' + emailUtente + '" è stata inserita nel database.' )

// Stampa un messaggio con esito controllo

