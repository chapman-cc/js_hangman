// document.addEventListener('DOMContentLoaded', () => {
    // list of possible phrase for game

    // Press "Start Game" button to remove overlay <div>
    const overlayDiv = document.querySelector('#overlay');
    overlayDiv.addEventListener('click', (e) => {
        if (e.target.className === 'btn__reset') {
            overlayDiv.style.display = 'none';
        }
    });

    const phrases = ['I love you', 'Never say never', 'Hashtag', 'Go For Broke', 'Swinging For the Fences', 'On the Same Page', 'sunday'];
    const ul = document.querySelector('#phrase ul');

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
// });
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.setAttribute('disabled', '')
        let letterFound = checkLetter(e.target.textContent)
    }
}, false);
