function sum(arr: number []): number;
function sum(arr: string []): string;

function sum(arr: (number | string)[]): number | string {
    if (typeof arr[0] === 'number') {
        let result = 0;
        for (const num of arr as number[]) {
            result += num;
        }
        return result;
    } else {
        let result = '';
        for (const str of arr as string[]) {
            result += str;
        }
        return result;
    }
}

const numbers: number[] = [10, 20, 30, 40];
const strings: string[] = ['10', '20', '30', '40'];

console.log('Sum:', sum(numbers));
console.log('Concat:', sum(strings));
