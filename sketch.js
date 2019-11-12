var position; //We create a var to make CurrentPosition accessible many times, we can’t call it ‘ location’, already taken.

var date, hours, minutes, seconds;

var currentLat;
var currentLon;

var myImg,cocktail;

var h1,h5;

function preload() {
  myImg = loadImage("image/spiaggia.jpg");
  cocktail = loadImage("image/cocktail.png");
  position = getCurrentPosition(); // MUST BE USED IN PRELOAD FUNCTION.


}


function setup() {
  currentLat = position.latitude;
  currentLon = position.longitude;
  var distance = calcGeoDistance(currentLat, currentLon, 7.6857596, 98.6262709, "km"); //distance from Ko Phi Phi Leh


  console.log(position);
  createCanvas(750, 499);

  // intervalCurrentPosition(showPosition, 1000); // we can put it in setup
  // // we can pass it two argument, another function and the time we want to check the position, time is in milliseconds
  h1 = createElement("h1","You're "+ round(distance) + " km far from where you'd rather be.");
  h2 = createElement("h2","It's Ko Phi Phi Leh, Thailand. Believe me");

  h1.position(40,350);
  h2.position(40,400);

  h1.style("font-size","32px");
  h2.style("font-size","15px");

}

function draw() {
  background(155);

  // display background image
  image(myImg, 0, 0);

  noCursor();
  // display ufo
  image(cocktail, mouseX - 20, mouseY - 20);

}

// function showPosition() {
//   // console.log("checkingPosition!");
//
//   currentLat = position.latitude;
//   currentLon = position.longitude;
//
//
//
//
//   var distance = calcGeoDistance(currentLat, currentLon, 7.6857596, 98.6262709, "km"); //distance from Ko Phi Phi Leh
//
//
//
//   // console.log(currentLat);
//   // console.log(currentLon);
// }
