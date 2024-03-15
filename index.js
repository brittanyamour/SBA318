const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

//Import Routes
const expressRoutes = require("./routes/expressRoutes")
const userRoutes = require("./routes/users")
const taskRoutes = require("./routes/tasks")
const commentRoutes = require("./routes/comments")

//Define the engine



//Middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))


app.use(cookieParser()); //third party middleware
const logReq = function(req, res, next) {
    console.log('request recieved');
    next();
}

app.use(logReq);
app.use('/user', userRoutes);
app.use("/express", expressRoutes);
app.use("/tasks", taskRoutes);
app.use("/comments", commentRoutes);

//Error Handling
app.get("/*", (req, res) => {
    res.status(404);
    res.json({error: `Resource not found`})
})

//Port
app.listen(port, () =>{
    console.log(`The server is listening on port: ${port}`)
})