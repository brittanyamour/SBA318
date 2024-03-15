const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")

//COMMENT ROUTES

//GET all Comments by Task ID
app.get('/tasks/:id/comments', (req, res)=>{
    const taskId = req.params.id;
    const task = tasks.find(task => task.id === taskId);

    if (task && task.comments) {
        res.json(task.comments);
    } else {
        res.status(404).json({ message: "Task not found or no comments available" });
    }
})

//POST comment
app.post('/task/:id/comment', (req, res)=>{
    
})//add a comment

app.delete('/comment', (req, res)=>{
    
})//delete comment




module.exports = router;