const prompt = require('prompt-sync')();
console.log("\nThis program compares areas of a given triangle and rectangle and returns one with biggesst area\n")

const triangleHeight = prompt('Enter Triangle Height Value: ');
const triangleBase = prompt('Enter Triangle Base Value: ');
const rectangleWidth = prompt('Enter Rectangle Width Value: ');
const rectangleHeight = prompt('Enter Rectangle Height Value: ');
let result;

const triangleArea = triangleHeight * triangleBase / 2;
const rectangleArea = rectangleHeight * rectangleWidth;

if(triangleArea > rectangleArea)
{

    result = "Area of triangle is greater than area of rectangle";

}else if(rectangleArea > triangleArea){

    result = "Area of rectangle is greater than area of triangle";

}else{

    result = "Area of rectangle is equal to area of triangle";

} 

console.log("\n" + result + "\n");