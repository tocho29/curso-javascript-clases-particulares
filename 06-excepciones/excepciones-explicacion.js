/*
    Las excepciones son formas de controlar nuestro código y mostrar errores al usuario en caso de que se produzcan y también es una forma de realizar correcciones en caso de que el programa falle. Al final de lo que se trata es de determinadas zonas de nuestro código que pueden ser conflictivas preparar el programa para actue de alguna manera en el caso de fallar.

    Por ejemplo: realizar una conexión a una base de datos. La conexión puede fallar por muchas razones: usuario/clave incorrecto, servidor no encontrado, base de datos no existe, etc... el objetivo estar preparado y tener una solución en caso de que se produzca algunas de esas incidencias.
*/
try {
    // codigo que puede ser conflictivo
}
  catch(error) {
    // si se produce un error se ejecuta este bloque de código
}
finally {
    // independientemente de si se produce un error o no este código SIEMPRE se va a ejecutar
}