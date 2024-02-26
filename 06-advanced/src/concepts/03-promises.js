import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    console.log('demoComponent') ;

}


const findHero = ( id ) => {
    //    const hero = heroes.find( hero => hero.id === id )
    const promise = new Promise((resolve, reject ) => {    });

    if ( hero ) {
        resolve ( hero ); 
}
}
reject(`Hero with id ${ id } not found`);

