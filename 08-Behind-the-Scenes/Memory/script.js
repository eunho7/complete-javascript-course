'use strict';

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const merriedJessica = marryPerson(jessica1, 'David');

// const merriedJessica = jessica1;
// merriedJessica.lastName = 'Davids';

console.log('Before:', jessica1);
console.log('After:', merriedJessica);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

// console.log(jessica, jessicaCopy);

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('Jhon');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// Deep copy/clone
const jessicaClone = structuredClone(jessica);

jessicaClone.family.push('Mary');
jessicaClone.family.push('Jhon');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);