// Tarea 1
// Cambiar de orden un arreglo

var arreglo = [4,5,8,6,3];
var arregloTemp =[]
console.log(arreglo);
    for(var i = arreglo.length -1; i >= 0; i--){
        console.log(arreglo[i])
        arregloTemp.push(arreglo[i])
    }
arreglo = arregloTemp;
console.log(arreglo);