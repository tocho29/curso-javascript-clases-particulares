/*
    for
    while
    do while
    foreach
    map
*/
/*
    Los bucles son herramientas que se encuentran en todos los lenguajes de programación y tienen 3 objetivos:

    1.- repetir un bloque de codigo o tarea X veces
    2.- recorrer un array
    3.- en algunos lenguajes como php o javascript recorrer objetos
*/

/*
    FOR
    ===
    Es el bucle mas clásico y se encuentra en todos los lenguajes. En todos los lenguajes tiene la misma sintaxis. Aprendido en uno aprendido en todos

    Este bucle necesita 3 parametros o si lo prefieres 3 opciones

    1.- el inicio, desde donde va a empezar
    2.- el numero de veces que se va a repetir
    3.- las veces que se va ir incrementando
*/
let numeros         = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const limite        = numeros.length;
const invertido     = limite - 1; 
// la función length() nos dice que la longitud es de 12 elementos por eso restamos 1, 
// para simular empezar desde 0

for (let i=0; i<5; i++) {
    // este es el codigo que se ejecuta X numero de veces
    // la variable i solo puede ser usada aqui dentro por su ambito

    console.log(numeros[i])

    // forzar la salida del for antes de que termine
    break;
}

// no es recomendado por que va estar ejecutando constantemente la función length y eso consume recursos
for (let i=0; i<numeros.length; i++) {
    console.log(numeros[i])
}

// la forma correcta es la siguiente:
numeros_logitud = numeros.length //obtener la longitud de un array

for (let i=0; i<numeros_logitud; i++) {
    console.log(numeros[i])
}

// recorrer un array normal
console.log('recorrer un array normal')
for (let i=0; i<limite; i++) {
  console.log(numeros[i]);
}

// recorrer un array invertido
console.log('recorrer un array invertido')
for (let i=invertido; i>=0; i--) {
  console.log(numeros[i]);
}

// recorrer un array solo con las posiciones pares
console.log('recorrer un array solo con las posiciones pares')
for (let i=0; i<limite; i=i+2) {
  console.log(numeros[i]);
}

// recorrer un array solo con las posiciones impares
console.log('recorrer un array solo con las posiciones impares')
for (let i=1; i<limite; i=i+2) {
  console.log(numeros[i]);
}

/* 
    FOREACH
    =======
    Se que se encuentra en PHP y JavaScript y es una alternativa al for mas rapida, mas limpia y que consume menos memoria
    Foreach normalmente se utiliza para recorrer array y necesita 2 cosas:

    1.- el array a recorrer
    2.- una función donde nosotros vamos a realizar la logica que necesitamos llamada funciones de callback
*/
const comidas_foreach = ['Desayunar', 'Almorzar', 'Comer', 'Merendar', 'Cenar'];

// con función normal (método clásico)
comidas_foreach.forEach(function(comida, index) {
    // este es el codigo que se ejecuta X numero de veces
    console.log(`${index} : ${comida}`);
});

// con función de flecha (ECMAScript 6)
comidas_foreach.forEach((comida, index) => {
    console.log(`${index} : ${comida}`);
});

/*
    WHILE
    =====
    Es un bucle que como el for se encuentra en todos los lenguajes de programación y además es identico. Para mi es uno de mas fáciles de utilizar y de aprender pero hay que llevar cuidado con el por que puede generar bucles infinitos y consumir toda la memoria del ordenador.

    El while funciona MIENTRAS SE CUMPLA SU CONDICIÓN cuando deje de cumplirse automáticamente se corta el bucle.

    Las condiciones que se utilizan son como las del if/else
*/
let i = 0;

while (i<10) {
    // este es el codigo que se ejecuta X numero de veces
    console.log(`Numero: ${i}`);
    i++;
}

/*
    DO WHILE
    ========
    Es un bucle que se encuentra en todos los lenguajes de programación es similar al while. Funciona con una condición y esa condición si está mal puede generar un bucle ifinito.

    La peculiaridad de este bucle es que la primera vez que se ejecuta realiza el codigo interno que tiene y posteriormente comprueba si se cumple la condición. Es un bucle que como mínimo se va a ejecutar 1 vez.
*/
i = 20;

do {
    // este es el codigo que se ejecuta X numero de veces
    console.log(`Numero: ${i}`);
    i++;
} while (i<10);

//* El código es secuencial. Primero se imprime el valor de i en la consola, se incrementa la variable y, finalmente, se comprueba la condición.


/*
    MAP
    ===
    Es una función nueva introducida en ECMAScrip 6 y a diferencia de for o foreach es una forma mucho mas rápida y recomendada de leer un array de objetos.

    Map es una función que requiere otra función como parámetro que es lo que en JavaScript se llama función de callback. Esa función normalmente contiene el código que necesitamos que se ejecute durante el recorrido del array, puede ser añadir nuevos elementos, puede ser realizar una llamada ajax, etc...

    En ocasiones se utiliza un "return" para devolver el resultado y en ocasiones se utiliza en una constante, este último caso es muy común en react para limpiar un poco el código y tener un renderizado de manera mas limpia
*/
const comidas_map = [
    {id: 1, hora_del_dia: 'Desayuno'},
    {id: 2, hora_del_dia: 'Almuerzo'},
    {id: 3, hora_del_dia: 'Comida'},
    {id: 4, hora_del_dia: 'Merienda'},
    {id: 5, hora_del_dia: 'Cena'},
];

// con función normal
const momentoComida1 = comidas_map.map(function(comida) {
    let { hora_del_dia } = comida
    console.log(hora_del_dia)
});

// con función de flecha
let momentoComida2 = comidas_map.map((comida) => {
    return comida.hora_del_dia;
});
 
console.log(momentoComida2);