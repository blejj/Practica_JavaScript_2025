var colors = require('colors');
let nombre = 'Hola como están';

function colorear(color, miString){

    if(typeof miString === 'string' || typeof miString == 'number'){
        let data = miString.toString();
        return data[color];
    }

    else{
        return miString;
    }
}

console.log(colorear("red", nombre));

module.exports = {
    colorear: colorear
}