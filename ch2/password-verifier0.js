/*jshint esversion: 6 */
// cSpell:ignore esversion

const verifyPassword = function(input, rules) {
    const errors = [];
    rules.forEach( function(rule) {
        const result = rule(input);
        if (!result.passed) {
            errors.push(`error ${result.reason}`);
        }
    });
    return errors;
};

module.exports = { verifyPassword };