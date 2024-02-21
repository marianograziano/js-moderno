function crearPersona(nombre, apellido) {
    return { nombre,apellido }
}

const crearPersona2 = (nombre, apellido) => ({ nombre,apellido }); // Si se quiere retornar un objeto, se debe encerrar entre paréntesis

const persona = crearPersona('Juan', 'Perez');
console.log(persona);
const persona2 = crearPersona2('Juan', 'Perez');
console.log(persona2);


function imprimeArgumentos() {
    console.log(arguments);
}
const imprimeArgumentos2 = (edad, ...args) => { // Con los tres puntos se indica que se recibirá un número indeterminado de argumentos no puede venir otra cosa 
    //console.log({edad, args}   );
    return args;
}

const [casado,vivo,nombre,apellido] = imprimeArgumentos2(10, true, false, 'Juan', 'Perez');
console.log({casado,vivo,nombre,apellido});


const { apellido: nuevoApellido } = crearPersona('Fernando', 'Herrera');
console.log({nuevoApellido});


let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    cors: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],

}

// const imprimePropiedades = ( personaje ) => 
// {
//     console.log('Nombre: ', personaje.nombre);
//     console.log('CodeName: ', personaje.codeName);
//     console.log('Vivo: ', personaje.vivo);

// }

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => 
{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );