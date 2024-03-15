const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")

//User Routes
app.get('/users', (req, res)=>{
    res.send('My Family')
}) //get all users

app.post('/user', (req, res)=>{
    
})//add a user


//User Route Params
app.get('/user/:id', (req, res)=>{
    res.send(`Navigated to user: ${req.params.id}`)
});



module.exports = router;