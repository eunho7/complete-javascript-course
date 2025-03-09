'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: [
        "0: JavaScript",
        "1: Python",
        "2: Rust",
        "3: C++"
    ],
    // This generations [0,0,0,0]. More in the next section!
    answers: new Array(4).fill(0),
}

// 1.1 Create a method called 'registerNewAnswer' on the 'poll' Object.
poll.registerNewAnswer = function () {
    const message = `${this.question}\n ${this.options.join('\n')}\n(Write option number)`;
    let number = Number(window.prompt(message));

    // 1.2
    /*
     * typeof number === 'number' && number < this.answers.length && this.answers[number]++;
     */
    
    if (typeof number === 'number' && [0, 1, 2, 3].includes(number)) {
        this.answers[number]++;
        this.displayResults();
        this.displayResults('string');
    } else {
        console.log('You got a wrong number.🥹');
    }
};

poll.displayResults = function (type = 'array') {
    if (type === 'array') {
        console.log(this.answers);
    } else if (type === 'string') {
        console.log(`Poll results are ${this.answers.join(', ')}`);
    }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers:[5, 2, 3]}, 'string');

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

