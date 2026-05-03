//Ejercicio 2
¿Cómo calculamos el puntaje final de una partida?

Calculamos el puntaje final usando operadores matemáticos, sumando el bonus a los puntos base y restando la penalización.


//Ejercicio 4
Validamos si una persona puede ingresar usando una estructura condicional if, comparando la edad con el valor mínimo requerido (13).

//Ejercicio 12
 ¿Cómo sabemos si el jugador tiene una llave?

Usamos el método includes sobre el array del inventario para comprobar si contiene la palabra 'llave'. Este método devuelve true o false, lo que permite tomar una decisión con un condicional.



//ejercicio 18

Se utiliza un array para almacenar múltiples personajes, y cada personaje se representa como un objeto con diferentes propiedades. Esto permite organizar y acceder fácilmente a los datos de cada uno.

//ejercicio 20

Podemos transformar un array de objetos en uno más simple utilizando el método map, que recorre cada elemento y devuelve un nuevo valor según lo que necesitemos.

//ejercicio 22
Podemos sumar una propiedad de varios objetos utilizando el método reduce, que recorre el array y acumula un valor en cada iteración.

//ejercicio 24
Podemos hacer que un botón ejecute una acción utilizando eventos, específicamente el evento click, que permite ejecutar código cuando el usuario hace click.

//ejercicio 26
Podemos guardar información que persista usando localStorage, almacenando los datos como texto (JSON) con JSON.stringify y recuperándolos con JSON.parse.

// ejercicio 27
let y const tienen alcance de bloque (block scope), mientras que var tiene alcance de función y puede generar comportamientos inesperados. Además, const no permite reasignar el valor.

Uso let cuando necesito una variable cuyo valor va a cambiar con el tiempo.

Uso const cuando el valor no va a cambiar, ya que evita reasignaciones y hace el código más seguro.

Se recomienda evitar var porque tiene un alcance más amplio (scope de función), permite redeclaraciones y puede causar errores difíciles de detectar.

// ejercicio 28
El scope (alcance) define desde dónde se puede acceder a una variable dentro del código. Puede ser global o local (dentro de una función o bloque).

Se muestra "Local"

Se muestra "Global"

Porque dentro de la función se crea una variable local con el mismo nombre (nombre), que solo existe dentro de esa función y “tapa” a la variable global. Al salir de la función, la variable local deja de existir y se vuelve a usar la variable global.

La variable local tiene prioridad dentro de su propio scope, pero no afecta a la variable global fuera de la función.

// Ejercicio 29
¿Cuándo usar un array y cuándo un objeto?

Se usa un array cuando queremos almacenar una lista de elementos del mismo tipo, y un objeto cuando necesitamos representar una entidad con varias propiedades diferentes.

¿Qué representa cada uno?


El array inventario representa una lista de objetos que tiene el jugador. Se usa porque solo importa el orden y los elementos.

En resumen, los arrays son ideales para colecciones de datos, mientras que los objetos sirven para estructurar información más compleja y descriptiva.

//Ejercicio 30
¿Qué es un evento en JavaScript?


Un evento es una acción que ocurre en la página (como un clic, una tecla o el movimiento del mouse) y que puede ser detectada para ejecutar código en respuesta.

¿Qué elemento escucha el evento?


El botón (boton) es el elemento que escucha el evento.

¿Qué evento se está escuchando?


El evento "click" (cuando el usuario hace clic).

¿Qué acción se ejecuta?


Se ejecuta una función que muestra en consola el mensaje: "El usuario hizo clic".

¿Dónde podríamos aplicar esto?


En una página web o videojuego se puede usar para manejar interacciones del usuario, como presionar un botón para iniciar el juego, sumar puntos, abrir un menú o realizar una acción dentro del juego.

Cierre (queda bien para sumar puntos)


Los eventos permiten que las aplicaciones sean interactivas, respondiendo a las acciones del usuario en tiempo real.

