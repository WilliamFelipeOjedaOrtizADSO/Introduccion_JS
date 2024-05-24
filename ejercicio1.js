// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado


// Ingresamos los dos numeros para regalar los parametros ----------------------------------------------

let desde = prompt("Ingrese el primer numero")
let hasta = prompt("Ingrese el segundo numero")

// Con SetInterval ----------------------------------------------------------------------

// Declaramos los parametros
function imprimirNumeros(desde, hasta) {
    let contador = desde;
// Realizamos el intervalo
    const intervalo = setInterval(function() {
        console.log(contador);
        contador++;
// Declaramos el bucle 
        if (contador > hasta) {
            clearInterval(intervalo);
        }
    }, 1000);
}

imprimirNumeros(desde, hasta)


//Con SetTimeout --------------------------------------------------------------------------

// Declaramos la funcion con sus parametros
function imprimirNumeros(desde, hasta) {
  //Declaramos la funcion imprimir con su parametro numero
  function imprimir(numero) {
      //Imprimimos el parametro
        console.log(numero);
        // Realizamos el bucle
        if (numero < hasta) {
          // Declaramos el intervalo
            setTimeout(function() {
                imprimir(numero + 1);
            }, 1000);
        }
    }

    imprimir(desde);
}