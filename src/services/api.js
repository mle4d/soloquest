import questArray from './quest-data.js';
import findById from '../find-by-id.js';

const api = {
    storage: localStorage,
    saveUser(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        if(!json) return null;
        const user = JSON.parse(json);
        return user;
    },
    getQuests() {
        return questArray;
    },
    getQuest(id) {
        return findById(questArray, id);
    }

};

export default api;