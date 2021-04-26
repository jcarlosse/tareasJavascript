// JavaScript source code
//Dividir un arreglo en 3 e imprimir valor

var arreglo = "456888123789999";


function divisorArreglo(arregloEntero) {

    var arreglo2 = [];
    var largoArreglo = arregloEntero.length;
    var mayor = 0;
    //console.log(largoArreglo);


    for (var i = 0; i < largoArreglo; i += 3) {

        var division = arregloEntero.slice(i, i + 3);
        arreglo2.push(division);
        //console.log("Division:" + division);
        if (division > mayor) {
            mayor = division;
        }
    }
    console.log("El Mayor es: " + mayor)

    return arreglo2;
}



console.log(divisorArreglo(arreglo));