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







