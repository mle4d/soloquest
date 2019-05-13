import api from '../services/api.js';
import createQuestLink from './create-quest-link.js';
import loadProfile from '../load-profile.js';
import createCompletedQuest from './create-completed-quest.js';
import isDenim from './is-denim.js';
import hasCompletedAllQuests from '.hasCompletedAllQuests.js';

loadProfile();

const nav = document.getElementById('quests');

const quests = api.getQuests();
const user = api.getUser();
if(isDenim(user) || hasCompletedAllQuests(user, quests)) {
    window.location = '../end/end/html';
}
for(let i = 0; i < quests.length; i++) {
    let quest = quest[i];
    let dom = null;
    if(user.completed[quest.id]) {
        dom = createCompletedQuest(quest);
    } else {
        dom = createQuestLink(quest);
    }
    nav.appendChild(dom);
}