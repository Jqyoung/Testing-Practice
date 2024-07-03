export default function analyzeArray(numbersArray) {
  let average = findAverage(numbersArray);
  let length = numbersArray.length;
  let max = numbersArray.reduce((biggest, curr) => {
    return curr > biggest ? curr : biggest;
  });
  let min = numbersArray.reduce((smallest, curr) => {
    return curr < smallest ? curr : smallest;
  }, numbersArray[0]);

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

function findAverage(arr) {
  return arr.reduce((acc, curr) => acc + curr) / arr.length;
}
