const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")

//User Routes
app.get('/users', (req, res)=>{
    res.send('My Family')
}) //get all users

app.post('/user', (req, res)=>{
    res.send('Add a family member')
})//add a user

app.delete('/user', (req, res)=>{
    res.delete('Remove a family member')
})//delete user


//User Route Params
router
    .route("/user/:id")
    .get((req, res)=>{
        res.send(`Navigated to user: ${req.params.id}`)
    }) //get user by id)
    .delete((req, res)=>{
        res.send(`Remove user: ${req.params.id}`)
    }) //delete user by id)
    .post((req, res)=>{
        res.send(`Navigated to user: ${req.params.id}`)
    }); //get user by id)





module.exports = router;