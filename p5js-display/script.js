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
    drawI(30, 150);
    drawJ(90, 150);
    drawK(150, 150);
    drawL(210, 150);
    drawM(30, 220);
    drawN(90, 220);
    drawO(150, 220);
    drawP(210, 220);
    drawQ(300, 10);
    drawR(360, 10);
}

function renderBoard(){
    for (let x = 0; x < width; x += 10) {
     for (let y = 0; y < height; y += 10) {
        stroke(50);
        fill(0);
        rect(x, y, 10, 10);
     }
   }
 }