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

class Heroe extends Persona {

    clan = 'Sin clan';
    
    constructor(nombre, codigo, frase)  {
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';
    }

    quienSoy() {
        super.quienSoy();
        console.log(`Soy ${this.nombre} y pertenezco al clan ${this.clan}`);
    }
}

const spiderman = new Heroe('Tony Stark', 'Ironman', 'Yo soy Ironman');
//const spiderman = new Heroe();
console.log(spiderman);

spiderman.quienSoy();

