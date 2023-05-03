
let triangleX=100

//The setup function only happens once
function setup() {
	createCanvas(500,500,WEBGL); //create a 500px X 500px canvas
}
function mousePressed(){
  triangleX = 0 
}
//The draw function happens over and over again
function draw() {
  
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

background(218,69,203);
translate(mouseX - width/2, mouseY - height/2);
 rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.01); 
  rotateZ(frameCount*0.02);
  box(50);

  push();
  translate(-width / 4, height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ambientMaterial(210,230,120);
  torus(80, 20, 64, 64);
  pop();

 
}

function mousePressed(){

}