document.write(typeof "sunshine");  //outputs the 'type of' the variable

document.write(typeof 42);

document.write("five" + 5);

function my_Function() {    //this function will display NaN because 0 cannot be divided by 0
    document.getElementById("Test").innerHTML = 0/0;
}

function num2() {   //isNaN is stating whatever is in the parenthesis is Not a number, so the output of this statement is true
    document.getElementById("Test2").innerHTML = isNaN('this is a string');
}

function num3() {   //the output of this function will be false because 772 is a number
    document.getElementById("Test3").innerHTML = isNaN(772);
}

document.write(2E310); //displays infinity because the number is larger that javascript can count

document.write(-3E310)  //displays negative infinity

document.write(10>2);

document.write(10<2);

console.log(2+2);   //prints answer in the console

console.log(10<2);

document.write(10==10); //== compares the variables to see if they are equal

document.write(10==11);

X = 10;
Y = 10;
document.write(X===Y);  //compares the variables and data types to see if they are equal

X=82;
Y="82";
document.write(X===Y);

A="Magnus";
B="Magonagal";
document.write(A===B);

Z=7;
X="eight";
document.write(Z===X);

document.write(5>2 && 10>4);    //compares Both comparisons to see if they are true, only outputs true if they're both true

document.write(5>2 && 10<4);

document.write(5>10 || 10>4);   //compares the comparisons to see if either is true

document.write(5>10 || 10<4);

function not_Function() {
    document.getElementById("Not").innerHTML =!(20>10); //checks to see if the comparison is Not true, outputs true only if it is false
}

document.write(!(5>10));