const btn = document.querySelectorAll(".btn");
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector(".equal");
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');

currentOperand.textContent = ' ';
previousOperand.textContent = ' ';

const add = (number1, number2) => {
  return number1 + number2;
};

const subtract = (number1, number2) => {
  return number1 - number2;
};

const multiply = (number1, number2)=> {
  return number1 * number2;
};

const divide = (number1, number2)=> {
  return number1 / number2;
};


const operate = (number1, number2, operator) =>{
  switch (operator) {
    case "+":
        add(number1, number2);
        break;
    case "-":
      subtract(number1, number2);
     break;
    case "*":
      multiply(number1, number2);
      break
    case "/":
        divide(number1, number2);
        break;
       default:
        console.log("Error!")
  }

};


let storedNumber = '';
let clickedOperator = ''
let firstNumber = '';
let result = '';
currentOperand.textContent = 0;


btn.forEach((number) => {
  number.addEventListener('click', () => {
    storedNumber += number.value;
    currentOperand.textContent = storedNumber;
  })
});

operators.forEach((operator => {
  operator.addEventListener('click', () => {
    if (firstNumber && storedNumber) {
      displayResult();
    }
    // save the first number
    firstNumber = storedNumber;
    // get the operator that was clicked
    clickedOperator = operator.textContent;
    previousOperand.textContent = storedNumber + clickedOperator;
    storedNumber = '';
    console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber)
    console.log(clickedOperator);
  })
}));

equal.addEventListener('click', () =>{
  displayResult();
});

const  displayResult= () => {
  result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
  // update content of current operation with result and previous operand with the calculation, make storedNumber = result
  currentOperand.textContent = result;
  previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
  storedNumber = result;
  console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber);
}

