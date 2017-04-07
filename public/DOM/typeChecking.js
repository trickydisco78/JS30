//Type Checking

var myNumber = 1;
var myString = "some Text";
var bools = true;
var myArray = [];
var myObj = {};
var notNumber = NaN;
var nullified = null;

typeof myNumber;
// returns "number"

typeof myString;
// returns "string"

typeof bools;
// returns "boolean"

typeof myArray;
// returns "object". 

// Not super helpful so must check if it has length property to see if it is an array.
typeof myArray === 'object' && myArray.hasOwnProperty('length');
// returns true

typeof myObj;
// returns "object". Must do the same test as above but expect false back from check.

typeof notNumber;
// returns "number". this is confusing but returns this as NaN is part of the global Number object.

// must check if isNaN()
typeof notNumber === 'number' && isNaN(notNumber);
// returns true if type of is "number" and is still NaN
Add Default Arguments to Function