function sumNumbers(arr: number[]): number {
    let sum = 0;

    for (const num of arr) {
        sum += num;
    }

    return sum;
}

function concatStrings(arr: string[]): string {
    let result = '';

    for (const str of arr) {
        result += str;
    }

    return result;
}

const numbers: number[] = [10, 20, 30, 40];
const strings: string[] = ['10', '20', '30', '40'];

console.log('Sum:', sumNumbers(numbers));
console.log('Concat:', concatStrings(strings));
