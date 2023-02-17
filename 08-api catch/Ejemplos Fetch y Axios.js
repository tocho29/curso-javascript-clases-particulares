const axios = require('axios'); // node js
import axios from 'axios'; // react js

//& ejemplo de llamada axios normal
const config = {
  method: 'get', //! OBLIGATORIO // post, put, delete, etc.. 
  maxBodyLength: Infinity, //* opcional
  url: '', //! OBLIGATORIO
  headers: { } //* opcionales
};

axios(config)
.then(function (response) {
  return response.data;
})
.catch(function (error) {
  console.log(error);
});

// -----------------------------------------------------------

//& ejemplo de llamada axios pasando un objeto json con datos
const data = JSON.stringify({
  "payload": "",
  "data": ""
});

const config = {
  method: 'get', //! OBLIGATORIO // post, put, delete, etc.. 
  maxBodyLength: Infinity, //* opcional
  url: '', //! OBLIGATORIO
  headers: { 
    'Content-Type': 'application/json' //? recomendado
  },
  data: data //! OBLIGATORIO
};

axios(config)
.then(function (response) {
  return response.data;
})
.catch(function (error) {
  console.log(error);
});


// -----------------------------------------------------------

//& ejemplo de llamada fetch normal
const requestOptions = {
  method: 'GET', //! OBLIGATORIO // post, put, delete, etc..  //POST, PUT, DELETE, etc...
  redirect: 'manual' //* opcional
};

fetch("URL", requestOptions)
  .then(response => response.json())
  .then(result => {return result})
  .catch(error => console.log('error', error))
;

// -----------------------------------------------------------

//& ejemplo de llamada fetch pasando un objeto json con datos
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "data": "",
  "payload": ""
});

const requestOptions = {
  method: 'GET', //! OBLIGATORIO // post, put, delete, etc..  //POST, PUT, DELETE, etc...
  headers: myHeaders, //? recomendado
  body: raw //! OBLIGATORIO
};

fetch("URL", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
;