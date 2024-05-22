// 5. Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

let arreglo = [2, 4, 6, 8, 10];
 
function esPar(numero) {
  return numero % 2 === 0;
}

function every(arreglo, callback) {
  for (let i = 0; i < arreglo.length; i++) {
    if (!callback(arreglo[i])) {
      return false;
    }
  }
  return true;
}

const todosPares = every(arreglo, esPar);
console.log(todosPares);

// if (numeros.every((numbers) => numeros.length = 1)) {
//   console.log('Todos los numeros son iguales')
//   return numeros
// 