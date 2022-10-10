const express = require('express')
var cors = require('cors')
const connectToMongo = require('./Database/db.js')

// creating a server 

const app = express()


//bypassing  cors
app.use(cors())

//for parsing the incoming requests with JSON payloads

app.use(express.json())

//connecting to Db[MongoDb]
connectToMongo()


// Available Routes
app.use('/employee/', require('./Routes/employee.js'));


// configure the server's port 

const port = 3000;

//listening server on a port 

app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})