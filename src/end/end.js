import loadProfile from '../load-profile.js';
import cashDictionary from './cash-dictionary.js';
import fauxpasDictionary from './fauxpax-dictionary.js';
import scoreCash from './score-cash.js';
import scoreFauxpas from './score-fauxpas.js';
import api from '../services/api.js';

loadProfile();

const user = api.getUser();
const cashKey = scoreCash(user.cash);
const fauxpasKey = scoreFauxpas(user.fauxpas);
const resultText = document.getElementById('result-text');

const cashMessage = cashDictionary[cashKey];
const fauxpasMessage = fauxpasDictionary[fauxpasKey];

resultText.textContent = cashMessage + ' ' + fauxpasMessage;