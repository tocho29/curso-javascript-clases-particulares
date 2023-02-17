/*
  API Fetch
  axios (alternativa)
  async/await
*/

/* 
  API Fetch/axios (alternativa)
  =============================
  Son 2 maneras de realizar lo que se conocen como llamadas ajax o peticiones al servidor. Antiguamente (antes de Jquery) se realizaban llamadas XMLHttpRequest que de una manera "sencilla" nos permitian tener un código dinámico sin necesidad de recargar toda la página web.

  Posteriormente con el nacimiento de JQuery se empezo a utilizar las llamadas ajax que facilitaban la manera de trabajar obteniendo datos de un servidor y mejorando el rendimiento.

  Con los avances en tecnología y los nuevos frameworks basados en JavaScript fueron naciendo librerías como axios que se encargan únicamente de realizar llamadas externas y eso ha permitido que las aplicaciones puedan seguir evolucionando sin necesidad de utilizar Jquery ya que en algunos casos existian incompatibilidades.

  Mas tarde en ECMAScript6 JavaScript introdujo la API FETCH una manera nativa de realizar llamadas a aplicaciones externas y que podemos utilizar sin necesidad de instalar nada en nuestro proyecto. Normalmente axios es una alternativa a fetch y viceversa fetch es una alternativa a axios.

  Principalmente almbas herramientas son iguales, no hay apenas diferencia si decides usar una u otra es devido a que quizás alguna de las herramientas tiene alguna opción o algo que necesitas para tu programa.

  A la hora de realizar llamadas a una aplicación externa tenemos diferentes tipos de llamdas:

  * GET => se utiliza para recibir información
  * PUT => se utiliza para actualizar o insertar un recurso
  * DELETE => se utiliza para eliminar un elemento
  * POST => se puede utilizar para todo, es el mas común de utilizar junto con GET

  Hay mas métodos pero esos son los mas comunes y los mas utilizados, aquí tienes un enlace a documentación oficial:

  ? https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

  ! Recuerda que siempre tanto axios como fetch VAN A DEVOLVER PROMESAS.
*/

const url = "https://pokeapi.co/api/v2/pokemon/charizard";

//! ejemplo de una llamada GET con FETCH
//! ====================================
/* 
  * creamos un objeto donde vamos a tener la configuración de la llamada
  * aquí tienes una breve documentación donde puedes ver las diferentes configuraciones que puedes usar:
  ? https://es.javascript.info/fetch-api
*/
let requestOptions = {
  method: 'GET',
};

// realizamos la llamada fetch...
fetch(url, requestOptions)
  .then(response => response.json()) // 1ª promesa resuleta: convertimos la información a JSON
  .then(result => result) // 2ª promesa resulta: obtenemos el resultado y hacemos con el lo que necesitamos
  .catch(error => console.log('error', error)) // si se produce un error lo manejamos
;

//! ejemplo de una llamada GET con axios
//! ====================================
//? página web de axios: https://axios-http.com/es/docs/intro

// como axios es una librería al comienzo de nuestro programa necesitamos hacer la importación
let axios = require('axios');

// como fetch creamos un objeto con la configuración
let config = {
  method: 'get',
  url: url
};

// realizamos la llamada ajax...
axios(config)
  .then(function (response) {
    JSON.stringify(response.data); // convertimos a string la respuesta que nos proporciona el servidor
  })
  .then(function (data) {
    return data // 2ª promesa resulta: obtenemos el resultado y hacemos con el lo que necesitamos
  })
  .catch(function (error) {
    console.log(error); // manejamos los errores en caso de que se produzcan
  })
;

/*
  async/await
  ===========
  Cuando trabajamos con promesas tenemos el problema de que nuestro programa es síncrono, es decir que se ejecuta todo al mismo tiempo y en ocasiones tenemos la necesidad de que hasta que no finaliza una tarea no pasar a la siguiente.

  Por ese motivo nace async/await. Lo que indicamos con async es que nuestra función o parte del código va a ser asíncrona, es decir va a tener su propio flujo de ejecución y cuando utilizamos await le indicamos a JavaScript que hasta que no finalice la línea de codigo actual no ejecute la siguiente:

  * Mirar los ejemplos 1 y 2 en el navegador.
*/