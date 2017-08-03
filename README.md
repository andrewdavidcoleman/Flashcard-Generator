#Flashcard Generator
* Flashcard Generator is a command line node application and study tool that allows users to add questions and their corresponding answers, then randomly generate a question from the deck and prompt the user for an answer.

* To add a new question:
  * Run the command **node BasicCard.js new**
  * You will be prompted to enter what you want the front of the card(a question), and the back of the card(the answer) to say, then receive confirmation that a new card was successfully added.

* To study:
  * Run the command **node BasicCard.js study**
  * You will be presented with a random question from the deck and prompted for an answer.
  * The answer you give will be checked against what is on the back of the card. You will be alerted if your answer is correct or incorrect, and given the answer if incorrect.

Happy studying!
