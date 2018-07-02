/// <reference path="libraries/p5.global-mode.d.ts" />

function setup() {
    createCanvas(500, 500);

}

function draw() {
    if (mouseIsPressed){
        fill(0);
    } else {
        fill(255);


        
    }
    ellipse(mouseX, mouseY, 80, 80);
    
}