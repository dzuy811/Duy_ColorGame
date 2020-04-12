var numberSquares = 6;
var colors = generateRandomColors(numberSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberSquares = 3;
	colors = generateRandomColors(numberSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	// squares.length = 6 BUT colors.length = 3
	for(var i = 0; i < squares.length; i++){
		// i = 0,1,2 --> change 
		if(colors[i]){
			squares[i].style.background = colors[i];
		/// i = 3,4,5 --> hide
		} else {
			squares[i].style.display = "none"
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberSquares = 6;
	colors = generateRandomColors(numberSquares);
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	// squares.length = 6 BUT colors.length = 3
	for(var i = 0; i < squares.length; i++){
		// i = 0,1,2 --> change 
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
	}
});

resetButton.addEventListener("click", function(){
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// generate all new colors
	colors = generateRandomColors(numberSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
 	// Add initial colors to squares
 	squares[i].style.background = colors[i];};
 	// Change background "h1"
 	h1.style.background = "steelblue";


});

colorDisplay.textContent = pickedColor;

 for(var i = 0; i < squares.length; i++){
 	// Add initial colors to squares
 	squares[i].style.background = colors[i];

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