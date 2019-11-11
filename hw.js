let express = require ('express')
let app = express()


app.get('/',(req,res)=>{
    res.send("THIS IS MY FIRST EXPRESS")
})

app.listen(5000)