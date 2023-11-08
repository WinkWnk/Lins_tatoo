document.addEventListener("DOMContentLoaded", function() {
    var arrowLink = document.querySelector("#seta");
    var header = document.getElementById("header");

    arrowLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        header.classList.toggle("hidden"); 
        arrowLink.classList.toggle("rotate");
    });   
});

