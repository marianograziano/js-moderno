let a = 10;


if (a >= 10) {
    console.log('A es mayor o igual a 10');
}  else {   
    console.log('A es menor a 10');
}

console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes, etc

console.log({dia});


if ( dia == 0 ) { 
    console.log('Domingo');
} else if ( dia == 1 ) {
    console.log('Lunes');
}

const diasLetras =  {
    0: () => 'domingo - 0',
    1: () => 'lunes  - 1 ',
    2: () => 'martes - 2 ',
    3: () => 'miércoles - 3 ',
    4: () => 'jueves - 4 ',
    5: () => 'viernes - 5  ',
    6: () => 'sábado -6 ',
}

console.log(diasLetras[dia]() || 'Día no definido');