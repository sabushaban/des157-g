console.log("reading js");

("use strict");

var threshold = 0;
var cutoff = -.10;
var decayRate = -.20;

function setup() {
  createCanvas(1400, 650);
  background(219, 246, 255);

  input = new p5.AudioIn();
  input.start();
}

function draw() {

  var canvas;
  canvas = document.querySelector('canvas');
  console.log("canvas");
  var volume = input.getLevel();

  if (volume > threshold + cutoff) {
    noStroke();
    fill(random(214, 49, 247), random(0, 232, 255), 200);
    rect(random(40, width), random(height), volume * 80, volume * 80);
    ellipse(random(90, width), random(height), volume * 30, volume * 30);

    cutoff = 0.1;
  }


  cutoff = cutoff * threshold;

  var y = map(volume, 0, .5, height, .4);
  var ythreshold = map(threshold + cutoff + decayRate, 0, 1, height, 0);

  noStroke();
  fill(random(185, 7, 273), random(30, 220, 190), 190);
  rect(0, 0, 20, height);
  ellipse(random(90, width), random(height), volume * 30, volume * 30);

  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 9, ythreshold);
}
