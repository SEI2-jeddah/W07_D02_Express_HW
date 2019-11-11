const express = require('express'); // use library in our code
//console.log(express)
const app = express(); //creates a shorthand for calling the express function

/*
* alling express,setting a 'GET' route of '/', 
if user goes to localhost:3000/ 
this is the method that will get triggered.
* pass a call back function with two parameters 
by convention, they are 
req (for request): object containing information about the request made (browser, ip, query params, etc)
res (for response): object containing methods for sending information back to the user (client)
Inside callback write whatever code want.
* using a method on the response object (res.send()) 
saying 'send this plain text as the response'
*can build as many routes as like 
customize them to do whatever we want
*/
app.get('/', ( req, res )=>{
    console.log("Oh hey! I got a request. Let me respond with something");
    res.send('Hello World!')
})
//user goes to localhost:3000/somedata
//get a text response of here is your information
app.get('/somedata', (request, response)=>{
    // console.log('response: ', response);
    // console.log('===================');
    response.send('here is your information');
});

/*express listen to the port 3000' , by default it will be listening to localhost - 
it will be listening and waiting for any requests coming to localhost:3000 from the browser*/
app.listen(3000, ()=> {
    console.log("I am listening for requests!!!");
}); // run continuously because of the functionality of the app.listen

//Run
//node server.js
//nodemon server.js
//get really fancy, you can go to your package.json file and 
//change the value of main from index.js to server.js