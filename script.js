const selectionButtons = document.querySelectorAll('[data-selection]');

const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper'
  }
];

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(selection => selection.name === selectionName);
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  addSelectionResults(computerSelection, computerWinner);
  addSelectionResults(selection, yourWinner);
}

function addSelectionResults(selection, winner) {

}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;

}


function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

