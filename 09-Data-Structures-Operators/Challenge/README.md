# Football Betting App Challenge

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game. In this challenge, you'll work with that data to complete the following tasks:

1. **Create player arrays for each team**  
   - Define two arrays: `players1` and `players2`.

2. **Separate goalkeeper and field players**  
   - In each player array, the first player is the goalkeeper and the rest are field players.  
   - For Bayern Munich (team 1), create a variable `gk` holding the goalkeeper's name and an array `fieldPlayers` containing the remaining 10 players.

3. **Combine all players into one array**  
   - Create an array `allPlayers` that contains all 22 players from both teams.

4. **Include substitute players for team 1**  
   - Bayern Munich used 3 substitute players during the game.  
   - Create a new array `players1Final` that consists of all original `players1` players plus `'Thiago'`, `'Coutinho'`, and `'Perisic'`.

5. **Extract odds from game data**  
   - Given the `game.odds` object, create one variable for each odd: `team1`, `draw`, and `team2`.

6. **Create a goal-printing function**  
   - Write a function `printGoals` that receives an arbitrary number of player names (as individual arguments, not an array).  
   - The function should print each player name to the console along with the total number of goals scored (i.e., the number of player names passed in).

7. **Determine the likely winning team**  
   - Without using an if/else statement or the ternary operator, print to the console which team is more likely to win (the team with the lower odd).

## Test Data for Task 6

- Use the players `'Davies'`, `'Muller'`, `'Lewandowski'`, and `'Kimmich'` as arguments to test the function.  
- Then, call the function again with the players from `game.scored`.

Good luck! 😀
