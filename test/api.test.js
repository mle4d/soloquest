import api from '../src/services/api.js';
import questArray from '../src/services/quest-data.js';
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

test('api to get user', (assert)=> {
    const expected = questArray;

    const result = api.getQuests();

    assert.deepEqual(result, expected);
});

test('retrun users', (assert) => {
    const expectedQuest = questArray[1];
    const foundQuest = api.getQuest(expectedQuest.id);

    assert.deepEqual(foundQuest, expectedQuest);

});