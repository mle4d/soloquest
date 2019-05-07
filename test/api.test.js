import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('save user and retrive user correctly', (assert) => {

    const expected = {
        username: 'emanresu',
        style: 'PIP',
        cash: 20,
        fauxpas: 0
    };

    api.signUp(expected);
    const result = api.getUser();

    assert.deepEqual(result, expected);
});