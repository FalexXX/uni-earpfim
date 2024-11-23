
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
btn_menu.addEventListener('click', function(event) {
    event.stopPropagation();
    menu_lateral.classList.toggle("closed");
});

document.addEventListener('click', function(event) {
    const click_dentro = menu_lateral.contains(event.target);
    const click_fuera = btn_menu.contains(event.target);

    if (window.innerWidth <= 768) {
        // Cierra toda la barra lateral si se hace clic fuera
        if (!click_dentro && !click_fuera) {
            menu_lateral.classList.add('closed');
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
         let nombreUsuario = localStorage.getItem('nombre');
         let idUsuario = localStorage.getItem('id');
         let codigoUsuario = localStorage.getItem('codigo');

         let nombreDisplays = document.querySelectorAll('#nombre-usuario');
         let imagenProfesor = document.querySelector('.imagen-perfil');
         let codigoProfesor = document.getElementById('codigo-perfil');
         
         nombreDisplays.forEach(elemento => {
           elemento.textContent = nombreUsuario ? `${nombreUsuario}` : 'Bienvenido, Invitado';
         });

         if( `${idUsuario}` == 1 ){    
            codigoProfesor.textContent = `${codigoUsuario}`;
            imagenProfesor.innerHTML = `<img src="../img/imagen-hombre.jpg" alt="Foto de perfil">`;
         }else if( `${idUsuario}` == 2 ){
            codigoProfesor.textContent = `${codigoUsuario}`;
            imagenProfesor.innerHTML = `<img src="../img/imagen-mujer.jpg" alt="Foto de perfil">`;
         }else{
            console.log("Error al cargar los datos");
         }

       });


     //PAGINACIÓN
     document.querySelectorAll(".page-item").forEach(item=>{
        item.addEventListener('click', function(e){
            e.preventDefault;

            document.querySelectorAll(".page-item").forEach(el=>el.classList.remove('active'));
            document.querySelectorAll(".contenido").forEach(section=>section.classList.remove('active'));

            this.classList.add('active');

            const targetId = this.id.replace('-btn', ''); 
            document.getElementById(targetId).classList.add('active');

        })
     })
   
