const express = require('express');
let app = express()

app.get('/', ( req, res )=>{
    console.log("Oh hey! I got a request. Let me respond with something");
     res.send('This is My First Project in Express.js')
    })

    
    app.get('/somedata', (request, response)=>{
  
        response.send('here is your information');
      });
      
      // App Listen
      app.listen(3002, ()=> {
        console.log("I am listening for requests!!!");
      });