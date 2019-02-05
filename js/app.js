// ---------------------------------------------------
// -------------------- VARIABLES --------------------

const phrases = [
    'i love you',
    'never say never',
    'hashtag',
    'go For broke',
    'swinging for the fences',
    'on the same page',
    'sunday'
];
const overlayDiv = document.querySelector('#overlay');
const phraseSection = document.querySelector('#phrase ul');
const phraseLi = phraseSection.querySelectorAll('li')
const qwerty = document.querySelector('#qwerty');
const scoreBoardImg = document.querySelectorAll('#scoreboard img');
let missedScore = 0;


// Press "Start Game" button to remove overlay <div>
overlayDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        overlayDiv.style.display = 'none';
    }
});

// list of possible phrase for game

//     Return a random phrase in array
const getRandomPhraseAsArray = (phrase) => {
    let randomNum = Math.round(Math.random() * (phrase.length - 1));
    let randomWord = phrase[randomNum];
    let phraseArr = [];
    for (let i = 0; i < randomWord.length; i++) {
        phraseArr.push(randomWord[i]);
    }
    return phraseArr;
};

const addPhrasetoDisplay = (array) => {
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.textContent = array[i];
        if (array[i] == " ") {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
        phraseSection.appendChild(li);
    }
}

let phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray);

//================================================================================
//  function to check if letter guessing is right, return the letter if true
const checkLetter = (letter) => {
    const list = phraseSection.children;
    let isCorrect = false;
    for (li of list) {
        if (li.className === 'letter' && li.textContent === letter) {
            li.className = 'show';
            isCorrect = true;
        }
    }
    if (isCorrect) {
        return letter;
    }
};

// function to run if letter guess is right, will resetGame() if no more .letter class in phrase
const checkWin = () => {
    const list = phraseSection.children;
    let isLetter = false;
    for (li of list) {
        li.className === 'letter' ? isLetter = true : null;
    }
    if (!isLetter) {
        resetGame('win')
    }
};
// function to run if letter guess is wrong, will change socreBoard img, and if missedScore accumulate to length of scoreBoardImg, will resetGame()
const checkLose = () => {
    scoreBoardImg[missedScore].src = 'images/lostHeart.png';
    missedScore += 1;
    if (missedScore === scoreBoardImg.length) {
        resetGame('lose');
    }
}

//  event listener to on screen keyboard picks, add a class and disabled click
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = true;
        let letterFound = checkLetter(e.target.textContent);
        letterFound ? checkWin() : checkLose()
    }
});
// function to reset the game
const resetGame = (winLose) => {
    overlayDiv.className = winLose;
    overlayDiv.style.display = '';
    while (phraseSection.childElementCount > 0) {
        phraseSection.removeChild(phraseSection.children[0])
    }
    phraseArray = getRandomPhraseAsArray(phrases);
    addPhrasetoDisplay(phraseArray);
    missedScore = 0;
    let buttons = qwerty.querySelectorAll('button');
    buttons.forEach(button => {
        button.className = '';
        button.disabled = false;
    });
    scoreBoardImg.forEach(img => {
        img.src = 'images/liveHeart.png'
    })
};
