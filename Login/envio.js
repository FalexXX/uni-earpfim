let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const contra = document.getElementById("contrasenia").value;

  console.log(email);
  console.log(contra);
  try {
    fetch('../json/usuarios.json') 
      .then(response => response.json()) 
      .then(data => {
        let usuarioEncontrado = data.find(user => user.email === email && user.password === contra);
        
        if (usuarioEncontrado) {
          localStorage.setItem('id', usuarioEncontrado.id);
          localStorage.setItem('codigo', usuarioEncontrado.codigo);
          localStorage.setItem('nombre', usuarioEncontrado.nombre);

          console.log(localStorage.getItem('id'));
          console.log(localStorage.getItem('codigo'));

          Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: `Hola, ${usuarioEncontrado.nombre}!`,
            backdrop: false
          }).then(() => {
            window.location.href = '../index.html';
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Credenciales incorrectas',
            backdrop: false
          }).then(() => {
            window.location.href = 'login.html';
          });
        }
      });
  } catch (error) {
    alert('Ocurrió un error al cargar los datos');
    console.error(error);
  } finally {
    console.log('Fin de la solicitud');
  }
});
