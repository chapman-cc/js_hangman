document.addEventListener('DOMContentLoaded', () => {
    // list of possible phrase for game

    // Press "Start Game" button to remove overlay <div>
    const overlayDiv = document.querySelector('#overlay');
    overlayDiv.addEventListener('click', (e) => {
        if (e.target.className === 'btn__reset') {
            overlayDiv.style.display = 'none';
        }
    });

    const phrases = ['I love you'] //, 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const ul = document.querySelector('#phrase ul');

    //     Return a random phrase in array e.g. ["t", "u", "e", "s", "d", "a", "y"]
    const getRandomPhraseAsArray = (array) => {
        let randomNum = Math.round(Math.random() * (array["length"] - 1));
        let randomWord = array[randomNum]; //e.g. 'tuesday'
        let phraseArr = [];
        for (let i = 0; i < randomWord.length; i++) {
            phraseArr.push(randomWord[i]);
        }
        return phraseArr;
    };

    const addPhrasetoDisplay = (array) => {
        for (let i = 0; i < array.length; i++) {
            let li = document.createElement('li');
            if (array[i].textContent) {
                li.textContent = '';
            } else {
                li.textContent = array[i];
                li.className = 'letter'; // TODO: include conditional to tell if space in array, then don't add 'letter' class to them
            }
            ul.appendChild(li);
        }
    }

    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhrasetoDisplay(phraseArray);



    //================================================================================
});
