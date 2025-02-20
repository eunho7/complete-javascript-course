'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex = 1, time = '08:00', address, mainIndex = 0}) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} 
      and ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherInredients) {
    console.log(mainIngredient);
    console.log(otherInredients);
  }
};

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, risoto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risoto, otherFood);


// --------------------
// 2) functions
// --------------------

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
    sum += numbers[i];

  console.log(sum);
}
add(2, 3);
add(5, 3, 7, 2);
add(6, 5, 2, 3, 1, 3, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroons', 'onion', 'olives', 'spinich');

restaurant.orderPizza('mushroons');