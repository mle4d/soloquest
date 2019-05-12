import isDenim from '../src/map/is-denim.js';
const test = QUnit.test;

QUnit.module('isDenim');

test('returns true if user is denim', (assert) => {
    
    const user = {
        cash: 45
    };

    const expected = true;

    const result = isDenim(user);

    assert.equal(result, expected);
});

test('returns false if user is not denim', (assert) => {

    const user = {
        cash: 50
    };

    const expected = false;

    const result = isDenim(user);
    assert.equal(result, expected);
});