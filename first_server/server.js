const express = require('express');


const app = express();

app.get('/', (req, res) =>{
    console.log('oh hey! I got a request. Let me respond')
    res.send('Hello World!')
})
app.get('/somedata', (req, res) => {
res.send('here some information stranger!')

});
app.listen(3000, ()=>{
    console.log("im listening for you!!!");
});


