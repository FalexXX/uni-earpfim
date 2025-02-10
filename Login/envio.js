let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const contra = document.getElementById("contrasenia").value;

  console.log(email);
  console.log(contra);
  try {
    fetch("../json/usuarios.json")
      .then((response) => response.json())
      .then((data) => {
        let usuarioEncontrado = data.find(
          (user) => user.email === email && user.password === contra
        );

        if (usuarioEncontrado) {
          localStorage.setItem("id", usuarioEncontrado.id);
          localStorage.setItem("email", usuarioEncontrado.email);
          localStorage.setItem("password", usuarioEncontrado.password);
          localStorage.setItem("nombre", usuarioEncontrado.nombre);
          localStorage.setItem("codigo", usuarioEncontrado.codigo);
          localStorage.setItem("dni", usuarioEncontrado.dni);
          localStorage.setItem("sexo", usuarioEncontrado.sexo);
          localStorage.setItem("fecha_nacimiento", usuarioEncontrado.fecha_nacimiento);
          localStorage.setItem("celular", JSON.stringify(usuarioEncontrado.celular));
          localStorage.setItem("telefono_fijo", JSON.stringify(usuarioEncontrado.telefono_fijo));
          localStorage.setItem("fecha_matrimonio", usuarioEncontrado.fecha_matrimonio);
          localStorage.setItem("emails_alternativos",JSON.stringify(usuarioEncontrado.emails_alternativos));
          localStorage.setItem("pais_nacimiento",usuarioEncontrado.pais_nacimiento);
          localStorage.setItem("departamento_nacimiento",usuarioEncontrado.departamento_nacimiento);
          localStorage.setItem("provincia_nacimiento",usuarioEncontrado.provincia_nacimiento);
          localStorage.setItem("distrito_nacimiento",usuarioEncontrado.distrito_nacimiento);
          localStorage.setItem("domicilio", JSON.stringify(usuarioEncontrado.domicilio));
          localStorage.setItem("datos_laborales", JSON.stringify(usuarioEncontrado.datos_laborales));
          
          console.log(localStorage.getItem("id"));
          console.log(localStorage.getItem("codigo"));

          Swal.fire({
            icon: "success",
            title: "Bienvenido",
            text: `Hola, ${usuarioEncontrado.nombre}!`,
            backdrop: false,
          }).then(() => {
            window.location.href = "../index.html";
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Credenciales incorrectas",
            backdrop: false,
          }).then(() => {
            window.location.href = "login.html";
          });
        }
      });
  } catch (error) {
    alert("Ocurrió un error al cargar los datos");
    console.error(error);
  } finally {
    console.log("Fin de la solicitud");
  }
});
