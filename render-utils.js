export function renderPoll(polls) {
    const div = document.createElement('div');

    const questionsDiv = renderVote(polls.question);
    const optionADiv = renderVote(polls.optionA, polls.votesA);
    const optionBDiv = renderVote(polls.optionB, polls.votesB);

    div.append(questionsDiv, optionADiv, optionBDiv);

    div.classList.add('poll');

    return div;
    
}

export function renderVote(question, option, votes) {

    const teamDiv = document.createElement('div');
    const questionDiv = document.createElement('p');
    const optionDiv = document.createElement('p');
    const votesDiv = document.createElement('p');
   

    teamDiv.classList.add('team');
    optionDiv.classList.add('option');
    votesDiv.classList.add('vote');
    questionDiv.classList.add('question');

    questionDiv.textContent = question;
    optionDiv.textContent = option;
    votesDiv.textContent = votes;

    teamDiv.append(questionDiv, optionDiv, votesDiv);

    return teamDiv;
}