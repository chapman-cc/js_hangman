document.addEventListener('DOMContentLoaded', () => {

    // Press "Start Game" button to remove overlay <div>
    const overlayDiv = document.querySelector('#overlay');
    overlayDiv.addEventListener('click', (e) => {
        if (e.target.className === 'btn__reset') {
            overlayDiv.style.display = 'none';
        }
    });

    const phrases = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    //     Create a getRandomPhraseAsArray function.
    const getRandomPhrase = (array) => {
        let randomNum = Math.round(Math.random() * (array["length"] - 1));
        let phrase = array[randomNum]; //e.g. 'tuesday'
        return phrase;
    };

    //================================================================================
});
