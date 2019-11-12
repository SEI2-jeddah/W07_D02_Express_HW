//express is a function
const express = require('express');

//app is an object of type express
const app = express();

/*
    Setting the GET route with a request-assuring statement 
    that will be shown once the page is visited.
    A response upon the request is sent with a content of 'Hello World'.
*/
app.get('/', (req , res) =>{
    console.log('Oh hey! I got a request. Let me respond with something');
    res.send('Hello World!');
});

//setting another GET route with a response upon request.
app.get('/somedata', (req, res)=>{
    res.send('here is your information')
})

//specifying the port that will listen to the our server 
//displaying a message that assures the listening process 
app.listen(3001, ()=>{
    console.log("I am listening for requests!!!");
});