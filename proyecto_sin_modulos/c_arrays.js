//Crear un array vacío pasándole el valor
let miArrayVacio = []

//Crear un array vacío utilizando el operador new
let miArrayVacioNew = new Array()

//Crear un array con valores
let numeros = [23, 5, "hola", {nombre: "Franco", materia: "Backend"}]

//Crear un array con valores con el operador new
let numerosNew = new Array(0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55)

numeros.push("fiero"); //agrega un elemento al final

numeros.pop();

numeros[0] = 1; 
numeros[1] = 2;

console.log(numeros);

miArrayVacioNew = new Array(1,2,3,4,5,6,7,8,9);

console.log("El array tiene " + miArrayVacioNew.length + " elementos.") //cantidad de elementos que tiene mi array.

let acumulador = 0;

miArrayVacioNew.forEach((elemento, i) => {
    console.log("El numero " + elemento + " se encuentra en la posicion " + i)
    acumulador = acumulador + elemento;
    miArrayVacioNew[i] = acumulador
    console.log(acumulador)
});

console.log(miArrayVacioNew)

