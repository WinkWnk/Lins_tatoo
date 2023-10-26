
document.addEventListener("DOMContentLoaded", function() {
    // Selecionar o link de seta
    var arrowLink = document.querySelector(".fa-solid.fa-arrow-up");

    // Selecionar o elemento "header" pelo ID
    var header = document.getElementById("header");

    // Adicionar um ouvinte de evento de clique ao link
    arrowLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do link
        header.classList.add("hidden"); // Adicionar a classe "hidden" para ocultar o header

        console.log("funcinou")
    });

});







// document.addEventListener("DOMContentLoaded", function() {

//   var arrowLink = document.querySelector(".fa-solid.fa-arrow-up");


//   var header = document.getElementById("header");

  
//   arrowLink.addEventListener("click", function(event) {
//       event.preventDefault(); 

     
//       if (header.style.display === "block" || header.style.display === "") {
//           header.style.display = "none"; 
//           arrowLink.classList.add("visible"); 
//       } else {
//           header.style.display = "block";
//           arrowLink.classList.remove("visible"); 
//       }
//   });
// });