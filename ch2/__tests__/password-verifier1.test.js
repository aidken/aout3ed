/*jshint esversion: 6 */
// cSpell:ignore esversion

const { verifyPassword1, PasswordVerifier1 } = require('../password-verifier1');

describe('verifyPassword', function() {

    describe('with a failing rule', function() {

        test('has an error message based on rule.reason', function() {

            const verifier = new PasswordVerifier1();

            const failingRule = function(input) {
                return {
                    'passed': false,
                    'reason': 'fake reason'
                };
            };

            verifier.addRule(failingRule);

            const errors = verifier.verify('any value');

            expect(errors.length).toBe(1);
            expect(errors[0]).toContain('fake reason');
        });

    }); // end describe with a failing rule

    test('given a successful rule, returns no errors', function() {

        const verifier = new PasswordVerifier1();

        const successfulRule = function(input) {
            return {
                'passed': true,
                'reason': 'always successful'
            };
        };

        verifier.addRule(successfulRule);

        const errors = verifier.verify('successful rule');

        expect(errors).toEqual([]);

    });

}); // end describe verifyPassword