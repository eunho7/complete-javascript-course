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

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Fireze Italy');

console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed ;(');

console.log(rest.get('name'));
console.log(rest.get(true));

console.log(rest.get("1"));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// delete map
console.log(rest.has('categories'));
rest.delete(3);
console.log(rest);

// size
console.log(rest.size);

// claer
// rest.clear();

// Array of Key
rest.set([1, 2], 'Test');
console.log(rest);

console.log(rest.get([1, 2]));

const arr = [1, 2, 3];
rest.set(arr, 'Test2');
console.log(rest);

console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);