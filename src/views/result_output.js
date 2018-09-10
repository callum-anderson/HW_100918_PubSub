const PubSub = require('../mediator/pub_sub.js');

const ResultOutput = function() {

}

ResultOutput.prototype.bindEvents = function () {
  PubSub.subscribe('prime-checker:submitted', (e) => {
    console.log(e.detail);
  });
};

module.exports = ResultOutput;
