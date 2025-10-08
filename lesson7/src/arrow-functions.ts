const sumNumbers = (arr: number[]): number => {
    let sum = 0;

    for (const num of arr) {
        sum += num;
    }

    return sum;
};

const concatStrings = (arr: string[]): string => {
    let result = '';

    for (const str of arr) {
        result += str;
    }

    return result;
};

const numbers: number[] = [100, 200, 300, 400]; // 1000
const strings: string[] = ['100', '200', '300', '400']; // "100200300400"

console.log('Sum:', sumNumbers(numbers));
console.log('Concat:', concatStrings(strings));
