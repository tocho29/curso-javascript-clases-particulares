/*
    Arrays
    Objetos
*/

/*
    Arrays
    ======
    Como ya sabes hasta ahora cuando creabamos una variable solo podíamos asignar un único valor. Pero... ¿y si quieremos asignar varios valores a una variable? ¿es eso posible?

    La respuesta es si, mediante los arrays o las matrices o los vectores (esos son algunos nombres que te vas a encontrar)

    Un array definido de una manera sencilla se podría decir que es un tipo de variable con esteroides, ya que nos permite tener muchos valores separados por comas.

    Los arrays pueden ser tanto constantes como variables.
*/

let numeros     = [1, 2, 3, 4, 5, 6]; //* este es un array que puede ser modificado por que lleva la palabra clave "let"
const letras    = ['a', 'b', 'c', 'd', 'e'] //! este array no puede ser modificado por que lleva la palabra clave "const"

/*
    En JavaScript y en otros lenguajes de programación es muy importante que aprendas la diferencia entre corchetes [] y llaves {}

    - Cuando veas corchetes [] => es un array
    - Cuando veas llaves {} => es un objeto

    Parecen que son lo misma cosa pero son cosas totalmente diferentes.

    Los arrays tienen una cosa llamada longitud (length) y esa longitud determina o indica el tamaño de un array, es decir cuantos elementos se encuentran dentro del array.

    Un error muy común en los programadores novatos es el siguiente. Tenemos este array

    let numeros = [1, 2, 3, 4, 5, 6];

    ¿cual dirias que es la logitud o numero de elementos del array? Si estas pensando en 6 elementos LA RESPUESTA ES ERRONEA

    Cuando se cuentan los elementos de un array SIEMPRE y repito SIEMPRE se empieza por el 0 así que la respuesta correcta a la pregunta sería 5. El array contiene 5 elementos, por el siguiente motivo:

    0 => 1
    1 => 2
    2 => 3
    3 => 4
    4 => 5
    5 => 6

    Cuando leemos un array mentalmente tenemos que tener la siguiente estructura que además es la que utilizan los lenguajes de programación a nivel interno. 

    - El número de la izquierda se corresponde a la posición del array
    - El número de la derecha se corresponde al valor del array

    En este ejemplo he usado un array de números pero recuerda que en JavaScript con los arrays pueden pasar como con las variables, pueden existir arrays de todo tipo de datos e incluso mezclarse e incluso podemos tener arrays dentro de otros arrays.

    Si quieres acceder a un valor concreto del array (por los motivos que sean) se hace especificando el número de la posición:
*/
let numero = numeros[2] //* esto en la consola va a mostrar un "3" por que estoy accediendo a posición 2 del array

/*
    Si quieres recorrer todos los elementos de un array entonces ve a la unidad 04-bucles que normalmente los bucles se utilizan mucho con los arrays.

    Al igual que las variables los arrays tienen sus propias funciones internas del lenguaje de programación que nos permiten trabajar con ellos, como por ejemplo: añadir elementos, eliminar elementos, buscar, ordenar, vaciar, copiar, etc... muchas de estas funciones también podemos crearlas nosotros mismos y en algunos casos pdodemos crear nosotros funciones específicas para trabajar con arrays.

    Objetos
    =======
    La definicion de objeto varia dependiendo del leguaje de programación. En Java (oracle) un objeto es un tipo de variable definido por el usuario y pero en JavaScript es algo parecido a un array por que nos permite tener tambien diferentes tipos de variables.

    Lo que caracteriza al objeto es que podemos tener varios elementos definidos mediante lo que se llama una clave => valor
*/

let direccion = {
    calle: "calle falsa 123",
    propietaria: "March Simpson"
}

const login = {
    usuario: "Petro",
    clave: 12345,
    url: "/login/petro/home",
    object: {
        calle: "calle falsa 123",
        propietaria: "March Simpson"
    }
}

// ejemplo de un array de objetos
let array_objetos = [
    {
        calle: "calle falsa 123",
        propietaria: "March Simpson"
    },
    {
        usuario: "Petro",
        clave: 12345,
        url: "/login/petro/home",
        object: {
            calle: "calle falsa 123",
            propietaria: "March Simpson"
        }
    }
]

/*
    Cuando te encuentres con un array que contenga objetos el primer paso siempre es recorrer el array es el paso principal luego mientras recorres el array por cada posición o en cada posición del array puedes leer el objeto
*/

//* obtener información de un objeto
const login_petro = {
    usuario: "Petro",
    clave: 12345,
    url: "/login/petro/home",
    direccion_petro: {
        calle: "calle falsa 123",
        propietaria: "March Simpson"
    }
}

//? forma 1 o forma clasica y es haciendo referencia al padre, al hijo, al nieto, etc...
const usuario1      = login_petro.usuario;
const clave1        = login_petro.clave;
const calle1        = login_petro.direccion_petro.calle

//? forma 2 DESESTRUCTURACIÓN desestructuring ECMScript6
const { usuario, clave, direccion_petro } = login_petro

const direccion1    = direccion_petro.calle
const { calle }     = direccion_petro

//* como cambiar el valor de un objeto NO SE PUEDE USAR LA DESESTRUCTURACIÓN hay que hacer referencia a la clave
let logout_petro = {
    usuario_logout: "Petro",
    clave_logout: 12345,
    url_logout: "/login/petro/home",
    direccion_petro: {
        calle: "calle falsa 123",
        propietaria: "March Simpson"
    }
}

logout_petro.usuario_logout = "Antonio"
logout_petro.clave_logout = 65848618518
logout_petro.url_logout = "lapizypluma.es"

//* añadir un nuevo elemento
logout_petro.nueva_clave = 45.96