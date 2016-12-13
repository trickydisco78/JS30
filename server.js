const express = require('express');
const app = express();
const path = require('path');
//const port = 3000;

//app.get('/', (request,response) => {
  //  response.send('Hello')
//})

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
let server = app.listen(app.get('port'), function() {
  let port = server.address().port;
  console.log('Magic happens on port ' + port);
});


//app.listen(port, (err) => {
  //  if (err) {
  //      return console.log('Something Happened' , err)
 //   }

 //   console.log(`Server is listening on ${port}`)
//})

//app.use('/drumkit', express.static( __dirname + '/drumkit'));
