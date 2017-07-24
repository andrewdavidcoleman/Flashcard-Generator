var fs = require("fs");
var BasicCard = require("./BasicCard.js");

function ClozeCard(text, cloze) {
  this.cloze = cloze;
  this.partial = text;
  this.fullText = cloze + text;
}


var firstPresidentCloze = new ClozeCard("...was the first president of the United States.", "George Washington");

if (process.argv[2] === "cloze") {
  console.log("-------")
  console.log("-------")
  console.log(firstPresidentCloze.cloze); // "George Washington"
  console.log("-------")
  console.log("-------")
} else if (process.argv[2] === "partial") {
  console.log("-------")
  console.log("-------")
  console.log(firstPresidentCloze.partial); // " ... was the first president of the United States.
  console.log("-------")
  console.log("-------")
} else if (process.argv[2] === "full") {
  console.log("-------")
  console.log("-------")
  console.log(firstPresidentCloze.fullText); // "George Washington was the first president of the United States"
  console.log("-------")
  console.log("-------")
}



var brokenCloze = new ClozeCard("This doesn't work", "oops"); // "Should throw or log an error because "oops" doesn't appear in "This doesn't work"













module.exports = ClozeCard;
