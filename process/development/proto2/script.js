console.log("reading js");

("use strict");


var threshold = 0;
var cutoff = -.10;
var decayRate = -.20;

function setup() {
  createCanvas(2000,650);
  background(255);

  // Create an Audio input
  input = new p5.AudioIn();
  input.start();
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  var canvas;
  canvas = document.querySelector('canvas');
  console.log("canvas");
  var volume = input.getLevel();

  // If the volume > threshold + cutoff, a rect is drawn at a random location.
  // The louder the volume, the larger the rectangle.
  if (volume > threshold + cutoff) {
    noStroke();
    fill(random(0,69),random(300),90);
    rect(random(40, width), random(height), volume * 80, volume * 80);

    // increase the cutoff
    cutoff = 0.1;
  }

  //
  cutoff = cutoff * threshold;

  // Graph the overall potential volume, w/ a line at the threshold
  var y = map(volume, 0, .5, height, .4);
  var ythreshold = map(threshold + cutoff, 0, 1, height, 0);

  noStroke();
  fill(random(175,7,23),random(30,120,90),10);
  rect(0, 0, 20, height);
  ellipse(random(90, width), random(height), volume * 30, volume * 30);

  // Then draw a rectangle on the graph, sized according to volume
  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 9, ythreshold);
}
