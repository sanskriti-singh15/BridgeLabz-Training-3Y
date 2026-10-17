// Q4. Academic Performance Evaluator
const marks = [88, 91, 79, 86, 90]; // Enter marks for 5 subjects
const total = marks.reduce((sum, mark) => sum + mark, 0);
const average = total / marks.length;
const percentage = (total / (marks.length * 100)) * 100;

console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

if (marks.some(mark => mark < 35)) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}
