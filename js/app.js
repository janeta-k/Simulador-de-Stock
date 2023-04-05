//tienda de electrónicos
const cardProductos = document.getElementById('cardProductos');

class Producto {
    constructor(id, nombre, precio, stock, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
}

class ProductoController {
    constructor() {
        this.listaDeProductos = []
    }

    obtenerProductos() {
        this.listaDeProductos = [
            new Producto(1, "Ventilador", "$50.000", 10, "./img/ventilador.PNG"),
            new Producto(2, "Televisón", "$150.000", 2, "./img/tele.PNG"),
            new Producto(3, "Aspiradora", "$50.000", 5, "./img/aspiradora.PNG"),
            new Producto(4, "Refrigerador", "$180.000", 0, "./img/refrigerador.PNG"),
            new Producto(5, "Microondas", "$90.000", 15, "./img/microondas.PNG"),
            new Producto(6, "Lavadora", "$120.000", 3, "./img/lavadora.PNG")
        ]
    }

    imprimirCards(listaDeproductos) {

        cardProductos.innerHTML = "";

        listaDeproductos.forEach(element => {
            const content = `<div class="card card-padding mt-3" style="width: 18rem;">
            <img src="${element.img}" class="card-img-top" alt="${element.nombre}">
            <div class="card-body text-center">
              <p class="card-text">${element.nombre}</p>
              <p class="card-text"> ${element.precio}</p>
            </div>`;
            cardProductos.innerHTML += content;
        })
    }

    dataProductos() {
        let acumulador = "" //podría ocupar un bucle aquí, pq hay que incluir bucles pipipi
        this.listaDeProductos.forEach(element => {
            acumulador += `\n- ID : ${element.id}\n- Producto: ${element.nombre}\n- Precio: ${element.precio}\n`
        });
        return alert(acumulador)
    }

    mostrarStock(id) {
        let producto = this.listaDeProductos.find(element => element.id == id)
        console.log(producto)
        if (producto.stock >= 10)
            alert(`El producto ${producto.nombre} tiene ${producto.stock} de stock.\nTodo tranqui B)`);
        else if (producto.stock < 10 && producto.stock >= 5) {
            alert(`El producto ${producto.nombre} tiene ${producto.stock} de stock.\nYa queda poco para que se acabe!!`);
        } else if (producto.stock < 5 && producto.stock > 0) {
            alert(`El producto ${producto.nombre} tiene ${producto.stock} de stock.\nUy, nos quedamos sin stock!!`);
        } else {
            alert(`El producto  ${producto.nombre} tiene ${producto.stock} de stock.\nYa no queda nada :c`);
        }
    }
}

function eventos(){
    controladorProductos.dataProductos()

    let id = Number(prompt("Ingresa el ID del producto que deseas revisar su stock :)"))
    controladorProductos.mostrarStock(id)
}

const controladorProductos = new ProductoController();
//si quiero acceder a la lista de productos:
controladorProductos.obtenerProductos()
console.log(controladorProductos.listaDeProductos)

controladorProductos.imprimirCards(controladorProductos.listaDeProductos)



