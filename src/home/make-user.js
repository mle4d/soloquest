function makeUser(formData) {
    const user = {
        username: formData.get('username'),
        style: formData.get('style'),
        cash: 20,
        fauxpas: 0,
    };
    return user;

}
export default makeUser;