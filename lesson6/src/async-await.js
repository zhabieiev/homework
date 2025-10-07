async function getData() {
    const response = await fetch('https://randomuser.me/api/');
    const json = await response.json();
    return json;
}

(async () => {
    const data = await getData();
    data.results.forEach(({ name, cell }) => {
        console.log(`User ${name.title} ${name.first} ${name.last} with cellphone ${cell}`);
    });
})();
