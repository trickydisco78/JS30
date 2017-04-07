//Events

//target.addEventListener(type, listener[, options]);
//target.addEventListener(type, listener[, useCapture]);


//Listener - The object that receives a notification (an object that implements the Event interface) when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.

// useCapture - A Boolean that indicates that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. Events that are bubbling upward through the tree will not trigger a listener designated to use capture. Event bubbling and capturing are two ways of propagating events that occur in an element that is nested within another element, when both elements have registered a handle for that event. The event propagation mode determines the order in which elements receive the event.

var newElement = document.getElementsByTagName('h1');

newElement.onclick = () => console.log('clicked');

newElement.addEventListener("focus", (event) => console.log('focused'), false);

newElement.removeEventListener("focus", (event) => {console.log('focused');}, false);

window.onload = () => console.log("Im loaded");


//================================================

// abort
// beforeinput
// blur
// click
// compositionstart
// compositionupdate
// compositionend
// dblclick
// error
// focus
// focusin
// focusout
// input
// keydown
// keypress
// keyup
// load
// mousedown
// mouseenter
// mouseleave
// mousemove
// mouseout
// mouseover
// mouseup
// resize
// scroll
// select
// unload
// wheel
