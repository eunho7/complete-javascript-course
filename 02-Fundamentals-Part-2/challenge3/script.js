const markMiller = {
    firstName: 'Mark',
    lastName : 'Millter',
    mass: 78,
    height: 1.69,
    
    calcBMI : function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const johnSmith = {
    firstName: 'John',
    lastName : 'Smith',
    mass: 82,
    height: 1.95,
    
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

// Calculate BMI for both
markMiller.calcBMI();
johnSmith.calcBMI();

if (markMiller.BMI > johnSmith.BMI) {
    console.log(`"${markMiller.firstName}'s BMI(${markMiller.BMI.toFixed(1)}) is highter than ${johnSmith.firstName}'s BMI(${johnSmith.BMI.toFixed(1)})"`);
} else {
    console.log(`"${johnSmith.firstName}'s BMI(${johnSmith.BMI.toFixed(1)}) is highter than ${markMiller.firstName}'s BMI(${markMiller.BMI.toFixed(1)})"`);
}