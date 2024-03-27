// imports from Packages
const express = require('express')
const mongoose = require('mongoose')
const dataBase = 'mongodb+srv://carlosgcsljp:2K1DMcPjqNnIKpd4@cluster0.ilf9lph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


// imports from files
const authRouter = require('./routes/auth')

// initialization 
const app = express()
const PORT = 3000

// middleware  

app.use(authRouter)

// connections

mongoose.connect(dataBase)
    .then(() => {
        console.log('connection successful.')
    })
    .catch((error) => {
        console.error(error)
    })

app.listen(PORT, '0.0.0.0', () => {
    console.log(`connected at port: ${PORT}`)
})
