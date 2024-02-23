const fher = {
    nombre: 'Fernado',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad ${ this.edad }`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 30
}


const Melisa = {
    nombre: 'Pedro',
    edad: 30
}

function Persona(nombre, edad) { 
    console.log('se ejecuto esta linea')
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - edad ${ this.edad }`);
    }


}
//fher.imprimir()

const mariam = new Persona('Mariam', 20); // se ejecuta la función y se crea un nuevo objeto
const melisa = new Persona('Melisa', 20); // se ejecuta la función y se crea un nuevo objeto
console.log( mariam );

mariam.imprimir(); // se ejecuta la función imprimir
melisa.imprimir(); // se ejecuta la función imprimir