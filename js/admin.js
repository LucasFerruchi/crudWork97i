//CLASE DEL NUEVO
// class Producto {
//     constructor(
//       id,
//       title,
//       description,
//       category,
//       price,
//       image,
//       favorito = false
//     ) {
//       this.id = id;
//       this.title = title;
//       this.description = description;
//       this.category = category;
//       this.price = price;
//       this.image = image;
//       this.favorito = favorito;
//     }
// }

//Capturar main de admin.html
let main = document.querySelector("#main");

//Capturar Tabla
let contenedorTabla = document.querySelector("#contenedor-tabla");
let cuerpoTabla = document.querySelector("#cuerpo-tabla");

//MODAL
const myModal = new bootstrap.Modal(document.getElementById("productoModal"));
/*
SHOW
myModal.show();

HIDE
myModal.hide();
*/

//Leer BD
let productos = JSON.parse(localStorage.getItem("productos")) || [];

// Funcion Cargar Tabla - C-READ-UD
const cargarTabla = () => {
  cuerpoTabla.innerHTML = "";
  productos.forEach((producto) => {
    let tableRow = document.createElement("tr");
    let contenidoTabla = `
    <th scope="row">${producto.title}</th>
    <td>${producto.description}</td>
    <td>${producto.category}</td>
    <td>${producto.price}</td>
    <td>
    <div class="d-flex gap-2">
    <i class="fa fa-pencil puntero" onclick="abrirModal(${producto.id})" aria-hidden="true"></i>
    <i class="fa fa-trash puntero" onclick="eliminarProducto(${producto.id})" aria-hidden="true"></i>
    </div>
    
    </td>
    `;

    tableRow.innerHTML = contenidoTabla;
    cuerpoTabla.append(tableRow);
  });
};

//Funcion para crear nuevo producto - CREATE-URD
const crearProducto = (event) => {
  event.preventDefault();

  //Capturar los input
  let id = productos.at(-1).id + 1;
  let titulo = document.querySelector("#titulo").value;
  let descripcion = document.querySelector("#descripcion").value;
  let categoria = document.querySelector("#categoria").value;
  let precio = document.querySelector("#precio").value;
  let imagen = document.querySelector("#imagen").value;

  //Crear un nuevo objeto (class) - INSTANCIA
  let producto = new Producto(
    id,
    titulo,
    descripcion,
    categoria,
    precio,
    imagen
  );

  //Agregar el producto al arreglo
  productos.push(producto);

  localStorage.setItem("productos", JSON.stringify(productos));

  //Limpiamos el formulario
  document.querySelector("#titulo").value = "";
  document.querySelector("#descripcion").value = "";
  document.querySelector("#categoria").value = "";
  document.querySelector("#precio").value = "";
  document.querySelector("#imagen").value = "";

  cargarTabla();
};

//Funcion abrirModal
const abrirModal = (id) => {
  //   console.log(id);

  indexProducto = productos.findIndex((item) => {
    return item.id == id;
  });
  //   console.log(indexProducto);

  //Cargar datos del producto
  document.querySelector("#tituloModal").value = productos[indexProducto].title;
  document.querySelector("#descripcionModal").value =
    productos[indexProducto].description;
  document.querySelector("#categoriaModal").value =
    productos[indexProducto].category;
  document.querySelector("#precioModal").value = productos[indexProducto].price;
  document.querySelector("#imagenModal").value = productos[indexProducto].image;

  //abrir el modal
  myModal.show();
};

//Guardar/Actualizar productos - CR-Update-D
const actualizarProducto = (event) => {
  event.preventDefault();

  //Capturar datos nuevos
  productos[indexProducto].title = document.querySelector("#tituloModal").value;
  productos[indexProducto].description =
    document.querySelector("#descripcionModal").value;
  productos[indexProducto].category =
    document.querySelector("#categoriaModal").value;
  productos[indexProducto].price = document.querySelector("#precioModal").value;
  productos[indexProducto].image = document.querySelector("#imagenModal").value;

  //...alert

  //Actualizar base de datos - localStorage
  localStorage.setItem("productos", JSON.stringify(productos));

  //Actualizar la tabla de productos
  cargarTabla();

  //...alert

  //Cerrar modal
  myModal.hide();
};

//Eliminar producto - CRU-DELETE
const eliminarProducto = (id) => {
  //filter
  let nuevoArreglo = productos.filter((producto) => {
    return producto.id != id;
  });
  //! log

  //Confirmar
  let validar = confirm(
    "Esta seguro que desea eliminar el producto seleccionado?"
  );

  if (validar) {
    //Reasignar los datos del nuevo arreglo - SPREAD OPERATOR (...)
    productos = [...nuevoArreglo];
    //Actualizar la base de datos
    localStorage.setItem("productos", JSON.stringify(productos));
    cargarTabla();
  }
};

cargarTabla();
