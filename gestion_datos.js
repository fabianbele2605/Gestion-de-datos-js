// Iniciamos el proyecto
console.log("Gestion de Datos con Objetos, Sets u Maps!");

// definir el objetos o producto

const productos = {
    1: { id: 1, nombre: "Televisor", precio: 1200000 },
    2: { id: 2, nombre: "Nevera", precio: 2200000 },
    3: { id: 3, nombre: "Teatro en casa", precio: 500000 },
    4: { id: 4, nombre: "Televisor", precio: 1200000},
    5: { id: 5, nombre: "Zapato", precio: 400000},
    6: { id: 6, nombre: "Camiseta", precio: 150000},
    7: { id: 7, nombre: "Teclado", precio: 100000}
};

console.log("Objeto producto:", productos);

// crear un Set con los nombres de los productos
const setProductos = new Set(Object.values(productos).map(producto => producto.nombre));
console.log("Set de producto unicos:", setProductos);

// crear un Map para agregar catagorias a los productos

const mapProductos = new Map([
    ["Electrodomesticos", [productos[1], productos[2]] ],
    ["Accesorios", [productos[3], productos[7] ]],
    ["Accesorios de moda", [productos[6], productos[5]]]
]);

console.log("Map de productos y categoría:", mapProductos);

// Recorrer el objeto o productos

for (const id in productos) {
    console.log(`Producto ID: ${id}, Detalle:`,productos[id]);
}

// Recorrer el Set de productos

for (const producto of setProductos) {
    console.log("Producto unico:", producto);
}

console.log("aqui")
// Recorrer el Map de productos
mapProductos.forEach((producto, categoria) => {
    console.log(`Categoria: ${categoria}, Productos: ${producto}`);
});


console.log("Prueba completas de gestion de datos:");
console.log("////////////");
console.log("////////////");
console.log("Lista de productos:", productos);
console.log("////////////");
console.log("////////////");
console.log("Lista de productos unicos (Set):", setProductos);
console.log("////////////");
console.log("////////////");
console.log("Categorias y productos (Map):", mapProductos)


