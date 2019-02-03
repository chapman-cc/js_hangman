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

    for (letter of randomPhrase) {
        let li = document.createElement('li');
        li.textContent = letter;
        console.log(li);
        ul.appendChild(li);
    }
    //================================================================================
});
