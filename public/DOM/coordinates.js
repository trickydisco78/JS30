// Offsets 

const nav = document.querySelector('.main');
let topOfNav = nav.offsetTop

// Returns distance of element relative to parent

//getBoundingClient Rect
// The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport
//Returns Object with coordingates

let uiBox = document.querySelector('.box');
const uiCoords = uiBox.getBoundingClientRect()
console.dir(uiBox.offsetParent);

const coords = {
      height: uiCoords.height,
      width: uiCoords.width,
      top: uiCoords.top - uiCoords.top,
      left: uiCoords.left - uiCoords.left
    };

console.log(coords)