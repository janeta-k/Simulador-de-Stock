//tienda de electrónicos

class Stock{
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

class ProductoController{
    constructor(){
        this.listaDeProductos = []
    }

    obtenerProductos(){
        this.listaDeProductos = [
            new Stock(1, "Ventilador", "$50.000", 10),
            new Stock(2, "Televisón", "$150.000", 2),
            new Stock(3, "Aspiradora", "$50.000", 5),
            new Stock(4, "Refrigerador", "$180.000", 0),
            new Stock(5, "Microondas", "$90.000", 15),
            new Stock(6, "Lavadora", "$120.000", 3)
        ]
    }

    mostrarProductos(){
        let acumulador = ""
        this.listaDeProductos.forEach(element => {
            acumulador += `\n- ID : ${element.id}\n- Producto: ${element.nombre}\n- Precio: ${element.precio}\n`
        });
        return alert(acumulador)
    }

    mostrarStock(){
        
    }

    
}

const controladorProductos = new ProductoController();
//si quiero acceder a la lista de productos:
controladorProductos.obtenerProductos()
console.log(controladorProductos.listaDeProductos)

controladorProductos.mostrarProductos()


// stockProductos(){
//     this.listaDeProductos.forEach(element => {
//         if(element.stock >= 10)
//         console.log(`${element.nombre} tiene ${element.stock} de stock. Todo tranqui B)`);
//         else if(element.stock < 10 && element.stock >= 5) {
//             console.log(`${element.nombre} tiene ${element.stock} de stock. Ya queda poco para que se acabe!!`);
//         }else if(element.stock < 5 && element.stock > 0){
//             console.log(`${element.nombre} tiene ${element.stock} de stock. Uy, nos quedamos sin stock!!`);
//         }else {
//             console.log(`${element.nombre} tiene ${element.stock} de stock. Ya no queda nada :c`);
//         }
//     })
// }