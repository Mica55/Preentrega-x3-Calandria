let nombre= prompt("Ingrese su nombre")
let apellido= prompt("Ingrese su apellido")
let edad = parseInt(prompt("¿Que edad tienes?"));

if (edad >= 18) {
	alert("Bienvenido al sitio");
  console.log("Puedes ingresar al sitio");
  
  //Si es mayor
  let profesional = prompt("¿ Con que profesional desea atenderse?")
  alert("Con" +  profesional + "solo daremos 5 turnos")
  console.log("con" +  profesional  + "solo daremos 5 turnos");
  //Si es menor
} else {
	alert("No puedes ingresar al sitio, no eres mayor de edad. Por favor vuelva con un mayor. Presione Aceptar y luego F5 para recargar la página");
	console.log("No puedes ingresar al sitio, no eres mayor de edad.");
}
let mail = prompt("Ingrese su mail para recibir numero de turno")
console.log("el usuario ingresa mail");
let turno = 1;
for (let turno = 1; turno <= 5; turno++);{
    alert("Su numero es" +  turno + "Revise su mail, Muchas gracias")
    console.log("Solo 5 turnos entregados")
}
function saludo(bienvenido) {
  console.log("Hola"  +  bienvenido );
  
 }
 saludo("bienvenido"  +  nombre );
