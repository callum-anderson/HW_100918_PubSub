const NumberInput = require('./views/number_input.js');
const ResultOutput = require('./views/result_output.js');
const PrimeChecker = require('./model/prime_checker.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const numberInput = new NumberInput();
  numberInput.bindEvents();
  const resultOutput = new ResultOutput();
  resultOutput.bindEvents();
  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();
});
