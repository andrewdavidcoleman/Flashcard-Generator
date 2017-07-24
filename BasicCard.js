

function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

if (process.argv[2] === "front") {
  console.log("-------")
  console.log("-------")
  console.log(firstPresident.front); // "Who was the first president of the United States?"
  console.log("-------")
  console.log("-------")
} else if (process.argv[2] === "back") {
  console.log("-------")
  console.log("-------")
  console.log(firstPresident.back); // "George Washington"
  console.log("-------")
  console.log("-------")
}

module.exports = BasicCard;
