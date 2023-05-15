const numbers = document.querySelectorAll('.btn');
const display = document.querySelector('#display');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');
const equal = document.querySelector('#equal')

let displayValue = "";
let currentNumber = "";
let prevOperator = "";



// performs calculations and displays them
function operate(operator, a, b){
  switch (operator){
    case "add" :
      display.textContent = a + b
      break;
    case "subtract" :
      display.textContent = a - b
      break;
    case "multiply" :
      display.textContent = a * b
      break;
    case "divide" :
      display.textContent = a / b
      break;
  }

// stores current number and resets other
  currentNumber = display.textContent;
  prevOperator = "";
  displayValue = "";
}
// adds events onto each number, when clicked called populateDisplay
numbers.forEach(button => {
  button.addEventListener('click', populateDisplay)
});

// populates display with the button press, adds additional presses to displayValue
function populateDisplay() {
  document.querySelector('#clear').innerHTML = "C";
  (!displayValue) ? (displayValue = this.textContent) : (displayValue += this.textContent)
  display.textContent = displayValue;
}

operators.forEach(button => {
  button.addEventListener('click', () => {
    // if a number and operator is stored operate
    if(currentNumber && prevOperator){
      operate(prevOperator, Number(currentNumber), Number(displayValue));

    }
    // if two numbers are stored without an operator store the number and reset the previous
    else if (!prevOperator && currentNumber && displayValue){
      currentNumber = displayValue;
      displayValue = "";
    }
    // if current number exists reset display for the next number
    else if (currentNumber){
      displayValue = "";
    }
    else {
    // if no values are stored, store displayValue to current number, reset display value
      currentNumber = Number(displayValue)
      displayValue = "";
    }
    // stores operator based on button press
    prevOperator = button.id
  });
});

// call the operate function
equal.addEventListener('click', () => {
  operate(prevOperator, Number(currentNumber), Number(displayValue));
})

// if there is no display value, displayValue = ".", if there is a display value add "." to it
// store the result
decimal.addEventListener('click', () => {
  if(displayValue.toString().indexOf('.') === -1){
    (!displayValue) ? (displayValue = ".") : (displayValue += ".")
      }
    display.textContent = displayValue
    });

// clear all values and operators
clear.addEventListener('click', () =>{
  display.innerText = 0;
  displayValue = "";
  currentNumber = "";
  prevOperator = "";
  document.querySelector('#clear').innerHTML = "C";
});

