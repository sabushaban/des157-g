var mov = 90; //number of circles
// float[] y = new
float[mov]; //seeting up the array

function setup() {
  size(500,400);
  smooth();
  background(0);

for (int i = 0; i < y.length; i++) {
    y[i] = random(600); //width of line the ellipses come down in
  }
}


function draw() {
  stroke(random(800),random(295),random(255));
  noFill();


  for (int i = 0; i<y.length;i++) {
   rect ((width/y.length) * i, y[i], 100, 90);


  }
  println(mov);
}
