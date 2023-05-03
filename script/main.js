const datospersonales = document.getElementsByClassName("datos");
function checkName(name) {
  if (typeof name != 'string') return true
  if (!isNaN(name)) return true
  if (name.length < 2) return true
  if (name.includes(' ')) return true
  return false

}
let datos = document.getElementsByClassName("datos");
for (let dato of datos) {
  console.log(dato.innerHTML);
};

const DatosdePacientes1 = {
  nombre: "Micaela",
  apellido: "Calandria",
  DNI: 36333444,
  tipodesangre: "B+",

}
console.log("Observo lo que esta dentro de mi objeto" + " " + DatosdePacientes1.tipodesangre);

const DatosdePacientes2 = {
  nombre: "Juan",
  apellido: "Gonzalez",
  DNI: 44222555,
  tipodesangre: "A+",
}

console.log("tipo de sangre de paciente Juan Gonzalez" + " " + DatosdePacientes2.tipodesangre);

//clases
class Paciente3 {
  constructor(nombre, apellido, DNI, tipodesangre) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.DNI = DNI;
    this.tipodesangre = tipodesangre;
  }
}
const Paciente = new Paciente3("Pedro", "Perez", 44555666, "0-");
console.log("DNI de" + Paciente3);

//Array
const ANALISIS = [
  { nombre: "Sangre", id: 1 },
  { nombre: "Orina", id: 2 },
  { nombre: "Radiografia", id: 3 },
  { nombre: "Ecografia", id: 4 },
  { nombre: "Mamografia", id: 5 },
];
ANALISIS.forEach((estudios) => {
  console.log(estudios.nombre);

  const listadeestudios = document.getElementById("Estudios");
  listadeestudios.innerHTML = "<option>Seleccione un estudio para realizarse</option>"
  ANALISIS.forEach((opciones) => {
    let item = document.createElement("option");
    item.value = opciones.id.toString();
    item.innerText = opciones.nombre;
    listadeestudios.append(item);
  });


});
const botonenviar = document.getElementById("Enviar");
botonenviar.onclick = () => { alert("Estudio Recibido")};
localStorage.setItem("analisis", JSON.stringify(ANALISIS));

let infoenlocalstorage = JSON.parse(localStorage.getItem('analisis'))





