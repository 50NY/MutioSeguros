// MENU PRINCIPAL PARA DISPOSITIVOS MOVILES (RESPONSIVE)
var   btnMenuOpen = document.getElementById("btnMenuOpen"),
      btnMenuClose = document.getElementById("btnMenuClose"),
      menuResponsive = document.getElementById("menu-nav"),
      enlaces = document.getElementById("enlaces")

      // Click Abrir

      btnMenuOpen.addEventListener("click", function(){
        menuResponsive.classList.add("active");
      });

      // Click Cerrar

      btnMenuClose.addEventListener("click", function(){
        menuResponsive.classList.remove("active");
      });
      
      // Cerrar menu con los enlaces

      enlaces.addEventListener("click", function(){
        menuResponsive.style.transitionDelay="0.5s";
        menuResponsive.classList.remove("active");
      });

      
// SLIDER DE PRODUCTOS

var contenedor= document.querySelector('.slider');
var btnIzquierdo= document.getElementById("btn-izquierda");
var btnDerecho= document.getElementById("btn-derecha");

// EVENTO PARA EL BOTON DERECHO 

btnDerecho.addEventListener("click", function (){
  contenedor.scrollLeft += contenedor.offsetWidth;
});

btnIzquierdo.addEventListener("click", function (){
  contenedor.scrollLeft -= contenedor.offsetWidth;
});


// VALIDACION DE FORMULARIO

var formulario = document.getElementById("formulario");

function validar(e) {
    var inputNombre = document.getElementById("nombre"),
    inputEmail = document.getElementById("email"),
    inputComents = document.getElementById("comentarios"),
    alertSucces = document.getElementById("alertSucces"),
    alertError = document.getElementById("alertError");


    if (inputNombre.value==0 || inputEmail.value==0 ||inputComents.value==0 ){
      e.preventDefault();
      alertError.classList.remove("hide");
      alertError.classList.add("show");
      //funcion para sacar el mensaje luego de haberlo mostrado duraante 2 segundos
      setTimeout(function (){
        alertError.classList.remove("show");
        alertError.classList.add("hide");
      },2000)
    }else{
      e.preventDefault();
      alertSucces.classList.remove("hide");
      alertSucces.classList.add("show");

      //funcion para sacar el mensaje luego de haberlo mostrado duraante 2 segundos
      setTimeout(function (){
        alertSucces.classList.remove("show");
        alertSucces.classList.add("hide");
      },2000)

      inputNombre.value="";
      inputEmail.value="";
      inputComents.value="";
      alertSucces.classList.remove("hide");
      alertSucces.classList.add("show");
    }


}

formulario.addEventListener("submit", validar);

