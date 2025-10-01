const user = {
    name: 'George',
    age: 45,
    isActive: true,
    contacts: {
        email: 'zhabeev@gmail.com',
        phone: '(067)404-22-03'
    },
    sport: ['football', 'badminton', 'basketball'],
    greet: function () {
        console.log(`Hi! My name is ${this.name}, I'm ${this.age} years old.`);
    },
    showSports: function () {
        console.log('My favorite sports are:', this.sport.join(', '));
    }
};
user.greet();
user.showSports();

console.log('Email:', user.contacts.email);
