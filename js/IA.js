//Creamos una matriz para guiarnos con el proceso y entender el juego y las pocisiones
let matriz = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]

]

//Creamos una variable que trae todos los DIVs del HTML
//getElementsByClassName toma todos los divs con la misma clase
let posicion = document.getElementsByClassName("posicion")

//creamos una funcion que va a recibir 3 parametros
//los 2 primeros parametros son la posicion de la matriz
//y el tercer parametro "Index" es la posicion del div en el HTML
function fun1(num1, num2, index) {
    console.log(num1, num2);

    //aqui marcamos en la casilla del HTML
    posicion[index].innerHTML = "X"

    //Aqui marcamos en la matriz
    matriz[num1][num2] = "X"


    //aqui imprimimos la matriz en consola
    console.log(matriz);
}

function fun3(num3, num4, index) {
    console.log(num3, num4);

    posicion[index].innerHTML = "X"

    matriz[num3][num4] = "X"

    console.log(matriz);
}

function fun4(num5, num6, index) {
    console.log(num5, num6);

    posicion[index].innerHTML = "X"

    matriz[num5][num6] = 'X'

    console.log(matriz);
}








// math random

let stilos = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Math.floor(Math.random(stilos) * stilos.length));