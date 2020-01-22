const express = require("express")
const server = express()

const users = require("./users/users")

server.use("/api", users)
server.use(express.json())

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