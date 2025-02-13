'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    
    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }

        // console.log(str); // 접근 불가
        console.log(millenial); // var로 선언된 변수는 함수 내부 어디서든 접근 가능
        // console.log(add(2, 3)); // add 함수는 if 블록 내부에 선언되었지만, 함수 호이스팅으로 인해 접근 가능
    }

    printAge();
    return age;
}

const firstName = "John";
calcAge(1991);

// parent scope -> child scope 접근 불가능
// console.log(age);
// printAge();