let miAuto = {
    nombre: "Ford",
    ruedas: 4,
    puertas: 5
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

let resta = (n1,n2) => {
    return n1-n2;
}

console.log("La resta es: " + resta(6,2));

console.log("-----------------------------------------------------------------");

console.log(typeof(miAuto));

console.log(miAuto.nombre);