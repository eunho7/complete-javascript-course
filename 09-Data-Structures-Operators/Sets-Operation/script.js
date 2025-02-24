'use strict';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// intersection method -> ES2025
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(`Intersection:`, commonFoods);

// sets to arrays
console.log([...commonFoods]);

// union method
const italianmexicanFoods = italianFoods.union(mexicanFoods);
console.log('Uion', italianmexicanFoods);

// arrays to sets
console.log([...italianFoods, ...mexicanFoods]);
console.log(new Set([...italianFoods, ...mexicanFoods]));

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// difference method
const uniqueIitalianFoonds = italianFoods.difference(mexicanFoods);
console.log(uniqueIitalianFoonds);

// symmetricDifference method
const uniqueIitalianMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueIitalianMexicanFoods);

// isDisjointFrom
console.log(italianFoods.isDisjointFrom(mexicanFoods));