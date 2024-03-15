const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")

//Task Routes
app.get('/api/tasks', (req, res)=>{
    res.send('Chores')
}) //get all tasks

app.post('/api/tasks', (req, res)=>{
    if(req.body.title && req.body.description){
        if(users.find((t)=> t.title == req.body.title)){
            res.json({error: `Task already exists: ${t.title}`})
            return
        }
        const newTask = {
            id: tasks[tasks.length -1].id + 1, //increase ids in sequential order
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        }
        tasks.push(newTask)
        res.json(tasks[tasks.length-1])
    }else {
        res.json({error: "Insuffient Data"})
    }

})//add a task

app.delete('/task', (req, res)=>{
    
})//delete task


//Task Route Params
app.get('/task/:id', (req, res)=>{
    res.send(`Navigated to task: ${req.params.id}`)
}); //get task by id 



module.exports = router;