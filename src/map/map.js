import api from '../services/api.js';
import createQuestLink from './create-quest-link.js';
import loadProfile from '../load-profile.js';
import createCompletedQuest from './create-completed-quest.js';

loadProfile();

const nav = document.getElementById('quest');

const quest = api.getQuests();
const user = api.getUser();

for(let i = 0; i < quest.length; i++) {
    let quest = quest[i];
    let dom = null;
    if(user.completed[quest.id]) {
        dom = createCompletedQuest(quest);
    } else {
        dom = createQuestLink(quest);
    }
    nav.appendChild(dom);
}