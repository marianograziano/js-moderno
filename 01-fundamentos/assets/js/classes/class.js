class Persona{

    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    static mensaje() {
        console.log(this.nombre); // undefined
        console.log('Hola a todos, soy un método estático');    
    }

    nombre = ''; // A partir de ECMAScript 6 se puede inicializar las variables en la declaración
    codigo = ''; 
    frase  = '';
    comida = '';


    constructor(nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase= 'Sin Frase') {
        if ( !nombre || !codigo || !frase ) {
             throw new Error('Necesitamos el nombre, código y frase');
         }
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }
    
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

//const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');


ironman.quienSoy(); 

ironman.setComidaFavorita = 'El pie de cereza de la tía May';
// console.log (ironman.getComidaFavorita);
// console.log(ironman);
console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

//

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);