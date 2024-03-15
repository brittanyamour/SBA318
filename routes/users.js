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

//DELETE User
app.delete("/api/users/:id", (req, res) => {
    const user = users.find((u, i) => {
      if (u.id == req.params.id) {
        users.splice(i, 1);
        return true;
      }
    });
  
    if (user) res.json(user);
    else next();
  });


//User Route Params
router
    .route("/user/:id")
    .get((req, res)=>{
        res.send(`Navigated to user: ${req.params.id}`)
    }) //get user by id)
    .delete((req, res)=>{
        res.send(`Removed user: ${req.params.id}`)
    }) //delete user by id)

router
    .route("/user/:name")
    .get((req, res)=>{
        res.send(`Navigated to user: ${req.params.name}`)
    }) //get user by id)
    .delete((req, res)=>{
        res.send(`Removed user: ${req.params.name}`)
    }) //delete user by id)





module.exports = router;