/* 
    localStorage y sessionStorage es un tipo de memoria o base de datos que se encuentra en los navegadores modernos y que nos permiten almacenar información que posteriormente podemos usar cuando lo necesitemos.

    La principal diferencia entre localStorage y sessionStorage es que localStorage se mantiente en el tiempo, es decir aunque cierres el navegador la información sigue estándo disponible, pero sessionStorage borra la información cuando se cierra la pestaña actual o se cierra el navegador.

    Esta memoria tiene un límite de tamaño máximo de 10Mb y actualmente no se puede cambiar ni modificar, en el futuro es posible que se realicen cambios.

    La información almacenada siempre tiene la misma estructura: clave => valor

        - clave: es el nombre que usaremos para identificar el valor que estamos guardando o que queremos extraer/eliminar
        - valor: es la información que almacenamos o con la que queremos trabajar
*/

// ------------------------------------------------------------------------------------------
// Comprobar si el navegador es compatible
if (typeof(Storage) !== "undefined") {
    //* código localStorage o sessionStorage son compatibles con el navegador
} else {
    //! error si localStorage o sessionStorage son compatibles con el navegador
}
// ------------------------------------------------------------------------------------------
// Guardar datos
localStorage.setItem("ejemplo", "ejemplo de un string almacenado en LocalStorage");
sessionStorage.setItem("ejemplo", "ejemplo de un string almacenado en LocalStorage");

// Recuperar datos
localStorage.getItem("ejemplo");
sessionStorage.getItem("ejemplo");

//? NOTA: recuerda que en los casos anteriores estámos introduciendo información básica (un string, entero, booleano, etc...)
// ------------------------------------------------------------------------------------------
// Guardar un objeto
localStorage.setItem("usuario", JSON.stringify(mi_objeto));
sessionStorage.setItem("usuario", JSON.stringify(mi_objeto));
//? NOTA: recuerda que al ser un objeto cuando usas la función JSON.stringify estás convirtiendo el objeto en un string

// Recuperar un objeto
JSON.parse(localStorage.getItem("usuario"));
JSON.parse(sessionStorage.getItem("usuario"));
//? NOTA: recuerda que al usar la función JSON.parse estás convirtiendo el string en un objeto json
// ------------------------------------------------------------------------------------------
// Eliminar un elemento
localStorage.removeItem("titulo");
sessionStorage.removeItem("titulo");

// Vaciar todo LocalStorage
localStorage.clear();
sessionStorage.clear();