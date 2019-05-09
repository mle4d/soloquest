import scoreQuest from '../src/quest/score-quest.js';
const test = QUnit.test;

QUnit.module('scoreQuest');

test('Adjust user profile based on quest choice', (assert) => {
    //Arrange
    // Set up your parameters and expectations
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
        mood: 50,
        fauxpas: 0,
        completed: {
            pants: true
        }
    };

    //Act
    const result = scoreQuest(user, choice, quest);
    // Call the function you're testing and set the result to a const
    //Assert
    assert.deepEqual(result, expected);
});