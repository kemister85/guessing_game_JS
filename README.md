## Guess My Number Game

This is a JavaScript-based "Guess My Number" game, where the player has to guess the randomly generated secret number to win.

The game starts by generating a random number between 1 and 20, and assigning it to the variable `secretNumber`. The player has 20 chances to guess the number correctly, and their current score is displayed in the UI.

The game logic is implemented using an event listener that triggers when the player clicks the "Check" button. The input value entered by the player is retrieved and stored in the variable guess, which is then compared with the `secretNumber`.

If the player's guess matches the `secretNumber`, they win the game, and the UI is updated to reflect this. If the player's guess is higher or lower than the `secretNumber`, they are given a hint, and their score is reduced. If the player's score reaches 0, they lose the game.

The game also keeps track of the player's high score, which is updated whenever they beat their previous score. The player can reset the game by clicking the "Again" button.

### How to play

- Enter a number between 1 and 20 in the input field.
- Click the "Check" button to see if your guess is correct.
- If your guess is correct, you win the game.
- If your guess is incorrect, you will be given a hint, and your score will be reduced.
- Keep guessing until you win or run out of chances.
- Try to beat your high score by playing again!

### Technologies used

- JavaScript
- HTML
- CSS
