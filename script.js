
var placeholder = 0;
var width = 10;
var height = 10;
var tileSize = 50;

genMap(width, height);

function genMap(width, height) {
	var mapTiles = [];
	for (var i = 0; i < width*height; i++) {
		mapTiles[i] = "mapTile" + i;
	}
	document.getElementById("map").innerHTML = printMap(mapTiles);
	adjustMap();
}

function printMap(mT) {
	var p1Output = "<div class=\"mapTiles\" id = \"";
	var p2Output = "\"></div>";
	var finOutput = p1Output + mT[0] + p2Output;
	for (var i = 1; i < mT.length; i++) {
		finOutput += p1Output + mT[i] + p2Output;
	}
	return finOutput;
}

function adjustMap() {
	//Map as a whole
	document.getElementById("map").style.width =  width * tileSize + "px";
	document.getElementById("map").style.height =  length * tileSize + "px";
	//Individual tiles
	var mTClass = document.getElementsByClassName("mapTiles");
		for(var i=0; i< mTClass.length;i++){
			mTClass[i].style.width = tileSize + "px";
			mTClass[i].style.height = tileSize + "px";
		}
}
