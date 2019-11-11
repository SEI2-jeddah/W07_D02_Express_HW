const express = require("express");
let ourApp = express();

ourApp.use(express.urlencoded({ extended: false }));
ourApp.listen(3000);

ourApp.get("/", (req, res) => {
  res.send(`
    <form action='/answer' method='POST'>
    <p>who is the best student in the world</p>
    <input name='studentName' autocomplete="off"/>
    <button> submit </button>
    </form>
    `);
  console.log();
});

ourApp.post("/answer", (req, res) => {
  if (req.body.studentName.toLowerCase() == "hisham") {
    res.send(`<p>bravoo u choose <span style='color:blue'>${req.body.studentName}</span> , that is the only true answer</p>
        <a href='/' >Back home You smart person</a>`);
  } else {
    res.send(`<p>try again and go</p> <a href='/' >Back home</a>`);
  }
});

ourApp.get("/answer", (req, res) => {
  res.send("you need to submit an answer");
});
