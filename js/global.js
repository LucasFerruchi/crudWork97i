//Clase de producto
class Producto {
  constructor(
    id,
    title,
    description,
    category,
    price,
    image,
    favorito = false
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.image = image;
    this.favorito = favorito;
  }
}

//BOTON LOGIN
let btnLogin = document.querySelector("#btn-login");

//Funcion marcarFavorito
const marcarFavorito = (id) => {
  //Obtenemos con el id la posicion
  let index = productos.findIndex((item) => {
    return item.id == id;
  });
  //cambiamos el valor de favorito
  productos[index].favorito = !productos[index].favorito;
  //guardamos en localStorage
  localStorage.setItem("productos", JSON.stringify(productos));
  //Listamos los producos de nuevo
  listarProductos();
};
//--------------------------------------------------------
