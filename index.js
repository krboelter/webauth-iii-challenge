require("dotenv").config()
const express = require("express")
const server = express()
const bodyParser = require("body-parser")

const users = require("./users/users")
const auth = require("./auth/auth")

server.use(express.json())
server.use(express.urlencoded({ extended: false }));

server.use("/user", users)
server.use("/auth", auth)

server.get("/", (error, req, res, next) => {
    res.status(500).json({
        message: "Internal error...",
        error
    })
})

const port = process.env.PORT || 5000
server.listen(port, () => {
    console.log(`Server lisening at http://localhost:${port}`)
})