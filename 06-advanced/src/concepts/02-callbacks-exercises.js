// import { heroes } from "../data/heroes";

// /**
//  * 
//  * @param {HTMLDivElement} element 
//  */
export const callbacksComponents = ( element ) => {

//     //console.log('callbacksComponents') ;
//     const id = '5d86371fd55e2e2a30fe1ccb2';
    
    
    
//     findHero( id, ( (error, heroe ) => {
        
//         if ( error ) {
//       element.innerHTML = error; 
//       return; 
//     }         //element.innerHTML = heroe?.name || 'No hay Heroe';
//         element.innerHTML = heroe.name || 'No hay Heroe';
//     } ));

// }


// /**
//  * 
//  * @param {String} id 
//  * @param {(error: String | Null, hero: Object) => void } callback 
//  */
// const findHero = ( id, callback)  => {

//     const hero = heroes.find( hero => hero.id === id);

// if ( !hero ) {
//     callback(`Hero with id ${ id } not found.`);
//     return; 
// }

// callback( null,  hero ); 

// }


const operation = (numero1, numero2, op) => {
    return operation(numero1,numero2);
}

operation(1,3, (a,b) => a + b );

}
