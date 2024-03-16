const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")


//Middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))


//User Routes
router.get('/users', (req, res)=>{
    res.send('My Family')
}) //get all users

//POST new user
router.post('/users', (req, res)=>{
    if(req.body.name && req.body.relationship){
        if(users.find((n)=> n.name == req.body.name)){
            res.json({error: `Family member already exists: ${n.name}`})
            return
        }
        const newUser = {
            id: users[users.length -1].id + 1, //increase ids in sequential order
            name: req.body.name,
            relationship: req.body.relationship
        }
        users.push(newUser)
        res.json(users[users.length-1])
    }else {
        res.json({error: "Insuffient Data"})
    }

})

//DELETE User
router.delete("/users/:id", (req, res) => {
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