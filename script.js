// const persona1 = {
//     nombre: "Homero",
//     edad: 39,
//     calle: "Av. Siempreviva 742"
// }
// console.log(persona1)

// console.log(persona1.nombre)
// console.log(persona1.edad)
// console.log(persona1.calle)

// console.log(persona1["nombre"])

// persona1["nombre"] = "Marge"
// persona1.edad = 36

// console.log(persona1.nombre)
// console.log(persona1.edad)
// console.log(persona1)

//Objetos constructores

// function Persona(nombre, edad, calle){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
// }

// const persona1 = new Persona("Homero", 40, "Av. Siemprviva 742")
// const persona2 = new Persona("Marge", 36, "Av. Siemprviva 742")

// console.log(persona1)
// console.log(persona2)

// class Persona{
//     constructor(nombre, edad, calle) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.calle = calle;
//     }
//     //metodos
//     saludar(){
//         console.log("hola desde la clase, soy "+ this.nombre)
//     }
// }

// const persona1 = new Persona("Homero", 40, "Av. Siemprviva 742")
// const persona2 = new Persona("Marge", 36, "Av. Siemprviva 742")

// for (const propiedad in persona1){
//     console.log(persona1[propiedad])
// }

// class Calculadora{
//     constructor(numA, numB){
//         this.numA = numA;
//         this.numB = numB;
//     }
//     sumar(){
//         return this.numA+this.numB
//     }
//     restar(){
//         return this.numA+this.numB
//     }
//     multiplicar(){
//         return this.numA*this.numB
//     }
//     dividir(){
//         if(this.numB == 0){
//             return "No es posible dividir por 0."
//         }else{
//             return this.numA/this.numB
//         }
//     }
//     factorial(numero){
//         let acumulador = 0;
//         for(let i = 1; i <= numero; i++){
//             acumulador = acumulador * i
//         }
//         return acumulador
//     }

// }

// const objCalculadora = new Calculadora()
// console.log(objCalculadora.factorial(5))

// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros[0]) //1
// console.log(numeros[3]) //4
// let resultado = numeros[1] + numeros[2]
// console.log(resultado) //5
// console.log("---------")
// //recorride del array
// for(let index = 0; index<5; index++){
//     console.log(numeros[index])
// }
// console.log("---------")
// while(j<5){
//     console.log(numeros[j])
//     j = j+1
// }

const miArray = ["marca", 3, "palabra"]
// console.log(miArray.length)

//indexOf
// const nombres = ["Rita", "Pedro", "Miguel", "Ana"]
// console.log(nombres.indexOf("Rita"))//0
// console.log(nombres.indexOf("Ana"))//3
// console.log(nombres.indexOf("Juelieta"))//-1

//inlcude
//slice
//splice


/***********************************/

// const objeto1 = {id: 1, nombre: "Arroz"};
// const productos = [objeto1, {id:2, nombre: "Fideo"}];
// productos.push({id: 3, nombre: "Pan"})

// console.log(productos)

// for(let i = 0; i < productos.length; i++){
//     const element = productos[i]
//     console.log("id: "+element.id+ "\nnombre: "+element.nombre)
// }

// //for of
// for(const producto of productos) {
//     console.log(producto.id);
//     console.log(producto.nombre);
// }


class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio)
        this.vendido = false
    }

    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}

const productos = []
productos.push(new Producto("arroz", "125"))
productos.push(new Producto("fideo", "70"))
productos.push(new Producto("pan", "50"))

// for(const producto of productos){
//     producto.sumaIva()
//     console.log(producto)
// }


//una funcion superior sper uwu (retornar funciones)

function mayorQue(n){
    return (m) => m > n
}

const mayorQue10 = mayorQue(10)
//esto de aquí arriba es lo mismo que decir:
//const mayorQue10 = (m) => m > n   pq se está retornando una funcion que se almacena en mayorQue10

// mayorQue10(12) //true

// //otro ejemplo

// function asignarOperacion(op){
//     if (op == "sumar"){
//         return (a, b) => a + b
//     } else if (op == "restar"){
//         return (a, b) => a - b
//     }
// }

// let suma = asignarOperacion("sumar")
// let resta = asignarOperacion("restar")

// console.log(suma(4, 6)) //10
// console.log(resta(5,3))//2

/*recibir funciones por parametro */


const listaNumeros = [1, 2, 3, 4]

function porCadaUno(arr, fn){

    for(i=0; i < arr.length; i++ ){
        fn(arr[i])
    }
}

//porCadaUno(listaNumeros, console.log)

/***********************************************/

//METODOS DE BUSQUEDA

//forEach
const numeros = [10, 20, 30, 40]

numeros.forEach( num => {
    console.log(num)
})

//find
const listaCursos = [
    {nombre: "Javascript", precio: 15000},
    {nombre: "ReactJS", precio: 22000}
]

const resultado = listaCursos.find( el => el.nombre === "ReactJS")
const resultado2 = listaCursos.find( el => el.nombre === "DW")

console.log(resultado)
console.log(resultado2)

//filter()
const cursos = [
    {nombre: "Javascript", precio: 15000},
    {nombre: "ReactJS", precio: 22000},
    {nombre: "AngularJS", precio: 22000},
    {nombre: "Desarrollo Web", precio: 16000}
]

const output = cursos.filter(el => el.nombre.includes("JS"))
const output2 = cursos.filter(el => el.precio < 14000)

console.log(output)
console.log(output2)
//map
const nombres = cursos.map(el=> el.nombre)
console.log(nombres)
//otro ejemplo:
const actualizado = cursos.map( el => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})

console.log(actualizado)
//reduce
//sort
//some
//hace lo mismo que find, pero solo te devulve true o false