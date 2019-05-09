import scoreQuest from '../src/Quest/score-quest.js';
const test = QUnit.test;

QUnit.module('scoreQuest');

test('Adjust user profile based on quest choice', (assert) => {
    const user = {
        name: 'emanresu',
        style: 'PIP',
        cash: 20,
        fauxpas: 0,
        completed: {}
    };

    const choice = {
        cash: 20,
        fauxpas: 0
    };

    const quest = {
        id: 'pants'
    };

    const expected = {
        name: 'emanresu',
        style: 'PIP',
        cash: 50,
        fauxpas: 0,
        completed: {
            pants: true
        }
    };
    const result = scoreQuest(user, choice, quest);

    assert.deepEqual(result, expected);
});