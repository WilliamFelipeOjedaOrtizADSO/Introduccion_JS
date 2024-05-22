// En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
// pesado que demora más de 100 ms en finalizar.
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle. -------------------
// b) Antes del bucle.
// c) Al comienzo del bucle.
// ¿Qué va a mostrar alert()?

let i = 0

setTimeout(() => alert(i), 100);

// asumimos que el tiempo para ejecutar esta fncion es > 100 ms
for (let j = 0; j < 100000000; j++){
  i++
}


// cuando se muestre el cuadro de diálogo de alert(), mostrará el valor de i en ese momento, que es 0. El bucle for no afecta al valor de i utilizado por alert() porque JavaScript es de un solo hilo y la ejecución de setTimeout() se coloca en la cola de tareas para ejecutarse después de que el bucle haya terminado.