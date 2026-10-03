const nombre = prompt("Ingresa tu nombre:");
const vehiculo = prompt("¿Qué vehículo deseas comprar?");
const precio = parseInt(prompt("Ingresa el precio del vehículo:"));
const inicial = parseInt(prompt("Ingresa cuánto deseas dar de cuota inicial:"));

let saldo = precio;
saldo = saldo - inicial;

console.log("Saldo por financiar: S/ " + saldo);

const mensaje = "Hola " + nombre + ", elegiste el vehículo " + vehiculo + ". El precio es S/ " + precio + ", tu cuota inicial es S/ " + inicial + " y el saldo por financiar es S/ " + saldo + ".";

alert(mensaje);