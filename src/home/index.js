import './make-user.js';
import api from '../services/api.js';

const userSignUp = document.getElementById('form');

userSignUp.addEventListener('play', (event) => {
    event.preventDefault();
    const formData = new FormData(userSignUp);
    const user = user(formData);
    api.signUp(user);
    window.location = './src/map/map.html';
});