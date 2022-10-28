//this variable keeps trac of whose turn it is
let activePlayer = 'X';
//this array stores an array of moves. We use this to determine win conditions
let selectedSquares = [];

//this function is for placing an x or an o in a square
function placeXOrO(squareNumber) {
    //this next condition ensures a square hasn't been selected already
    //the .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/newx.png")';
        } else {
            select.style.backgroundImage = 'url("images/newo.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);

        checkWinConditions();
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        //This function plays placement sound.
        audio('./media/newplace.mp3');
        //this condition checks if it's the computers turn
        if (activePlayer === 'O') {
            //disables clicking for computers turn
            disableClick();
            //waits 1 second before the computer places an image and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for computersTurn() to work
        return true;
    }
    //this function has the computer select a random square
    function computersTurn() {
        //this boolean is needed for the while loop
        let success = false;
        //variable stores a random number between 0 and 8
        let pickASquare;
        //condition allows the while loop to keep trying if a square is already selected
        while (!success) {
            //a random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number returns true the square hasn't been selected yet
            if (placeXOrO(pickASquare)) {
                //this line calls a function
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}
//this function parses the selecterSquares array to search for win conditions
//drawLine() function is called to draw a line on screen if the condition is met
function checkWinConditions() {
    // X 0, 1, 2 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }

    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304) }

    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508) }

    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558) }

    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558) }

    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558) }

    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90) }

    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520) }

    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100) }

    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304) }

    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508) }

    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558) }

    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558) }

    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558) }

    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90) }

    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520) }
    //if none of the above conditions are met and 9 squares are selected this code executes
    else if (selectedSquares.length >= 9) {
        audio('./media/newtie.mp3');
        setTimeout(function () { resetGame(); }, 500);
    }
    //This function checks if an array includes 3 strings. its used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true; }
    }
}
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000)
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}
//uses canvas element to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line access the HTML canvas element
    const canvas = document.getElementById("win-lines");
    //this line gives access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //next line indicates where the start of a lines x axis is
    let x1 = coordX1,
        //next line indicates where the start of a lines y axis is
        y1 = coordY1,
        //next line indicates where the end of a lines x axis is
        x2 = coordX2,
        //next line indicates where the end of a lines x axis is
        y2 = coordY2,
        //this variable stores temporary x axis data that is updates in the animation loop
        x = x1,
        //this variable stores temporary y axis data that is updates in the animation loop
        y = y1;
        //this function interacts with the canvas
    function animateLineDrawing() {
        //creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from the last loop iteration
        c.clearRect(0, 0, 608, 608);
        //this method starts a new path
        c.beginPath();
        //moves to the starting point in the line
        c.moveTo(x1, y1);
        //indicating the end point of a line
        c.lineTo(x, y);
        //sets the width of the line
        c.lineWidth = 10;
        //sets the color of the line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //now draws everything laid out above
        c.stroke();
        //condition checks if its reached the endpoints
        if (x1 <= x2 && y1 <= y2) {
            //this condition adds 10 to the previous x endpoint
            if (x < x2) { x += 10; }
            //adds 10 to the previous y endpoint
            if (y < y2) { y += 10; }
            //similar to above condition
            //necessary for the 6, 4, 2, win conditons
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
        }
        //similar to above condition
        //necessary for the 6, 4, 2, win conditons
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //clears the canvas after the win line is drawn
    function clear() {
        //next line starts the animation loop
        const animationLoop = requestAnimationFrame(clear);
        //clears the canvas (again)
        c.clearRect(0, 0, 608, 608);
        //next line stops the animation loop
        cancelAnimationFrame(animationLoop);
    }
    //next line disables clicking while the win sound is playing
    disableClick();
    //line plays the win sound
    audio('./media/newwinGame.mp3');
    //calls the main animation loop
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}
//this function resets the game in the event of a tie or a win
function resetGame() {
    for (let i=0; i<9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    //this resets our array so it is empty and we can start over
    selectedSquares = [];
}