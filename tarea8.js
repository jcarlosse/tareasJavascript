// JavaScript source code
//upgrade this 
/*
function vocales(cadena) {
    var n = cadena.length;
    var countVocal = 0;
    var countConst = 0;
    for (var i = 0; i < n; i++) {
        var x = cadena.charAt(i).toLowerCase();
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
            countVocal++;
        else
            countConst++;
    }
    return [countVocal, countConst++];
};

console.log('Vocales y Consonantes ' + vocales('tyes'))
console.log('Vocales y Consonantes ' + vocales('YUIRSHI'))
console.log('Vocales y Consonantes ' + vocales('casa'))

*/
var countVocal = 0;
var countConst = 0;


var contador = cadena => {   //Funcion Flecha
    var n = cadena.length;
    

    for (var i = 0; i < n; i++) {
        var x = cadena.charAt(i).toLowerCase();
        //console.log(x);
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
            countVocal++
        else
            countConst++
    }
    return [countVocal, countConst];
}

console.log('Vocales y Consonantes ' + contador('Juan'))