const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")


//Middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))


//TASK ROUTES

//GET all tasks
router.get('/tasks', (req, res)=>{
    res.send('Chores')
}) //get all tasks

//POST a task
router.post('/tasks', (req, res)=>{
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
router.delete("/tasks/:id", (req, res) => {
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
    }); //delete task by id)


//COMMENT ROUTES

//GET all Comments by Task ID
router.get('/tasks/:id/comments', (req, res)=>{
    const taskId = req.params.id;
    const task = tasks.find(task => task.id === taskId);

    if (task && task.comments) {
        res.json(task.comments);
    } else {
        res.status(404).json({ message: "Task not found or no comments available" });
    }
})

//POST comment  by Task ID
router.post("/tasks/:id/comments", (req, res) => {
    const taskId = req.params.id;
    const newComment = req.body.comment; 

    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex].comments.push(newComment);
        
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});    

//DELETE comment by Task ID
router.delete("/tasks/:taskId/comments/:commentId", (req, res) => {
    const taskId = req.params.taskId;
    const commentId = req.params.commentId;

    const task = tasks.find(task => task.id === taskId);

    if (task) {
        const commentIndex = task.comments.findIndex(comment => comment.id === commentId);
        
        if (commentIndex !== -1) {
            task.comments.splice(commentIndex, 1);

            res.json(task);
        } else {
            res.status(404).json({ message: "Comment not found" });
        }
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});





module.exports = router;