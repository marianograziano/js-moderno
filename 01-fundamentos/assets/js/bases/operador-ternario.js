/**
* Dias de la semana abrimos a las 11,
* pero los fines de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si está abierto hoy...

const dia = 6; 
const hora = 10; 

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

//if ( dia === 0 || dia === 6 ) {
if ( [0,6].includes(dia) ) { // Si el día es 0 o 6
    console.log('Fin de semana');
    horaApertura = 9;
}   else {
    console.log('Día de semana');
    horaApertura = 11;
}

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

if (hora >= horaApertura) {
mensaje = 'Está abierto';
} else {
    mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}


mensaje = (hora >= horaApertura) ? 'Esta abierto' : `Esta Cerrado abrimos a las 11`;

console.log({horaApertura});

console.log({mensaje});


