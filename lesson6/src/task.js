const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log('timerStart');
        const isError = true;
        if (isError) {
            reject('Something went wrong');
        } else {
            resolve('success');
        }
        console.log('timeEnd');
    }, 0);
    console.log(2);
} );

promise
    .then((res) => {
        console.log('Resolved:', res);
    })
    .catch((err) => {
        console.log('Rejected:', err);
    });

console.log(4);
