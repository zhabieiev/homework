const sumNumbers = (arr) => {
    let sum = 0;
    for (const item of arr) {
        if (typeof item === 'number') {
            sum += item;
        }
    }
    return sum;
};


const concatStrings = (arr) => {
    let result = '';
    for (const item of arr) {
        if (typeof item === 'string') {
            result += item;
        }
    }
    return result;
};


const numbers = [100, 200, 300, 400]; //1000
const strings = ['100', '200', '300', '400']; //100200300400

console.log('Sum:', sumNumbers(numbers));
console.log('Concat:', concatStrings(strings));
