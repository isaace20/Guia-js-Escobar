console.log("Guía JavaScript iniciada");
//Ejercicio 1
const jugador = {
  nombre: "Damian",
  edad: 21,
  vida: 80,
  puntaje: 150,
  estaActivo: false
};

console.log(jugador);
//Ejercicio 2
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;

let suma=puntosBase+bonus-penalizacion;

console.log(suma);

//Ejercicio 3
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  let valor = input.value;

  // Convertir a número
  let numero = Number(valor);

  // Sumar 10
  let resultado = numero + 10;

  // Mostrar resultado
  mensaje.textContent = resultado;
});

//ejercicio 4
let edad = 15;

if (edad >= 13) {
  console.log("Puede jugar");
} else {
  console.log("No puede jugar todavía");
}

//ejercicio 5

let vida = 50;

if (vida > 70) {
  console.log("Jugador en buen estado");
} else if (vida >= 30 && vida <= 70) {
  console.log("Jugador herido");
} else if (vida >= 1 && vida <= 29) {
  console.log("Jugador en peligro");
} else if (vida === 0) {
  console.log("Game Over");
} else if (vida < 0) {
  console.log("Error: vida inválida");
}

//ejercicio 6

let opcion = "iniciar";

switch (opcion) {
  case "iniciar":
    console.log("Iniciando juego...");
    break;

  case "configuracion":
    console.log("Abriendo configuración...");
    break;

  case "creditos":
    console.log("Mostrando créditos...");
    break;

  case "salir":
    console.log("Saliendo del juego...");
    break;

  default:
    console.log("Opción no válida");
}

//ejercicio 7
for (let i = 3; i >= 1; i--) {
  console.log(i);
}

console.log("¡Comienza!");

//ejercicio 8 
let puntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
  puntajeTotal += 10;
}

console.log(puntajeTotal);

//ejercicio 9
const inventario = ["espada", "poción", "llave", "escudo", "mapa"];

// Primer objeto
console.log("Primer objeto:", inventario[0]);

// Último objeto
console.log("Último objeto:", inventario[inventario.length - 1]);

// Cantidad total
console.log("Cantidad total:", inventario.length);

//ejercicio 10
const inventario = ["espada", "poción", "llave", "escudo"];

for (let i = 0; i < inventario.length; i++) {
  console.log(inventario[i]);
}

