function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        style: formData.get('style'),
        cash: 20,
        fauxpas: 0,
        //completed: {}
    };
    return user;

}
export default makeUser;