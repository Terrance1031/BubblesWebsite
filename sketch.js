let imgbubbleWand, imgbubbles, imgGrass, imgClouds, imgClouds2;
let bubbles = [];

function preload() {
    imgbubbleWand = loadImage('Assets/Bubble Wand.png');
    imgbubbles = loadImage('Assets/Project bubbles.png');
    imgGrass = loadImage('Assets/Grass.png');
    imgClouds = loadImage('Assets/clouds.png');
}

function setup() {
   let canvas = createCanvas(windowWidth, windowHeight);
   canvas.style('z-index', '-1');
   canvas.position(0, 0);
}

function draw() {
    background(0, 120, 260);

  /*  // Set the desired width and height for the grass image
    let grassWidth = imgGrass.width / 1.6; // Adjust the scale as needed
    let grassHeight = imgGrass.height / 2; // Adjust the scale as needed
*/
    // Calculate the center position for the scaled grass image
    let grassX = (windowWidth -imgGrass.width) / 2;
    let grassY = (windowHeight - imgGrass.height) / 2 - 200; 


    // Draw the grass image with the new width and height
    image(imgGrass, grassX, grassY);

    // Draw the bubble wand image
    let shadowOffsetX = 10;
    let shadowOffsetY = 10;
    let shadowColor = color(0, 0, 0, 100);

    tint(shadowColor);
    image(imgbubbleWand, -270 + shadowOffsetX, 300 + shadowOffsetY, 900, 700);
    noTint();
    
    image(imgbubbleWand, -270, 300, 900, 700);

    image(imgClouds,  windowWidth - 800 , windowHeight / 50, 860, 770);
    image(imgClouds,  windowWidth - 1680 , windowHeight / 20, 900, 690);
    image(imgClouds,  windowWidth - 2500 , windowHeight / 40, 900, 690);

    for(let i = bubbles.length - 1; i >= 0; i--){
        bubbles[i].x += random(-2, 2);
        bubbles[i].y += random(1, 3);
        image(imgbubbles, bubbles[i].x, bubbles[i].y, 100, 100);

        // Remove bubbles that move off the screen
        if (bubbles[i].y < -100) {
            bubbles.splice(i, 1);
        }
    }
}

function mousePressed() {
    let wandX = -270;
    let wandY = 300;
    let wandWidth = 900;
    let wandHeight = 700;

    if (mouseX > wandX && mouseX < wandX + wandWidth && mouseY > wandY && mouseY < wandY + wandHeight){
        bubbles.push({x: mouseX - 50, y: mouseY - 50});
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}