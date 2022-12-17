const productos = [
    { nombre: "shampoo", precio: 50 },
    { nombre: "jabon", precio: 100 },
    { nombre: "crema", precio: 150 },
    { nombre: "cepillos", precio: 200 },
    { nombre: "toallas", precio: 250 },
    { nombre: "bloqueador", precio: 300 },
    

]; // Defino  mi arry con los productos del la tienda//
let carrito = []; //Defino mi array del carrito de compras//

let seleccion = prompt("Bienvenido a nuestra tienda en linea, deseas continuar para comprar algun producto?");

//Bucleo con while para que se declare/

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor Ingresa si o no");
    seleccion = prompt("Bienvenido a nuestra tienda en linea, deseas continuar para comprar algun producto, si o no");

}
//Coloco condicionales para cada funcion

if(seleccion == "si"){
    alert("Te mostramos nuestro porductos disponibles");
    let todoslosProductos = productos.map((producto) => producto.nombre + "-" + " " + "$" + " " + producto.precio + "\n");
    alert(todoslosProductos);
} else if (seleccion == "no"){
    alert("Gracias por venir, hata pronto!!");
} console.log(carrito);

//bucleo nuevamete con while para agreagar los productos de la tienda

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito");
    let precio = 0;

    if (producto == "shampoo" || producto == "jabon" || producto == "crema" || producto == "cepillos" || producto == "toallas" || producto == "bloqueador")
    {
        switch(producto) {
         case "shampoo":
            precio = 50;
            break;
         case "jabon":
            precio = 100;
            break;
         case "crema":
            precio = 150;
            break;
         case "cepillos":
            precio = 200;
            break;
         case "toallas":
            precio = 250;
            break;
         case "bloqueador":
            precio = 300;
            break;
         default:
            break;
        }
    let unidades = parseInt(prompt("Cuantas unidades quieres llevar"));

    //pusheo los productos que se agregaron al carrito con la cantidad y el valor de cada uno 

    carrito.push({producto, unidades, precio});
    
    
   
    } else {
        alert("No tenemos ese producto");
    }

    seleccion = prompt("Deseas seguir comprando?");

    //Utilizo foreach para enumerar los productos, tambien genero las suma de la totalidad de unidade y el valor por cada producto segun las unidades

    while(seleccion === "no"){
        alert("Gracias por la compra");
        carrito.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto},\n unidades: ${carritoFinal.unidades}, \n  Total a pagar por producto $ ${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break;
    }

} console.log(carrito);

//Utilizo reduce para acomular el resultado del valor total de todos los productos.

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`El total a pagar por su compra es :$ ${total} \n Gracias por su compra!`);