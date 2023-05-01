let apiResult;
let startX;

let melonResult;
let topfiftyResult;
let kclubpartyResult;
let redditResult;

let displayStrings = [];

function setup() {
    createCanvas(640, 420);
    background(255);
    startX = 10;

    httpDo('http://127.0.0.1:5000/melon', 
    'GET', 
    saveMelonResults);

    httpDo('http://127.0.0.1:5000/topfifty', 
    'GET', 
    saveTopfiftyResults);

    httpDo('http://127.0.0.1:5000/kclubparty', 
    'GET', 
    saveKclubpartyResults);

    httpDo('http://127.0.0.1:5000/reddithot', 
    'GET', 
    saveRedditResults);
}

function draw() {
    renderBoard();    
    if (displayStrings.length != 0) {
        for (let i = 0; i < displayStrings.length; i++) {
            drawString(displayStrings[i], startX, 10 + 80*i);
        }
    }    
    
    startX = update(startX);
}

function saveRedditResults(result) {
    redditResult = JSON.parse(result);
    redditResult = redditResult.IVE;
}

function saveKclubpartyResults(result) {
    kclubpartyResult = JSON.parse(result);
    kclubpartyResult = kclubpartyResult.IVE;
}

function saveMelonResults(result) {
    melonResult = JSON.parse(result);
    melonResult = melonResult.IVE;
    console.log(melonResult);
    for (let i = 0; i < melonResult.length; i++) {
        displayStrings.push(String(melonResult[i].track));
    }
}

function saveTopfiftyResults(result) {
    topfiftyResult = JSON.parse(result);
    topfiftyResult = topfiftyResult.IVE;
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