import api from '..services/api.js';

const username = document.getElementById('username');
const style = document.getElementById('style-choice');
const cash = document.getElementById('cash');
const fauxpas = document.getElementById('fauxpas');

const user = api.getUser();

if(!user) {
    window.location = '../../';
}

username.textcontext = user.name;
//fix this avatar part to be correct//
style.src = 'assets/' + style.choice + 'jpg';
cash.textContent = user.cash;
fauxpas.textContent = user.fauxpas;