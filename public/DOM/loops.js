//================================================

//Loops

// while loop
var i = 0;
while( i < 10 ) {
  console.log(i);
  i += 1
}


// do while loop
var i = 0;
do {
  console.log(i);
  i += 1
} while( i < 10 )


// for loop
for ( var i = 0; i < 10; i++ ) {
   console.log(i);
}

// for in statments
var obj = {a:1, b:2, c:3};
    
for ( var prop in obj ) {
  // check if property is inherited or not
  if(obj.hasOwnProperty(prop)) {
    console.log("obj." + prop + " = " + obj[prop]);
  }
}

//================================================]

