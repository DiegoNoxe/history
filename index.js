

  const oculto = document.querySelector('.moreRegistro');
  const linkAtivador = document.querySelector('.imgRegistro a');

  const ocultoAsian = document.querySelector('.moreAsia');
  const linkAtivadorAsian = document.querySelector('.imgAsia a');


linkAtivador.addEventListener("click", function() {
    oculto.style.display = "block";
});

oculto.addEventListener("click", function() {
    oculto.style.display = "none";
});


linkAtivadorAsian.addEventListener("click", function() {
    ocultoAsian.style.display = "block";
});


ocultoAsian.addEventListener("click", function() {
    ocultoAsian.style.display = "none";
});

