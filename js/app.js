document.addEventListener('DOMContentLoaded', () => {
    //Attach a event listener to the “Start Game” button to hide the start screen overlay.
    const resetButton = document.querySelector('.btn__reset');
    resetButton.addEventListener('click', (e) => {
        const overlay = resetButton.parentNode;
        overlay.style.display = 'none'
    })
    //================================================================================
});
