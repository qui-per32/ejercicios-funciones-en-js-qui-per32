// crea la función conCuantosParametrosMeHanEjecutado
// Esta función recibe un numero indeterminado de argumentos
// y los recibiremos en un array con el operador rest
// Debe devolver un numero indicando con cuantos parametros fue ejecutada
// Por ejemplo:
// conCuantosParametrosMeHanEjecutado('Estudiante','Del') === 2
// conCuantosParametrosMeHanEjecutado(1,2,3,4,5) === 5
// conCuantosParametrosMeHanEjecutado('a') === 1
// conCuantosParametrosMeHanEjecutado() === 0

// NO HACE FALTA NINGÚN BUCLE

// Ha de pasar los test adjuntados.

// Aquí tu código.  Desde aquí:
const conCuantosParametrosMeHanEjecutado = (parametros) => {

}
// Hasta aquí.


let test = require('./test.js');

test(conCuantosParametrosMeHanEjecutado, [], 0);
test(conCuantosParametrosMeHanEjecutado, ['hola', 'caracola'], 2);
test(conCuantosParametrosMeHanEjecutado, ['33', '44',' '], 3);
