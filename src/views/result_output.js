const PubSub = require('../mediator/pub_sub.js');

const ResultOutput = function() {

}

ResultOutput.prototype.bindEvents = function () {
  PubSub.subscribe('prime-checker:submitted', (e) => {
    const result_line = document.querySelector('#result');
    number = document.querySelector('#prime-checker-form').number.value;
    if (e.detail) {
      result_line.textContent = `${number} is a prime number.`;
    } else {
      result_line.textContent = `${number} is not a prime number.`;
    }
  });
};

module.exports = ResultOutput;
