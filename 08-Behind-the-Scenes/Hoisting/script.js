'use strict';

// Variables with hoisting
// console.log(me);        // undefined
// console.log(job);    // Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions expression
// console.log(addDecl(2, 3));     // 5
// console.log(addExpr(2, 3));     // Uncaught ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

// -------------------------------
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);