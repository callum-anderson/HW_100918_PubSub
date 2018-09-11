const PubSub = require('../mediator/pub_sub.js');

const PrimeChecker = function() {

}

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('number-input:submitted', (e) => {
    submittedNumber = e.detail;
    PubSub.publish('prime-checker:submitted', this.isPrime(submittedNumber));
  });

};

PrimeChecker.prototype.isPrime = function (number) {
  if (number < 2) {
    return false;
  } else if (number == 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }
  for (let i = 3; i*i <= number; i+= 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = PrimeChecker;
