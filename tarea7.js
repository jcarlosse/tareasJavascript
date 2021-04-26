//Detecta Palindromo



function detectaPalindromo(palabra) {
    var nuevaPalabra = palabra.toLowerCase();

   if (nuevaPalabra == palabra.split('').reverse().join(''))
       return nuevaPalabra + " Es palindromo";
    else
       return nuevaPalabra +" No es palindromo"
}


console.log(detectaPalindromo("anna"));
console.log(detectaPalindromo("casa"));
console.log(detectaPalindromo("arribalabirra"));
console.log(detectaPalindromo("anitalavalatina"));