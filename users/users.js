const express = require("express")
const db = require("../data/db-config")
const usersModel = require("./users-model")

const router = express.Router()

router.post("/register", async (req, res, next) => {
    try {
        const user = await usersModel.add(req.body)

        res.status(201).json({
            message: "User has been created",
            user
        })        
    } catch (error) {
        next(error)
    }
})

module.exports = router