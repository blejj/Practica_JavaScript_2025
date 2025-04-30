const {superDivisor} = require('./utils');

let resta = (n1,n2) => {
    return n1-n2;
}

let suma = (n1,n2) => {
    return n1+n2;
}

let division = (n1,n2) => {
    return n1/n2;
}

let multiplicacion = (n1,n2) => {
    return n1*n2;
}

console.log("La division da: " + superDivisor(10,2));

module.exports = {
    resta: resta,
    suma: suma,
    division: division,
    multiplicacion: multiplicacion
}