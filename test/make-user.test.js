test('create user object from form data', (assert) => {
  // arrange
  const formData = new FormData();
  // set the values that would be from the form,
  // remember these are strings!
  formData.set('username', 'emanresu');
  formData.set('style', 'PIP');
  const expected = {
    username: 'emanresu',
    style: 'PIP',
    cash: $20,
    faux pas: 0,
  };
  // act
  const user = makeUser(formData);

  // assert
  assert.deepEqual(result, expected);
});