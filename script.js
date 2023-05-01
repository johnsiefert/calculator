const number1 = '';
const number2 = '';
const operator = '';
const button = document.getElementById("buttons");
const display = document.getElementById("display");
const btn = document.querySelector('.btn')
const operation = document.querySelector('.operator').value
// const del = document.getElementById("del");
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
       break;
    case '-':
       return subtract(number1, number2);
       break;
    case '*':
      return  multiply(number1, number2);
      break;
    case '/':
      return divide(number1, number2);
      break;
       default:
        console.log("Error!")
  }
};

button.addEventListener("click", (e) => {
  let keyPress = display.textContent += e.target.value
if(e.target.id === "clear") {
   display.textContent = "";
}else if(e.target.id === "del") {
  display.textContent = display.textContent.slice(0, -1);
}else {
  keyPress
}
});

