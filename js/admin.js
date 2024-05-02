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

//!FUNCION DE CARGAR TABLA
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
    <i class="fa fa-trash puntero" onclick="" aria-hidden="true"></i>
    </div>
    
    </td>
    `;

    tableRow.innerHTML = contenidoTabla;
    cuerpoTabla.append(tableRow);
  });
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

cargarTabla();
