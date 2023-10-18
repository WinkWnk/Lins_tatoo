document.addEventListener("DOMContentLoaded", function() {
    // Selecionar o link de seta
    var arrowLink = document.querySelector(".fa-solid.fa-arrow-up");

    // Selecionar o elemento "header" pelo ID
    var header = document.getElementById("header");

    // Adicionar um ouvinte de evento de clique ao link
    arrowLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do link
        header.classList.add("hidden"); // Adicionar a classe "hidden" para ocultar o header
    });
});

document.addEventListener("DOMContentLoaded", function() {
  // Selecionar o link da seta
  var arrowLink = document.querySelector(".fa-solid.fa-arrow-up");

  // Selecionar o elemento "header" pelo ID
  var header = document.getElementById("header");

  // Adicionar um ouvinte de evento de clique ao link
  arrowLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevenir o comportamento padrão do link

      // Verificar se o "header" está visível
      if (header.style.display === "block" || header.style.display === "") {
          header.style.display = "none"; // Ocultar o header
          arrowLink.classList.add("visible"); // Adicionar classe "visible" para mostrar a seta
      } else {
          header.style.display = "block"; // Mostrar o header
          arrowLink.classList.remove("visible"); // Remover classe "visible" para ocultar a seta
      }
  });
});