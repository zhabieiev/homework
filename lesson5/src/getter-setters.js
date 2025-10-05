import { Cars } from './models/cars.js';

const userProfile = {
    name: 'Georgii',
    stats: {
        age: 44,
        country: 'Ukraine'
    },

    get info() {
        return `${this.name}, ${this.stats.age} years, ${this.stats.country}`;
    },

    set updateAge(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            this.stats.age = newAge;
        } else {
            console.log('Error: age should be positive value');
        }
    },

    summary() {
        return `User ${this.name} from ${this.stats.country} is ${this.stats.age} years old.`;
    }
};

console.log(userProfile.info); // Georgii, 44 years old, Ukraine

userProfile.updateAge = 45; // update the age
console.log(userProfile.info); // Georgii, 45 years old, Ukraine

console.log(userProfile.summary()); // User Georgii from Ukraine is 45 years old.

const car = new Cars('VW', 'Passat', 'black');
console.log(car.brand);
car.brand = 'AUDI';
console.log(car.model);
car.color = 'red';
car.logInfo();
