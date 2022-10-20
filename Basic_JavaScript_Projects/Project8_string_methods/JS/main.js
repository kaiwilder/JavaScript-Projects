function full_Sentence() {  //using the concat() method
    var part_1 = "I have made this ";
    var part_2 = "into a complete sentence.";
    var whole_sentence = part_1.concat(part_2);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {   //using the slice() method
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = section;
}

function Upper_Case() { //displays the text connected to 'upper' in uppercase
    var text1 = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = 
    text1.toUpperCase();
}

function search_Method() {  //finds the position of the word 'is' in the below string
    var str = "My Refrigerator is running!";
    document.getElementById("Find").innerHTML = str.search("is")
}

function string_Method() {  //returns a number as a string
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {   //formats a number to a specific length
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function Fixed_method() {   //converts a number to a string and rounds to a specified number of decimals
    var num = 5.567829
    document.getElementById("Fix").innerHTML = num.toFixed(3);
}

function Value_method() {   //returns the primitive value of a number(whatever that means)
    var num = 39
    document.getElementById("Value").innerHTML = num.valueOf();
}