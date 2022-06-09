# JS Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

> undefined ya que no se tiene acceso directo sino esta dentro de otra funcion que al estar declarada den var puede ser global
> _undefined


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> _undefined no es algo logico ya que se le pide que evalue la funcion en cuanto al valor de 9 pero la funcion retorna a y luego le asigna el valor de 5 y vuelve a regresar a a y no se evalua el valor que se esta introduciendo en este caso 9 y 2
> _undefined


3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() {
    var a = 2;

    function bar() {
      console.log( a );
    }

    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> 2 ya que baz = foo y la funcion foo reasigna el valor de a a 2 ya que en la global a vale 1 pero se reasigna 
> 2


4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```

> _undefined no se evalua ningun valor ni retorna ninguna condicion ya que solo reasigna el valor de a a 10 pero no dice que se va a hacer
> _undefined
