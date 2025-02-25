'use strict';

const bookings = [];

const createBooking = function (flightNum,
    numPassegers = 1,
    price = 199 * numPassegers) {
    // ES6
    // numPassegers = numPassegers || 1;
    // price = price || 199;
    
    const booking = {
        flightNum,
        numPassegers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123',5);

createBooking('LH123', undefined , 1000);

