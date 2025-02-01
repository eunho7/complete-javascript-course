// task#1
const calcTip = (bill) => {
    if(bill >= 50 && bill <=300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
*/ 

// task#2
const bills = [125, 555, 44];

// task#3
let tips = [];
let totals = [];

for(let i=0; i<bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

console.log(bills);
console.log(tips);
console.log(totals);