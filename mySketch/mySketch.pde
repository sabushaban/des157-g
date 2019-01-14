/* banner sample
01/09/19 */

int brushSize = 150;
int tricolor = 255;

void setup(){
  size(800,250);
  background(255);
}
void draw(){
  //ellipse(mouseX,mouseY, 100, 100);
  //if(mousePressed){
 // fill(#25d454);
 // }
 stroke(0);

  if (mousePressed) {
  fill(tricolor,60,290,20);
    //triangle(mouseX, mouseY, mouseY, brushSize, brushSize, brushSize);
    triangle(mouseX, mouseY, mouseY, brushSize, mouseX, brushSize );
  } else { 
    noFill();
    ellipse(mouseX, mouseY, brushSize, brushSize);
     
    if (mousePressed) {
    stroke(255);
  } else {
    stroke(0);
 }
  //line(mouseX-66, mouseY, mouseX+66, mouseY);
  //line(mouseX, mouseY-66, mouseX, mouseY+66); 
  }
}

void mousePressed() {
  background(random(25,311));
}
void keyPressed(){
if(keyCode == ENTER) {
 tricolor = 255;
}  
  if(keyCode == SHIFT){
  tricolor = 94; }
  
}
