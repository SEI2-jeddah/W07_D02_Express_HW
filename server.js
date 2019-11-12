let express=require('express')
let app=express()
app.get('/',(req,res)=>{
    console.log("Oh hey! I got a request. Let me respond with something");
    res.send('Hello World')
})
app.get('/somedata', (request, response)=>{
  
    response.send('here is your information');
  });
app.listen(3000, ()=> {
    console.log("I am listening for requests!!!");
   });