const express = require('express')

const Port = 2000 

const app = express()

app.listen(Port, () => {
    console.log('the port is running')
})