// Creando un objeto
const per1 = {
  id: 12345,
  nombre: "Pedro",
  apellido: "Pacheco",
};

console.log(per1);

// POO
/*
    Clases - Modelo a seguir.
    Objetos - Es una instancia de una clase
      Atributos - es una característica o propiedad del objeto (son variables dentro de un objeto)
      Métodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/

const animal = {
  nombre: "Snoopy",
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  },
};

const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  },
};

console.log(animal);
console.log(animal2);

//Función constructora
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;

  //Métodos
  this.sonar = function () {
    console.log("Hago sonidos por que estoy vivo");
  };

  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  };
}
//Función constructora donde asignamos los métodos al Prototipo, no a la función como tal
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
}
