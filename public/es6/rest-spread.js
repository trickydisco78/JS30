

// Rest paramter syntax allows us to represent an indefinate number of arguments as an Array. This was, changes to function signature are less likely to break
// Rest paramters must always be last argument declared in function
// Create function with varible amount of arguments


// Spread 

//Bad Practice
function display() {
    // Loop Through built in arguments (array-like) object 
    for(let i in arguments) {
        let tag = arguments[1];
        _addToTopic(tag);
    }
}

// ES6

function displayTags(...tags){
}

// Spread operator allows us to split an Array argument into indivisual elements

getRequest("/topics/tags", function(data) {
    let tags = data.tags;
    // three dots used in function invocation defination NOT function definition
    // To open up array into seperate elements
    displayTags(...tags);
    // Same as displayTags(tags, tag, tag);
})


// Spread in array assignments
let array1 = [2,3];
let array2 = [1, ...array1, 4,5];

//array 2 = [1,2,3,4,5]

//Spread operator in destructuring assignments
// Get all the remaining things from


// Array destructuring
var numbersArray = [1, 2, 3, 4, 5];
var [first, second, ...remaining] = numbersArray;
 
console.log(numbersArray); // [1, 2, 3, 4, 5] (stays unchanged)
console.log(first); // 1 (number)
console.log(second); // 2 (number)
console.log(remaining); // [3, 4, 5] (array)


// Object destructuring
var someObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

// destructure assigments 
var {a, b, ...remaining} = someObject;
console.log(remaining);
 
console.log(someObject); // {a: 1, b: 2, c: 3, d: 4} (stays unchanged)
console.log(a); // 1 (number)
console.log(b); // 2 (number)
console.log(remaining); // {c: 3, d: 4} (object)


