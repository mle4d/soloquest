import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('createQuestLink');


test('Makes html link to quest page', (assert) => {

    const quest = {
        id: 'pants',
        title: 'Pick a Bottom'
    };
    const expected = '<a class="quest" href="../quest/quest.html?id=pants">Pick a Bottom</a>';

    const dom = createQuestLink(quest);

    assert.equal(dom.outerHTML, expected);
});