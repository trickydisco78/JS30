function removeTransition(e,key) {
// if tranform property doesn't exist
    if (e.propertyName !=='transform') return ;
    e.target.classList.remove('playing');
    console.log('keyboard hit');
    
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
//console.log(keys);

//Loop through array and listen for transitionend event and remove transtion
//keys.forEach(key => key.addEventListener('transitionend', removeTransition));

keys.map(function (key) {
  return key.addEventListener('transitionend', removeTransition);
});

// Add event listener to window - listen for keydown
window.addEventListener('keydown', playSound);

// Add onload event listener
window.addEventListener('load', addClasses);

function addClasses(key) {

    let classes = ['one', 'two', 'three'];

    for (let i=0, len = keys.length; i < len; i++) {
        keys[i].classList.add('sounds');
    }   

}

// map over keys and add class to each one
function addStuff() {
    keys.map(function (key) { 
        return key.classList.add('added');
    });
}

// Find all divs and attach class to each one
let el = document.getElementsByTagName('div');
// Loop the NodeList through and add class and attribute
for (let i = 0; i < el.length; i++) {
    el[i].classList.add('line-numbers');
    el[i].setAttribute("data-was", "data4");
}


