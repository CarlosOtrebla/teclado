const teclas = document.querySelectorAll(".oitava > div")

teclas.forEach(function(tecla) {
    tecla.onmousedown = function(){
        console.log("mousedown")
    }

    tecla.onmouseup = function(){
        console.log("mouseup")
    }
    tecla.onmouseleave = function(){
        window.alert("mousedleave")
    }
}) 

