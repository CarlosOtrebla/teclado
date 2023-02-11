const teclas = document.querySelectorAll(".oitava > div")

teclas.forEach(function(tecla) {
    tecla.onmousedown = function(){
        console.log('pressionei')
        
    }

    tecla.onmouseup = function(){
        console.log("soltei")
    }
    
    tecla.onmouseleave = function(){
       console.log('sai')
    }
}) 

// function cliquei(){
//     window.alert("cliquei")
// }