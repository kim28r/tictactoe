
var player1 = {name:"player1", marker:"X"};
var player2 = {name:"player2", marker: "O"};



var addClickHandler = function(){
 	var boxes = document.querySelectorAll(".r1");
	var turn = true;
	
	for (var i = 0; i < boxes.length; i++) {
		// console.log(boxes[i]);
		boxAtIndex = boxes[i];
		// boxAtIndex.style.backgroundColor = "yellow";
		boxAtIndex.addEventListener("click", function (event) {
		// console.log("clicked!", this);
		
			if (turn) {
				this.innerHTML = player1.marker;
			} 
			else {
				this.innerHTML = player2.marker;
			}
			return turn = !turn;
		})

	}	
};

window.onload = addClickHandler();



