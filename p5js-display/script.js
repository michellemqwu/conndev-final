let apiResult;
let startX;

let melonResult;
let topfiftyResult;
let kclubpartyResult;
let redditResult;

let displayStrings = [];
let displayStrings2 = [];
let displayStrings3 = [];
let displayStrings4 = [];

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
    // if (displayStrings.length != 0) {
    //     for (let i = 0; i < displayStrings.length; i++) {
    //         drawString(displayStrings[i], startX, 10 + 80*i);
    //     }
    // } 
    
    // if (displayStrings2.length != 0) {
    //     for (let i = 0; i < displayStrings2.length; i++) {
    //         drawString(displayStrings2[i], startX + 600, 10 + 80*i);
    //     }
    // } 

    // if (displayStrings3.length != 0) {
    //     for (let i = 0; i < displayStrings3.length; i++) {
    //         drawString(displayStrings3[i], startX + 1200, 10 + 80*i);
    //     }
    // }
    
    // if (displayStrings4.length != 0) {
    //     for (let i = 0; i < displayStrings4.length; i++) {
    //         drawString(displayStrings4[i], startX, 10 + 80*i);
    //     }
    // }

    // startX = update(startX);

    drawO(startX, 50);
    draw1(startX + 70, 50);
    draw2(startX + 70 * 2, 50);
    draw3(startX + 70 * 3, 50);
    draw4(startX + 70 * 4, 50);
    draw5(startX + 70 * 5, 50);
    draw6(startX + 70 * 6, 50);
    draw7(startX + 70 * 7, 50);
    draw8(startX + 70 * 8, 50);
    draw9(startX, 150);
}

function saveRedditResults(result) {
    redditResult = JSON.parse(result);
    redditResult = redditResult.IVE;
    console.log(redditResult);
    for (let i = 0; i < redditResult.length; i++) {
        displayStrings4.push(String(redditResult[i].title));
    }
}

function saveKclubpartyResults(result) {
    kclubpartyResult = JSON.parse(result);
    kclubpartyResult = kclubpartyResult.IVE;
    for (let i = 0; i < kclubpartyResult.length; i++) {
        displayStrings2.push(String(kclubpartyResult[i].track));
    }
}

function saveMelonResults(result) {
    melonResult = JSON.parse(result);
    melonResult = melonResult.IVE;
    for (let i = 0; i < melonResult.length; i++) {
        displayStrings.push(String(melonResult[i].track));
    }
}

function saveTopfiftyResults(result) {
    topfiftyResult = JSON.parse(result);
    topfiftyResult = topfiftyResult.IVE;
    for (let i = 0; i < topfiftyResult.length; i++) {
        displayStrings3.push(String(topfiftyResult[i].track));
    }
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