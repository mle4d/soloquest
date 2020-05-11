import createCompletedQuest from '../src/map/create-completed-quest.js';
const test = QUnit.test;
QUnit.module('createCompletedQuest');

test('Makes html span for completed quest', (assert) => {
    //Arrange
    const quest = {
        id: 'pants',
        title: 'Pick a Bottom'
    };
    const expected = '<span class="quest completed">Pick a Bottom</span>';
    //Act
    // Call the function you're testing and set the result to a const
    const dom = createCompletedQuest(quest);
    //Assert
    assert.equal(dom.outerHTML, expected);
});