const display = document.getElementById("display");
display.value = "";

const appendToDisplay = (value) => {
  display.value += value;
};
const clearDisplay = () => {
  display.value = "";
};
const calculateResult = () => {
  const inputSplitted = display.value.split(/([+\-*/])/);

  const x = Number(inputSplitted[0]);
  const y = Number(inputSplitted[2]);
  const operator = inputSplitted[1];

  switch (operator) {
    case "+":
      display.value = x + y;
      break;
    case "-":
      display.value = x - y;
      break;
    case "*":
      display.value = x * y;
      break;
    case "/":
      display.value = y === 0
      ? 'Division by zero is not allowed'
      : x / y
      break;
  }
};
