function displayType(character) {   //practice with data attributes
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}