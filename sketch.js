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
let appelX = 600; // x-positie van appel
let appelY = 50;  // y-positie van appel
let appelY2 = 40;
let appelX2 = 400;
let appleBreedte = 20;
let mandX = 500;
let mandY = 600;
let mandBreedte = 60;
let mandLengte= 130;
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

  // teken appel
  noStroke();         // geen lijntje om de vorm heen
  fill(255, 0, 0)     // vulkleur wordt rood
  ellipse(appelX, appelY, appleBreedte, appleBreedte);
  appelY = appelY + 2
  fill(210, 0, 0)     // vulkleur wordt rood
  ellipse(appelX2, appelY2, appleBreedte, appleBreedte);
  appelY2 = appelY2 + 4
    // teken mand
  noStroke();         // geen lijntje om de vorm heen
  fill(223, 224, 161)     // vulkleur wordt rood
  rect(mandX, mandY, mandLengte, mandBreedte);
  mandX = mouseX
}


