class Person {
    constructor(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Phone: ${this.phone}`;
    }
}

class UberPrice {
    constructor(baseFare, costPerKm, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculateFare(distance, time) {
        return this.baseFare + (this.costPerKm * distance) + (this.costPerMinute * time);
    }
}

// Create a Person object
let person = new Person("John Doe", 30, "123-456-7890");
console.log(person.getDetails());

// Create an UberPrice object with base fare of $2, $1 per km, and $0.5 per minute
let uber = new UberPrice(2, 1, 0.5);

// Calculate the fare for a trip of 10 km and 20 minutes
let distance = 10; // in km
let time = 20; // in minutes
let fare = uber.calculateFare(distance, time);

console.log(`The Uber fare for a trip of ${distance} km and ${time} minutes is $${fare}`);
