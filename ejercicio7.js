// 7. Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

const arreglo = [1, 2, 3, 4, 5]

function name(arreglo, callback) {
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  return undefined;
}

function encontrarPar(numero) {
  
}