// JavaScript source code
// contar vocales

var arreglo = ['murcielago'];

function contarVocales(palabra) {

    //var largo = palabra.length;
    var contA = 0, contE = 0, contI = 0, contO = 0, contU = 0, contCons = 0;

    for (var i = 0; i < palabra.length; i++) {
        var letra = palabra.charAt(i).toLowerCase();

       //console.log(letra)

        switch (letra) {

            case 'a':                
                contA++;
                break;                
            case 'e':
                contE++;
                break;
            case 'i':
                contI++;
                break;
            case 'o':
                contO++;
                break;
            case 'u':
                contU++;
                break;
            default:
                contCons++;
                break;


        }//end of switch

    }
    return [contA, contE, contI, contO, contU, contCons];

}

console.log("Total de vocales a, e , i o, u y consonantes", contarVocales('murcielago'))

