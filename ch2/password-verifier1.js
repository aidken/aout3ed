/*jshint esversion: 6 */
// cSpell:ignore esversion

class PasswordVerifier1 {

    constructor() {
        this.rules = [];
    }

    addRule(rule) {
        this.rules.push(rule);
    }

    verify(input) {
        const errors = [];
        this.rules.forEach( function(rule) {
            const result = rule(input);
            if (!result.passed) {
                errors.push(`error ${result.reason}`);
            }
        });
        return errors;
    }

} // end class PasswordVerifier1

module.exports = { PasswordVerifier1 };