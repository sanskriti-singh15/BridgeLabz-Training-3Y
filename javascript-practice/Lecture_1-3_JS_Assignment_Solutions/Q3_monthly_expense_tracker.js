// Q3. Monthly Expense Tracker
const expenses = {
    food: 4000,
    travel: 1500,
    rent: 7000,
    bills: 1200,
    leisure: 800
};

let total = 0;
for (const category in expenses) {
    total += expenses[category];
}

const average = total / Object.keys(expenses).length;
total += total * 0.10; // Add 10% tax using an assignment operator
console.log(`Total before tax: ₹${(total / 1.10).toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${total.toFixed(2)}`);
