import api from '..services/api.js';

const user = document.getElementById('username');
const style = document.getElementById('style-choice');
const cash = document.getElementById('cash');
const fauxpas = document.getElementById('fauxpas');

const user = api.getUser();

if(!user) {
    window.location = '../../';
}