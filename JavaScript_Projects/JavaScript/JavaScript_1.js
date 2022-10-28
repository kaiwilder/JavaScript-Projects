function Color_Function() {   //
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";            
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {   //the same as getElementBy Id, but with class name instead
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250,125,100,0,2*Math.PI);
ctx.stroke();

var c = document.getElementById("Canvas2");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0,0,0,170);
my_gradient.addColorStop(0, "red");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(0, 0, 500, 250);