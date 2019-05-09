import api from './services/api.js';

function loadProfile() {
    const username = document.getElementById('username');
    const style = document.getElementById('style');
    const cash = document.getElementById('cash');
    const fauxpas = document.getElementById('fauxpas');

    const user = api.getUser();

    if(!user) {
        window.location = '../../';
    }

    username.textContent = user.name;
    style.src = '../../assets/' + user.style + '.png';
    cash.textContent = user.cash;
    fauxpas.textContent = user.fauxpas;
}

export default loadProfile;