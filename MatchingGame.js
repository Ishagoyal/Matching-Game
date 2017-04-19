var numberOfFaces = 4;
var theLeftSide;
var theRightSide;
var imgHeight = 80;
var imgWidth = 80;
var leftSideImages;
var theBody;
var count = 0;
var score;
var timer;
var sound;
var seconds = 20;
var music;

sound = document.createElement("audio");
sound.src = "http://themezz.com/files/Sounds/Click-5.wav";
music = document.createElement("audio");
music.src = "547734_The-Penguin---Theme.mp3"
music.play();

function generateFaces(){
 theLeftSide = document.getElementById("leftSide");
 theRightSide = document.getElementById("rightSide");
 score = document.getElementById("score");
 score.innerHTML = count;
  
 while(numberOfFaces>0){
  var smileImg = document.createElement("img");
  smileImg.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
  smileImg.style.height = imgHeight + "px";
  smileImg.style.width = imgWidth + "px";
  var randomTop = Math.random() * 400;
  randomTop = Math.floor(randomTop);
  console.log(randomTop);
  var randomLeft = Math.random() * 500;
  randomLeft = Math.floor(randomLeft);
  console.log(randomLeft);
  smileImg.style.top = randomTop + "px";
  smileImg.style.left = randomLeft + "px";
  theLeftSide.appendChild(smileImg);
  numberOfFaces--;
}
 leftSideImages=theLeftSide.cloneNode(true);
 leftSideImages.removeChild(leftSideImages.lastChild);
 theRightSide.append(leftSideImages);

 theLeftSide.lastChild.onclick=function nextLevel(event){
  seconds=20;
  sound.play();
  theLeftSide.removeChild(theLeftSide.lastChild);
  event.stopPropagation();
  numberOfFaces += 4;
  generateFaces();
  count+=5;
  score.innerHTML = count;
}


 theBody = document.getElementsByTagName("body")[0];

 theBody.onclick = function gameOver(){
  sound.play();
  alert("Game Over! You have not clicked on the extra smiley...\nAnd Your Score is " +count+ "!");
  theBody.onclick = null;
  theLeftSide.lastChild.onclick=null;
  window.location.reload();

}
 function timeOver(){
  alert("Time Up! Game Over!\n And Your Score is "+count+ "!");
  music.pause();
  theBody.onclick = null;
  theLeftSide.lastChild.onclick = null;
  window.location.reload();
}
 generateFaces.timeOver = timeOver;
}

function countDown(){
 var time=document.getElementById("time");
 time.innerHTML = seconds;
 seconds--;
 if(seconds>=0)
  timeoutHandle = setTimeout(countDown, 1000);
 else
  generateFaces.timeOver();
}

window.onload =function(){
 
 generateFaces();
 countDown();
 
}