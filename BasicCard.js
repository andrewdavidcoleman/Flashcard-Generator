var inquirer = require("inquirer");
var fs = require("fs");

function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}

if (process.argv[2] === "study") {

  function study() {
    fs.readFile("basic.json", "utf8", function(error, data) {

      if (error) {
        return console.log(error);
      }

      var dataObj = JSON.parse(data);
      var random = Math.floor(Math.random() * dataObj.cards.length);
      var randomCard = new BasicCard(dataObj.cards[random].front, dataObj.cards[random].back);

      console.log(randomCard.front);
      function revealBack(){console.log(randomCard.back)};
      setTimeout(revealBack, 5000);

    });
  }

  study();

} else if (process.argv[2] === "new") {

  function newCard() {

    // inquirer that walks the user through creating an new card
    inquirer.prompt([

      {
        type: "input",
        name: "front",
        message: "What do you want the front of the card to say?"
      },

      {
        type: "input",
        name: "back",
        message: "What do you want the back of the card to say?",
      },

      //and add their input to a json file that holds their created cards
    ]).then(function(user) {

        fs.readFile('./basic.json', 'utf-8', function(err, data) {
          if (err) throw err

          var newFront = user.front;
          var newBack = user.back;
          var arrayOfObjects = JSON.parse(data)

          arrayOfObjects.cards.push({
            front: newFront,
            back: newBack
          })

          fs.writeFile('./basic.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
            if (err) throw err
            console.log('You created a new flash card! Super duper!')
          })
        })

      });
  }
  newCard();
}




module.exports = BasicCard;
