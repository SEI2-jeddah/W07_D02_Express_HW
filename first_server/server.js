const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log("Oh hi! I got a request. Let me responed with something");
    res.send('Hello World!')
});

app.get('/somedata', (req, res)=>{
    res.send('here is your information');
})

app.listen(3000, ()=>{
    console.log('I am listening for requests!!!');
});
