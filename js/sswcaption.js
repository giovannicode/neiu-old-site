window.onload = initAll;

var currImg = 0;
var captionText = new Array(
	"Welcome to the Division of Student Life Image Gallery!",
	"next image"
)

function initAll() {
	document.getElementById("imgText").innerHTML = captionText[0];
	document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick = processNext;
}

function processPrevious() {
	newSlide(-1);
}

function processNext() {
	newSlide(1);
}

function newSlide(direction) {
	var imgCt = captionText.length;

	currImg = currImg + direction;
	if (currImg < 0) {
		currImg = imgCt-1;
	}
	if (currImg == imgCt) {
		currImg = 0;
	}
	document.getElementById("slideshow").src = "gallery/slideImg" + currImg + ".jpg";
	document.getElementById("imgText").innerHTML = captionText[currImg];
}

						