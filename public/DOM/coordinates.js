// Offsets 

const nav = document.querySelector('.main');

// Returns distance of element relative to parent
let topOfNav = nav.offsetTop



// getBoundingClientRect()
// The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport
//Returns Object with coordinates

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