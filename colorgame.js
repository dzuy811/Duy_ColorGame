var numberSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

init();

resetButton.addEventListener("click", function(){
	reset();
});

function init(){
	// mode buttons event listener
	setupModeButtons();
	setupSquares();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numberSquares = 3: numberSquares = 6;
		reset();
		});
	};
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
 	// Add click listeners to squares
 	squares[i].addEventListener("click", function(){
 		// grab color of clicked square
 		var clickedColor = this.style.background;
 		// compare color to pickedColor
 		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"

		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!";
 		}
 	});
	}
	reset();
}

function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
	// change each color to match given color
	squares[i].style.background = color;

	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// add num random colors to array
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	colors = generateRandomColors(numberSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			// Add initial colors to squares
 			squares[i].style.background = colors[i];
 			squares[i].style.display = "block";

		} else {
			squares[i].style.display = "none"
		}};

 	// Change background "h1"
 	h1.style.background = "steelblue";

}