
// 1. Task1
const calcAverage = (score1, score2, score3) => {
    const averageScore = (score1 + score2 + score3) / 3;
    return averageScore;
}

// 2. Task2
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// 3. Tast3
const checkWinner = function (averageDolphins, averageKoalas) {
    if(averageDolphins *2  <= averageKoalas) {
        return `Koalas win (${averageKoalas} vs. ${averageDolphins})`;
    } else if(averageDolphins >= averageKoalas * 2) {
        return `Dolphins win (${averageDolphins} vs. ${averageKoalas})`;
    } else {
        return `No team wins...`;
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);

console.log(checkWinner(scoreDolphins, scoreKoalas)); 