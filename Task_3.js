const prompt = require('prompt-sync')();
console.log("\nThis program finds the length between 2 coordinates\n")

const x1 = prompt("Enter x coordinate for the first point: ");
const y1 = prompt("Enter y coordinate for the first point: ");
const x2 = prompt("Enter x coordinate for the second point: ");
const y2 = prompt("Enter y coordinate for the second point: ");

const distance = Math.sqrt((x1-x2) ** 2 + (y1-y2) ** 2)

console.log(`\nDistance between this 2 points is ${distance}\n`);
