setTimeout(() => {
  console.clear();
}, 20000);

const d = document;
console.log(d.head);
console.log(d.documentElement);
console.log(d.charset);
console.log(d.getElementsByTagName("img"));
console.log(d.getElementsByClassName("elpanamiguel"));
/*     console.log(d.getElementsByName("michi"));
    console.log(d.getElementById("michifus")); */
console.log(d.querySelector(".gato"));
console.log(d.querySelector("#michifus"));
console.log(d.querySelectorAll("script"));
console.log(d.documentElement.lang);
console.log(d.querySelector(".elpanamiguel").src);
console.log(d.querySelector(".elpanamiguel").getAttribute("src"));

d.querySelector(".gato").setAttribute("type", "number");

const $change = d.querySelector(".gato"),
  $muestra = d.querySelector(".muestra"),
  $body = d.querySelector("body");

$change.setAttribute("placeholder", "Cambiando el placeholder");

console.log($change.hasAttribute("name"));

$change.removeAttribute("placeholder");
console.log($change.hasAttribute("placeholder"));

$change.setAttribute("placeholder", "Miauuu...");
console.log($change.getAttribute("placeholder"));

console.log($change.dataset);
console.log($change.dataset.description);
console.log($change.getAttribute("data-description"));

$change.dataset.description = "los-michis";
console.log($change.dataset.description);

$change.setAttribute("data-description", "elgato...");
console.log($change.dataset.description);

console.log($change.hasAttribute("data-description"));
$change.removeAttribute("data-description");
console.log($change.hasAttribute("data-description"));
$change.setAttribute("data-description", "aaaaaaa...");
console.log($change.getAttribute("data-description"));
console.log($change.hasAttribute("data-description"));

/*Estilos en el DOM */

console.log($muestra.style);
console.log(d.documentElement.style);
//console.log(window.getComputedStyle($muestra));
console.log($muestra.style.border);
console.log($muestra.style.width);
console.log($muestra.style.height);
console.log($muestra.style.backgroundColor);

console.log(window.getComputedStyle($muestra).getPropertyValue("border"));
$muestra.style.setProperty("background-color", "purple");
$muestra.style.setProperty("border", "thick solid black");
$muestra.style.borderRadius = "50px 50px 0px 0px";
$muestra.style.width = "30vw";
$muestra.style.height = "40vh";
$muestra.style.backgroundImage = "linear-gradient(90deg,cyan,red)";
$muestra.style.display = "flex";
$muestra.style.justifyContent = "center";
$muestra.style.alignItems = "center";
$body.style.display = "flex";
$body.style.flexFlow = "column nowrap";
$body.style.justifyContent = "center";
$body.style.alignItems = "center";

console.log($muestra.className);
$muestra.classList.contains;
console.log($muestra.classList.contains("primera-class"));

$muestra.classList.add("nueva-class");
console.log($muestra.classList.contains("nueva-class"));

$muestra.classList.add("segunda-class", "tercera-class");

$muestra.classList.remove("nueva-class");

$muestra.classList.toggle("cuarta-class");
$muestra.classList.toggle("cuarta-class");
$muestra.classList.toggle("cuarta-class");
$muestra.classList.toggle("quinta-class");

$muestra.classList.replace("quinta-class", "ultima-class");

const $parrafo = d.getElementById("Use-p"),
  text = `<h2> Primer texto en el Dom </h2>`;

$parrafo.innerHTML = text;

console.log($body.children);
console.log($body.children[5]);
console.log($body.children[7]);
console.log($body.children[5]);
console.log($muestra.parentElement);
console.log($body.parentElement);
console.log($body.firstElementChild);
console.log($body.lastElementChild);
console.log($body.previousElementSibling);
console.log($body.nextElementSibling);
console.log($muestra.closest("body"));

const listaComplas = d.querySelector("ul"),
  comida = ["carne", "huevo", "manzana", "leche", "agua"];

comida.forEach((el) => {
  const li = d.createElement("li");
  li.textContent = el;
  listaComplas.appendChild(li);
});

const $img = d.createElement("img");
$img.src = "assets/mercy.jpg";
$img.style.width = "50em";
$img.style.position = "sticky";

d.body.appendChild($img);

const button = document.getElementById("myButton");

function showAlert() {
  alert("¡Hiciste clic en el botón!");
}

function changeColor() {
  button.style.backgroundImage =
    "linear-gradient(to bottom, red 0 50%, blue 50% 100%)";
}

button.addEventListener("click", showAlert);
button.addEventListener("click", changeColor);
