let separador = () => {
    console.log("#####################################################################################");
}

let miAuto = {
    nombre: "Ford",
    ruedas: 4,
    puertas: 5
}

//FUNCIONES POR DECLARACION

function saludar() {
    console.log("Hola mundo por declaracion");
}

saludar();

//FUNCIONES POR EXPRESIÓN

let saludarExpresion = function (n1, n2) {
    return n1 + n2;
}

console.log(saludarExpresion(2, 2));

//FUNCIONES LAMBDA O ANÓNIMAS

console.log("------------------------ FUNCION LAMBDA ------------------------");

const numeros = [1, 2, 3];

numeros.forEach(function (num) {
    console.log(num * 2);
});

console.log("-----------------------------------------------------------------");

//FUNCIONES ARROW

console.log("------------------------ FUNCION ARROW ------------------------");

let resta = (n1, n2) => {
    console.log("Resta");
    return n1 - n2;
}

let suma = (n1, n2) => {
    console.log("Suma");
    return n1 + n2;
}

console.log("-----------------------------------------------------------------");

// console.log(typeof(miAuto));          PODEMOS VER EL TIPO DE DATO MIAUTO

// console.log(miAuto.nombre);           NOMBRE DEL OBJETO AUTO

let numero1 = 10; //Este.
let numero2 = 20; // Y este.

function calcular(num1, num2, callback) {
    callback(num1, num2)
    callback(num1, num2)
    callback(num1, num2)
    callback(num1, num2)
    callback(num1, num2)
    callback(num1, num2)
    callback(num1, num2)
    return callback(num1, num2);
}

// Está tomando el numero1 y numero2 de arriba.

resultado = calcular(numero1, numero2, resta);
resultado = calcular(numero1, numero2, suma);

console.log(resultado);

resultado = calcular(numero1, numero2, (num1, num2) => {
    return num1 + num2;
});

console.log(resultado)

separador();

function solicitarAlServidor(consulta, callback) {
    let resultado = consulta + "lleno";
    return callback(resultado);
}

function obtenerResultados(resultado) {
    console.log("Respuesta del servidor: " + resultado)
}

solicitarAlServidor("Vaso ", obtenerResultados); //Lo que pasa acá es que al ir a la función solicitarAlServidor y le pasamos la consulta, guarda la consulta + "el lleno". Luego va a la otra función y muestra todo. "Respuesta del servidor: Vaso lleno."

separador();

solicitarAlServidor("Vaso ", (resultado) => {
    console.log("Respuesta del servidor: " + resultado)
});