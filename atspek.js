
function skaiciuoti() {
    var a = Number(document.getElementById("a").value);
    
 var random = Math.floor(Math.random() * 30);

   
    if (a === random)
        document.getElementById("viso").innerHTML = " correct! Lucky you!";

    else if (a > random)
        document.getElementById("viso").innerHTML = " number is too big";

    else if (a < random)
        document.getElementById("viso").innerHTML = " number is too small";
    
    else if (a = String)
        document.getElementById("viso").innerHTML = " it is not a number";
        alert("It is not a number");

}

//BODY BACKGROUND COLOR
//document.body.style.backgroundColor = "#DCE4B7";

//PRESS ENTER ON KEYBOARD (INSTEAD OF BUTTON)
var a = document.getElementById("a");
a.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
     document.getElementById("skaiciuoti").click();
    }
});
    
