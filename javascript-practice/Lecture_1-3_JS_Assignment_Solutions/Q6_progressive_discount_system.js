// Q6. Progressive Discount System
const total = 7500; // Change this purchase amount
let discountPercentage = 0;

if (total >= 10000) {
    discountPercentage = 25;
} else if (total >= 5000) {
    discountPercentage = 15;
} else if (total >= 2000) {
    discountPercentage = 5;
}

const discountAmount = Math.round(total * discountPercentage / 100);
const finalPrice = Math.round(total - discountAmount);

console.log(`Original total: ₹${total}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Final price after discount: ₹${finalPrice}`);
