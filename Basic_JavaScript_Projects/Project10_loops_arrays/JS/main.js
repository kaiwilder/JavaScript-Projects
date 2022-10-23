function Call_Loop() {  //executing a while loop
    var digit = "";
    var x = 1;
    while (x < 11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = digit;
}

function String_length() {  //using the string length property
    var text = "Hello World!"
    document.getElementById("string").innerHTML = text.length
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {   //executing a for loop
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //this would create an array of cat pictures, and include a different sentence with each pic
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() {  //creating a constant, and also altering it's contents
    const Musical_Instrument = {type:"Guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "red";
    Musical_Instrument.output = "electric"
    document.getElementById("Constant").innerHTML = "The color of the " + Musical_Instrument.output + " " + Musical_Instrument.type + " was " + Musical_Instrument.color;

}

function Let() {    //experimenting with the let keyword
    var X = 82;
    document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
}

function R() {  //learning return statements
    return Math.PI;
}
document.getElementById("1").innerHTML = R()

let car = {     //creating an object with properties and a method
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

var text = "";  //learning about break statements
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break_statements").innerHTML = text;

var words = ""; // learning continue statements
for (let x = 0; x < 10; x++) {
    if (x === 3) { continue; }
    words += "The number is " + x + "<br>";
}

document.getElementById("continue_S").innerHTML = words;