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
