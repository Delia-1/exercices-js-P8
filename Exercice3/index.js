const calculateAverage = (array) => {
 if (!array) {
    console.log("No numbers to calculate average");
    return "No numbers to calculate average"
  }

  const length = array.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    count += array[i];
  }
  console.log(count / length)
  return count / length;
};

export default calculateAverage;

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average
