
// JS quiz
//Modify the ensure function so that it throws an error if called without arguments or an argument is undefined. Otherwise it should return the given value.
function ensure(value) {
   //check type of object
  if (typeof value === 'undefined' || value === 'null') {
    throw new Error('no value specified')    
  } else {
     return value;
  }
}

// Remove Property function
//Implement the removeProperty function that takes an object and a property name and does the following:

//If object obj has property prop, it removes the property from the object.
//If the property has been removed, it returns true; otherwise it returns false.

function removeProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  }else {
  return false;
}
}

//Write a function that converts  user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.
//For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

function formatDate(userDate) {

  //Split string into array and assign to local variables
    var newDate = userDate.split('/');
    var month = newDate[0];
    var day= newDate[1];
    var year = newDate[2];
    var FormattedDate = '';

  // Convert to date
  
  // Add 0 if month is single digit
    if (month.length == 1) {
        month = '0' + month;
    }
    if (day.length == 1) {
        day = '0' + day;
    }
  FormattedDate = year + month + day;

    return FormattedDate;
  // format from M/D/YYYY to YYYYMMDD
}

//console.log(formatDate("12/31/2014"));
formatDate("12/31/2014");

//20141231

//================================================
function registerClickHandler () {
// Grab buttons
//var buttonel = document.getElementsByClassName('remove');
//ES6  const buttonEl = Array.from(document.querySelectorAll('.remove'));  

//ES6 method
//Array.from(buttonEl)
//Attach event handler
//buttonArray.forEach(item => item.addEventListener('click', addClick));

const buttonArray = document.querySelectorAll('.remove'); 


//Attach event handler
for (let i=0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener('click', function(event){
    this.parentNode.parentNode.removeChild(this.parentNode);
  });
}
  
}

/* HTML code for testing purposes (do not submit uncommented):
<div class="image">
  <img src="https://goo.gl/2oZU2S" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/tniGAc" alt="Second">
  <button class="remove">X</button>
</div>
*/

function appendChildren() {
  var allDivs = document.getElementsByTagName("div");
  var divLength = allDivs.length;

  
  for (var i = 0; i < divLength.length; i++) {
    var newDiv = document.createElement("div");
    decorateDiv(newDiv);
    //allDivs[i].appendChild(newDiv);
    this.appendChild(newDiv);
  }
  console.log('Total length: '+ allDivs.length);
}

// Mock of decorateDiv function for testing purposes
function decorateDiv(div) {
document.getElementById('a').appendChild(div);
}
//appendChildren();

window.addEventListener('load' , appendChildren());
