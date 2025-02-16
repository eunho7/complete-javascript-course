'use strict';

//----------------------
// Function expression
//----------------------
// console.log(this);   // window

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);    // undefined(only strict mode)
};
calcAge(1991);

//----------------------
// Arrow function
//----------------------
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

//----------------------
// Objects
//----------------------

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);              // jonas
    console.log(2037 - this.year);  // using jonas object
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

