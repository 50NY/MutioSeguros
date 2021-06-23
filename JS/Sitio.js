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






