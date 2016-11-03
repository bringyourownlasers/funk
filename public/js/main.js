// CUSTOM JS FILE //





//p5 Script //
var canvasWidth = 160;
var canvasHeight = 120;
var currentMillis = 0;
var lastMillis = 0;
var averageRGB = [0, 0, 0];
var rTotal = 0;
var gTotal = 0;
var bTotal = 0;

function setup() {
  createCanvas(canvasWidth * 2, canvasHeight);
  capture = createCapture(VIDEO);
  capture.size(canvasWidth, canvasHeight);
  capture.hide();
  var c = color(0, 0, 0);
}

function draw() {
  image(capture, 0, 0, canvasWidth, canvasHeight);
  currentMillis = millis();
  var interval = currentMillis - lastMillis;
  if (interval >= 10000) {
    for (var w = 0; w <= canvasWidth; w++) {
      for (var h = 0; h <= canvasHeight; h++) {
        var c = get(w, h);
        rTotal = rTotal + c[0];
        gTotal = gTotal + c[1];
        bTotal = bTotal + c[2];
      }
    }
    averageRGB = [(rTotal / (canvasWidth * canvasHeight)), (gTotal / (canvasWidth * canvasHeight)), (bTotal / (canvasWidth * canvasHeight))];
    console.log(averageRGB);
    lastMillis = currentMillis;
    rTotal = 0;
    gTotal = 0;
    bTotal = 0;
  }
  noStroke();
  fill(averageRGB[0], averageRGB[1], averageRGB[2]);
  rect(canvasWidth, 0, canvasWidth, canvasHeight);
}