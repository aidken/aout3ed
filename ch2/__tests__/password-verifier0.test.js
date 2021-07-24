/*jshint esversion: 6 */
// cSpell:ignore esversion

const { verifyPassword } = require('../password-verifier0');

describe('verifyPassword', function() {
    
    test('given a failing rule, returns errors', function() {
        const fakeRule = function(input) {
            return {
                'passed': false,
                'reason': 'fake reason'
            };
        };
        const errors = verifyPassword('any rule', [fakeRule]);
        expect(errors[0]).toContain('fake reason');
    });

    test('given a successful rule, returns no errors', function() {
        const fakeRule = function(input) {
            return {
                'passed': true,
                'reason': 'always successful'
            };
        };
        const errors = verifyPassword('any rule', [fakeRule]);
        expect(errors).toEqual([]);
    });

});