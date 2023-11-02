const arr = ["1", "2", "3", "4", "5"];

// Agregando "9" al arr con push()
arr.push("9");
console.log(arr);

// Agregando "-8" al arr con unshift()
arr.unshift("-8");
console.log(arr);

// Eliminando "9" del arr con pop();
arr.pop();
console.log(arr);

// Eliminando "-8" del arr con shift();
arr.shift();
console.log(arr);

// Filtrando numeros pares del arr (2, 4);
let Filter = arr.filter((num) => num % 2 == 0);
console.log(Filter);

// Multiplicando el arr por 3 con map();
let Map = arr.map((el) => el * 3);
console.log(Map);

// Separando los elementos del arr con join();
let Join = arr.join("--");
console.log(Join);

// Concatenando elementos al arr con concat();
let Concat = arr.concat(["7", "-10", "0.5"]);
console.log(Concat);

// Creando un arr2 para usar el flat();
const arr2 = ["20", "30", ["6", "9", ["-7"]], ["-12"]];
let Flat = arr2.flat();
console.log(Flat);
let Flat2 = arr2.flat(2);
console.log(Flat2);

// Usando en el arr el slice(inicio, fin);
let Slice = arr.slice(1, 3);
console.log(arr);
console.log(Slice);
