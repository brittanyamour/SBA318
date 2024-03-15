const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")

//Task Routes
app.get('/api/tasks', (req, res)=>{
    res.send('Chores')
}) //get all tasks

//POST a task
app.post('/api/tasks', (req, res)=>{
    if(req.body.title && req.body.description){
        if(tasks.find((t)=> t.title == req.body.title)){
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

})

//DELETE Task
app.delete("/api/tasks/:id", (req, res) => {
    const task = tasks.find((t, i) => {
      if (t.id == req.params.id) {
        tasks.splice(i, 1);
        return true;
      }
    });
  
    if (task) res.json(task);
    else next();
});


//Task Route Params
router
    .route("/tasks/:id")
    .get((req, res)=>{
        res.send(`Navigated to task: ${req.params.id}`)
    }) //get task by id)
    .delete((req, res)=>{
        res.send(`Removed task: ${req.params.id}`)
    }) //delete task by id)

router
    .route("/tasks/:title")
    .get((req, res)=>{
        res.send(`Navigated to task: ${req.params.title}`)
    }) //get task by id)
    .delete((req, res)=>{
        res.send(`Removed task: ${req.params.title}`)
    }) //delete task by id)




module.exports = router;