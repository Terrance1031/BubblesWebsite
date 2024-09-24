let imgbubbleWand, imgbubbles, imgGrass, imgClouds, imgClouds2;
let bubbles = [];
let largeBubble = null;

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
   
   let blowButton = select('#blow');
   blowButton.mousePressed(blowBubbles);

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

    for (let bubble of bubbles) {
        bubble.move();
        bubble.display();
    }

     // Define bubble wand image properties
     let bubbleWandX = -270;
     let bubbleWandY = 300;
     let bubbleWandWidth = 900;
     let bubbleWandHeight = 700;
 
     // Check if the mouse is over the bubble wand image
     if (mouseX > bubbleWandX && mouseX < bubbleWandX + bubbleWandWidth &&
         mouseY > bubbleWandY && mouseY < bubbleWandY + bubbleWandHeight) {
         // Apply tint and scale the image
         tint(255, 220); // Apply a semi-transparent white tint
         image(imgbubbleWand, bubbleWandX - 10, bubbleWandY - 10, bubbleWandWidth + 20, bubbleWandHeight + 20);
         cursor(HAND); // Change cursor to hand
     } else {
         // Draw the bubble wand image normally
         let shadowOffsetX = 10;
         let shadowOffsetY = 10;
         let shadowColor = color(900, 250, 1000, 100);
 
         tint(shadowColor);
         image(imgbubbleWand, bubbleWandX + shadowOffsetX, bubbleWandY + shadowOffsetY, bubbleWandWidth, bubbleWandHeight);
         noTint();
         cursor(ARROW); // Reset cursor to default
     }
 


    image(imgClouds,  windowWidth - 800 , windowHeight / 50, 860, 770);
    image(imgClouds,  windowWidth - 1680 , windowHeight / 20, 900, 690);
    image(imgClouds,  windowWidth - 2500 , windowHeight / 40, 900, 690);

    }
    

    function blowBubbles() {
    for (let i = 0; i < 10; i++) {
        bubbles.push(new Bubble(random(width), random(height)));
    }
}
    class Bubble {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.diameter = random(20, 50);
            this.xSpeed = random(-2, 2);
            this.ySpeed = random(-2, 2);
        }
    
        move() {
            this.x += this.xSpeed;
            this.y += this.ySpeed;
    
            // Wrap around the edges
            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
            if (this.y > height) this.y = 0;
            if (this.y < 0) this.y = height;
        }
    
        display() {
            image(imgbubbles, this.x, this.y, this.diameter, this.diameter);
        }
    }

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}