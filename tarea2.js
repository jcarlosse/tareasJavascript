// Tarea 2
//Usar los operadores  /= *= -= += %=

// Valores originales
var arreglo = [6,7,8,9,10];
var arregloTemp =[]

console.log("Arreglo original", arreglo);

// usando  /= 
    for(var i = 0; i < arreglo.length; i++){
        //console.log(arreglo[i])
        arregloTemp.push(arreglo[i] /= 2 )
    }
console.log("Valores usando /=  ", arregloTemp);


//Restaurando valores originales
var arreglo = [6,7,8,9,10];
var arregloTemp =[]

// usando  *= 
for(var i = 0; i < arreglo.length; i++){
        //console.log(arreglo[i])
        arregloTemp.push(arreglo[i] *= 2 )
    }
console.log("Valores usando *=  ", arregloTemp);

//Restaurando valores originales
var arreglo = [6,7,8,9,10];
var arregloTemp =[]

// usando  *= 
for(var i = 0; i < arreglo.length; i++){
        //console.log(arreglo[i])
        arregloTemp.push(arreglo[i] -= 2 )
    }
console.log("Valores usando -=  ", arregloTemp);

//Restaurando valores originales
var arreglo = [6,7,8,9,10];
var arregloTemp =[]

// usando  += 
for(var i = 0; i < arreglo.length; i++){
        //console.log(arreglo[i])
        arregloTemp.push(arreglo[i] += 2 )
    }
console.log("Valores usando +=  ", arregloTemp);

//Restaurando valores originales
var arreglo = [6,7,8,9,10];
var arregloTemp =[]

// usando  %= 
for(var i = 0; i < arreglo.length; i++){
        //console.log(arreglo[i])
        arregloTemp.push(arreglo[i] %= 2 )
    }
console.log("Valores usando %=  ", arregloTemp);