// Offsets 

const nav = document.querySelector('.main');
let topOfNav = nav.offsetTop

// Returns distance of element relative to parent

//getBoundingClient Rect
// The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport
//Returns Object with coordingates

let uiBox = document.querySelector('.box');
uiBox.getBoundingClientRect()

const coords = {
      height: uiBox.height,
      width: uiBox.width,
      top: uiBox.top - uiBox.top,
      left: uiBox.left - uiBox.left
    };
