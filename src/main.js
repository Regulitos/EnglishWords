var divs = document.querySelectorAll('.container');

function mostrarDiv(id) {    
    divs.forEach(function (div) {
      div.style.display = 'none';
    });
  
    // Mostrar el div seleccionado
    document.getElementById(id).style.display = 'block';
  }