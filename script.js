const number1 = '';
const number2 = '';
const operator = '';
const button = document.getElementById("buttons");
const display = document.getElementById("display");
const btn = document.querySelector('button')
// let firstOperator = null;
// let secondOperator = null;
// let result = null;

const add = (number1, number2) => {
  return parseFloat(number1) + parseFloat(number2);
};

const subtract = (number1, number2) => {
  return parseFloat(number1) - parseFloat(number2);
};

const multiply = (number1, number2)=> {
  return parseFloat(number1) * parseFloat(number2);
};

const divide = (number1, number2)=> {
  return parseFloat(number1) / parseFloat(number2);
};


const operate = (operator, number1, number2) =>{
  switch (operator) {
    case '+':
       return add(number1, number2);
    case '-':
       return subtract(number1, number2);
    case '*':
      return  multiply(number1, number2);
    case '/':
      return divide(number1, number2);
       default:
        console.log("Error!")
  }
};

button.addEventListener("click", () =>{

})

