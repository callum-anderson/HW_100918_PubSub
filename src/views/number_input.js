const PubSub = require('../mediator/pub_sub.js');

const NumberInput = function() {

}

NumberInput.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const number_input = e.target.number.value;
    PubSub.publish('number-input:submitted', number_input);
  })

};

module.exports = NumberInput;
