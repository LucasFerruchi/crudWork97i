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
//! -----------------------------------------------------------
//BOTON LOGIN
let btnLogin = document.querySelector("#btn-login");

//Datos del usuario
let usuario = JSON.parse(localStorage.getItem("user")) || null;

if (btnLogin) {
  if (usuario) {
    btnLogin.innerText = usuario;
  } else {
    btnLogin.innerText = "Inicio de sesión";
  }

  //ESCUCHADOR DE EVENTOS
  btnLogin.addEventListener("click", sesion);
  // document.querySelector("#btn-login").addEventListener("click", sesion);
}

//Funcion de inicio de sesion
function sesion() {
  // console.log("Inicio de sesion");
  if (usuario) {
    let confirmar = confirm("Estas seguro que deseas cerrar sesión?");
    if (confirmar) {
      localStorage.removeItem("user");
      btnLogin.innerText = "Inicio de sesión";
      location.replace("../index.html");
    }
  } else {
    location.replace("../pages/login.html");
  }
}

//! -----------------------------------------------------------
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
