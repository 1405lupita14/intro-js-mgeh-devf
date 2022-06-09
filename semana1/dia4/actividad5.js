// ejercicio 1

var arreglo=[1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

for(var i = 0; i <arreglo.length; i++){
    if(arreglo[i]>3){
        console.log(`el numero: ${arreglo[i]} es mayor a tres` );
    }
    
}


// ejercicio 2 Construye un código bajo las siguientes reglas
//Declara un arreglo vacío *Con un ciclo While que se ejecute 5 veces, agrega los elementos al array

var animales = [];
var i =0
while(i<5){
    var ingresarAnimals = prompt('Ingresa un animal');
    animales.push(ingresarAnimals);
    i++;
}
console.log(animales);


//ejercicio 3  Por medio del ciclo for iterar el array creado en el ejercicio 2 e imprimir cada uno delos elementos de manera ordenada.

// while
var animales = [];
var i =0
while(i<5){
    var ingresarAnimals = prompt('Ingresa un animal');
    animales.push(ingresarAnimals);
    i++;
}
console.log(animales.sort());


//for 

var animalsOrdenado=animales.sort();

for(var i=0; i<animalsOrdenado.length; i++){
    console.log(animales[i]);
}

console.log(animalsOrdenado);