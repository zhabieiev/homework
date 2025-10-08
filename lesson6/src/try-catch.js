async function getData() {
    try {
        const response = await fetch('https://nonexisted-api.com/data');
        if (!response.ok)
            throw new Error('URL is unavailable');
        return await response.json();
    } catch {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) throw new Error('Another URL is unavailable');

        const data = await response.json();
        if (!data.results || data.results.length === 0) throw new Error('Invalid data');

        return data;
    }
}

(async () => {
    try {
        const data = await getData();
        data.results.forEach(({ name, cell }) => {
            console.log(`User ${name.title} ${name.first} ${name.last} with cellphone ${cell}`);
        });
    } catch (err) {
        console.error('Critical error:', err.message);
    }
})();
