let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    cors: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',

}

console.log(personaje);
console.log('Nombre ', personaje.nombre);
console.log('Nombre ', personaje['nombre']);
console.log('Edad ', personaje['edad']);
console.log('Cors ', personaje['cors']);
console.log('Lat ', personaje['cors'][ 'lat']);
console.log('Lat ', personaje.cors.lat);
console.log('Lat ', personaje.cors.lng);
console.log('Nro Trajes ', personaje.trajes.length);
console.log('Ultimo Traje ', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo';

console.log('Vivo ', personaje[x]);
console.log('Ultima Pelicula', personaje['ultima-pelicula']);


// Mas detalles


delete personaje.edad;  // Elimina la propiedad edad

personaje.casado = true;

console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 1000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);


const propiedades  =  Object.getOwnPropertyNames(personaje);    
const values =  Object.values(personaje);
console.log({propiedades});
console.log({values});