// Q8. Employee Salary Projection
let salary = 40000;
const annualIncrementRate = 8;
const projection = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * annualIncrementRate / 100;
    salary = Math.round(salary);
    projection.push({ year: `Year ${year}`, salary: `₹${salary}` });
}

console.table(projection);
