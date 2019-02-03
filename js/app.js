document.addEventListener('DOMContentLoaded', () => {
    // list of possible phrase for game

    // Press "Start Game" button to remove overlay <div>
    const overlayDiv = document.querySelector('#overlay');
    overlayDiv.addEventListener('click', (e) => {
        if (e.target.className === 'btn__reset') {
            overlayDiv.style.display = 'none';
        }
    });

    const phrases = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const phraseSection = document.querySelector('#phrase');
    const ul = phraseSection.querySelector('ul');

    //     Return a random phrase e.g. 'Monday', or 'Wednesday'
    const getRandomPhraseArray = (array) => {
        let randomNum = Math.round(Math.random() * (array["length"] - 1));
        let phrase = array[randomNum]; //e.g. 'tuesday'
        return phrase;
    };
    let randomPhrase = getRandomPhraseArray(phrases);

    for (letter of randomPhrase) {
        let li = document.createElement('li');
        li.textContent = letter;
        console.log(li);
        ul.appendChild(li);
    }
    //================================================================================
});
