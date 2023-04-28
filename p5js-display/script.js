let grid = [];
let waitTime = 2000;

function setup() {
    createCanvas(640, 320);
    for (let i = 0; i < 64; i++) {
        grid[i] = [false, false, false, false, false, false, false, false, false, false]
    }
    background(255);
    renderBoard();
}

function draw() {
    drawA(50, 10);
    drawB(90, 10);
    drawC(160, 10);
    drawD(210, 10);
    drawE(30, 80);
    drawF(90, 80);
    drawG(160, 80);
    drawH(210, 80);
}

function renderBoard(){
    for (let x = 0; x < width; x += 10) {
     for (let y = 0; y < height; y += 10) {
        stroke(255);
        fill(0);
        rect(x, y, 10, 10);
     }
   }
 }

 function drawA(startX, startY) {
    stroke(0);
    fill(255);
    rect(startX, startY, 10, 10);
    rect(startX - 10, startY + 10, 10, 10);
    rect(startX + 10, startY + 10, 10, 10);
    rect(startX - 20, startY + 20, 10, 10);
    rect(startX + 20, startY + 20, 10, 10);
    rect(startX - 20, startY + 30, 10, 10);
    rect(startX + 20, startY + 30, 10, 10);
    rect(startX - 10, startY + 30, 10, 10);
    rect(startX + 10, startY + 30, 10, 10);
    rect(startX, startY + 30, 10, 10);
    rect(startX - 20, startY + 40, 10, 10);
    rect(startX + 20, startY + 40, 10, 10);
    rect(startX - 20, startY + 50, 10, 10);
    rect(startX + 20, startY + 50, 10, 10);
 }

 function drawB(startX, startY) {
    stroke(0);
    fill(255);
    rect(startX, startY, 10, 10);
    rect(startX + 10, startY, 10, 10);
    rect(startX + 20, startY, 10, 10);
    rect(startX + 30, startY, 10, 10);
    rect(startX + 40, startY + 10, 10, 10);
    rect(startX + 30, startY + 20, 10, 10);
    rect(startX + 20, startY + 20, 10, 10);
    rect(startX + 10, startY + 20, 10, 10);
    rect(startX + 40, startY + 30, 10, 10);
    rect(startX + 40, startY + 40, 10, 10);
    rect(startX + 30, startY + 50, 10, 10);
    rect(startX + 20, startY + 50, 10, 10);
    rect(startX + 10, startY + 50, 10, 10);
    rect(startX, startY + 10, 10, 10);
    rect(startX, startY + 20, 10, 10);
    rect(startX, startY + 30, 10, 10);
    rect(startX, startY + 40, 10, 10);
    rect(startX, startY + 50, 10, 10);
 }

 function drawC(startX, startY) {
    stroke(0);
    fill(255);
    rect(startX, startY, 10, 10); 
    rect(startX + 10, startY, 10, 10);
    rect(startX + 20, startY, 10, 10); 
    rect(startX + 30, startY + 10, 10, 10);
    rect(startX - 10, startY + 10, 10, 10); 
    rect(startX - 10, startY + 20, 10, 10); 
    rect(startX - 10, startY + 30, 10, 10); 
    rect(startX - 10, startY + 40, 10, 10); 
    rect(startX, startY + 50, 10, 10); 
    rect(startX + 10, startY + 50, 10, 10); 
    rect(startX + 20, startY + 50, 10, 10);
    rect(startX + 30, startY + 40, 10, 10); 
}

function drawD(startX, startY) {
    stroke(0);
    fill(255);
    rect(startX, startY, 10, 10);

    rect(startX + 10, startY, 10, 10);
    rect(startX + 20, startY, 10, 10);
    rect(startX + 30, startY, 10, 10);
    rect(startX + 40, startY + 10, 10, 10);

    rect(startX, startY + 10, 10, 10);
    rect(startX, startY + 20, 10, 10); 
    rect(startX, startY + 30, 10, 10);
    rect(startX, startY + 40, 10, 10);
    rect(startX, startY + 50, 10, 10);

    rect(startX + 10, startY + 50, 10, 10);
    rect(startX + 20, startY + 50, 10, 10);
    rect(startX + 30, startY + 50, 10, 10);
    rect(startX + 40, startY + 40, 10, 10);
    rect(startX + 40, startY + 30, 10, 10);
    rect(startX + 40, startY + 20, 10, 10);
}

function drawE(startX, startY) {
    stroke(0);
    fill(255);
    rect(startX, startY, 10, 10);
    rect(startX + 10, startY, 10, 10);
    rect(startX + 20, startY, 10, 10);
    rect(startX + 30, startY, 10, 10);
    rect(startX + 40, startY, 10, 10);
    rect(startX, startY + 10, 10, 10);
    rect(startX, startY + 20, 10, 10);
    rect(startX, startY + 30, 10, 10);
    rect(startX + 10, startY + 20, 10, 10);
    rect(startX + 20, startY + 20, 10, 10);
    rect(startX + 30, startY + 20, 10, 10);
    rect(startX + 40, startY + 20, 10, 10);
    rect(startX, startY + 40, 10, 10);
    rect(startX, startY + 50, 10, 10);
    rect(startX + 10, startY + 50, 10, 10);
    rect(startX + 20, startY + 50, 10, 10);
    rect(startX + 30, startY + 50, 10, 10);
    rect(startX + 40, startY + 50, 10, 10);
}

function drawF(startX, startY) {
    stroke(0);
    fill(255);
    rect(startX, startY, 10, 10);
    rect(startX + 10, startY, 10, 10);
    rect(startX + 20, startY, 10, 10);
    rect(startX + 30, startY, 10, 10);
    rect(startX + 40, startY, 10, 10);
    rect(startX, startY + 10, 10, 10);
    rect(startX, startY + 20, 10, 10);
    rect(startX, startY + 30, 10, 10);
    rect(startX, startY + 40, 10, 10);
    rect(startX, startY + 50, 10, 10);
    rect(startX + 10, startY + 20, 10, 10);
    rect(startX + 20, startY + 20, 10, 10);
    rect(startX + 30, startY + 20, 10, 10);
    rect(startX + 40, startY + 20, 10, 10);
}

function drawG(startX, startY) {
    stroke(0);
    fill(255);
    rect(startX, startY, 10, 10); 
    rect(startX + 10, startY, 10, 10);
    rect(startX + 20, startY, 10, 10); 
    rect(startX + 30, startY + 10, 10, 10);
    rect(startX - 10, startY + 10, 10, 10); 
    rect(startX - 10, startY + 20, 10, 10); 
    rect(startX - 10, startY + 30, 10, 10); 
    rect(startX - 10, startY + 40, 10, 10); 
    rect(startX, startY + 50, 10, 10); 
    rect(startX + 10, startY + 50, 10, 10); 
    rect(startX + 20, startY + 50, 10, 10);
    rect(startX + 30, startY + 40, 10, 10);
    rect(startX + 30, startY + 30, 10, 10); 
    rect(startX + 20, startY + 30, 10, 10); 
    rect(startX + 10, startY + 30, 10, 10); 
}

function drawH(startX, startY) {
    stroke(0);
    fill(255);
    rect(startX, startY, 10, 10);
    rect(startX, startY + 10, 10, 10);
    rect(startX, startY + 20, 10, 10);
    rect(startX, startY + 30, 10, 10);
    rect(startX, startY + 40, 10, 10);
    rect(startX, startY + 50, 10, 10);
    rect(startX + 10, startY + 20, 10, 10);
    rect(startX + 20, startY + 20, 10, 10);
    rect(startX + 30, startY + 20, 10, 10);
    rect(startX + 40, startY + 20, 10, 10);
    rect(startX + 40, startY + 10, 10, 10);
    rect(startX + 40, startY + 20, 10, 10);
    rect(startX + 40, startY + 30, 10, 10);
    rect(startX + 40, startY + 40, 10, 10);
    rect(startX + 40, startY + 50, 10, 10);
    rect(startX + 40, startY, 10, 10);
}