  const oculto = document.querySelector('.moreRegistro');
  const linkAtivador = document.querySelector('.imgRegistro a');


  linkAtivador.addEventListener("click", function() {
    oculto.style.display = "block";
  });
 
  oculto.addEventListener("click", function() {
      oculto.style.display = "none";
  });

window.onload = function() {
  setTimeout(function() {
    alert("do u like it? please follow me :D");
  }, 10000);
};
