function sumNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }

    return sum;
}

function concatStrings(arr) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            result += arr[i];
        }
    }

    return result;
}

const numbers = [10, 20, 30, 40];
const strings = ['10', '20', '30', '40'];

console.log('Sum:', sumNumbers(numbers));
console.log('Concat:', concatStrings(strings));
