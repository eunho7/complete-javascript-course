'use strict';

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmanm',
    passport: 23456789515.
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 23456789515) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);