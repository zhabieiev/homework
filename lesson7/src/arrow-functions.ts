function sum(arr: number[]): number;
function sum(arr: string[]): string;

function sum(arr: number[] | string[]): number | string {
    if (typeof arr[0] === 'number') {
        return (arr as number[]).reduce((a, b) => a + b, 0);
    } else {
        return (arr as string[]).reduce((a, b) => a + b, '');
    }
}

console.log(sum([10, 20, 30, 40]));         // 100
console.log(sum(['10', '20', '30', '40'])); // 10203040
