const express = require("express")
const db = require("../data/db-config")

const router = express.Router()

router.post("/register", async (req, res, next) => {
    try {
        const { username, password } = req.headers

        res.status(201).json({
        message: "User has been created"
        })        
    } catch (error) {
        next(error)
    }
})

module.exports = router