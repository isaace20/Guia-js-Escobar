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

//ejercicio 11
let mochila = [];

// Agregar objetos
mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");

// Quitar el último
mochila.pop();

// Mostrar resultado
console.log(mochila);

const inventario = ["espada", "poción", "llave", "escudo"];

if (inventario.includes("llave")) {
  console.log("La puerta se abre");
} else {
  console.log("Necesitás una llave");
}

//Ejercicio 12
const inventario = ["espada", "poción", "llave", "escudo"];

if (inventario.includes("llave")) {
  console.log("La puerta se abre");
} else {
  console.log("Necesitás una llave");
}

//Ejercicio 13
function saludarUsuario(nombre) {
  console.log("Bienvenido/a, " + nombre);
}

saludarUsuario("Milo");

//Ejercicio 14
function calcularVidaRestante(vida, danio) {
  return vida - danio;
}

let resultado = calcularVidaRestante(100, 30);
console.log(resultado);

//Ejercicio 15
const sumar = (a, b) => {
  return a + b;
};

console.log(sumar(10, 5));

//Ejercicio 16
const jugador = {
  nombre: "Luna",
  vida: 100,
  energia: 80,
  nivel: 1,
  inventario: ["espada", "poción"]
};

// Mostrar cada propiedad
console.log("Nombre:", jugador.nombre);
console.log("Vida:", jugador.vida);
console.log("Energía:", jugador.energia);
console.log("Nivel:", jugador.nivel);
console.log("Inventario:", jugador.inventario);

//Ejercicio 17
const jugador = {
  nombre: "Kai",
  nivel: 1,
  monedas: 0
};

// Subir nivel
jugador.nivel += 1;

// Sumar monedas
jugador.monedas += 50;

// Mostrar resultado
console.log(jugador);

//Ejercicio 18
const personajes = [
  { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
  { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
  { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];

for (let i = 0; i < personajes.length; i++) {
  let p = personajes[i];
  console.log(`${p.nombre} es ${p.tipo} y está en nivel ${p.nivel}`);
}

//Ejercicio 19
const personajesFuertes = personajes.filter((personaje) => {
  return personaje.nivel >= 3;
});

console.log(personajesFuertes);

//Ejercicio 20
const nombres = personajes.map((personaje) => {
  return personaje.nombre;
});

console.log(nombres);

//Ejercicio 21
const personajeEncontrado = personajes.find((personaje) => {
  return personaje.nombre === "Kai";
});

console.log(personajeEncontrado);

//Ejercicio 22
const vidaTotal = personajes.reduce((acumulador, personaje) => {
  return acumulador + personaje.vida;
}, 0);

console.log(vidaTotal);

//Ejercicio 23
const mensaje = document.getElementById("mensaje");

mensaje.textContent = "Bienvenido a la guía de JavaScript";
mensaje.style.color = "blue";

//Ejercicio 24
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

let puntos = 0;

boton.addEventListener("click", function () {
  // sumar puntos
  puntos += 10;

  // mostrar resultado
  mensaje.textContent = "Puntos: " + puntos;
});

//Ejercicio 25
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  let nombre = input.value;

  if (nombre === "") {
    mensaje.textContent = "Ingresá un nombre para continuar";
  } else {
    mensaje.textContent = `Bienvenido/a, ${nombre}`;
  }
});

//Ejercicio 26
const jugador = {
  nombre: "Luna",
  puntaje: 1500
};

// guardar en localStorage
localStorage.setItem("jugador", JSON.stringify(jugador));

// recuperar desde localStorage
const jugadorRecuperado = JSON.parse(localStorage.getItem("jugador"));

// mostrar por consola
console.log(jugadorRecuperado);