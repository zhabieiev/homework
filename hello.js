const arr = ['Hello','JavaScript','and','TypeScript','world!']

function concat(arr) {
    return arr.join(' ');      
}

console.log(concat(arr));

console.log('--------')

function concatStr(arr) {
    result = '';
    arr.forEach(element => {
        result += element + ' ';
    });
    return result;
}

console.log(concatStr(arr));

let a = 'TypeScript';
let b = 'JavaScript';

[a,b] = [b,a];

console.log(a);
console.log(b);