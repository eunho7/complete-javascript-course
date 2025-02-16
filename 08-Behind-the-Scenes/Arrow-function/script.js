'use strict';

var firstName = '차은우!';

const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // solution1
    // const self = this;      // self of that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    // solution2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }
    isMillenial();
  },

  great: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.great();                   // Hey undefined
jonas.calcAge();

// console.log(this.firstName);  // undefined

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5);







