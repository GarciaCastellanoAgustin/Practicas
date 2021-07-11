/*const arr1 = [10, 2, 54, 3]

function sumarElementos(sumaAcumulada, elemento){
    return sumaAcumulada + elemento
}
const suma = arr1.reduce(sumarElementos, 0);

console.log(suma); 


let obj1 = {};
obj1.pepe = 2;
console.log(obj1); */

/* const obj = {
    nombre: "juan",
    edad: 45,
    newKey: "true"
}

const val = Object.values(obj);

console.log(val); */

/* const obj = {
    nombre: "juan",
    edad: 45,
    newKey: "true"
}

const lol = obj.hasOwnProperty("nombre");
console.log(lol); */

// agregar elementos en un array o obj con ...nombreDeVariable, "valores"
// Math.max busca el numero mayor Math.max(...obj)


//ejemplo de tarea
/* const compras = [
    {usuario: "pepe", producto: "mochila", costo:1800},
    {usuario: "maria", producto: "lapiz", costo:500},
    {usuario: "laura", producto: "escuadra", costo:150},
    {usuario: "pepe", producto: "auto", costo:18000}
]

pepeBuys = function(element){
    return element.usuario === "pepe"
}

function productOnly(element){
    return element.producto
}
const restultado = compras.filter(pepeBuys).map(productOnly);

console.log(restultado); */

// manejo de errores

/*
function randomError(){
    if (Math.random() < 0.5){
        throw new Error ("error re loco");
    }
    return "todo ok";
}
try {
    let restultado = randomError();
    console.log(restultado)
} catch (error) {
    console.log(error.message);
} */