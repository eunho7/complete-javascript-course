'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName)

    function printAge() {
        const output = `${firstName} You are ${age}, born in ${birthYear}`;
        console.log(output);
    }
    printAge();

    if (birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        // Creating NEW variable with same name as outer scope's variable
        const firstName = 'Steven';

        // Reasssigning outer scope's variable
        output = 'NEW OUTPUT!';

        const str = `Oh, and you're a millenial, ${firstName}`;
        console.log(str);

        function add(a, b) {
            return a + b;
        } k

        return age;
    }

    const firstName = 'Jonas';
    calcAge(1991);

// parent scope -> child scope 접근 불가능
// console.log(age);
// printAge();