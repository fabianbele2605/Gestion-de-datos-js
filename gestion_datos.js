// Iniciamos el proyecto
console.log("Gestion de Datos con Objetos, Sets u Maps!");

// definir el objetos o producto
// Crea un objeto 'productos' que contiene una lista de productos con sus respectivos IDs, nombres y precios.
const productos = {
    1: { id: 1, nombre: "Televisor", precio: 1200000 },
    2: { id: 2, nombre: "Nevera", precio: 2200000 },
    3: { id: 3, nombre: "Teatro en casa", precio: 500000 },
    4: { id: 4, nombre: "Televisor", precio: 1200000},
    5: { id: 5, nombre: "Zapato", precio: 400000},
    6: { id: 6, nombre: "Camiseta", precio: 150000},
    7: { id: 7, nombre: "Teclado", precio: 100000}
};
// Imprime el objeto 'productos' para verificar su contenido.
console.log("Objeto producto:", productos);

// crear un Set con los nombres de los productos
// Crea un Set 'setProductos' que contiene solo los nombres únicos de los productos, eliminando duplicados como "Televisor".
const setProductos = new Set(Object.values(productos).map(producto => producto.nombre));
console.log("Set de producto unicos:", setProductos);

// crear un Map para agregar catagorias a los productos
// Crea un Map 'mapProductos' que asocia categorías con listas de productos correspondientes.
const mapProductos = new Map([
    ["Electrodomesticos", [productos[1], productos[2]] ],
    ["Accesorios", [productos[3], productos[7] ]],
    ["Accesorios de moda", [productos[6], productos[5]]]
]);
// Imprime el Map 'mapProductos' para verificar las categorías y productos asociados.
console.log("Map de productos y categoría:", mapProductos);

// Recorrer el objeto o productos
// Itera sobre el objeto 'productos' usando un bucle for...in para mostrar cada producto con su ID y detalles.
for (const id in productos) {
    console.log(`Producto ID: ${id}, Detalle:`,productos[id]);
}

// Recorrer el Set de productos
// Itera sobre el Set 'setProductos' usando un bucle for...of para mostrar cada nombre único de producto.
for (const producto of setProductos) {
    console.log("Producto unico:", producto);
}


// Recorrer el Map de productos
// Itera sobre el Map 'mapProductos' usando forEach para mostrar cada categoría y sus productos asociados.
mapProductos.forEach((producto, categoria) => {
    console.log(`Categoria: ${categoria}, Productos: ${producto}`);
});

// Imprime un mensaje final indicando que la prueba de gestión de datos se ha completado.
console.log("Prueba completas de gestion de datos:");
// Imprime líneas de separación para organizar la salida en la consola.
console.log("////////////");
console.log("////////////");
// Imprime la lista completa de productos desde el objeto 'productos'.
console.log("Lista de productos:", productos);
// Imprime líneas de separación para organizar la salida en la consola.
console.log("////////////");
console.log("////////////");
// Imprime la lista de productos únicos desde el Set 'setProductos'.
console.log("Lista de productos unicos (Set):", setProductos);
// Imprime líneas de separación para organizar la salida en la consola.
console.log("////////////");
console.log("////////////");
// Imprime las categorías y productos asociados desde el Map 'mapProductos'.
console.log("Categorias y productos (Map):", mapProductos)


