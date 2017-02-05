var numberOfFaces=5;
var theLeftSide=document.getElementById("leftSide");
var imgHeight=100;
var imgWidth=100;

function generateFaces(){

while(numberOfFaces>0){
var smileImg=document.createElement("img");

smileImg.src="http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
smileImg.style.height=imgHeight + "px";
var randomTop=Math.random() * 300;
console.log(randomTop);
smileImg.style.top= randomTop + "px";
smileImg.style.width=imgWidth + "px";
var randomLeft=Math.random() * 400;
console.log(randomLeft);
smileImg.style.left=randomLeft + "px";
leftSide.appendChild(smileImg);
numberOfFaces--;
}

}