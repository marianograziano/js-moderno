class Persona {

    static porObjeto({ nombre, apellido, pais }) {
        return new Persona(nombre, apellido, pais);
    } 
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }



 getInfo() {
        console.log(`Información: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }

}

const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais = 'Honduras';

    const fher = {
        nombre: 'Fernando',
        apellido: 'Herrera',
        pais: 'Costa Rica',
    
    }

const persona = new Persona(nombre1, apellido1, pais);
const persona2 = Persona.porObjeto(fher);
persona.getInfo();
persona2.getInfo();
