// import functions and grab DOM elements
import { renderPoll } from './render-utils.js';

const currentPollEl = document.getElementById('current-poll-container');
const pastPollEl = document.getElementById('past-poll-container');

const optionForm = document.getElementById('option-form');
const option1AddButton = document.getElementById('add-a-button');
const option2AddButton = document.getElementById('add-b-button');
const option1UndoButton = document.getElementById('undo-a-button');
const option2UndoButton = document.getElementById('undo-b-button');
const finishPoll = document.getElementById('Finish');
const questionLabel = document.getElementById('current-question');
const optionALabel = document.getElementById('option-a-title');
const optionBLabel = document.getElementById('option-b-title');

// let state
const pastPolls = [];

let currentPoll = {
    question: '',
    optionA: '',
    optionB: '',
    votesA: 0,
    votesB: 0,
};

// set event listeners 
optionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(optionForm);
// I set the state to this data from the form
    const optionA = formData.get('option-a');
    const optionB = formData.get('option-b');
    const question = formData.get('question-input');
    // reset the poll value
    currentPoll.question = question;
    currentPoll.optionA = optionA;
    currentPoll.optionB = optionB;

    optionForm.reset();
    displayCurrentPollEl();
});

option1AddButton.addEventListener('click', () => {
    //I incremented the votes for option A 
    currentPoll.votesA++;

    displayCurrentPollEl();
});
option2AddButton.addEventListener('click', () => {
    // I incremented the votes for option B 
    currentPoll.votesB++;

    displayCurrentPollEl();
});
option1UndoButton.addEventListener('click', () => {
    // I decremented the votes for option A 
    currentPoll.votesA--;

    displayCurrentPollEl();
});
option2UndoButton.addEventListener('click', () => {
    currentPoll.votesB--;

    displayCurrentPollEl();
});
finishPoll.addEventListener('click', () => {
    // Set the finish button to display the past polls below the current poll
    pastPolls.push(currentPoll);

    displayAllPolls();
    currentPoll = {
        question: '',
        optionA: '',
        optionB: '',
        voteA: 0,
        voteB: 0
    };
    displayCurrentPollEl();
});

function displayCurrentPollEl() {
    currentPollEl.textContent = '';

    questionLabel.textContent = currentPoll.question;
    optionALabel.textContent = currentPoll.optionA;
    optionBLabel.textContent = currentPoll.optionB;

    const pollEl = renderPoll(currentPoll);

    currentPollEl.append(pollEl);
}

function displayAllPolls() {
    pastPollEl.textContent = '';

    for (let polls of pastPolls) {
        const pollsEl = renderPoll(polls);
        pollsEl.classList.add('past');

        pastPollEl.append(pollsEl);
    }
}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
