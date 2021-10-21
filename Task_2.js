const prompt = require('prompt-sync')();
console.log("\nThis program gives all the solutions for quadratic polynomial a*x^2 + b*x + c = 0 for any value of a,b and c\n")

const a = parseInt(prompt("Enter Value for a: "));
const b = parseInt(prompt("Enter Value for b: "));
const c = parseInt(prompt("Enter Value for c: "));

let x;
let result;

if(a === 0 && b !== 0)
{
    x = -c/b;
    result = `${x} is the only solution of ${b}x + ${c} = 0`;
}else if(a === 0 && b === 0)
{
    if(c === 0){

        result = '0 = 0 is not a quadratic polynomial and the equation is true for any value of x';

    }else{

        result = `${c} = 0 is not a quadratic polynomial and the equaition is not true`;

    }
}else
{
    const discriminant = b ** 2 - 4*a*c;
    if(discriminant > 0){

        const x1 = (-b + Math.sqrt(discriminant))/(2*a);
        const x2 = (-b - Math.sqrt(discriminant))/(2*a);
        result = `x1 = ${x1} and x2 = ${x2} are the solutions for ${a}x^2 + ${b}x + ${c} = 0`;

    }else if(discriminant === 0){

        x = (-b/2*a);
        result = `x = ${x} is the only solution for ${a}x^2 + ${b}x + ${c} = 0`;

    }else{

        result = `${a}x^2 + ${b}x + ${c} = 0 is unsolvable`;

    }
}

console.log('\n'+ result + '\n');