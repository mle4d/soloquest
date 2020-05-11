import scoreFauxpas from '../src/end/score-fauxpas.js';
const test = QUnit.test;

QUnit.module('scoreFauxpas');

test('test returns denim if user has fauxpas', (assert) => {
    //Arrange
    const user = {
        fauxpas: 35
    };
    const expected = 'denim';
    // Set up your parameters and expectations

    //Act
    const result = scoreFauxpas(user.fauxpas);
    // Call the function you're testing and set the result to a const
    //Assert
    assert.equal(result, expected);
});

test('test returns wealthy if user has no fauxpas', (assert) => {
    //Arrange
    const user = {
        fauxpas: 0
    };
    const expected = 'stylin';
    // Set up your parameters and expectations

    //Act
    const result = scoreFauxpas(user.fauxpas);
    // Call the function you're testing and set the result to a const
    //Assert
    assert.equal(result, expected);
});