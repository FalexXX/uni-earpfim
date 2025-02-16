// TABLA LATERAL
let lisElements = document.querySelectorAll(".list__button--click");

lisElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    element.classList.toggle("arrow");

    let menu = element.nextElementSibling;

    // Alternar el submenú
    if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
      menu.style.maxHeight = `${menu.scrollHeight}px`;
    } else {
      menu.style.maxHeight = "0px";
    }
  });
});

// MENU-LATERAL
let menu_lateral = document.querySelector(".menu-lateral");
let btn_menu = document.getElementById("sidebar");
btn_menu.addEventListener("click", function (event) {
  event.stopPropagation();
  menu_lateral.classList.toggle("closed");
});

document.addEventListener("click", function (event) {
  const click_dentro = menu_lateral.contains(event.target);
  const click_fuera = btn_menu.contains(event.target);

  if (window.innerWidth <= 768) {
    // Cierra toda la barra lateral si se hace clic fuera
    if (!click_dentro && !click_fuera) {
      menu_lateral.classList.add("closed");
    }

    // Cierra el submenú si se hace clic fuera
    lisElements.forEach((element) => {
      let menu = element.nextElementSibling;
      if (!element.contains(event.target) && menu.style.maxHeight !== "0px") {
        menu.style.maxHeight = "0px";
        element.classList.remove("arrow");
      }
    });
  }
});

//JSON GENERAL
document.addEventListener("DOMContentLoaded", function () {
  let idUsuario = localStorage.getItem("id");
  let emailUsuario = localStorage.getItem("email");
  let nombreUsuario = localStorage.getItem("nombre");
  let codigoUsuario = localStorage.getItem("codigo");
  let dniUsuario = localStorage.getItem("dni");
  let sexoUsuario = localStorage.getItem("sexo");
  let fechaNacimiento = localStorage.getItem("fecha_nacimiento");
  let celularUsuario = JSON.parse(localStorage.getItem("celular"));
  let telefonoFijo = JSON.parse(localStorage.getItem("telefono_fijo"));
  let fechaMatrimonio = localStorage.getItem("fecha_matrimonio");
  let emailsAlternativos = JSON.parse(localStorage.getItem("emails_alternativos") );
  let paisNacimiento = localStorage.getItem("pais_nacimiento");
  let departamentoNacimiento = localStorage.getItem("departamento_nacimiento");
  let provinciaNacimiento = localStorage.getItem("provincia_nacimiento");
  let distritoNacimiento = localStorage.getItem("distrito_nacimiento");
  let domicilioUsuario = JSON.parse(localStorage.getItem("domicilio"));
  let datosLaborales = JSON.parse(localStorage.getItem("datos_laborales"));

  

//ELEMENTOS DEL HTML
  let nombreDisplays = document.querySelectorAll("#nombre-usuario");
  let imagenProfesor = document.querySelector(".imagen-perfil");
  let nacimientoProfesor = document.querySelector(".nacimiento-usuario");
  let codigoProfesor = document.getElementById("codigo-perfil");
  let sexProfesor = document.querySelector(".sex-usuario");
  let matrimonioProfesor = document.querySelector(".matrimonio-usuario");
  let telefonoProfesor = document.querySelector(".telefono-usuario");
  let dniProfesor = document.querySelector(".dni-usuario");
  let celularProfesor = document.querySelector(".celular-usuario");
  let emailProfesor  = document.querySelectorAll(".email-usuario");
  let paisProfesor = document.querySelector(".pais-usuario");
  let provinciaProfesor = document.querySelector(".provincia-usuario");
  let departamentoProfesor = document.querySelector(".departamento-usuario");
  let distritoProfesor = document.querySelector(".distrito-usuario");
  let domicilioPais = document.querySelector(".domicilio-pais");
  let domicilioDepartamento = document.querySelector(".domicilio-departamento");
  let domicilioProvincia = document.querySelector(".domicilio-provincia");
  let domicilioDistrito = document.querySelector(".domicilio-distrito");
  let domicilioTipo = document.querySelector(".domicilio-tipo");
  let domicilioInmueble = document.querySelector(".domicilio-inmueble");
  let dlCondicion = document.querySelector(".dl-condicion");
  let dlCategoria = document.querySelector(".dl-categoria");
  let dlDedicacion = document.querySelector(".dl-dedicacion");
  let dlCondicionHorasLectivas = document.querySelector(".dl-condicion-horas-lectivas");
  let dlRegimen = document.querySelector(".dl-regimen");



  nombreDisplays.forEach((elemento) => {
    elemento.textContent = nombreUsuario ? `${nombreUsuario}` : "Bienvenido, Invitado";
  });

  //INGRESANDO VALORES DEL LOCALSTORAGE AL HTML
  if (`${idUsuario}` == 1) {
    codigoProfesor.textContent = `${codigoUsuario}`;
    nacimientoProfesor.value = `${fechaNacimiento}`;
    matrimonioProfesor.value = `${fechaMatrimonio}`;
    sexProfesor.textContent = `${sexoUsuario}`;
    dniProfesor.value = `${dniUsuario}`;  
    celularProfesor.value = `${celularUsuario}`;
    telefonoProfesor.value = `${telefonoFijo[0]}`+" | "+`${telefonoFijo[1]}`+" | "+`${telefonoFijo[2]}`;
    celularProfesor.value = `${celularUsuario[0]}`+" | "+`${celularUsuario[1]}`;
    paisProfesor.textContent =  `${paisNacimiento}`;
    provinciaProfesor.textContent =  `${provinciaNacimiento}`;
    departamentoProfesor.textContent =  `${departamentoNacimiento}`;
    distritoProfesor.textContent =  `${distritoNacimiento}`;
    domicilioPais.textContent = `${domicilioUsuario.pais}`
    domicilioDepartamento.textContent = `${domicilioUsuario.departamento}`;
    domicilioProvincia.textContent = `${domicilioUsuario.provincia}`;
    domicilioDistrito.textContent = `${domicilioUsuario.distrito}`;
    domicilioTipo.textContent = `${domicilioUsuario.tipo_via}`;
    domicilioInmueble.textContent = `${domicilioUsuario.direccion_extranjera}`;
    dlCategoria.textContent = `${datosLaborales.categoria}`
    dlCondicion.textContent = `${datosLaborales.condicion}`
    dlCondicionHorasLectivas.value = datosLaborales.horas_lectivas;
    dlDedicacion.textContent =  `${datosLaborales.dedicacion}`
    dlRegimen.textContent =  `${datosLaborales.regimen_pensionario}`

    imagenProfesor.innerHTML = `<img src="../img/imagen-hombre.jpg" alt="Foto de perfil">`;
  //CORREOS ALTERNATIVOS
    for (let index = 0; index < emailProfesor.length; index++) {
      emailProfesor[index].value = `${emailsAlternativos[index]}`;
    }

  } else if (`${idUsuario}` == 2) {
    codigoProfesor.textContent = `${codigoUsuario}`;
    nacimientoProfesor.value = `${fechaNacimiento}`;
    sexProfesor.textContent = `${sexoUsuario}`;  
    telefonoProfesor.value = `${telefonoFijo[0]}`+" | "+`${telefonoFijo[1]}`+" | "+`${telefonoFijo[2]}`;
    imagenProfesor.innerHTML = `<img src="../img/imagen-mujer.jpg" alt="Foto de perfil">`;
    dniProfesor.value = `${dniUsuario}`;  
    celularProfesor.value = `${celularUsuario[0]}`+" | "+`${celularUsuario[1]}`;
    paisProfesor.textContent =  `${paisNacimiento}`;
    provinciaProfesor.textContent =  `${provinciaNacimiento}`;
    departamentoProfesor.textContent =  `${departamentoNacimiento}`;
    distritoProfesor.textContent =  `${distritoNacimiento}`;
    domicilioPais.textContent = `${domicilioUsuario.pais}`
    domicilioDepartamento.textContent = `${domicilioUsuario.departamento}`;
    domicilioProvincia.textContent = `${domicilioUsuario.provincia}`;
    domicilioDistrito.textContent = `${domicilioUsuario.distrito}`;
    domicilioTipo.textContent = `${domicilioUsuario.tipo_via}`;
    domicilioInmueble.textContent = `${domicilioUsuario.direccion_extranjera}`;

    //CORREOS ALTERNATIVOS
    for (let index = 0; index < emailProfesor.length; index++) {
      emailProfesor[index].value = `${emailsAlternativos[index]}`;
    }

  } else {
    console.log("Error al cargar los datos");
  }
});


//MODAL
document.addEventListener("DOMContentLoaded", function() {
  let modal = document.getElementById("exampleModal");

  modal.addEventListener("shown.bs.modal", function () {
      modal.setAttribute("aria-hidden", "false"); // Quita el atributo cuando se abre
  });

  modal.addEventListener("hidden.bs.modal", function () {
      modal.setAttribute("aria-hidden", "true"); // Lo vuelve a agregar al cerrar
  });
});

//FUNCION PARA AGREGAR UN NUEVO REGISTRO
function agregarRegistro() {
  let pais = document.getElementById("pais-modal").value;
  let departamento = document.getElementById("departamentos-modal").value;
  let provincia = document.getElementById("provincia-modal").value;
  let distrito = document.getElementById("distrito-modal").value;
  let tipoVia = document.getElementById("tipo-via-modal").value;
  let nombreVia = document.getElementById("via-modal").value;
  let TipoDi = document.getElementById("tipo-modal").value;
  let inmuebletipo =document.getElementById("inmueble-modal").value;
  let tipoZona = document.getElementById("tipo-zona-modal").value;
  let nombreZona = document.getElementById("zona-modal").value;

  
  let NewDomicilio = document.querySelector(".new-domicilio tbody");

  console.log(inmuebletipo)
  if (!NewDomicilio) {
    console.error("No se encontró el tbody con la clase 'new-domicilio'. Verifica la estructura del HTML.");
    return;
  }

  let orden = NewDomicilio.rows.length + 1;

  // Crear una nueva fila con template literals
  let nuevaFila = `
      <tr class="fw-light" style="font-size: 14px;">
          <td>${orden}</td>
          <td>${pais}</td>
          <td></td>          
          <td>${departamento}</td>
          <td>${provincia}</td>
          <td>${distrito}</td>
          <td>${tipoVia}</td>
          <td>${nombreVia}</td>
          <td>${tipoZona}</td>
          <td>${inmuebletipo}</td>
      </tr>
  `;

  // Agregar la fila sin sobrescribir las existentes
  NewDomicilio.innerHTML += nuevaFila;

  
}


//PAGINACIÓN
document.querySelectorAll(".page-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault;

    document
      .querySelectorAll(".page-item")
      .forEach((el) => el.classList.remove("active"));
    document
      .querySelectorAll(".contenido")
      .forEach((section) => section.classList.remove("active"));

    this.classList.add("active");

    const targetId = this.id.replace("-btn", "");
    document.getElementById(targetId).classList.add("active");
  });
});
