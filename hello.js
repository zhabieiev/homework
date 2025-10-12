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

const array = ['Hello', 1, 2, 'JavaScript', 3, 'and','TypeScript', 4, 'world!'];
