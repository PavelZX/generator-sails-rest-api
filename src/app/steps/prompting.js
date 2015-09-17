/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 *
 * Questions is required from ../questions folder.
 * Each of answers is mixin to this.answers attribute and available in templates as answers variable.
 */

var chalk = require('chalk');
var assign = require('../util/index').assign;
var questions = require('../questions/index');

/**
 * Triggers when user finishes answering to questions from section
 * @param {Function} done
 * @param {Object} answers
 * @private
 */
function _onSectionDone(done, answers) {
  this.answers = assign(this.answers, answers);
  done();
}

module.exports = {
  /**
   * Ask application questions
   */
  askApplicationQuestions: function () {
    this.log(chalk.yellow('\nApplication questions:'));
    this.prompt(questions.application, _onSectionDone.bind(this, this.async()));
  }
};