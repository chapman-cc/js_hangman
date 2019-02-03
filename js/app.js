// document.addEventListener('DOMContentLoaded', () => {

    // Press "Start Game" button to remove overlay <div>
    const overlayDiv = document.querySelector('#overlay');
    overlayDiv.addEventListener('click', (e) => {
        if (e.target.className === 'btn__reset') {
            overlayDiv.style.display = 'none';
        }
    });

    // list of possible phrase for game
    const phrases = ['I love you', 'Never say never', 'Hashtag', 'Go For Broke', 'Swinging For the Fences', 'On the Same Page', 'sunday'];
    const ul = document.querySelector('#phrase ul');
    const qwerty = document.querySelector('#qwerty')
    const scoreBoard = document.querySelector('#scoreboard ol')
    let missedScore = 0;

    //     Return a random phrase in array e.g. ["t", "u", "e", "s", "d", "a", "y"]
    const getRandomPhraseAsArray = (array) => {
        let randomNum = Math.round(Math.random() * (array["length"] - 1));
        let randomWord = array[randomNum].toUpperCase(); //e.g. 'TUESDAY'
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
                li.className = 'space'; // TODO: include conditional to tell if space in array, then don't add 'letter' class to
            } else {
                li.className = 'letter';
            }
            ul.appendChild(li);
        }
    }

    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhrasetoDisplay(phraseArray);

//================================================================================
const checkLetter = (letter) => {
    const list = ul.children;
    for (li of list) {
        if (li.className === 'letter' && letter.toUpperCase() === li.textContent ) {
            li.className = 'show';
            return letter;
        }
    }
//     if (letter === ???)
};

const checkWin = () => {
    const list = ul.children;
    let count = 0;
    for (li of list) {
        if (li.className === 'show' || li.className === 'space'){
            count += 1;
        }
    }
    if (count === list.length) {
        alert('You Win')
    }

};

const checkScore = () => {
    if (missedScore < scoreBoard.children.length - 1) {
    missedScore += 1;
} else {
    alert('You Lose');
    overlayDiv.style.display = '';
}
}

    //================================================================================
// });
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.setAttribute('disabled', '');
        let letterFound = checkLetter(e.target.textContent);
        if (!letterFound) {checkScore()}
    }
}, false);
