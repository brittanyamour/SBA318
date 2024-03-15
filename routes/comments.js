const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")

//Comments Routes
app.get('/comments', (req, res)=>{
    res.send('Chores')
}) //get all comments

app.post('/comment', (req, res)=>{
    
})//add a comment

app.delete('/comment', (req, res)=>{
    
})//delete comment




module.exports = router;