// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

function some(arreglo, callback) {
  for (let i = 0; i< arreglo.length; i++) {
  if (callback(arreglo[i])) {
    return true
    }
  }
  return false
  const arreglo = [1, 2, 3, 4, 5]

  function mayorqueTres(numero) {
    return numero > 3
  }
  const algunoMayorQueTres = some(arreglo, mayorqueTres)
  console.log(algunoMayorQueTres) // true
}