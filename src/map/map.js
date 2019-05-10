import api from '../services/api.js';
import createQuestLink from './create-quest-link.js';

const username = document.getElementById('username');
const style = document.getElementById('style-choice');
const cash = document.getElementById('cash');
const fauxpas = document.getElementById('fauxpas');
const nav = document.getElementById('quest');
const user = api.getUser();

const quests = api.getQuests();

if(!user) {
    window.location = '../../';
}
for(let i = 0; i < quests.length; i++) {
    let questDisplay = null;
    questDisplay = createQuestLink(quests[i]);
    nav.appendChild(questDisplay);
}

username.textcontext = user.name;
//fix this avatar part to be correct//
style.src = 'assets/' + style.choice + 'png';
cash.textContent = user.cash;
fauxpas.textContent = user.fauxpas;