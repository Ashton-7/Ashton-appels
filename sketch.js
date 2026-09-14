/* JavaScript opfris opdracht 
    
    Lees de README voor uitleg 
 */

/* 
 * instellingen om foutcontrole van je code beter te maken  
 */
///<reference path=".vscode/p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
let score = 0;
let appleX = 600; // x-positie van appel 
let appleY = 50;  // y-positie van appel 
let appleY2 = 40; 
let appleX2 = 400; 
let appleWidth = 20; 
let basketX = 500; 
let basketY = 600; 
let basketWidth = 130; 
let basketHeight = 60; 

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/** 
 * setup 
 * de code in deze functie wordt één keer uitgevoerd door 
 * de p5 library, zodra het spel geladen is in de browser 
 */
function setup() { 
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen 
  createCanvas(1280, 720); 
} 

/** 
 * draw 
 * de code in deze functie wordt 50 keer per seconde 
 * uitgevoerd door de p5 library, nadat de setup functie klaar is 
 */
function draw() { 
  // teken achtergrond 
  background('green'); 
  /**score */
fill(255);
textSize(30);
text("Score: " + score, 20, 40);

  // teken appel 
  noStroke();         // geen lijntje om de vorm heen 
  fill(255, 0, 0)     // vulkleur wordt rood 
  ellipse(appleX, appleY, appleWidth, appleWidth); 
  appleY = appleY + 2 

appleY = appleY + 2;

if (appleY > height) {
  appleY = 0;
  appleX = random(0, width);
}

  fill(210, 0, 0)     // vulkleur wordt rood 
  ellipse(appleX2, appleY2, appleWidth, appleWidth); 
  appleY2 = appleY2 + 4 

if (appleY2 > height) {
  appleY2 = 0;
  appleX2 = random(0, width);
}

  // teken mand 
  noStroke();         // geen lijntje om de vorm heen 
  fill(223, 224, 161)     // vulkleur wordt rood 
  rect(basketX, basketY, basketWidth, basketHeight); 

  basketX = mouseX 

  if (basketX < 0) {
  basketX = 0;
}

if (basketX + basketWidth > width) {
  basketX = width - basketWidth;
}

  // eerste appel wordt gevangen
  if (
    appleY + appleWidth / 2 >= basketY &&
    appleY - appleWidth / 2 <= basketY + basketHeight &&
    appleX + appleWidth / 2 >= basketX &&
    appleX - appleWidth / 2 <= basketX + basketWidth
  ) {
    appleY = 0;
    score = score + 1;
  }

  // tweede appel wordt gevangen
  if (
    appleY2 + appleWidth / 2 >= basketY &&
    appleY2 - appleWidth / 2 <= basketY + basketHeight &&
    appleX2 + appleWidth / 2 >= basketX &&
    appleX2 - appleWidth / 2 <= basketX + basketWidth
  ) {
    appleY2 = 0;
    score = score + 1;
  }
}