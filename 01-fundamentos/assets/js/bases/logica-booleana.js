const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {  
    console.log('Regresa false');   
    return false;
}

console.warn('Not o a la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaTrue());



console.warn('And');
console.log(true && true);
console.log(true && !false);

console.log("==================================");
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());


console.warn('OR'); 
console.log(true || false); 
console.log(false || false);    
console.log(regresaTrue() || regresaFalse());


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso  || 'Ya no soy falso';
const a4 = soyFalso  || soyUndefined || soyNull || 'Ya no soy falso' || true;
const a5 = soyFalso  || soyUndefined || regresaTrue() || 'Ya no soy falso' || true;
console.log({a1, });  
console.log({a2, });  
console.log({a3, });  
console.log({a4, });
console.log({a5, });