const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")

app.get("/", (req, res) => {
    res.send("Family Chores App!")
    res.status(200)
});






module.exports = router;