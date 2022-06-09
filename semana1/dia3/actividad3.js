//Ejercicios IF/ ELSE

// 1

var nombre = prompt ('Ingresa tu Nombre');
var edad = prompt ('Ingresa tu Edad');

if ( edad >= 18 && nombre != "mario" && nombre != "carlos") {
    console.log('Usuario puede ingresar a la discoteca')
} else if ( edad < 18 ) {
    console.log('Usuario NO puede ingresar a la discoteca')
}else if( nombre == "mario" && edad >= 18){
     console.log('Usuario puede ingresar a la zona VIP');
}else if( nombre == "carlos" && edad >= 18){
     console.log('Usuario puede ingresar a la zona VIP');
}


// 2 

var jugador1 = prompt ('Elige Jugador 1');
var jugador2 = prompt ('Elige Jugador 2');

if (jugador1 == 'piedra' && jugador2 == 'piedra'){
    alert('Empate');
} else if (jugador1 == 'piedra' && jugador2 == 'papel'){
    alert('Gana Jugador 2');
} else if (jugador1 == 'piedra' && jugador2 == 'tijera'){
    alert('Gana Jugador 1');
}else if (jugador1 == 'papel' && jugador2 == 'tijera'){
    alert('Gana Jugador 1');
}else if (jugador1 == 'papel' && jugador2 == 'tijera'){
    alert('Gana Jugador 2');
}else if (jugador1 == 'papel' && jugador2 == 'piedra'){
    alert('Gana Jugador 1');
}else if (jugador1 == 'papel' && jugador2 == 'papel'){
    alert('Empate');
}else if (jugador1 == 'tijera' && jugador2 == 'tijera'){
    alert('Empate');
}else if (jugador1 == 'tijera' && jugador2 == 'papel'){
    alert('Gana Jugador 1');
}else if (jugador1 == 'tijera' && jugador2 == 'piedra'){
    alert('Gana Jugador 2');
}else {
    alert('Solo Puedes Ingresar Piedra Papel o Tijera');
}

//3

var numero = prompt('Introduce un numero')

if(numero % 2 == 0){
    alert('El numero ' + numero + ' es divisible entre 2');
} else {
     alert('El numero ' + numero + ' no es divisible entre 2');
}


//4
var numero = prompt('Introduce un numero')

if(numero % 2 == 0){
    alert('El numero ' + numero + ' es Par');
} else {
     alert('El numero ' + numero + ' es Impar');
}


//5
var numero = prompt('Introduce un numero')

if(numero == 1000){
    alert('Ganaste un Premio!');
} else {
    alert('Lo sentimos sigue participando');
}


//6

var numero1 = prompt('Introduce un numero');
var numero2 = prompt('Introduce otro numero');


if(numero1 < numero2){
    alert(numero1 + ' Es menor');
} else  if(numero2 < numero1){
    alert(numero2 + ' Es menor');
}else{
    alert('Ninguno es menor');
}


//7
var numero1 = prompt('Introduce el primer numero');
var numero2 = prompt('Introduce el segundo numero');
var numero3 = prompt('Introduce el tercer numero');


if ( numero1 >= numero2 && numero1 >= numero3){
    alert('El numero ' + numero1 + ' es mayor');
} else if( numero2 >= numero1 && numero2 >= numero3){
    alert('El numero ' + numero2 + ' es mayor');
} else if( numero3 >= numero2 && numero3 >= numero1){
    alert('El numero ' + numero3 + ' es mayor');
} 