'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object iterals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    time = '08:00',
    address,
    mainIndex = 0,
  }) {
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
  },
};

const ordersSet = new Set([
  'pasta',
  'gnocchi',
  'pasta',
  'pasta',
  'garlic',
  'basil'
]);
console.log(ordersSet);

console.log([]);
console.log(new Set('Jonas'));

// set은 length가 아니라 size이다.
console.log(ordersSet.size);

// has()
console.log(ordersSet.has('pasta'));
console.log(ordersSet.has('bread'));

// add()
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// delete()
ordersSet.delete('basil');
console.log(ordersSet);

// Looping
for (const order of ordersSet)
  console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
