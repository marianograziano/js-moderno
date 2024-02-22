function saludar( nombre ) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
     return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
}

const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre)  => {
    console.log('Hola Flecha ' + nombre);
}

const retornoDeSaludar = saludar('Juan',40, true, 'Costa Rica');
console.log(retornoDeSaludar[0],retornoDeSaludar[1],retornoDeSaludar[2],retornoDeSaludar[3],retornoDeSaludar[4],retornoDeSaludar[5],retornoDeSaludar[6],retornoDeSaludar[7],retornoDeSaludar[8],retornoDeSaludar[9],retornoDeSaludar[10],retornoDeSaludar[11],retornoDeSaludar[12],retornoDeSaludar[13],retornoDeSaludar[14],retornoDeSaludar[15],retornoDeSaludar[16]);

///saludar('Juan',40, true, 'Costa Rica');
//saludarFlecha2('Juan');
function sumar( a, b ) {
    return a + b;
}

function getAleatorio() {
    return Math.random();
}

const sumar2= (a, b ) =>  a + b;
const getAleatorio2 = () => Math.random();
console.log(sumar(1,2));
console.log(getAleatorio());
console.log(getAleatorio2());