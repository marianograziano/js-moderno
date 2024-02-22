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
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const puntosHTML = document.querySelectorAll('small');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
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
}

const turnoComputadora = ( puntosMinimos ) => {
    do {

        const carta = pedirCarta();
        puntosComputadora =  puntosComputadora + valorCarta(carta)
        puntosHTML[1].innerText =   puntosComputadora

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21 ) {
            break;
        }


    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) )
    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana')
              } else if (puntosMinimos > 21 ) {
                alert('Computadora Gana')
              } else if (puntosComputadora > 21 ) {
                alert('Jugador gana')
              } else if (puntosComputadora > puntosMinimos ) {
                alert('Computadora Gana')
              }
    }, 50);
    
}
// Eventos

btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta)
  puntosHTML[0].innerText = puntosJugador

const imgCarta = document.createElement('img');
imgCarta.src = `assets/cartas/${carta}.png`;
imgCarta.classList.add('carta');
divCartasJugador.append(imgCarta);


if  ( puntosJugador > 21 ) {
    console.warn ('Perdiste')
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

} else if ( puntosJugador === 21 ) {
    console.warn('Ganaste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

}

}


)

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

})


btnNuevo.addEventListener('click', () => {

    console.clear()
    deck = [];
    deck = crearDeck();
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    puntosJugador = 0,
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';


    
});

;

// TODO Borrar

