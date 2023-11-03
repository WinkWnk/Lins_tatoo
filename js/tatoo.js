document.addEventListener("DOMContentLoaded", function() {
    var arrowLink = document.querySelector("#seta");
    var header = document.getElementById("header");
    var arrowIcon = arrowLink.querySelector("#seta");

    arrowLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        header.classList.toggle("hidden"); 
        arrowIcon.classList.toggle("rotate");

        console.log("funcionou")
    });

});

