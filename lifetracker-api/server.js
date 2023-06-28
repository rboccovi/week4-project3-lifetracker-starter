
const express = require ("express")
const cors= require("cors")
const morgan = require("morgan")

//initialize application with express
const app = express()

//enables cross-orgin resource sharing f
app.use(cors())
//Parse incoming request bodies with JSON payloads
app.use(express.json())

//log request info
app.use(morgan("tiny"))



const PORT = process.env.PORT || 3001

//intialize server
app.listen(PORT, () => {
    console.log(`🚀 Server running http://localhost:${PORT}`)
  })


module.exports = app







