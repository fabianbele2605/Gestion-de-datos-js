# Proyecto RiwiMotors

## Descripción General
Este repositorio contiene un proyecto sencillo que demuestra la gestión de datos utilizando objetos, Sets y Maps en JavaScript. El proyecto se centra en gestionar un catálogo de productos para una concesionaria ficticia llamada "RiwiMotors".

## Características
- **Catálogo de Productos**: Almacena detalles de productos como ID, nombre y precio en un objeto.
- **Productos Únicos**: Utiliza un Set para eliminar nombres de productos duplicados.
- **Categorización**: Emplea un Map para clasificar productos en grupos como "Electrodomésticos", "Accesorios" y "Accesorios de moda".
- **Visualización de Datos**: Incluye funcionalidad para iterar y mostrar detalles de productos, nombres únicos de productos y listas categorizadas mediante registros en la consola.

## Instalación
1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd <directorio-del-proyecto>
   ```
3. Abre el archivo `index.js` en un entorno JavaScript (por ejemplo, Node.js o la consola de un navegador) para ejecutar el código.

## Uso
- El código está escrito en un solo archivo JavaScript (`index.js`).
- Ejecuta el script para ver el catálogo de productos, los nombres de productos únicos y los productos categorizados impresos en la consola.
- Modifica el objeto `productos`, el `setProductos` o el `mapProductos` para agregar o actualizar productos y categorías según sea necesario.

## Estructura del Código
- **productos**: Un objeto que contiene los detalles de los productos (ID, nombre, precio).
- **setProductos**: Un Set que almacena nombres únicos de productos.
- **mapProductos**: Un Map que asocia categorías de productos con sus respectivos productos.

## Ejemplo de Salida
- Catálogo de productos con IDs y detalles.
- Lista de nombres únicos de productos (por ejemplo, "Televisor", "Nevera", etc.).
- Categorías con productos asociados (por ejemplo, "Electrodomésticos" con "Televisor" y "Nevera").