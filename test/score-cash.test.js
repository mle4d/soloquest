import scoreCash from '../src/end/score-cash.js';
const test = QUnit.test;

QUnit.module('scorecash');

test('test 1 returns denim token', (assert) => {
    //Arrange
    const user = {
        cash: 45
    };
    const expected = 'denim on denim';
    // Set up your parameters and expectations

    //Act
    const result = scoreCash(user.cash);
    // Call the function you're testing and set the result to a const
    //Assert
    assert.equal(result, expected);
});

test('test 1 returns denim token', (assert) => {
    //Arrange
    const user = {
        cash: 50
    };
    const expected = 'meh';
    // Set up your parameters and expectations

    //Act
    const result = scoreCash(user.cash);
    // Call the function you're testing and set the result to a const
    //Assert
    assert.equal(result, expected);
});

test('test 1 returns token', (assert) => {
    //Arrange
    const user = {
        cash: 50
    };
    const expected = 'stylin';
    // Set up your parameters and expectations

    //Act
    const result = scoreCash(user.cash);
    // Call the function you're testing and set the result to a const
    //Assert
    assert.equal(result, expected);
});