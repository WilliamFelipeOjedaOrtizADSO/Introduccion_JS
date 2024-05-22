// 3. Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array

let arreglo = [1, 5, 7, 9]
let arreglo2 = []
    
    function multiplicacion(x) {
      return x * 2
    }
    let resultado = arreglo.map(multiplicacion)

console.log(resultado)

let total = resultado.push(arreglo2)

console.log(total)
    

