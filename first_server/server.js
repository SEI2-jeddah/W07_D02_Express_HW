const express = require('express')

const app = express()




app.get('/' , (req , res) => {
  res.send("Hello world !!")
  console.log("Oh hey! I got a request. Let me respond with something");

})



app.get('/somedata' , (req , res) => {

        res.send('Heres your data , happy now ?')
})




app.listen(3000, () => {
console.log("I am listening for requests!!!");
})
