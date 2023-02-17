/*
    funciones clasicas
    funciones de flecha
    funciones con parametros
    funciones que retornan un valor
    funciones que no retornan nada
    documentacion de una función
*/

/*
    Las funciones son herramientas que el programador crea para ejecutar tareas que necesita que se repitan varias veces en diferentes secciones del código y que no necesariamente se tienen que hacer en un bucle.

    El objetivo de las funciones también es el de reducir y reutilizar código haciendo que sea mas fácil de leer y dejando la lógica en determinadas zonas de nuestro código donde es más facil encontrarla y leerla.

    Las funciones no solo las crea el programador, también hay muchas funciones que vienen incluidas con el propio lenguaje de programación como por ejemplo: obtener la hora y fecha del sistema (date), saber el tipo de una variable (typeof), añadir elementos a un array (push), etc...

    Y luego están las las funciones que desarrolla el programador para su uso como por ejemplo: utilizar la función fetch de JavaScript para poder realizar llamadas ajax de manera dinámica.

    Además de todo eso:

    - dentro de una función pueden existir mas funciones
    - las funciones pueden recibir (o no) unas variables llamadas parámetros, en ocasiones son necesarias para que la función funcione
    - una función puede retornar (o no) un valor, en ocasiones una variable o constante es el resultado de una función.

    Los nombres de las funciones por convención utilizan camel case y suelen tener estas combinaciones:

    - Primera letra de cada palabra en mayúsculas => HolaMundoFuncion
    - Primera letra de la primera palabra en minúsculas y el resto en mayúsculas => holaMundoFuncion
    - No se utilizan números, ni guiones, ni guiones bajos, ni caracteres especiales
*/

/*
    funciones clásicas
    ==================
*/
function funcionNormal() {
    // código de la función
}

/*
    funciones de flecha
    ===================
*/
const funcionFlecha = () => {
    // código de la función
}

/*
    funciones con parámetros
    ========================
*/
const funcionParametros = (parametro1, parametro2, parametro3, parametro4 = {}) => {
    // código de la función
}

/*
    función con retorno
    ===================
*/
const funcionRetorno = () => {
    // código de la función

    return // valor que quiero retornar y final de la función
}

/**
 * funcion que estoy utilizando para explicarle a Petro como documentar una función
 * @param {int} parametro1 el telefono del usuario
 * @param {string} parametro2 el nombre del usuario
 * @param {boolean} parametro3 si se registra o existe
 * @param {object} parametro4 direccion del usuario
 */
const funcionDocumentada = (parametro1, parametro2, parametro3, parametro4 = {}) => {
    // código de la función
}

/**
 * funcion que estoy utilizando para explicarle a Petro como documentar una función
 * @param {int} parametro1 el telefono del usuario
 * @param {string} parametro2 el nombre del usuario
 * @param {boolean} parametro3 si se registra o existe
 * @param {object} parametro4 direccion del usuario
 * @returns un string que saluda al usuario
 */
const funcionDocumentadaRetorno = (parametro1, parametro2, parametro3, parametro4 = {}) => {
    // código de la función

    return 'holiiii XD'
}