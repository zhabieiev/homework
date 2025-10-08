function getData() {
    return fetch('https://randomuser.me/api/')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Get data:', data);
            useData(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function useData(data) {
    data.results.forEach(({ name, cell }) => {
        console.log(`User ${name.title} ${name.first} ${name.last} with cellphone ${cell}`);
    });
}

getData();
