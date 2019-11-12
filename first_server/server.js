const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.get('/', ( req, res )=>{
console.log("Oh hey! I got a request. Let me respond with something");
 res.send('Hello World!')
})

app.get('/somedata', (req, res) => {
    res.send('here is your information');
});

app.listen(3000, ()=> {
 console.log("I am listening for requests!!!");
});