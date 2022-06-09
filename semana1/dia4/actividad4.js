// ejercicio 1 leer ok


// ejercicio 2 

var numeroUs = Number(prompt('Ingresa un Numero'))
var counter = 1;

while(counter <= numeroUs)
{
    if((counter % 5) == 0)
    {
        console.log(counter);
    }
    counter++;
}


//ejercicio 3 
var numeroUs = Number(prompt('Ingresa un Numero'))
var counter = 1;

do{
    if((counter % 5) == 0)
    {
        console.log(counter);
    }
    counter++;
} while(counter <= numeroUs);


//ejercicio 4 

for (let i = 1; i <= 50; i++){
    if(i % 2 == !0){
        console.log(i);
    } 
    i++
}

