/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 * 
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K']

let puntosJugador = 0,
puntosComputadora = 0;

// Referencias del html 

const btnPedir = document.querySelector('#btnPedir');

const puntosHTML = document.querySelectorAll('small')
//console.log( btnPedir );
// Esta funcion crea una nueva baraja
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }  
    }
        
    for (let tipo of tipos) {
        for (let especial of especiales ) {
            deck.push(especial + tipo);
        }
        
    }

    // console.log({deck})
    deck = _.shuffle(deck);
    //console.log({deck})
    return deck
}

crearDeck();


// Esta funcion me permite tomar una carta


const pedirCarta = () => {

    if (deck.length === 0 ) {
        throw 'No hay cartas en el deck'
    }

    //console.log(deck)
    let cartapedida = deck.shift()
    //console.log(deck)
    //console.log(cartapedida)

return cartapedida

}


const valorCarta = (cartapedida) => {

    const valor = cartapedida.substring(0, cartapedida.length -1);
    return ( isNaN(valor) ) ? 
            ( valor === 'A') ? 11 : 10
            : valor * 1 ;
    // let puntos = 0;
    // // 2 = 2 10 = 1 3= 3
    // if( isNaN(valor) ) {

    //     puntos = ( valor === 'A') ? 11 : 10; 
    //     console.log('No es un nro')

    // } else {
    //     console.log('Es un numero')
    //     puntos = valor * 1 ;
    // }
    // console.log(puntos)
}

// Eventos

btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta)
  puntosHTML[0].innerText = puntosJugador


});