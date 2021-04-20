//Creando objeto
// Se puede crear con 2 objetos?
function Television (marca, anio, definicion, modelo, objetoOwnder, objetoCasa){

    this.marca = marca;
    this.anio = anio;
    this.definicion = definicion;
    this.modelo = modelo;
    this.objetoOwnder = objetoOwnder;
    this.objetoCasa = objetoCasa;

}
 //creando objeto casa
function Casa (recamaras,banios, patio, nomPrivada){

    this.recamaras = recamaras;
    this.banios = banios;
    this.patio = patio; // valor boleano
    this.nomPrivada = nomPrivada;
}

//creando objeto persona

function Persona (nombre, edad, profesion, genero, casa ){

    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
    this.genero = genero;
    this.casa = casa;
}

var casa1 = new Casa(4,4,true,"DaVinci");
var persona1 = new Persona("Pedro",20,"maestro,", "masculino",casa1);

var tele = new Television("Sony",2020, "4K", "XTC2020", persona1, casa1);

console.log(persona1);
console.log(tele);


