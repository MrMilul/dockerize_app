const express = require("express")
const app = express ()
const PORT = 5001
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(cors());
require('./src/dbInit')()

const userRouter = require("./src/userRouter")

app.use("/", userRouter)



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
