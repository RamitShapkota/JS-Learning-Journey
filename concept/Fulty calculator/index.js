/*
Create a fulty calculator using javascript

This faulty claculator does following:
1.It takes two as input from the user
2.it performs wrong operation as follows:

+ ----> -
* ----> +
- ----> /
/ ----> **

It performs wrong operation 10% of the time

*/


/*const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter a expression (eg:1+2)', (input) => {
    const match = input.match(/^(\d+)([\+\-\*\/])(\d+)$/);

    if (!match) {
        console.log("Invalid input format. Use format like 1+2");
        rl.close();
        return;
    }

    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);

    let result;
    switch (operator) {
        case '+':
            num = Math.random();
            result = num > 0.5 ? (num1 + num2) : (num1 - num2);
            break;
        case '*':
            num = Math.random();
            result = num > 0.1 ? (num1 * num2) : (num1 + num2);
            break;
        case '-':
            num = Math.random();
            result = num > 0.1 ? (num1 - num2) : (num1 / num2);
            break;
        case '/':
            num = Math.random();
            result = num > 0.1 ? (num1 / num2) : (num1 ** num2);
            break;

        default:
            num = Math.random();
            result='Invalid operator';
  }
  console.log("result:"+result);
  r1.close();
});*/


let random=Math.random();
console.log(random)
let a=prompt("Enter first number:")
let b=prompt("Enter second number:")
let c=prompt("Enter operator:")

let obj={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(random>0.1){
    // console.log(`The result is ${a} ${c} ${b} `)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}