const express = require('express')

const authRouter = express.Router()

authRouter.post('/api/signup', (request, response) => {
    // get the data from client
    // post data in database
    // return data to user

    const { name, email, password } = request.body

    // create authentications:
    // weak passwords
    // same email
    
    
})

module.exports = authRouter