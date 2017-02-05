var numberOfFaces=5;
var theLeftSide;
console.log(theLeftSide);
var imgHeight=80;
var imgWidth=80;

window.onload=function generateFaces(){
theLeftSide=document.getElementById("leftSide");
while(numberOfFaces>0){
var smileImg=document.createElement("img");

smileImg.src="http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
smileImg.style.height=imgHeight + "px";
smileImg.style.width=imgWidth + "px";
var randomTop=Math.random() * 400;
randomTop=Math.floor(randomTop);
console.log(randomTop);
var randomLeft=Math.random() * 500;
randomLeft=Math.floor(randomLeft);
console.log(randomLeft);
smileImg.style.top= randomTop + "px";
smileImg.style.left=randomLeft + "px";
theLeftSide.appendChild(smileImg);
numberOfFaces--;
}

}