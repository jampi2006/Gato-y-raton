let cuadro1 = document.getElementById("cuadros1")
let cuadro2 = document.getElementById("cuadros2")
let cuadro3 = document.getElementById("cuadros3")
let cuadro4 = document.getElementById("cuadros4")
let cuadro5 = document.getElementById("cuadros5")
let cuadro6 = document.getElementById("cuadros6")
let cuadro7 = document.getElementById("cuadros7")
let cuadro8 = document.getElementById("cuadros8")
let cuadro9 = document.getElementById("cuadros9")
// Primero declaro las varibles


//Creamos una matriz para guiarnos con el proceso y entender el juego y las pocisiones
let matriz = [
    ["","",""],
    ["","",""],
    ["","",""],
]

let rato1 = true//se da la iniciación para cuando sea verdadero marque "X" si no una "O"
let chichi = true//esta variable es como el cerebro que hace que funcione porque si no marca la "X" o "O" dependiendo si es falso o verdadero

function fun1(i,j) {
    if (rato1 === true) {
        if (chichi === true) {
             matriz [0][0] = "X"//aqui se le dan las cordenadas para que ponga la "X" en la casilla indicada pero solo se muestra en la matriz
            cuadro1.innerHTML = 'X'//aqui muestra la "X" en pantalla
            chichi = false;//si la varible chichi es falso pondra una "O" en lugar de una "X"
        } else {
             matriz [0][0] = "O"
            cuadro1.innerHTML = 'O'
            chichi = true;
        }
        rato1 = false;//aqui la funcion se pone en falso para desactivarla porque al inicio se activa con el verdadero
    } else {
        console.log('game over');//aqui se muestra en consola el mensaje si intentas poner el simbolo en una casilla que ya esta ocupada es como una alerta que dice ya esta ocupado este campo
    }
}

// console.log(chichi);

let rato2 = true

function fun2() {
    if (rato2 === true) {
        if (chichi === true) {
            matriz [0][1] = "X"
            cuadro2.innerHTML = 'X'
            chichi = false;
        } else {
            matriz [0][1] = "O"
            cuadro2.innerHTML = 'O'
            chichi = true;
        }
        rato2 = false;
    } else {
        console.log('game over');
    }
}

let rato3 = true

function fun3() {
    if (rato3 === true) {
        if (chichi === true) {
            matriz [0][2] = "X"
            cuadro3.innerHTML = 'X'
            chichi = false;
        } else {
            matriz [0][2] = "O"
            cuadro2.innerHTML = 'O'
            chichi = true;
        }
        rato3 = false;
    } else {
        console.log('game over');
    }
}

let rato4 = true
function fun4() {
    if (rato4 === true) {
        if (chichi === true) {
            matriz [1][0] = "X"
            cuadro4.innerHTML = 'X'
            chichi = false;
        } else {
            matriz [1][0] = "O"
            cuadro4.innerHTML = 'O'
            chichi = true;
        }
        rato4 = false;
    } else {
        console.log('game over');
    }
}

let rato5 = true
function fun5() {
    if (rato5 === true) {
        if (chichi === true) {
            matriz [1][1] = "X"
            cuadro5.innerHTML = 'X'
            chichi = false;
        } else {
            matriz [1][1] = "O"
            cuadro5.innerHTML = 'O'
            chichi = true;
        }
        rato5 = false;
    } else {
        console.log('game over');
    }
}

let rato6 = true
function fun6() {
    if (rato6 === true) {
        if (chichi === true) {
            matriz [1][2] = "X"
            cuadro6.innerHTML = 'X'
            chichi = false;
        } else {
            matriz [1][2] = "O"
            cuadro6.innerHTML = 'O'
            chichi = true;
        }
        rato6 = false;
    } else {
        console.log('game over');
    }
}

let rato7 = true
function fun7() {
    if (rato7 === true) {
        if (chichi === true) {
            matriz [2][0] = "X"
            cuadro7.innerHTML = 'X'
            chichi = false;
        } else {
            matriz [2][0] = "O"
            cuadro7.innerHTML = 'O'
            chichi = true;
        }
        rato7 = false;
    } else {
        console.log('game over');
    }
}

let rato8 = true
function fun8() {
    if (rato8 === true) {
        if (chichi === true) {
            matriz [2][1] = "X"
            cuadro8.innerHTML = 'X'
            chichi = false;
        } else {
            matriz [2][1] = "O"
            cuadro8.innerHTML = 'O'
            chichi = true;
        }
        rato8 = false;
    } else {
        console.log('game over');
    }
}

let rato9 = true
function fun9() {
    if (rato9 === true) {
        if (chichi === true) {
            matriz [2][2] = "X"
            cuadro9.innerHTML = 'X'
            chichi = false;
        } else {
            matriz [2][2] = "O"
            cuadro9.innerHTML = 'O'
            chichi = true;
        }
        rato9 = false;
    } else {
        console.log('game over');
    }
}
///////////////////////////////////////////// parte de validación////////////////////////////////////////////////////////////////////

function validar() {

    let contadorX = 0;// declaro una vaiable que contara las "X"
    let contadorO = 0;// declaro otra vaiable que contara las "O"

    for (let index = 0; index < array.length; index++) {// creo un for que va a seguir la primera linea del [0]
        if (matriz[0][index] == "X") {
            contadorX++; // este es el contador
        } else {(matriz[0][index] == "O") 
        contadorO++;
        }
    }
    if (contadorX == 3 || contadorO == 3) {// aqui se ve si la primera linea esta llena de "X" o "O"  si se cumple se vuelve true si no se vuelve false 
        return true
    } else {
        return false    
    }
}
