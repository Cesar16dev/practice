// Creando un objeto
const per1 = {
  id: 12345,
  nombre: "Pedro",
  apellido: "Pacheco",
};

console.log(per1);

// Creando un objeto con funcion constructora
function Animal(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;

  this.sonar = function () {
    console.log("Hago sonidos");
  };
}


const snoopy = new Animal("Snoopy", "Perez");
console.log(snoopy);

const speedy = new Animal("Speedy", "Gonzales");
console.log(speedy);
