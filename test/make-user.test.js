import makeUser from '../src/home/make-user.js';
const test = QUnit.test;

QUnit.module('makeUser');
test('create user object from form data', (assert) => {
  // arrange
    const formData = new FormData();
  // set the values that would be from the form,
  // remember these are strings!
    formData.set('name', 'emanresu');
    formData.set('style', 'PIP');
    const expected = {
        name: 'emanresu',
        style: 'PIP',
        cash: 20,
        fauxpas: 0
    };
  // act
    const result = makeUser(formData);

  // assert
    assert.deepEqual(result, expected);
});