//URLSearchParams
const parametro = new URLSearchParams(location.search);

const idProducto = parametro.get("id");

//Capturar el contenedor
let contenedor = document.querySelector("#contenedor");

//Leer localStorage
let productos = JSON.parse(localStorage.getItem("productos")) || [];

//Funcion para traer datos del producto
const traerDatos = () => {
  let producto = productos.find((item) => item.id == idProducto);

  //valido
  if (producto) {
    //estructura de la card
    let col = document.createElement("div");
    col.classList = "col";

    let card = `
        <div class="card mb-3">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="${producto.image}" class="img-fluid rounded-start p-3" alt="${producto.title}">
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title">${producto.title}</h5>
    <p class="card-text">${producto.description}</p>
    <p class="card-text"><small class="text-muted">Precio: $${producto.price}</small></p>
    </div>
    </div>
    </div>
    </div>
        `;

    col.innerHTML = card;
    contenedor.append(col);
  } else {
    alert("No existe el producto");
  }
};

/*
nodos

<div class="col">

</div>


<div class="card mb-3">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="${producto.image}" class="img-fluid rounded-start p-3" alt="${producto.title}">
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title">${producto.title}</h5>
    <p class="card-text">${producto.description}</p>
    <p class="card-text"><small class="text-muted">Precio: $${producto.price}</small></p>
    </div>
    </div>
    </div>
    </div>

*/

traerDatos();
