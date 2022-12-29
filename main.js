function preload() {
   img = loadImage('')
};
function setup(){
   createCanvas(400, 400);
};
function draw() {
   image(img, 10, 10, 150, 120);

   fill(0, 128, 0);
   stroke(0, 128, 0);
rect(30, 20, 55, 55);
}