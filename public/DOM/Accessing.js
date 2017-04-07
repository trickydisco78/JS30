// Accessing DOM getElementsByClassName

// Returns a reference to the element by its ID.
document.getElementById(id);

// Returns an array-like object of all child elements which have all of the given class names.
document.getElementsByClassName(names);

// Returns an HTMLCollection of elements with the given tag name. 
document.getElementsByTagName(name);

// Returns the first element within the document that matches the specified group of selectors.
document.querySelector(selectors);

// Returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes) 
// that match the specified group of selectors. 
document.querySelectorAll(selectors);

//=============================================
// Grab Children/Parent Node(s)

// Get child nodes
var stored = document.getElementById('heading');
var children = stored.childNodes;
console.log(children);

// Get parent node
var parental = children.parentNode;

//================================================
//Create New DOM Elements

// create new elments
var newHeading = document.createElement('h1');
var newParagraph = document.createElement('p');

// create text nodes for new elements
var h1Text= document.createTextNode("This is the fucking header text!");
var paraText= document.createTextNode("This is the fucking Paragraph text!");

// attach new text nodes to new elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

// elements are now created and ready to be added to the DOM.

//================================================


//Add Elements to the DOM

// grab element on page you want to add stuff to
var firstHeading = document.getElementById('firstHeading');

// add both new elements to the page as children to the element we stored in firstHeading.
firstHeading.appendChild(newHeading);
firstHeading.appendChild(newParagraph);

// can also insert before like so

// get parent node of firstHeading
var parent = firstHeading.parentNode;

// insert newHeading before FirstHeading
parent.insertBefore(newHeading, firstHeading);

//Add/Remove/Toggle/Check Classes

// grab element on page you want to use
var firstHeading = document.getElementById('firstHeading');

// will remove foo if it is a class of firstHeading
firstHeading.classList.remove("foo");

// will add the class "anotherClass" if one does not already exist
firstHeading.classList.add("anotherclass");

// add or remove multiple classes
firstHeading.classList.add("foo","bar"); 
firstHeading.classList.remove("foo","bar");

// if visible class is set remove it, otherwise add it
firstHeading.classList.toggle("visible");

// will return true if it has class of "foo" or false if it does not
firstHeading.classList.contains("foo");






