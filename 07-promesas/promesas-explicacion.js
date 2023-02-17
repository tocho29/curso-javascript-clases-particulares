/*
    Promesas
    Promesas anidadas
*/

/*
    Las promesas es algo que ya llevan tiempo con nosotros y que nacieron para solucionar lo que se llama
    calbacks hell, purgatorio, piramid of doom, pirámide de la muerte, etc...
*/

//! este código no va a funcionar, solo es un ejemplo sencillo de lo mencionado antes
const animateAll = (animate) => {
    let words = ["estamos", "con", "las", "promesas", "en", "javascript"];
    
    setTimeout(() => {
        animate(words[0]);
        setTimeout(() => {
            animate(words[1]);
            setTimeout(() => {
                animate(words[2]);
                setTimeout(() => {
                    animate(words[3]);
                }, 1000)
                setTimeout(() => {
                    animate(words[4]);
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

/*
    Esto se produce con OPERACIONES ASINCRONAS es decir: operaciones que producen un resultado pero necesitan un tiempo. Por ejemplo obtener una información de una base de datos.
*/

//! vamos a plantear el siguiente escenario:
//? tengo un carro de la compra
let compras = "🛒";

//? tengo una función que lo que hace es añadir elementos al carrito
const hacerLaCompra = () => {
    compras += "📦";
}

//* ver el fichero ejemplo1.html

/*
    Ahora todo lo anterior lo vamos a pasar a promesas pero... ¿que es una promesa?
    
    Las promesas (promises) como su propio nombre indica es una promesa XD es decir JavaScript te PROMETE
    que cuando solicites un dato SIEMPRE obtendras una respuesta. Pero CUIDADO las promesas pueden cumplirse (then)
    o no cumplirse (catch) y a eso es la que JavaScript se refiere, independientemente de si se cumple o no la promesa
    SIEMPRE vas a tener un dato, siempre tendrás una respuesta por eso el nombre de promesa.

    Imáginemos el siguiente caso:

    ? Nos sale un cliente y nos pide el desarrollo de un proyecto web, un comercio electrónico y nosotros le prometemos
    ? que ese desarrollo estara finalizado dentro de un año. Nosotros acabamos de crear una promesa y esa promesa puede cumplirse o no.

    Partiendo del ejemplo del ejemplo del desarrollo web las promesas se componen de 4 partes

    * ACCIÓN
    * ======
        todo el proceso realizado que nos lleva a la cumplir la promesa, es decir todo el proceso realizado
        que nos lleva a completar en un año el comercio electrónico y esta acción suele llevar un tiempo

    * CONSUMIDOR
    * ==========
        en este caso es el cliente, es decir es la persona que espera el resultado de la promesa

    * RESULTADO
    * =========
        el resultado pueden ser 2 cosas: por un lado puede ser el proyecto finalizado por que todo ha ido bien y la promesa se ha cumplido
        o puede ser cualquier otra cosa devido a que se han producido diversos problemas y no hemos podido hacer el proyecto en el plazo de un año

    * ESTADO
    * ======
        es como se encuentra la promesa y hay 3 estados diferentes:

        ? PENDIENTE (PENDING) => cuando hacemos la promesa y estamos esperando el resultado
        ? SATISFECHA (RESOLVE) => cuando la promesa se ha cumplido correctamente
        ? RECHAZADA (REJECT) => cuando la promesa tiene fallos y no contiene el resultado que esperamos
*/

//? vamos a simular el caso del desarrollo de un proyecto pero con promesas
//* ver el fichero ejemplo2.html

// PROMESAS ANIDADAS
// =================
//? El caso que hemos vilsto al comienzo del fichero el del carrito de la compra ahora lo pasamos a promesas
//* ver el fichero ejemplo3.html

//? EJERCICIO PARA CASA
//? modifica la función hacerLaCompra para que si no hay stock de un elemento lo añada al carrito
//? y que al llamar a la función muestre el icono de stock cuando no exista un articulo