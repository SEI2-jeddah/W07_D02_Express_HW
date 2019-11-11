
const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('THIS IS MY FIRST EXPRESS_')
// })
 
// app.listen(5000)
const app = express();

app.get('/', ( req, res )=>{
console.log("Oh hey! I got a request. Let me respond with something");
 res.send('Hello World!')
})
app.get('/SomeDATA', ( req, res )=>{

     res.send('here is your information')
    })

app.listen(5000, ()=> {
 console.log("EVERYTHING IS UP TO DATE");
});