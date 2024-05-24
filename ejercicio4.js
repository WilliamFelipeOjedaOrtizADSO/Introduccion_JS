// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro"

// Definimos una función llamada "filter" que acepta dos parámetros: "array" y "callback"
function filter(array, callback) {
  // Creamos un nuevo array vacío llamado "newArray" donde almacenaremos los elementos que pasen el filtro
  let newArray = [];

  // Iteramos sobre cada elemento del array usando un bucle "for"
  for (let i = 0; i < array.length; i++) {
    // Llamamos al callback pasándole el elemento actual del array como argumento
    let currentElement = array[i];
    let callbackResult = callback(currentElement);

    // Evaluamos el resultado del callback para determinar si el elemento pasa el filtro
    if (callbackResult) {
      // Si el callback devuelve "true", añadimos el elemento al nuevo array
      newArray.push(currentElement);
    }
  }

  // Una vez hemos terminado de iterar sobre todos los elementos del array original, devolvemos el nuevo array
  return newArray;
}

// Ejemplo de uso:

// Definimos un array de números
const numbers = [1, 2, 3, 4, 5];

// Definimos una función de callback que filtra los números pares
function esPar(numero) {
  // Devolvemos "true" si el número es par, de lo contrario devolvemos "false"
  return numero % 2 === 0;
}

// Usamos la función "filter" pasando el array de números y la función de callback
const numerosPares = filter(numbers, esPar);

// Mostramos el resultado en la consola
console.log(numerosPares); // Output: [2, 4]
