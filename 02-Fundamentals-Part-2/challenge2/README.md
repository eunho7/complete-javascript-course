# Tip Calculator Challenge #2

## Description
This challenge involves improving a tip calculator based on specific tipping rules:
- Tip 15% if the bill value is between 50 and 300.
- Otherwise, tip 20%.

## Tasks
1. Implement a function `calcTip` that calculates the tip based on the given rules.
2. Test the function using a bill value of 100.
3. Create an array `bills` with the following test data: `125, 555, 44`.
4. Create an array `tips` that stores the tip for each bill, calculated using `calcTip`.
5. **Bonus:** Create an array `totals` containing the sum of each bill and its respective tip.

## Implementation
- **Function**: `calcTip(bill)` calculates the tip amount.
- **Arrays**:
  - `bills = [125, 555, 44]`
  - `tips = [calcTip(125), calcTip(555), calcTip(44)]`
  - `totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]`

## Expected Output
For test data `[125, 555, 44]`:
- **Tips**: `[18.75, 111, 8.8]`
- **Total Amounts**: `[143.75, 666, 52.8]`

## Example Usage
```javascript
console.log(calcTip(100)); // Should return 15
console.log(tips);         // [18.75, 111, 8.8]
console.log(totals);       // [143.75, 666, 52.8]
```

## Notes
- Uses simple conditional statements to determine tip percentage.
- Demonstrates array manipulation and function usage.

