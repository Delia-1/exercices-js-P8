const calculate = (x, y, operator) => {
  x = typeof x === "string" ? Number(x) : x;
  y = typeof y === "string" ? Number(y) : y;

  if (y === 0 && operator === "/") {
    return "Division by zero is not allowed";
  }

  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    default:
      return "Invalid operator";
  }
};

export default calculate;

// Exemples d'utilisation de la fonction
// console.log(calculate(5, 3, '+'));   // Affiche 8
// console.log(calculate(10, 4, '-'));  // Affiche 6
// console.log(calculate(7, 2, '*'));   // Affiche 14
// console.log(calculate(12, 3, '/'));  // Affiche 4
// console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
// console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"
