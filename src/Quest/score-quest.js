function scoreQuest(user, choice, quest) {
    user.cash += choice.cash;
    user.fauxpas += choice.fauxpas;
    user.completed[quest.id] = true;
    return user;
}

export default scoreQuest;