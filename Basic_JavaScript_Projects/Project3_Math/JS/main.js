function addition_Function() {    //performing an addition equation through functions
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2+2=" + addition;
}

function subtraction_Function() {   //performing a subtraction equation through functions
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5-2=" + Subtraction;
}

function multiplication() {   //performing a multiplication equation through functions
    var multiply = 6*8;
    document.getElementById("Math3").innerHTML = "6 x 8 =" + multiply;
}

function division() {   //performing a division equation through functions
    var divide = 48/6;
    document.getElementById("Math4").innerHTML = "48/6=" + divide;
}

function more_Math() {  //performing an equation with multiple operators in a function
    var simple_Math = (1+2) * 10 / 2 -5;
    document.getElementById("Maths").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() { //the modulus operator outputs the remainder of the division  operation
    var remainder = 25 % 6;
    document.getElementById("Math5").innerHTML = "when you divide 25 by 6 you have a remainder of: " + remainder;   
}

function negation_Operator() { //outputs the opposite +- value of the variable given
    var x = 10;
    document.getElementById("Math6").innerHTML = -x;
}

function increment() {  //increases teh value by 1
    var X= 5;
    X++;
    document.write(X);
}

function decrement() {  //decreases the value by 1
    var y = 5.25;
    y--;
    document.write(y);
}

window.alert(Math.random()); //outputs a random number between 0 and 1

window.alert(Math.random() * 100);  //outputs a random number between 0 and 100

function round() {  //rounds the variable to the nearest integer
    var x = 4.5
    document.getElementById("demo").innerHTML = Math.round(x);
}