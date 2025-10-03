const numbers = [1, 2, 3, 4, 5];
const strings = ['green', 'black', 'red'];
const booleans = [true, false, true, false];
const mixed = [1, 'text', true, null, { name: 'JS/TS' }];

// Array
console.log('numbers.length =', numbers.length);
console.log('strings[1] =', strings[1]);
console.log('booleans.includes(false) =', booleans.includes(false));
console.log('mixed[4].name =', mixed[4].name);

// forEach
numbers.forEach((num, index) => {
    console.log(`numbers[${index}] =`, num);
});

// Array to Map
const squared = numbers.map(n => n * n);
console.log('Squares:', squared);

const upperStrings = strings.map(str => str.toUpperCase());
console.log('Uppercase:', upperStrings);

// Push/pop for Map
numbers.push(6);
console.log('Push:', numbers);

const last = numbers.pop();
console.log('Pop:', numbers, 'Removed:', last);

strings.push('white');
console.log('Push:', strings);

const removed = strings.pop();
console.log('Pop:', strings, 'Removed:', removed);
