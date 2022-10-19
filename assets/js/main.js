/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */



// Inizio user 

const priceKm = 0.21;

// Km da fare ?

let kiloMeters = parseInt(prompt("Per quanti KM le serve il biglietto?"))

// Età?

let etaPersona = parseInt(prompt("Quanti anni ha?"))

// Ticket price

let ticketPrice = kiloMeters * priceKm;

// discount under 18

let underDiscount = ticketPrice * 0.2;

//discount +65

let upperDiscount = ticketPrice * 0.4;

// calcolo dei discount 

const ticketChildPrice = ticketPrice - underDiscount;
const ticketOldPrice = ticketPrice - upperDiscount;

//Elaborazione discount if else if

if (etaPersona <=18){
    ticketPrice = ticketChildPrice.toFixed(2);
    document.getElementById('prezzo-biglietto').innerHTML += "Ciao ragazz*! il tuo biglietto costa  " + ticketPrice+ "€";
}
else if (etaPersona >= 65){
    ticketPrice = ticketOldPrice.toFixed(2);

    document.getElementById('prezzo-biglietto').innerHTML += "Salve signor*! Il suo biglietto costa " + ticketPrice+ "€";

}
else {
    ticketPrice = ticketPrice.toFixed(2);

    document.getElementById('prezzo-biglietto').innerHTML += "Salve! il prezzo del suo biglietto ammonta a " + ticketPrice+ "€";
}

// output innerHTML

