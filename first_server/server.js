const express = require('express')
 app = express()
 app.get('/', ( req, res )=>{
     console.log("Oh hey! I got a request. Let me respond with something"); 
     res.send('Hello World!')
    })
    app.get('/SomeDATA', ( req, res )=>{
        res.send('here is your information') 
    })
    app.listen(3000, ()=> { 
        console.log("SEI");
    });