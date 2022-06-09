// ejercicio 1 concatena dos arreglos


var animals = [ 'eagle', 'parrot', ' monkey', 'board', 'lion'];

var comingSoonAnimals = ['panter', 'dragon', 'turtle'];

var allAnimals = animals.concat(comingSoonAnimals);

console.log(allAnimals);

//ejercicio 2 acomoda arreglo de menor a mayor

var arr = [4, 6, 1, 0, 8, 2];

arr.sort(function (a, b) {return a - b});

console.log(arr);


// ejercicio 3 Agrega un nuevo animal ('cow") al arreglo de animals


var animals = [ 'eagle', 'parrot', ' monkey', 'board', 'lion'];

animals.push('cow');

console.log(animals);



//ejercicio 4. Retira el elemento 'eagle' del arreglo animals


var animals = [ 'eagle', 'parrot', ' monkey', 'board', 'lion'];

animals.shift();

console.log(animals);