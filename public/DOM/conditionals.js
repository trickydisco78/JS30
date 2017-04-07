// Conditionals

// If Else statements
var a = 1;
var b = 2;

if( a < b ) {
  console.log('the if is true!');
} else {
  console.log('the if is false!');
}


// Multi If Else statements
var a = 1;
var b = 2;
var c = 3;

if( a > b ) {
  console.log('the if is true!');
} else if(a > c) {
  console.log('OK, THIS if is Ture!');
} else {
  console.log('None of these were true');
}


// Ternary operators. same as if else
var a = 1;
var b = 2;

a === b ? console.log('The statement is true') : console.log('The statement is false');

// switch statements
var a = 4;
switch (a) {
  case "Oranges":
    console.log("Orange? really?");
    break;
  case 1:
    console.log("a is equal to 1.");
    break;
  case 2:
    console.log("a is equal to 2.");
    break;
  case 3:
    console.log("a is equal to 3.");
    break;
  case 4:
    console.log("a is equal to 4.");
    break;
  default:
    console.log("I run if no one else is true.");
}