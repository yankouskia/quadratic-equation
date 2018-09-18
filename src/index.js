module.exports = function solveEquation(equation) {
  let coefficients = [];
  let pattern = /[+-.0-9]+/g;
  coefficients = equation.match(pattern);
  let numbers = [];

  let A = parseInt(coefficients[0]);
  let B = parseInt(coefficients[2] + coefficients[3]);
  let C = parseInt(coefficients[4] + coefficients[5]);
  let D = parseInt(Math.sqrt(B * B - 4 * A * C));
  
  numbers.push(Math.round((-B + D) / (2 * A)));
  numbers.push(Math.round((-B - D) / (2 * A)));
  numbers.sort((left, right)=> left - right)
  return numbers;
}
