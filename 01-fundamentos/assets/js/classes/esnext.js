class Rectangulo {
    #area = 0;

    constructor(base = 0, altura = 0) { 
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }

    #calcularArea() {
        console.log(this.#area * 2);
    }

    calcularAreaPublica() {
        this.#calcularArea();
    }
}

const rectangulo = new Rectangulo(10, 15);
//rectangulo.#area = 100;

console.log(rectangulo);
rectangulo.calcularAreaPublica();


