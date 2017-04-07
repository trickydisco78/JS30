//

// clone() - As the method implies this method creates a clone of the response.
// redirect() - This method creates a new response but with a different URL.
// arrayBuffer() - In here we return a promise that resolves with an ArrayBuffer.
// formData() - Also returns a promise but one that resolves with FormData object.
// blob() - This is one resolves with a Blob.
// text() - In this case it resolves with a string.
// json() - Lastly we have the method to that resolves the promise with JSON.

fetch(url) // Call the fetch function passing the url of the API as a parameter
  .then(function() {
    // Your code for handling the data you get from the API
  })
  .catch(function() {
    // This is where you run code if the server returns any errors
  });

// Chaining for more "advanced" handling
fetch('https://davidwalsh.name/some/url')
  .then(function(response) {
    return; //...
  })
  .then(function(returnedValue) {
    // ...
  })
  .catch(function(err) {
    // Error :(
  });

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data)); // Transform data in JSON // Push data in empty array using spread operator

// Example
// ====================================================================================================
const ul = document.getElementById('authors'); // Get the list where we will place our authors
const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users

// Create Node helper function
function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

fetch(url)
  .then(resp => resp.json()) // Transform the data into json
  .then(function(data) {
    // Build the UL
    let authors = data.results;
    return authors.map(function(author) {
      let li = createNode('li'), img = createNode('img'), span = createNode('span');
      img.src = authors.picture.medium;
      span.innerHTML = `${authors.name.first} ${authors.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
