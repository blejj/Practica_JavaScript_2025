const { suma, resta, multiplicacion, division } = require('./MisModulos/calculadora')
const { colorear } = require('./MisModulos/loggerColor');
const { separador } = require('./MisModulos/utils');

let miAuto = {
    marca: "Ford",
    color: "gris",
    timeMachine: true
}

//FUNCIONES POR DECLARACION

function saludar(){
    console.log("Hola mundo por declaracion");
}

saludar();

//FUNCIONES POR EXPRESIÓN

let saludarExpresion = function (n1,n2) {
    return n1 + n2;
}

console.log(saludarExpresion(2,2)); 

//FUNCIONES LAMBDA O ANÓNIMAS

console.log("------------------------ FUNCION LAMBDA ------------------------");

const numeros = [1,2,3];

numeros.forEach(function(num){
    console.log(num * 2);
});

console.log("-----------------------------------------------------------------");

//FUNCIONES ARROW

console.log("------------------------ FUNCION ARROW ------------------------");

resta();

console.log("La resta es: " + resta(6,2));

console.log("-----------------------------------------------------------------");

console.log(typeof(miAuto));

console.log(miAuto.nombre);

separador();

console.log(colorear('yellow', 8));

console.log(colorear("red", JSON.stringify(miAuto)));
console.log(colorear('green', JSON.stringify(miAuto)));
console.log(colorear('yellow', JSON.stringify(miAuto)));
console.log(colorear('blue', JSON.stringify(miAuto)));