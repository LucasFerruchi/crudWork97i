//perfil de ejemplo
const admin = {
  correo: "admin@admin.com",
  password: "1234",
};

//Funcion LogIn
const logIn = (event) => {
  event.preventDefault();
  //   console.log("Funcion logIn");

  let correo = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  //validar usuario registrado
  if (correo === admin.correo) {
    if (password === admin.password) {
      localStorage.setItem("user", JSON.stringify(correo));
      //redirigir
      location.replace("./admin.html");
    }
  } else {
    alert("El correo o password son incorrectos!");
  }
};

//ESCUCHADORES DE EVENTOS
document.getElementById("formulario").addEventListener("submit", logIn);
