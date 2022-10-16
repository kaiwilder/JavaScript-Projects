window.alert("Hello World!");   //creates a box at the top of the screen with text saying 'hello world'
document.write('Hello World!');

var A = "This is a string <br>"; // asigns a variable to a string

document.write(A);

var B = 'a string value <br>';

window.alert(B);

document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded.");

document.write("\"Be who you are and say what you feel,"
+ " because those who mind dont\'t matter and those who matter don\'t mind.\""
+ "-Dr. Suess");

var C = "Concatenated" + " string"; //cancatenates, or strings together, two values
document.write(C)

var Family = "The Arezzinins", Dad = "jeremiah", Mom = "Hermione", Daughter = "Penny", Son = "Zorro";
document.write(Son); // creating multiple variabes then calling one

document.write(3+3); //an example of a statement

var Sent1 = "This is the beginning of the string" //This is an expression
var Sent2 =  " and this is the end of the string"
document.write(Sent1 + Sent2) //This statement prints the above variables concatenated

function myFunction() {
    document.getElementById("demo").innerHTML = "You copied this text!"
} //string appears when you copy the specified text in the html document