document.addEventListener('DOMContentLoaded', () => {
    // list of possible phrase for game
    const phrases = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const phraseSection = document.querySelector('#phrase');
    const phraseUl = phraseSection.children;

    // Press "Start Game" button to remove overlay <div>
    const overlayDiv = document.querySelector('#overlay');
    overlayDiv.addEventListener('click', (e) => {
        if (e.target.className === 'btn__reset') {
            overlayDiv.style.display = 'none';
        }
    });


    //     Create a getRandomPhraseAsArray function.
    const getRandomPhrase = (array) => {
        let randomNum = Math.round(Math.random() * (array["length"] - 1));
        let phrase = array[randomNum]; //e.g. 'tuesday'
        return phrase;
    };

    const phraseLi = (array, ul) => {
        for (arr of array) {
            let li = document.createElement('li');
            li.textContent = arr;
            ul.appendChild(li)
        }
    }
    //================================================================================
});
