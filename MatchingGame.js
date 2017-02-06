var numberOfFaces=4;
var theLeftSide;
var theRightSide;
var imgHeight=80;
var imgWidth=80;
var leftSideImages;
var theBody;
var count=0;
var score;

function generateFaces(){
theLeftSide=document.getElementById("leftSide");
theRightSide=document.getElementById("rightSide");
score=document.getElementById("score");
score.innerHTML=count;
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
leftSideImages=theLeftSide.cloneNode(true);
leftSideImages.removeChild(leftSideImages.lastChild);
theRightSide.append(leftSideImages);
theLeftSide.lastChild.onclick=function nextLevel(event){
theLeftSide.removeChild(theLeftSide.lastChild);
 event.stopPropagation();
 numberOfFaces += 4;
 generateFaces();
 count+=5;
 score.innerHTML=count;
 
}

theBody=document.getElementsByTagName("body")[0];

theBody.onclick=function gameOver(){
alert("Game Over! You have not clicked on the extra smiley...\nAnd Your Score is " +count+ "!");
theBody.onclick=null;
theLeftSide.lastChild.onclick=null;
window.location.reload();

}

}

