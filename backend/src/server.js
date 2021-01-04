const express = require("express")
const app = express();
require("./database");


var cors = require('cors')
// var app = express()
 
const peopleImageRouter = require("./routes/peopleImageRoute")
const peopleRoute = require("./routes/peopleRoute")
console.log(peopleRoute)

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

// app.use("/create", (req, res)=>{
//     res.send
// })
app.use("/api", peopleRoute)
app.use("/api", peopleImageRouter)


app.listen(port, () =>{
    console.log(`Server running at ${port}`)
})