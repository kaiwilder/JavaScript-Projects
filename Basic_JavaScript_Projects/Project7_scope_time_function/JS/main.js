var X = 10; //A Global function
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_3() {
    var Y = 10; //A local function
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    var Y = 10;
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() {
    var Y = 10;
    console.log(20 + Y + "<br>");   //using console.log to debug code
}
function Add_numbers_6() {
    console.log(Y + 100);
}
Add_numbers_5();
Add_numbers_6();

function get_Date() {   //prints a greeting if the hour falls before 6pm
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

if (1 < 2) {
    document.write("1 is greater than 2");  //will not print with the mandatory error included, will print once the error is fixed
}

function Age_Function() {   //uses if and else statements to output the desired statements
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {  //uses else if to add another option of statement
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon time";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}