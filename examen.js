/*
¿Cuál es la diferencia fundamental entre let y const en JavaScript?
El let es una variable que podemos utilizar a lo largo de todo el código y esta con cada declaración puede ir cambiando su valor ya sea nombre o número. Y el const, como si mismo lo indica es constante no cambia su valor a pesar de que declaremos más. Este se suele utilizar más en funciones. 

¿Qué significa que una variable declarada con let sea mutable(que se pueda cambiar su valor)?

Lo entiendo como que a pesar de que cada declaración con let, este puede cambiar su valor una vez se haya guardado/declarado. Podemos tener muchas variables de let con diferentes deficiniones y no tendría que presentar problema. 

¿Por qué es importante entender la diferencia entre let y const al programar en JavaScript?
Nos ayudarán a reconocer en cada problematica cual es más conveniente de utilizar al momento de guardar datos , mostralos o mandarlos a llamar. 

¿Cuál es el problema principal con el uso de "var" en JavaScript?
Puede declararse sin antes asignarle un valor inicial o los valores pueden ser accesibles para todo el código. 

cualquier variable que se declare con var fuera de una función está disponible para su uso

¿Qué diferencias existen entre var y let/const en términos de ámbito (scope)?
let puede estar cambiando su valor pero no se puede volver a declarar igual, const solo sirve dentro de ciertas secciones de nuestro codigo (no funciona como global), y con var cualquier variable que se declare fuera de una función está disponible para su uso.

¿Cuáles son los cinco tipos de datos primitivos vistos en el curso de JavaScript?
String
Booleans 
Indefinidos
Null
Numbers  (recuerdo que aparecía como not number)xd

¿Cuál es el tipo de dato primitivo que se utiliza para representar un valor verdadero o falso?
Booleans

¿Qué tipo de dato primitivo se utiliza para representar valores que no están definidos o que están ausentes?
Undefined

¿Cómo se define una cadena de texto (String) en JavaScript?
Lo puedo declarar como una varibale e igualarlo a un mensaje, para que se pueda mostrar el pantalla. Como:
const ejemplo = 'Esto es una cadena de texto'; 


¿Qué es una función en programación y para qué se utiliza?
Son instrucciones que se declaran y tienen como función realizar cierta tarea o calcular valores/operaciones. 


¿Cómo se define una función en JavaScript? Proporciona un ejemplo básico(no utilizar function).
Podemos utilizar las funciones de flecha 
const usuario = (//acá van los parametros que declararemos) => {
}

¿Qué es un parámetro en el contexto de las funciones?
Es como vamos a nombrar la definición que vaya a tener la función. 


¿Qué es un argumento en el contexto de las funciones?
Son los valores que recibe o le pasamos a nuestra función


¿Cuál es la relación entre los parámetros y los argumentos en una función?
El valor que se le asigne a nuestro argumento es el equivalente al valor del parametro. Como si fuera una dependencia de ambas partes.



¿Cuál es la diferencia entre pasar una variable por valor y pasarla por referencia?
No la respondí xd



¿Qué es un objeto en el contexto de la programación?
Puede ser cualquier cosa que tenga atributos y propiedades. 


¿Cómo se define un objeto en JavaScript?
const nameObject {
	//características del objeto
}

¿Cómo se accede a las propiedades y los métodos de un objeto en JavaScript?
para acceder a las propiedades y métodos de un objeto se utiliza el punto
un ejemplo es: (usuario.nombre);



¿Qué es un array en programación y para qué se utiliza?
Es una forma en la que podemos almacenar datos que sean parte de la misma clase o tipo de dato. 


¿Cómo se define y se crea un array en JavaScript?

Ejemplo:
const alumnos = [
    {
      nombre: "Juan",
      edad: 21,
      carrera: "Ing. Sistemas",
      numMaterias: 6,
      calificaciones: [7, 8, 9, 6, 10, 7]
    }
];



¿Cómo se accede a los elementos de un array en JavaScript?
Según es lo mismo con el punto. El nombre de nuestro array.y la propiedad a la que queramos mostrar

(alumnos.edad);

¿Cómo se realiza la iteración sobre los elementos de un array en JavaScript?
No la respondí xd


¿Cómo se define una clase en JavaScript?
Ejemplo 

class ejemClase {
  constructor(a, b) {
    this.a = a;
    this.b = a;
  }
  metodo1() {
   //sentencias del método
  }
}

¿Cómo se crea un objeto a partir de una clase en JavaScript?
No la respondí xd

¿Qué es la estructura condicional "if" en programación y para qué se utiliza?
Permite meter una sentencia que debe ser verdadera para que se pueda ejecutar.

¿Cuál es la importancia de los bloques "else" y "else if" en una estructura condicional "if"?
En el if se coloca todo lo que se va a cumplir, funciona como un verdadero/ true. Si esto funciona correctamente se ejecuta y de lo contrario lo manda al error, que seria en else.

¿Cuál es la diferencia entre los operadores "==" y "===" en una condición "if"?
No la respondí xd
*/