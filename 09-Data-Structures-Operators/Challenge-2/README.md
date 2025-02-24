# Football Betting App

## Tasks

### 1. Loop Over `game.scored`
Loop over the `game.scored` array and print each player's name to the console along with the goal number.

**Example Output:**
```javascript
Goal 1: Lewandowski
Goal 2: Gnarby
Goal 3: Lewandowski
Goal 4: Hummels
```

### 2. Calculate Average Odd
Use a loop to calculate the average odd and log it to the console.

**Example Calculation:**
```javascript
const odds = Object.values(game.odds);
const averageOdd = odds.reduce((sum, odd) => sum + odd, 0) / odds.length;
console.log(`Average odd: ${averageOdd}`);
```

### 3. Print Formatted Odds
Print the odds in a nicely formatted way using the `game` object properties.

**Example Output:**
```javascript
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
```

Make sure to get the team names directly from the `game` object instead of hardcoding them.

### 4. Bonus: Create `scorers` Object
Create an object called `scorers` that contains the names of players who scored as properties, and the number of goals as values.

**Example Object Structure:**
```javascript
const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
};
```

This object should dynamically count the number of goals each player scored based on the `game.scored` array.

