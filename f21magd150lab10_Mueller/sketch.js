var dirx, diry, dirz;

let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;

var cities;

function preload() {
  cities = loadJSON("cities.json");
}

function setup() {
  createCanvas(710, 400, WEBGL);
  
  dirx = random(-0.5, 0.5); 
  diry = random(-0.5, 0.5);
  dirz = random(-0.5, 0.5);
  
  for (var i = 0; i < 6; i++) {
    if (i == 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(10, height + h);
    sliderGroup[i].style('width', '80px');
    
    print("Each shape represents the poulation of a US city, left is Madison, Middle is New York City, and Right is Detroit");
    
  }
}

function draw() {
  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(50);
  directionalLight(255, 0, 0, dirx, diry, dirz);
  pointLight(0, 0, 255, locX, locY, 250);
  
  translate(-240, -100, 0);
  normalMaterial();
  
  //Box represents New York City population
  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ambientMaterial(225,225,0);
  box(cities.nyc / 100, cities.nyc / 100, cities.nyc / 100);
  pop();

// Cylinder represents detroit population
  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  cylinder(cities.d / 100, cities.d / 100);
  pop();

// Cone represets madison poplation
  translate(-240 * 2, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  specularMaterial(250)
  cone(cities.m / 100, cities.m / 100);
  pop();
  
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
}