function validateForm() {
    let x = document.forms["myForm"]["fname", "lname", "email"].value;
    if (x == "") {
        alert("Form must be filled out");
        return false;
    }
}