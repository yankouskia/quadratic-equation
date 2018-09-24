module.exports = function solveEquation(equation) {
  // your implementation
  var coeff = [];
  var solveEquation = [];
  equation = equation.replace("x^2", "x");
  equation = equation.replace(/ /g, '');
  equation = equation.split(/\*x/);

  for (let i = 0; i < equation.length; i++) {
    coeff[i] = +equation[i];
  }
  
  var D = Math.pow(coeff[1], 2) - 4 * coeff[0] * coeff[2];
  solveEquation[0] = Math.round((- coeff[1] + Math.sqrt(D)) / 2 / coeff[0]);
  solveEquation[1] = Math.round((- coeff[1] - Math.sqrt(D)) / 2 / coeff[0]);
  
  solveEquation.sort(function(a, b) {
    return a - b;
  });
  return solveEquation;
  

  

}
