//EJERCICIO 1
/* declaracion de funcion
    recibe dos parametros 
    oracion = oracion
    buscar = buscar
    resultado= true/false
*/


///basado en el ejemplo de eduardo de index of
function buscarPalabra(oracion, palabra){
    var posicion = oracion.indexOf(palabra);

    if(posicion !== -1){
        return true;
    }else{
        return false;
    }
 
}


buscarPalabra('hola mundo devf computadora', 'celular')



//EJERCICIO 2
//basado en otro companero
const numbers=[1,2,3,4,10,11]

function sumaNumbers(arr){
    var suma = 0;
    for(var i=0; i<arr.length; i++){
        suma += arr[i]
    }
    return suma;
}

sumaNumbers(numbers)



//EJERCICIO 3


function palindromo (palabra) {

    let array = palabra.split('');
    let reverse = array.reverse();
 
 
     if(palabra === reverse.join('')) {
         console.log("La palabra SI es un palindromo")
     } else{
         console.log("La palabra NO es un palindromo")
     }
 }
 
 palindromo('ana');


 //EJERCICIO 4 

 var tempC = prompt('Introduce la temperatura en Celcius')
 var tempF = prompt('Introduce la temperatura en Fahrenheit')


 function conversion(tempC, tempF){
     var tempCaF = (tempC * 1.8) + 32;
     var tempFaC =(tempF - 32) / 1.8;
     console.log(`la temperatura ${tempC} grados Celcius es = ${tempCaF} grados Fahrenheit`);
     console.log(`la temperatura ${tempF} grados Fahrenheit es = ${tempFaC} grados Celcius`);
 }

 conversion(tempC,tempF)




