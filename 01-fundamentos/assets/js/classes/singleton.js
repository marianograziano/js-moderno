class Singleton {
  static instancia; // undefined
    nombre = '';

    constructor(nombre = '') {

        //const a = undefined;
        // console.log(a);
        // console.log(!a);
        // console.log(!!a);
        //sole.log(Singleton.instancia);
        if (!!Singleton.instancia) {
            return Singleton.instancia;
            //        console.log(Singleton.instancia);
            }
            Singleton.instancia = this;
            this.nombre = nombre;
            
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');
console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia1 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia1 es: ${instancia3.nombre}`);
//console.log(`Nombre en la instancia1 es: ${instancia2.nombre}`);