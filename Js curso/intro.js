//let nombre;
//nombre = prompt("Ingresa tu nombre")
//alert(nombre);
//document.write(nombre);
//const a = [];
//const b = [1, true, "hola",[1,2,3]];
//console.log(b);
//console.log(b.length);
/*console.log(b[2])
console.log(b[3][2])

const c = Array.of(3,4,"g")
console.log(c);

const d = Array(100).fill(false)

const col = ["blanco", "verde", "amarillo"];
console.log(col);
col.push(2);
console.log(col);

col.pop();
console.log(col); 
*/
// dentro de un objeto, 
//a las variables se las llama atributos

/*const agus = {
    nombre:"agustin",
    apellido:"Garcia",
    holis:function(){
        console.log("hola gay")
    },
    todoMiNombre:function() {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
    }

};

console.log(agus.nombre);
agus.holis();
agus.todoMiNombre();
*/

/*let a =  5+5-2;
console.log(a);*/
//el % da el resto de la div

//if-else

/*let edad = 17

if(edad>17){
    console.log("sos mayor");
}else{
    console.log("sos menor");
} 
*/

/*let hora = 19

if (hora>=0 && hora <=5) {
    console.log("dejame dormir gato");
} else if(hora >=6 && hora<=11){
    console.log("Buen dia gatin");
} else if (hora >=12 && hora <=18){
    console.log('buenas tardes tirri');
}else{
    console.log("buenas noches")
}*/
/*let edad = 15;
let sosMayor = (edad>=18)
?"sos mayor gatin"
: "sos menor gato";
console.log(sosMayor);*/

/*let dia = 1;
switch (dia) {
    case 0:
        console.log("domingo")
        break;

    case 1:
    console.log("martes")
    break;

    default:
        console.log("no hay chance bro")
        break;
}*/
/*for (let i = 0; i < 10; i++) {
    console.log(i);
}*/

/*let numeros = [1,2,3,4,5,6];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
}*/

const viru = {
    nombre:"virulin",
    apellido:"garcipro",
    edad:17
}

for (const valor in viru) {
    console.log(valor);
}

let numeros = [1,2,3,4,5,6];
for (const elemento of numeros) {
    console.log(elemento);
}