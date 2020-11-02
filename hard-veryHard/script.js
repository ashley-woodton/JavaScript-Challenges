function add(number1, number2) {
    console.log(`${number1} + ${number2} = ${Number(number1) + Number(number2)}`)
}

function subtract(number1, number2) {
    console.log(`${number1} - ${number2} = ${number1 - number2}`)
}

function multiply(number1, number2) {
    console.log(`${number1} x ${number2} = ${number1 * number2}`)
}

function divide(number1, number2) {
    console.log(`${number1} / ${number2} = ${number1 / number2}`)
}

var input1 = prompt("Enter a number");
var operator = prompt("Enter an operartor (ex: + - x /)");
var input2 = prompt("Enter another number");

if (operator === "+") {
    add(input1, input2);
} else if (operator === "-") {
    subtract(input1, input2);
} else if (operator === "x") {
    multiply(input1, input2);
} else if (operator === "/") {
    divide(input1, input2);
} else {
    console.log(`Incorrect input. Please refresh the page and try again.`);
}