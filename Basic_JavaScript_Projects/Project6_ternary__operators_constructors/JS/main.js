function Ride_Function() {  //this function uses a ternary operator to output a different string depending on if the comparison with the ternary operator is true or not
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52)? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

document.write(Bigger = (5>1) ? "Left number is bigger":"Right number is bigger");

function Vote_Function() {  //same gist as the above function, but this uses voting age instead
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age<18)? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {    //an object constructor function, utilizes the this keyword
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //utilizes the new keyword
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a "+ Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Flower(Type, Color) {  //another object constructor function
    this.Flower_Type = Type;
    this.Flower_Color = Color;
}
var Jake = new Flower("Rose", "Yellow") //using the keyword new again
function keyword() {
    document.getElementById("New_and_This").innerHTML =
    "Jake's favorite flowers are " + Jake.Flower_Color +" "+ Jake.Flower_Type +
    "s."
}

function count_Function() { //nesting functions, that happpen to count
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Start = 9;
        function Plus_One() {Start +=1;}
        Plus_One();
        return Start;
    }
}