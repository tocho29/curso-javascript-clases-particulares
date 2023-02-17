/*
    variables
    constantes
    tipos
    camel case
    snake case
    ámbito de una variable
*/

/* 
    Variables
    =========
    ¿que es una variable?

    Una variable es como una caja donde nosotros metemos una información. Esa información va cambiando en el programa.

    nombre = Petro

    ...
    ...
    ...
    ...

    nombre = Antonio

    Las variables solo pueden contener un solo valor, no puedes hacer lo siguiente:

    nombre = Petro, Antonio => esto no se puede hacer

    Recuerda que una variable solo puede tener un valor.

    Las variables tienen sus propias reglas

    1.- nombres claros y descriptivos: nombre, name, last_name, etc...
    2.- no se recomiendan nombres cortos: nom, nam
    3.- no llevan espacios: nombre apellido => eso no puede usarse hay que usar camel case o snake case
    4.- no se ponen numeros: nombre1 nombre2 nombre16
    5.- no se pueden usar tildes: avión => eso no se puede usar avion

    Constantes
    ==========
    Son las hermanas de las variables. Su valor no cambia nunca.

    NOMBRE = Petro

    ...
    ...
    ...

    NOMBRE = Petro

    La variable nombre aparece en mayúsculas. No es obligatorio poner el nombre en mayusculas pero es una buena practica en algunos lenguajes de programación.

    Las reglas vistas en las variables también se aplican a las constantes. Solo recuerda que su valor NO PUEDE SER CAMBIADO

    Ejemplos de variables constantes:
    - usuario de una base de datos
    - servidor para realizar una llamada ajax

    camel case / snake case
    =======================
    Son formas de escribir las variables:

    camel_case
    
    MiNombre, HolaMundo, NombreApellidos
    caso 1: cuando el nombre la variable contiene 2 palabras se escribe cada palabra la primera con mayúsculas
    Se suele utilizar en programación orientada a objetos para definir clases

    miNombre holaMundo nombreApellos nombrePrimerApellidoSegundoApellido
    caso 2: cuando el nombre la variable contiene 2 palabras se escribe cada palabra la primera en minusculas y el resto empieza con mayusculas
    Se suele utilizar en funciones

    snake_case
    
    nombre_apellidos, direccion_postal

    no hay mayusculas ni minusculas, se separa con guión bajo (_) se suele usar en variables o constantes pero puedes usarlas también en funciones

    tipos de datos
    ==============
    int/number => Integer/number = 29 => suele ser un número entero (1, 20, 50, 100)
    
    double/float => decimales => 12.5, 4.6 => IMPORTANTE no se utiliza coma (,) se utiliza el punto (.)
    
    boolean => true/false

    string/String => cadena de texto => "hola mundo" => las cadenas de texto suelen ser comillas dobles (""), simples (''), templates strings (``)

    char => character = "a" => suele ser una letra, similar al int

    objeto/Object => tiene una sintaxis especial

    {
        clave: valor,
        clave: valor,
        clave: valor,
    }

    {
        nombre: "Petro"
    }

    En el objeto se pueden meter todo tipo de elementos

    {
        nombre: "Petro",
        edad: 42,
        login: true,
        longitud: 1.90
    }

    ¿se pueden repetir nombres y objetos?

    se pueden repetir objetos pero no nombres

    {
        nombre: "Petro",
        nombre: "Darovskyy" => javascript va a dar un error por que no puede existir 2 veces nombre
        edad: 42,
        login: true,
        longitud: 1.90
    }

    {
        nombre: "Petro",
        apellido: "Darovskyy" => esto es correcto
        edad: 42,
        login: true,
        longitud: 1.90
    }

    pero en un array el objeto si puede repetirse tantas veces como quiera...

    [
        {
            nombre: "Petro",
            apellido: "Darovskyy"
            edad: 42,
            login: true,
            longitud: 1.90
        },

        {
            nombre: "Petro",
            apellido: "Darovskyy"
            edad: 42,
            login: true,
            longitud: 1.90
        },

        {
            nombre: "Petro",
            apellido: "Darovskyy"
            edad: 42,
            login: true,
            longitud: 1.90
        }
    ]
*/

/*
    let, var y const
    ================
    var => indica que se va a declarar una variable normalmente se utiliza en javascript clasico, pero se puede seguir usando actualmente
    let => evolución de var viene de ECMAScript 5 actualmente es lo recomendado para definir variables
    const => indica que lo que se va a declarar es una constante
*/
//* algunos ejemplos con camel case
var MiNombre    = "Petro";
let otroNombre  = "Antonio";

//* algunos ejemplos con snake case
var mi_nombre    = "Petro";
let otro_nombre  = "Antonio";

//* ejemplo de constantes
const nombre = "Otro";


/*
    Ambito de las variables
    =======================
    Es donde y cuando puedes utilizar una variable.
*/
//* tenemos una variable llamda "index"
for (let index = 0; index< array.length; index++) {
    
    //* si entramos al for podemos usar la variable index
    console.log(index)
}

//* ¿que es lo que pasa si hacemos lo siguiente?
console.log(index)
//! ese console log, va a mostrar un mensaje diciendo "index is not defined" 

/*
    Nosotros en este ejemplo podemos acceder a la variable index SOLO DENTRO DEL BUCLE FOR devido a que la variable index se ha declarado dentro de ese bucle.

    Cuando javascript intenta acceder a la variable index fuera del for da un error por que para el esa variable no existe aunque nosotros la vemos en el código
*/

let contador = 0;

for (let index = 0; index < 10; index++) {
    contador++;

    console.log(contador)
}

console.log(contador)

/* 
    en este caso javascript si va a mostrarnos la variable contador por que su ambito es global, es decir hemos declarado la variable al inicio del programa y ahora tenemos a acceso a ella desde cualquier punto.

    Resumiendo, el ambito de una variable es el lugar o el punto donde podemos o no utilizar nuestras variables/constantes
*/