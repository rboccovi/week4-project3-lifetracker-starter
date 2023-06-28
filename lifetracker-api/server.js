
const express = require ("express")
const cors= require("cors")
const morgan = require("morgan")


const {NotFoundError} = require(".utils/errors")

//initialize application with express
const app = express()

//enables cross-orgin resource sharing f
app.use(cors())
//Parse incoming request bodies with JSON payloads
app.use(express.json())

//log request info
app.use(morgan("tiny"))




//**TESTING ON POSTMAN***
app.get('/words', (req, res) => {
    const words = 'Hello, world!'; // The words I want to display
    res.send(words); // I am Sending the words as the response
  });
  

  //middleware

  app.use((req,res,next) => {
    return next (new NotFoundError)

  })

  app.use((eerr, req, res, next) => {
    const status= err.status || 500
    const message = err.message

    return res.status(status).json ({ error: {message, status}})

  })

const PORT = process.env.PORT || 3001

//intialize server
app.listen(PORT, () => {
    console.log(`🚀 Server running http://localhost:${PORT}`)
  })


module.exports = app







