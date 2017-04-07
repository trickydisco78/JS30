// Array.from() - ES6
// Array.of() - ES6
//The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
// Array.prototype.concat()
// Array.prototype.copyWithin()
// Array.prototype.entries()
// Array.prototype.every()
// Array.prototype.fill()
// Array.prototype.filter()
// Array.prototype.find()
// Array.prototype.findIndex()
// Array.prototype.forEach()
// Array.prototype.includes()
// Array.prototype.indexOf()
// Array.prototype.join()
// Array.prototype.keys()
// Array.prototype.lastIndexOf()
// Array.prototype.map()
// Array.prototype.pop()
// Array.prototype.push()
// Array.prototype.reduce()
// Array.prototype.reduceRight()
// Array.prototype.reverse()
// Array.prototype.shift()
// Array.prototype.slice()
// Array.prototype.some()
// Array.prototype.sort()
// Array.prototype.splice()
// Array.prototype.toLocaleString()
// Array.prototype.toSource()
// Array.prototype.toString()
// Array.prototype.unshift()
// Array.prototype.values()

//================================================

//Add/Remove Array Item

// create an empty array
var myArray = [];

// create array with items. Can store any type
var myOtherArray = [myArray, true, "A random string"];

// call specific value in an array
myOtherArray[0];
// will return myArray

// change value for this item
myOtherArray[0] = false;
// will now return false


// add to end of array
myOtherArray[myOtherArray.length] = "new stuff";
// will return the new item "new stuff"

// or you can use push()
myOtherArray.push("new stuff");
// will return new length of array


// you can remove this last item by using pop()
myOtherArray.pop();
// will return the last item of the array and will have removed it from myOtherArray


// shift and unshift will do the same for the begging of the Array
myOtherArray.shift();
// will remove and return first item of array

myOtherArray.unshift(1,2);
// this will add 1 and 2 to beginning of array and return new length

// you can use delete keyword but turn value to undefine and not shorten length. so we use splice()
myOtherArray.splice(2, 1);
// this will remove and return  the third item only. 
// first arg is where to start and second is how many things to splice. this example is 1.

//================================================