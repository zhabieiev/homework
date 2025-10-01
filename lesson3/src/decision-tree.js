const age = 45;
const hasTicket = true;

if (age >= 18) {
    console.log('Adult');
}

if (age < 12) {
    console.log('Children');
} else if (age >= 12 && age < 18) {
    console.log('Teenager');
} else if (age >= 18 && hasTicket) {
    console.log('Adult with a ticket');
} else {
    console.log('Adult without ticket');
}
