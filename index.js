const express = require('express');

const app = express();

const crs = [
  {id:1,name:'math'},
  {id:1,name:'math'},
  {id:1,name:'math'}
]


app.get('/',(req,res)=>{
  res.send('hello from server moe');
});


app.get('/api/cor/',(req,res)=>{
  res.send('Its moe corses');
});

app.get('/api/cor/:id/',(req,res)=>{
  res.send(req.params.id);
});

app.get('/api/cor/:year/:month/',(req,res)=>{
  res.send(req.params);
});


const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`port on ${port}`));
