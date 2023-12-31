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

// Usando metodo en el arr el some() devuelve un boolean;
let Some = arr.some((num) => num % 3 == 0);
let Some2 = arr.some((num) => num < 6 && num > 0);
console.log(Some);
console.log(Some2);

// Usando en el arr el every() devuelve un boolean;
let Every = arr.every((num) => num * 1 == num);
console.log(arr);
console.log(Every);

// Usando en el arr el find() devuelve el valor del 1er valor que cumpla la función;
let Find = arr.find((num) => num > 3);
console.log(Find);

// Usando en el arr el findIndex()
let FindIndex = arr.findIndex((num) => num == 4);
console.log(arr);
console.log(FindIndex);

// Usando en el arr el indexOf();
let IndexOf = arr.indexOf("4");
console.log(arr);
console.log(IndexOf);

// Usando en el arr el includes() devuelve un boolean;
let Includes = arr.includes("3" && "5");
console.log(Includes);

// Usando en el arr el at(indice);
let At = arr.at(4);
console.log(At);

// Usando en el arr3 el sort();
const arr3 = ["90", "85", "60", "23"];
let Sort3 = arr3.sort();
console.log(Sort3);

// Usando en el arr 3 el reverse();
let Reverse = arr3.reverse();
console.log(Reverse);

// Usando en el arr3 el fill()
let Fill = arr3.fill(8, 1);
console.log(Fill);
