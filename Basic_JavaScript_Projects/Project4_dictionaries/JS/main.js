function my_Dictionary() { //defining the function
    var Animal = {
        Species:"Dog",
        Color:"Black",  //added an identical key value to see hwat happens
        Color:"Brown",  //the output is the second KVP cause the first was overwritten
        Breed:"Labrador",
        Age: 5,
        Sound:"Bark!"
    };
    delete Animal.Sound;    //deleting this value from the list
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //calling the deleted value outputs undefined 
}