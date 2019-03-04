// console.log('reading js');
//
// var brushSize = 150;
// var tricolor = 255;
// //var mic;
//
// function setup() {
//   //mic = new p5.AudioIn();
//   //mic.start();
//   // size in Processing is createCanvas in p5
//   // capture the canvas into a var
//   var myCanvas = createCanvas(800, 700);
//   // connect myCanvas in js to mySketch in html
//
//   myCanvas.parent('mySketch');
//   background(255);
// }
//
// function draw() {
//   //ellipse(mouseX,mouseY, 100, 100);
//   // if(mouseIsPressed){
//   // fill(#25d454);
//   // }
//   //stroke(0);
//
//   //var vol = mic.getLevel();
//   //console.log(vol);
//   //micLevel = mic.getLevel();
//   //ellipse(width / 2, constrain(height - micLevel * height * 5, 0, height), 10, 10);
//
//
//   if (mouseIsPressed) {
//     fill(random(7, 90), random(150, 90), random(90, 120), 200);
//     //triangle(mouseX, mouseY, mouseY, brushSize, brushSize, brushSize);
//     triangle(mouseX, mouseY, mouseY, brushSize, mouseX, brushSize);
//   } else {
//     noFill();
//     //ellipse(mouseX, mouseY, brushSize, brushSize);
//
//     if (mouseIsPressed) {
//       stroke(255);
//     } else {
//       stroke(0);
//     }
//     line(mouseX - 66, mouseY, mouseX + 66, mouseY);
//     //line(mouseX, mouseY-66, mouseX, mouseY+66);
//   }
// }
//
// function mouseIsPressed() {
//   background(random(25, 311));
// }
//
// function keyPressed() {
//   if (keyCode == ENTER) {
//     tricolor = 205;
//   }
//   if (keyCode == SHIFT) {
//     tricolor = 64;
//   }
// }


var mic;

function setup() {
  var myCanvas = createCanvas(800, 700);

  myCanvas.parent('mySketch');
  background(255);

  // createCanvas(710, 500);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  var h = map(vol, 0, 1, height, 0);
  ellipse(width/2, h - 25, 50, 50);
}
