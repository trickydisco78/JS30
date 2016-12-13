function removeTransition(e) {
// if tranform property doesn't exist
if (e.propertyName !=='transform') return ;
e.target.classList.remove('playing');
}

function playSound(e) {
    //audio elements with keyCode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    //if no audio 
    if (!audio) return;
    key.classList.add('playing');
    //reset audio
    audio.currentTime = 0;
    audio.play();
}

//grab all key elements and turn into array
const keys = Array.from(document.querySelectorAll('.key'));  

//Loop through array and listen for transitionend event and remove transtion
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// Add event listener to window - listen for keydown
window.addEventListener('keydown', playSound);


