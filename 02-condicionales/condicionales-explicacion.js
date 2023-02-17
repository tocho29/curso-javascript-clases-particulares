/*
    if/else
    if/else encadenados
    if/else ternario
    switch/case
    swtich/case con condicionales
*/

//* Los condicionales son decisiones que tomamos en nuestro programa. Y dependiendo de esa decisión realizamos una acción u otra

/* 
    if/else
    =======
    Es el condicional mas básico y mas sencillo de utilizar. Solo tiene una opción si se cumple la condición se hace una cosa y si no se cumple se realiza otra cosa. Por ejemplo:

    Si tengo hambre me como una pizza pero si no tengo hambre me voy a dormir.

    Para utilizar los condicionales necesitas saber cuales son las condiciones básicas

    > mayor que...
    < menor que...
    >= mayor o igual que...
    <= menor o igual que...
    == igual que... (solo valor)
    === igual que... (valor y tipo)
    ! negación...
    != distinto de...
    && and...
    || or... 
*/
if (/* condición*/) {
    //* codigo si se cumple la condición
} else {
    //! codigo si no se cumple la condición
}

const nombre = "Petro"

if (nombre) { // nombre existe y además no es null
    console.log("hola")
} else {
    console.log("Petro no ha venido a clase :'( ")
}

/*
    if/else encadenados
    ===================
    Viene a ser lo mismo, pero dentro del else añadimos otro if

    Si tengo hambre me como una pizza pero si no tengo hambre, me tomo un refresco pero si no tengo un refreso me voy a la tienda pero si la tienda esta cerrada me voy al pueblo...
*/
if (nombre) { 
    console.log("hola")
} else {
    if(nombre === "Petro") {
        console.log("hola Petro")
    } else {
        if(nombre === "Antonio") {
            console.log("hola Antonio")
        } else {
            console.log("Antonio no ha venido...")
        }
    }
}
//* el if/else encadenado en algunos lenguajes de programación los llaman "elif"

/* 
    if/else ternario
    ================
    Viene a ser lo mismo pero en una sola línea
    ? => significa valor correcto, si se cumple la condición
    : => significa valor incorrecto, si no se cumple la condicion
*/
let alumno = (nombre === "Petro") ? nombre : "Antonio";

//* se pueden usar varios if e incluso se pueden usar sin el else

if(nombre === "Antonio") {
    console.log("ok")
}

if(nombre === "Petro") {
    console.log("ko")
}

//* se pueden usar if dentro de otro if e incluso dentro de un else

if(nombre === "Antonio") {
    if(nombre === "Petro") {
        console.log("ko")
    } else {
        if(nombre === "marta") {
            console.log("marta")
        }
    }
}

/*
    switch/case
    ===========
    Es un condicional que te permite tener muchas decisiones de manera mas sencilla y sin tener que usar if/else if/else if/else if/else 
*/
switch (/* variable */) {
    case value: // valor que nosotros queremos comprobar, si existe ese valor se ejecuta el código
            /* 
                cuando se cumpla la condicion tiene que salir del condicional
                
                ¿que ocurre si no pongo break?
                Principalmente ejecutaria todos los case.

                En algunos frameworks modernos como React el propio framework te OBLIGA en el código a poner un break de lo contrario el programa no compila
            */
        break;
    
    
    /* 
        el default NO ES OBLIGATORIO y es el equivalente al "else" si no se cumplen alguna de las condiciones anteriores se entra en el default 

        ¿y si no tengo default?
        pues nada, si no se cumplen las condiciones el condicional no se ejecuta
    */
    default:
        break;
}

switch (nombre) {
    case "Petro":
            console.log("Petro")
        break;
    
    case "Antonio":
        console.log("Antonio")
        break;
    
    case "Marta":
            console.log("Marta")
        break;
    
    case "Maria":
        console.log("Maria")
        break;
}

switch (nombre) {
    case "Petro":
            alert("Petro")
        break;
    
    case "Antonio":
            alert("Antonio")
        break;
    
    case "Marta":
            alert("Marta")
        break;
    
    case "Maria":
            alert("Maria")
        break;

    default:
            alert("no hay gente")
        break;
}

/*
    swtich/case con condicionales
    =============================
    exactamente lo mismo pero aqui se nos plantea un problema:

    tenemos un numero el 5 y queremos hacer diferentes operaciones sobre el

    > 4
    < 10
    === 5
    === "Petro"
*/

const numero = 5;

switch (true) {
    case (numero > 4):
            console.log("5 es mayor que 4")
        break;
    
    case (numero < 10):
            console.log("5 es menor que 10")
        break;

    default:
            console.log("¿realmente has introducido un 5?")
        break;
}