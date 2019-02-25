console.log('reading js');

var brushSize = 150;
var tricolor = 255;
//var mic;

function setup() {
  //mic = new p5.AudioIn();
  //mic.start();
  // size in Processing is createCanvas in p5
  // capture the canvas into a var
  var myCanvas = createCanvas(800, 900);
  // connect myCanvas in js to mySketch in html

  myCanvas.parent('mySketch');
  background(255);
}

function draw() {
  //ellipse(mouseX,mouseY, 100, 100);
  // if(mouseIsPressed){
  // fill(#25d454);
  // }
  //stroke(0);
  //var vol = mic.getLevel();
  //console.log(vol);
  //micLevel = mic.getLevel();
  //ellipse(width / 2, constrain(height - micLevel * height * 5, 0, height), 10, 10);


if (mouseIsPressed) {
  fill(tricolor, 90, 290, 70);
  //triangle(mouseX, mouseY, mouseY, brushSize, brushSize, brushSize);
  triangle(mouseX, mouseY, mouseY, brushSize, mouseX, brushSize);
} else {
  noFill();
  //ellipse(mouseX, mouseY, brushSize, brushSize);

  if (mouseIsPressed) {
    stroke(255);
  } else {
    stroke(0);
  }
  line(mouseX - 66, mouseY, mouseX + 66, mouseY);
  //line(mouseX, mouseY-66, mouseX, mouseY+66);
}
}

function mouseIsPressed() {
  background(random(25, 311));
}

function keyPressed() {
  if (keyCode == ENTER) {
    tricolor = 205;
  }
  if (keyCode == SHIFT) {
    tricolor = 64;
  }
}
